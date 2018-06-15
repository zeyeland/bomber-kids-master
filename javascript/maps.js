var tileNine = new Image();  // 9
tileNine.src = "assets/tiles/unseen.png";
tileNine.src = "http://zeyeland.com/bomber-kids-master/assets/tiles/unseen.png";

var tileEight = new Image();  // 8
tileEight.src = "http://zeyeland.com/bomber-kids-master/assets/stone_2_gray0.png";

var tileZero = new Image();  // 0
tileZero.src = "http://zeyeland.com/bomber-kids-master/assets/tiles/metal_wall.png";

var tileOne = new Image();  // 1
tileOne.src = "http://zeyeland.com/bomber-kids-master/assets/tiles/sand_Tile.png";


/* these are the tiles for unique fires on mapGrid */

	var tileFire = new Image();
	tileFire.src = "http://zeyeland.com/bomber-kids-master/assets/passed_sprites/lava_2.png";

	var tileWater = new Image();
	tileWater.src = "http://zeyeland.com/bomber-kids-master/assets/passed_sprites/water_2.png";


	var tileGrass = new Image();
	tileGrass.src = "http://zeyeland.com/bomber-kids-master/assets/grass_2.png";

//////////////////////////


// 17x by 15y grid
var mapGrid = [[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
				  [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
				  [9,9,0,0,0,0,0,0,0,0,0,0,0,0,0,9,9],
				  [9,9,0,8,0,8,0,8,0,8,0,8,0,8,0,9,9],
				  [9,9,0,0,0,0,0,0,0,0,0,0,0,0,0,9,9],
				  [9,9,0,8,0,8,0,8,0,8,0,8,0,8,0,9,9],
				  [9,9,0,0,0,0,0,0,0,0,0,0,0,0,0,9,9],
				  [9,9,0,8,0,8,0,8,0,8,0,8,0,8,0,9,9],
				  [9,9,0,0,0,0,0,0,0,0,0,0,0,0,0,9,9],
				  [9,9,0,8,0,8,0,8,0,8,0,8,0,8,0,9,9],
				  [9,9,0,0,0,0,0,0,0,0,0,0,0,0,0,9,9],
				  [9,9,0,8,0,8,0,8,0,8,0,8,0,8,0,9,9],
				  [9,9,0,0,0,0,0,0,0,0,0,0,0,0,0,9,9],
				  [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
				  [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]
				];

function drawMapGrid(){
	for(var rowYcount=0; rowYcount < 15; rowYcount++){
		for(var columnXcount=0; columnXcount < 17; columnXcount++){
			if(mapGrid[rowYcount][columnXcount] == 9){
				ctx.drawImage(tileNine,columnXcount*canvasWIDTHblock,rowYcount*canvasHEIGHTblock,canvasWIDTHblock,canvasHEIGHTblock);
			}
			if(mapGrid[rowYcount][columnXcount] == 8){
				ctx.drawImage(tileEight,columnXcount*canvasWIDTHblock,rowYcount*canvasHEIGHTblock,canvasWIDTHblock,canvasHEIGHTblock);
			}
			if(mapGrid[rowYcount][columnXcount] == 0){
				ctx.drawImage(tileZero,columnXcount*canvasWIDTHblock,rowYcount*canvasHEIGHTblock,canvasWIDTHblock,canvasHEIGHTblock);
			}
			if(mapGrid[rowYcount][columnXcount] == 1){
				ctx.drawImage(tileOne,columnXcount*canvasWIDTHblock,rowYcount*canvasHEIGHTblock,canvasWIDTHblock,canvasHEIGHTblock);
			}
			//// these if statements are for unique fires
			if(mapGrid[rowYcount][columnXcount] == "GREY"){
				ctx.drawImage(tileFire,columnXcount*canvasWIDTHblock,rowYcount*canvasHEIGHTblock,canvasWIDTHblock,canvasHEIGHTblock);
				if( bombArray.includes(objectGrid[rowYcount][columnXcount]) ){
					objectGrid[rowYcount][columnXcount].power = 15;
				}
			}
			if(mapGrid[rowYcount][columnXcount] == "BLUE"){
				ctx.drawImage(tileWater,columnXcount*canvasWIDTHblock,rowYcount*canvasHEIGHTblock,canvasWIDTHblock,canvasHEIGHTblock);
				if( bombArray.includes(objectGrid[rowYcount][columnXcount]) ){
					objectGrid[rowYcount][columnXcount] = 0;
					player1.bombCapacity++;
				}
			}
			if(mapGrid[rowYcount][columnXcount] == "GREEN"){
				ctx.drawImage(tileGrass,columnXcount*canvasWIDTHblock,rowYcount*canvasHEIGHTblock,canvasWIDTHblock,canvasHEIGHTblock);
				if( bombArray.includes(objectGrid[rowYcount][columnXcount]) ){
					objectGrid[rowYcount][columnXcount].bombImage.src = "http://zeyeland.com/bomber-kids-master/assets/grass_2.png";
				}
			}
		}//end of inner for
	}//end of outer for
}//end of drawMapGrid