
var net       = require('net');
const express = require('express') ;
const app     = express() ;
const math    = require('mathjs') ;
const fs      = require('fs');
const zip = require('express-zip');


const port = 3000



//this may prevent scalling
var Camdata ;
/**
 * Object {
 *  recording : 
 *  recording start time :
 *  
 * }
 */

var SystemState = {
    CamIsConnected : false ,
    recording : false ,
    startTime : 0 ,
    recordingTime : 0,
}

app.use(express.static('public')) ;

/****part to handle user*/
app.set('view engine', 'ejs') ;


app.get('/', (req, res) => {
  res.render("index" ) ;
});


const folderPath = "./mydata";


app.get('/listfiles' , function(req , res) {
	    const paths = fs.readdirSync(folderPath); 
		console.log(paths.length) ;
		console.log(typeof(paths)) ;
		res.render("fileslist",{'myFilesList': paths });
		//res.send(paths.toString()) ;
	});
	
	
// GET request for single file
app.get('/files/:filename',function(req,res) 
{
	
	if( req.params.filename === "all" )
	{
		
		const listOfFiles = fs.readdirSync(folderPath); 
		var myList = [] ;
		
		for(let i = 0 ;i<listOfFiles.length ; i++)
		{
			var myObject = new Object() ;
			myObject['path'] = folderPath + '/' + listOfFiles[i] ;
			myObject['name'] = listOfFiles[i] ;
			myList.push(myObject) ;
		}
		// zip method which take file path
		// and name as objects
		res.zip(myList);
		/*res.zip([
			   { path: folderPath+'/multiple_one_gfg.txt',
				   name: 'one_gfg.txt'},
			   { path: folderPath+'/multiple_two_gfg.txt',
				   name: 'two_gfg.txt'},
			   { path: folderPath+'/multiple_three_gfg.txt',
				name: 'three_gfg.txt'}
		])*/
	}
	else
	{
		var file_path = folderPath +'/' +  req.params.filename ;
		console.log('single file');
		console.log("file path " , file_path ) ;
		// Download function provided by express
		//res.send(file_path);
		res.download(file_path, function(err) {
			if(err) {
				console.log(err);
			}
		});
	}
	
});



app.get('/startRecording' ,(req,res) =>{

    var currentdate = new Date(); 
    var mytime = currentdate.getHours().toString() +":" 
                + currentdate.getMinutes().toString() +":"+currentdate.getSeconds().toString() ;        
    console.log(mytime) ;

    //if cam is connected
    if(SystemState.recording == false ) // CamConnected should be true also 
    {
        //signal to socket server to start recording 
        //create a folder for the recording 
        SystemState.startTime = Date.now() ;
        SystemState.recording = true ;
        console.log("leptonStartRecording") ;
    }
    else{
        console.log("Alredy recording") ;
    }
    
    res.send("ok") ;
}) ;

app.get('/getdata' , (req , res) =>{

    if(SystemState.CamIsConnected == true)
    {
        res.send(Camdata) ;
    }
    else{
        res.send("nodata");
    }

});

app.get('/stopRecording' , (req,res) =>{
    
    if(SystemState.recording == true)
    {
        //signal to socket server to stop recording 
        SystemState.recording = false ;
    }
    else
    {

    }
    res.send(JSON.stringify(SystemState)) ;

});

app.get("/state" , (req , res) =>{
    if(SystemState.recording == true)
    {
        SystemState.recordingTime = Date.now() - SystemState.startTime ;
    }
    else{
        //
    }
    // send SystemState
    res.status(200).send(JSON.stringify(SystemState));
});

const ip = '0.0.0.0' ;

app.listen(port ,ip, () => {
  console.log(`server on ${ip}:${port}`) ;
})


/******part to handle camera  ****/

function isJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

var server = net.createServer();  

server.on('connection', handleConnection);

const tcpPort = 1337 ;
const tcpAddress = '192.168.24.100' ;
server.listen(tcpPort, ip , function(){
    console.log(`TCP server on  ${ip}:${tcpPort} `) ;
});


var total_length = 0; 




function handleConnection(conn) { 
    //
    SystemState.CamIsConnected = true ; 

    var remoteAddress = conn.remoteAddress + ':' + conn.remotePort;  

    console.log('new client connection from %s', remoteAddress);

    conn.on('data', onConnData);  
    conn.once('close', onConnClose);  
    conn.on('error', onConnError);


    var i = 0 ;
    var camdata1 = "" ,camdata2;
	var test = false ;
	
	var im = [] ;//math.matrix() ;//[[]] ;	
	//im.resize([120,160]) ;
	var j = 0 ;
	var y = 0 ;
	var myarray ; 


function get_image(buffer  )
{
	//console.log(j);
	for(let i = 0 ; i< buffer.length ; i+=2)
	{
		if(j==0)
		{
			myarray = new Array() ;
		}
		
		myarray[j] = buffer[i] + (buffer[i+1] *256);
	
		j++ ;
		
		if( j >= (160))
		{
			j = 0 ;
			im[y] = myarray ;
			y++ ;
			if(y >= 120 )
			{
				y = 0 ;
				j = 0 ;
				return true ;
				
			}
			
		}
		
	}
	
	
	return false ;
}

function getMatrix(arr)
{
	var matrix = [] ;
	var arrIndex = 0;
	
	for(let y = 0 ;y < 120 ;y++)
	{
		var my = new Array() ;
		
		for(let x = 0 ;x<160 ;x++)
		{
			my[x] = arr[arrIndex] + (arr[arrIndex +1]  *256) ;
			
			arrIndex +=2;
		}
		
		matrix[y] = my ;
	}
	
	return matrix ;
}


var state = -1 ;
var mystring = "";
var imagebegin = false ;
var array = [] ;



var index = 0 ;
const filename = "lepton_data_"
	
function onConnData(d) {  

    //console.log("len d : " , d.length) ;
	
	switch(state)
	{
		case -1 :
		{
			// this code is in execution 
			for(let i = 0 ; i< d.length ; i++)
			{
				if(d[i] == 123 && imagebegin == false )
				{
					console.log("start") ;
					imagebegin = true ;
				}
				else if( imagebegin == true && j<160*120*2) 
				{
					//console.log("en") ;
					//prepare image here 
					array[j]  = d[i] ;
					j++;
				}
				
				else if(d[i] == 125 && imagebegin == true)
				{
					console.log("end") ;
					imagebegin = false ;
					j=0 ;
					var obj = {} ;
					obj["data"] = getMatrix (array) ;
					Camdata = JSON.stringify(obj)   ;
					fs.appendFile('./mydata/'+filename+index+'.json', Camdata, 'utf8', function(err){
						//console.log("file saved :" , err);
					});
					
					index++ ;
					//
				}
					
			}
			
			break ;
		}
		case 0 :
		{
			var d1 = d.slice(0 , 7);
			
			var mydata = String.fromCharCode(...d1) ;
			
			if(mydata == "frame :")
			{
				state = 1 ;
				console.log("d length ",d.length) ;
				
				d = d.slice(7 , d.length);
				console.log(d) ;
				get_image(d ) ;
			}
	
			break ;
		}
		case 1 :
		{
			
			if(get_image(d ) == true )
			{
				//console.log("Frame recv") ;
				console.log("width:"  ,im[0].length);
				console.log("height:" ,im.length)
				//console.log("sum :" , get_sum(im)) ;
				var jsonOb = {} ;
				jsonOb["data"] = im ; 
				Camdata = JSON.stringify(jsonOb) ;
				
				console.log("buff 0 :",im[0][0] );
				
				console.log("buff 0 :",im[119][159] );
				
				state = 0 ;
			}
			
			break ;
		}
		
	}
	
	
}

function onConnClose() {  

    SystemState.CamIsConnected = false ;

    console.log('connection from %s closed', remoteAddress);  
}

function onConnError(err) {  
    console.log('Connection %s error: %s', remoteAddress, err.message);  
   }  

}