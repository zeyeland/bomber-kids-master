var blockArray = [];



//function must be called before map can render properly
function loadBlocksInObjectGrid(){
    console.log("Map has been loaded");
    for(var y=0; y<15 ; y++){
        for(var x=0; x<17 ; x++){
            if( objectGrid[y][x] == 1){
                var newBlock = new destructibleBlock(x,y);
            }  
        }
    }
}

function destructibleBlock(x,y){
    //cordinates are passed in array index for and thereby needed multiply by canvasblock
    this.x = x * canvasWIDTHblock;
    this.y = y * canvasHEIGHTblock;
    this.exploding = false;
    this.timer = 0;
    this.blockImage = new Image();
    this.blockImage.src = "http://zeyeland.com/bomber-kids-master/assets/orc-00.png";

    objectGrid[this.y/canvasHEIGHTblock][this.x/canvasWIDTHblock] = this;
    blockArray.push(this);

    this.update = function(){
        //if statement is ran if the block is destoried
        if(this.timer > 5 && this.exploding == false){
            //objectGrid[this.y/canvasHEIGHTblock][this.x/canvasWIDTHblock] =0
            this.exploding = true;
            generateItemChance(this.x, this.y);
            //this.timer = 0;
        }
        
        if(this.blockImage.src.search("passed_sprites/shatter_Block.png") > 0){
            this.timer++;  
            //console.log(this.blockImage.src);
        }
        drawItemBlock(this);
    }

    this.updateTWO = function(){
        this.blockImage.src = "http://zeyeland.com/bomber-kids-master/assets/passed_sprites/shatter_Block.png";
        //console.log(this.blockImage.src);
    }
}
function drawItemBlock(blockObject){
    if(blockObject != 0 && blockObject != null && blockObject != false){
    ctx.drawImage(blockObject.blockImage,blockObject.x,blockObject.y,canvasWIDTHblock,canvasHEIGHTblock);
    }
}





