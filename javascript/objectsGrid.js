var tileOrc = new Image();  // 1 are destructable blocks
tileOrc.src = "http://zeyeland.com/bomber-kids-master/assets/orc-00.png";


// 17x by 15y grid
var objectGrid = 
         [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0],
          [0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0],
          [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
          [0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0],
          [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
          [0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0],
          [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
          [0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0],
          [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
          [0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0],
          [0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        ];
        
function scanObjectGrid(){
    for(var y=0; y<15 ; y++){
        for(var x=0; x<17 ; x++){
            if( blockArray.includes(objectGrid[y][x]) ){
                objectGrid[y][x].update();
              }
            if( fireArray.includes(objectGrid[y][x]) ){
              objectGrid[y][x].update();
            }
            if( bombArray.includes(objectGrid[y][x]) ){
                objectGrid[y][x].update();
            }
            if( itemsList.includes(objectGrid[y][x]) ){
                objectGrid[y][x].update();
            }
        }
    }
}

//this functions needs to loop through object array and replace with focusArray contents
function grindObjectGrid(focusArray){
    //console.log(objectGrid);
    //console.log(focusArray);
    for(var y=0; y<15 ; y++){
        for(var x=0; x<17 ; x++){
           if( focusArray[y][x] != null && focusArray[y][x].exploding == false){
                var newBlock = new destructibleBlock(x,y);
                objectGrid[y][x] = newBlock;
                //console.log(newBlock);
           }
        }
    }
}

function makeAbomb(){
    
}