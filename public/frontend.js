

const host = "http://127.0.0.1:3000" ;
var palette = [[0, 2, 36], [1, 2, 37], [3, 3, 38], [3, 3, 39], [5, 3, 41], [6, 3, 42], [8, 4, 44], [8, 4, 46], [10, 4, 47], [12, 5, 49], [14, 5, 51], [15, 5, 53], [17, 6, 56], [18, 6, 58], [20, 7, 61], [22, 6, 62], [24, 7, 66], [26, 7, 68], [28, 8, 70], [30, 8, 73], [32, 9, 75], [35, 9, 78], [36, 9, 81], [39, 10, 84], [41, 10, 86], [43, 11, 89], [46, 11, 91], [47, 11, 95], [50, 13, 97], [52, 13, 101], [55, 13, 103], [57, 13, 106], [59, 14, 109], [61, 14, 111], [64, 16, 114], [66, 16, 116], [68, 16, 119], [71, 16, 121], [74, 18, 123], [76, 18, 127], [79, 18, 129], [81, 19, 131], [83, 20, 134], [86, 21, 135], [88, 21, 137], [90, 22, 139], [93, 22, 141], [95, 23, 143], [97, 24, 145], [100, 24, 147], [102, 25, 147], [104, 26, 149], [107, 26, 151], [109, 27, 151], [111, 28, 152], [114, 29, 153], [116, 29, 154], [117, 30, 155], [120, 31, 155], [122, 32, 155], [124, 33, 155], [126, 34, 155], [128, 34, 155], [130, 36, 155], [133, 36, 154], [134, 37, 153], [137, 38, 152], [139, 39, 151], [141, 40, 150], [144, 41, 148], [145, 42, 147], [147, 42, 145], [150, 43, 142], [152, 44, 141], [154, 45, 139], [156, 46, 136], [158, 47, 134], [161, 48, 131], [163, 49, 129], [166, 51, 126], [168, 51, 124], [170, 52, 121], [172, 53, 118], [175, 54, 115], [177, 55, 111], [179, 56, 108], [182, 58, 105], [184, 59, 102], [186, 60, 99], [188, 61, 95], [191, 62, 92], [192, 63, 89], [195, 64, 86], [197, 66, 82], [200, 67, 79], [202, 68, 75], [203, 69, 72], [206, 70, 69], [207, 71, 66], [210, 72, 62], [211, 74, 59], [214, 75, 56], [216, 76, 52], [218, 77, 49], [219, 79, 47], [222, 80, 44], [223, 82, 41], [225, 82, 37], [227, 85, 34], [229, 86, 32], [231, 87, 29], [232, 89, 27], [234, 90, 25], [236, 92, 22], [236, 93, 20], [239, 94, 18], [240, 95, 16], [241, 98, 14], [243, 99, 12], [244, 100, 10], [245, 102, 9], [246, 103, 8], [247, 105, 6], [248, 107, 6], [249, 107, 6], [250, 110, 6], [251, 111, 6], [251, 112, 6], [252, 114, 6], [253, 115, 6], [253, 117, 6], [253, 119, 6], [253, 120, 6], [253, 122, 6], [253, 124, 6], [253, 125, 6], [253, 127, 6], [253, 129, 6], [253, 130, 6], [253, 133, 6], [253, 134, 6], [253, 136, 6], [253, 138, 6], [253, 140, 6], [253, 141, 6], [253, 144, 6], [253, 146, 6], [253, 147, 6], [253, 149, 6], [253, 151, 6], [253, 154, 6], [253, 156, 6], [253, 158, 6], [253, 160, 6], [253, 162, 6], [253, 164, 6], [253, 166, 6], [253, 168, 6], [253, 170, 6], [253, 171, 6], [253, 174, 6], [253, 175, 6], [253, 178, 6], [253, 180, 6], [253, 181, 6], [253, 184, 7], [253, 186, 7], [253, 187, 8], [253, 189, 10], [253, 191, 10], [253, 193, 11], [253, 195, 12], [253, 196, 13], [253, 199, 14], [253, 200, 15], [253, 202, 16], [253, 204, 18], [253, 205, 19], [253, 207, 20], [253, 209, 22], [253, 210, 22], [253, 211, 24], [253, 214, 25], [253, 215, 26], [253, 216, 28], [253, 218, 29], [253, 219, 31], [253, 221, 31], [253, 223, 33], [253, 223, 35], [253, 225, 36], [253, 225, 38], [253, 227, 39], [253, 229, 42], [253, 230, 43], [253, 230, 44], [253, 232, 47], [253, 233, 49], [253, 233, 52], [253, 235, 54], [253, 236, 57], [254, 236, 60], [253, 237, 62], [253, 239, 65], [253, 239, 68], [254, 240, 72], [253, 241, 75], [254, 242, 78], [254, 242, 82], [253, 243, 86], [253, 244, 89], [253, 244, 93], [253, 245, 96], [254, 245, 100], [253, 246, 104], [254, 247, 108], [254, 247, 112], [254, 248, 115], [254, 248, 119], [254, 248, 124], [254, 248, 128], [254, 249, 132], [254, 249, 136], [253, 250, 141], [253, 250, 144], [254, 250, 149], [254, 250, 153], [254, 251, 157], [254, 251, 161], [254, 251, 165], [254, 251, 169], [253, 252, 173], [254, 252, 177], [254, 252, 181], [254, 252, 185], [254, 252, 189], [254, 252, 192], [254, 252, 196], [254, 253, 200], [254, 252, 204], [254, 253, 207], [254, 253, 211], [254, 253, 215], [254, 253, 218], [254, 253, 221], [254, 253, 224], [254, 254, 227], [254, 254, 230], [254, 254, 233], [254, 254, 236], [254, 254, 238], [254, 254, 240], [254, 255, 243], [254, 255, 245], [254, 254, 248], [255, 255, 255]]
;

/*
var palette  = [
	[1,3,74],
	[0,3,74],
	[0,3,75],
	[0,3,75],
	[0,3,76],
	[0,3,76],
	[0,3,77],
	[0,3,79],
	[0,3,82],
	[0,5,85],
	[0,7,88],
	[0,10,91],
	[0,14,94],
	[0,19,98],
	[0,22,100],
	[0,25,103],
	[0,28,106],
	[0,32,109],
	[0,35,112],
	[0,38,116],
	[0,40,119],
	[0,42,123],
	[0,45,128],
	[0,49,133],
	[0,50,134],
	[0,51,136],
	[0,52,137],
	[0,53,139],
	[0,54,142],
	[0,55,144],
	[0,56,145],
	[0,58,149],
	[0,61,154],
	[0,63,156],
	[0,65,159],
	[0,66,161],
	[0,68,164],
	[0,69,167],
	[0,71,170],
	[0,73,174],
	[0,75,179],
	[0,76,181],
	[0,78,184],
	[0,79,187],
	[0,80,188],
	[0,81,190],
	[0,84,194],
	[0,87,198],
	[0,88,200],
	[0,90,203],
	[0,92,205],
	[0,94,207],
	[0,94,208],
	[0,95,209],
	[0,96,210],
	[0,97,211],
	[0,99,214],
	[0,102,217],
	[0,103,218],
	[0,104,219],
	[0,105,220],
	[0,107,221],
	[0,109,223],
	[0,111,223],
	[0,113,223],
	[0,115,222],
	[0,117,221],
	[0,118,220],
	[1,120,219],
	[1,122,217],
	[2,124,216],
	[2,126,214],
	[3,129,212],
	[3,131,207],
	[4,132,205],
	[4,133,202],
	[4,134,197],
	[5,136,192],
	[6,138,185],
	[7,141,178],
	[8,142,172],
	[10,144,166],
	[10,144,162],
	[11,145,158],
	[12,146,153],
	[13,147,149],
	[15,149,140],
	[17,151,132],
	[22,153,120],
	[25,154,115],
	[28,156,109],
	[34,158,101],
	[40,160,94],
	[45,162,86],
	[51,164,79],
	[59,167,69],
	[67,171,60],
	[72,173,54],
	[78,175,48],
	[83,177,43],
	[89,179,39],
	[93,181,35],
	[98,183,31],
	[105,185,26],
	[109,187,23],
	[113,188,21],
	[118,189,19],
	[123,191,17],
	[128,193,14],
	[134,195,12],
	[138,196,10],
	[142,197,8],
	[146,198,6],
	[151,200,5],
	[155,201,4],
	[160,203,3],
	[164,204,2],
	[169,205,2],
	[173,206,1],
	[175,207,1],
	[178,207,1],
	[184,208,0],
	[190,210,0],
	[193,211,0],
	[196,212,0],
	[199,212,0],
	[202,213,1],
	[207,214,2],
	[212,215,3],
	[215,214,3],
	[218,214,3],
	[220,213,3],
	[222,213,4],
	[224,212,4],
	[225,212,5],
	[226,212,5],
	[229,211,5],
	[232,211,6],
	[232,211,6],
	[233,211,6],
	[234,210,6],
	[235,210,7],
	[236,209,7],
	[237,208,8],
	[239,206,8],
	[241,204,9],
	[242,203,9],
	[244,202,10],
	[244,201,10],
	[245,200,10],
	[245,199,11],
	[246,198,11],
	[247,197,12],
	[248,194,13],
	[249,191,14],
	[250,189,14],
	[251,187,15],
	[251,185,16],
	[252,183,17],
	[252,178,18],
	[253,174,19],
	[253,171,19],
	[254,168,20],
	[254,165,21],
	[254,164,21],
	[255,163,22],
	[255,161,22],
	[255,159,23],
	[255,157,23],
	[255,155,24],
	[255,149,25],
	[255,143,27],
	[255,139,28],
	[255,135,30],
	[255,131,31],
	[255,127,32],
	[255,118,34],
	[255,110,36],
	[255,104,37],
	[255,101,38],
	[255,99,39],
	[255,93,40],
	[255,88,42],
	[254,82,43],
	[254,77,45],
	[254,69,47],
	[254,62,49],
	[253,57,50],
	[253,53,52],
	[252,49,53],
	[252,45,55],
	[251,39,57],
	[251,33,59],
	[251,32,60],
	[251,31,60],
	[251,30,61],
	[251,29,61],
	[251,28,62],
	[250,27,63],
	[250,27,65],
	[249,26,66],
	[249,26,68],
	[248,25,70],
	[248,24,73],
	[247,24,75],
	[247,25,77],
	[247,25,79],
	[247,26,81],
	[247,32,83],
	[247,35,85],
	[247,38,86],
	[247,42,88],
	[247,46,90],
	[247,50,92],
	[248,55,94],
	[248,59,96],
	[248,64,98],
	[248,72,101],
	[249,81,104],
	[249,87,106],
	[250,93,108],
	[250,95,109],
	[250,98,110],
	[250,100,111],
	[251,101,112],
	[251,102,113],
	[251,109,117],
	[252,116,121],
	[252,121,123],
	[253,126,126],
	[253,130,128],
	[254,135,131],
	[254,139,133],
	[254,144,136],
	[254,151,140],
	[255,158,144],
	[255,163,146],
	[255,168,149],
	[255,173,152],
	[255,176,153],
	[255,178,155],
	[255,184,160],
	[255,191,165],
	[255,195,168],
	[255,199,172],
	[255,203,175],
	[255,207,179],
	[255,211,182],
	[255,216,185],
	[255,218,190],
	[255,220,196],
	[255,222,200],
	[255,225,202],
	[255,227,204],
	[255,230,206],
	[255,233,208]
	] ;
	*/
var imageData = [[]];

var segment_count = 0;

var loading = false;

var Camconnected = false ;

function leptonStartRecording()
{
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", host+"/startRecording", false);
    xhttp.send();
}

function leptonStopRecording()
{
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", host+"/stopRecording", false);
    xhttp.send();
}

function getState()
{
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var result = JSON.parse(this.responseText);
            //console.log(this.responseText);
            if(result.recording == true)
            {
                let recordingTimer = result.recordingTime ;  //in ms
                
                recordingTimer = Math.floor(recordingTimer /1000) ;// in s
                
                let min = Math.floor(recordingTimer /60); //in minutes
                let sec = Math.floor(recordingTimer%60) ;//sec
                
                let  str = "";
				if(min / 10 >= 1 )
				{
					str= Math.floor(min).toString()  ;
				}
				else {
					str = "0" + Math.floor(min).toString()  ;
				 }
				 str = str + ":" ;
				if(sec / 10 >= 1 )
				{
					str = str + sec.toString() ;
				}
				else{
					str = str + "0" + sec.toString() ;
				}

                
                
                document.getElementById("timer").innerHTML = str ;
            }
            Camconnected = result.CamIsConnected ;
        }
    };
    xhttp.open("GET", host+"/state", true);
    xhttp.send();
}

function drawImage() {
    var min = 60000, max = 0;

    for(var row = 0; row < imageData.length; row++) {
        for(var col = 0; col < imageData[row].length; col++) {
            
            min = Math.min(min, imageData[row][col]);
            max = Math.max(max, imageData[row][col]);
        }
    }

    for(var row = 0; row < imageData.length; row++) {
        for(var col = 0; col < imageData[row].length; col++) {
            imageData[row][col] = imageData[row][col] - min ;
            
        }
    }

    var range = max - min;
    var seg = Math.round(range / 3);
    var div = 255 / range;
    
    document.getElementById("imageValues").innerHTML = 'min: ' + min + ', max: ' + max + ', range: ' + range + ', div: ' + div + ', segments: ' + segment_count;

    var canvas = document.getElementById("leptonCanvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    window.imageData.forEach(function(rowData, row) {
        rowData.forEach(function(value, col) {
            //value -= min;
            var rgb = Math.floor(value * (255/ (max - min)));//.toString(16);
            ctx.fillStyle = 'rgb(' + palette[rgb][0] + ',' + palette[rgb][1] + ',' + palette[rgb][2] + ')';
            //ctx.fillStyle = '#' + ('00'.substr(rgb.length) + rgb) + ('00'.substr(rgb.length) + rgb) + ('00'.substr(rgb.length) + rgb);
            ctx.fillRect(col*4 ,row*4 , 4, 4);      
        });
    });
    
}


function loadImage() {

    if(loading || Camconnected == false)  {
		console.log("loading") ;
        return;
    }

    loading = true;

    var resetTimer = setTimeout(function() { loading = false; }, 5000);

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            //console.log("server res :" ,this.responseText) ;
            var result = JSON.parse(this.responseText);
            if(!result.data) {
                return;
            }
            window.imageData = result.data;	
            window.segment_count = 4;//result.segment_count;

            drawImage();			
                    
            clearTimeout(resetTimer);
            loading = false;
        }
    };				
    xhttp.open("GET", host + "/getdata", true);
    xhttp.send();
    //console.log("fffff");
}




window.onload = init() ;



function init()
{

    setInterval(getState , 1000) ;

    setInterval(loadImage, 150 );

}