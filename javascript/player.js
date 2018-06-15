var playerArray = [];
var playerGrid = 
         [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        ];

//playerComponnet
function playerComponnet(){
    this.x = canvasWIDTHblock*2; //starting position;
    this.spdX = canvasWIDTHblock; // player speed
    this.y = canvasHEIGHTblock*2; // starting position
    this.spdY= canvasHEIGHTblock;  // player speed

    this.playerImage = new Image(); //player img with src
    this.playerImage.src = "http://zeyeland.com/bomber-kids-master/assets/player_Sprites/playerChill-Right.png";

    //this.bombType = 0;
    this.bombsAwayArray = [];
    //
    this.power = 1;
    this.hearts = 3;
    this.bombCapacity = 1;
    //
    //playerArray.push(this);
    //playerGrid[this.y/canvasHEIGHTblock][this.x/canvasWIDTHblock] = this;
    //
    /*player looking directions for sprites*/
    this.lookLeft = true;
    this.lookRight = false;

    this.update = function(){
        var parentThis = this;
        document.onkeydown = function(e) { //detects movement with keys strokes
            
            switch (e.keyCode) {
                case 77: //debuging key M 
                console.log(playerGrid);
                break;
                ////////////////////////
                case 37:
                if(parentThis.lookLeft == true){
                    
                    if(checkMapTileCollisions("LEFT",parentThis) == false){
                       //console.log("est for left movement");
                        parentThis.playerImage.src = "http://zeyeland.com/bomber-kids-master/assets/player_Sprites/playerRun-Left.png";
                        parentThis.x -= parentThis.spdX;
                        dragonBorn2(parentThis.y, parentThis.x, "LEFT");
                    }
                }
                else{
                    parentThis.playerImage.src = "http://zeyeland.com/bomber-kids-master/assets/player_Sprites/playerChill-Left.png";
                    parentThis.lookLeft = true;
                    parentThis.lookRight = false;
                }
                    break;
                case 38:
                if(checkMapTileCollisions("ABOVE",parentThis) == false){
                    parentThis.y -= parentThis.spdY;
                    dragonBorn2(parentThis.y, parentThis.x, "ABOVE");
                }
                    break;
                case 39:
                if(parentThis.lookRight == true){
                    if(checkMapTileCollisions("RIGHT",parentThis) == false){
                        //console.log("est for right movement");
                        parentThis.playerImage.src = "http://zeyeland.com/bomber-kids-master/assets/player_Sprites/playerRun-Right.png";
                        parentThis.x += parentThis.spdX;
                        dragonBorn2(parentThis.y, parentThis.x, "RIGHT");
                       
                    }
                }
                else{
                    parentThis.playerImage.src = "http://zeyeland.com/bomber-kids-master/assets/player_Sprites/playerChill-Right.png";
                    parentThis.lookRight = true;
                    parentThis.lookLeft = false;
                }
                    break;
                case 40:
                if(checkMapTileCollisions("BELOW",parentThis) == false){
                    parentThis.y += parentThis.spdY;
                    dragonBorn2(parentThis.y, parentThis.x, "BELOW");
                    
                }
                    break;
                case 32:  //spacebar
                    //console.log("Bomber places a Bomb - after release");
                    break;
            }//end of switch
        };   //end of document on keydown function 
        document.onkeyup = function(e){ //detects key up after movement
             switch (e.keyCode) {
                case 37:
                    parentThis.playerImage.src = "http://zeyeland.com/bomber-kids-master/assets/player_Sprites/playerChill-Left.png";
                    
                    break;
                case 38:
                
                
                    break;
                case 39:
                    parentThis.playerImage.src = "http://zeyeland.com/bomber-kids-master/assets/player_Sprites/playerChill-Right.png";
                
                    break;
                case 40:
                
                
                    break;
                case 32:
                //create bomb object 2 be droppped if player has a bomb ready
                //console.log("the array size is: " +player1.bombsAwayArray.length);
                if(parentThis.bombsAwayArray.length > 0 && objectGrid[parentThis.y/canvasHEIGHTblock][parentThis.x/canvasWIDTHblock] == 0){
                    var tempBomb = parentThis.bombsAwayArray.pop();
                    console.log("temp bomb was popped: " + tempBomb);
                    dropBomb(tempBomb,parentThis);
                }else if(parentThis.bombsAwayArray.length < 1 && parentThis.hearts > 0 && objectGrid[parentThis.y/canvasHEIGHTblock][parentThis.x/canvasWIDTHblock] == 0){
                    if(parentThis.bombCapacity > 0){                      
                        var bomb007 = new droppedBomb(parentThis.x,parentThis.y,parentThis.power,parentThis);
                        dragonBorn(bomb007,"normalBomb");
                    }else{
                        console.log("no bombs alvailable");
                    }
                }   
                break;
            }//end of key up switch
        }//end of keyup function
           
        checkPlayerHealth(parentThis);

        drawPlayer();
    }//end of update function

} // end of playerComponnet

function drawPlayer(){

    ctx.drawImage(player1.playerImage,player1.x,player1.y,canvasWIDTHblock,canvasHEIGHTblock);
}

function checkPlayerHealth(playerObject){
    if(playerObject.hearts < 1){

        socket.emit('deadPlayer', playerObject.y/canvasHEIGHTblock , playerObject.x/canvasWIDTHblock, playerId); 
    }
    dragonDeath();
}

function dropBomb(bombType,parentThis){
    switch(bombType) {
        case "RED":
        var bomb007 = new droppedBombRED(parentThis.x,parentThis.y,parentThis.power,parentThis);
        dragonBorn(bomb007,"redBomb");
            break;
        case "BLUE":
        var bomb007 = new droppedBombBLUE(parentThis.x,parentThis.y,parentThis.power,parentThis);
        dragonBorn(bomb007,"blueBomb");
            break;
        case "GREY":
        var bomb007 = new droppedBombGREY(parentThis.x,parentThis.y,parentThis.power,parentThis);
        dragonBorn(bomb007,"greyBomb");
            break;
        case "GREEN":
        var bomb007 = new droppedBombGREEN(parentThis.x,parentThis.y,parentThis.power,parentThis);
        dragonBorn(bomb007,"greenBomb");
            break;    
    }
}

