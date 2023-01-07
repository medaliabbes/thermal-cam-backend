
var net = require('net');
const express = require('express') ;
const app = express() ;
const port = 3000



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
function onConnData(d) {  
    //console.log('connection data from %s: %j', remoteAddress, d);  
    //conn.write(d);  
    //let mydata = String.fromCharCode(...d) ;

    /**
     * check the data validity 
     */
	
	var mydata = String.fromCharCode(...d) ;
	for(let i = 0 ;i < mydata.length ;i++)
	{
		camdata1 += mydata[i] ;
		if(mydata[i] == '}')
		{
			if(isJsonString(camdata1) == true )
			{
				console.log("length :" , camdata1.length ) ;
				Camdata = camdata1 ;
				camdata1 = "";
				console.log("Frame recv") ;
				test = true ;
			}
			else
			{

			}
		}
		
	}
	//console.log("end Loop");
	/*
	camdata1 +=  String.fromCharCode(...d) ;
    
	
	var data = String.fromCharCode(...d) ;
	total_length += data.length 
	//console.log("length :" , total_length ) ;

	if(test == true)
	{
		console.log(data ) ;
	}
	
    if(isJsonString(camdata1) == true )
    {
		console.log("length :" , camdata1.length ) ;
        Camdata = camdata1 ;
        camdata1 = "";
		console.log("Frame recv") ;
		test = true ;
    }
    else
    {

    }
	*/
}

function onConnClose() {  

    SystemState.CamIsConnected = false ;

    console.log('connection from %s closed', remoteAddress);  
}

function onConnError(err) {  
    console.log('Connection %s error: %s', remoteAddress, err.message);  
   }  

}