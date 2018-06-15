var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

var mWidth = document.querySelector('main').offsetWidth;
var mHeight = document.querySelector('main').offsetHeight;

//Modify canvas
canvas.width = mWidth;
canvas.height = mHeight;
document.querySelector('main').appendChild(canvas);

function update(){
	drawMapGrid();
	player1.update();
	scanObjectGrid();
	drawOtherPlayers();
}

setInterval(update,40);

const canvasWIDTHblock = Math.round(canvas.width/17);
const canvasHEIGHTblock = Math.round(canvas.height/15);

loadBlocksInObjectGrid();

var player1 = new playerComponnet();

function drawOtherPlayers(){
	for(var rowYcount=0; rowYcount < 15; rowYcount++){
		for(var columnXcount=0; columnXcount < 17; columnXcount++){

			if(playerGrid[rowYcount][columnXcount] == 1){
				ctx.drawImage(player1.playerImage,columnXcount*canvasWIDTHblock,  rowYcount*canvasHEIGHTblock,   canvasWIDTHblock,canvasHEIGHTblock);
			}
			
		}//end of inner for
	}//end of outer for
}