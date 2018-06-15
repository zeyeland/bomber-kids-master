function dropBombFunction(){
    //console.log("canvas clicked");
    if(player1.bombsAwayArray.length > 0 && mapGrid[player1.y/canvasHEIGHTblock][player1.x/canvasWIDTHblock] != "BLUE"){
        var tempBomb = player1.bombsAwayArray.pop();
        console.log("temp bomb was popped: " + tempBomb);
        dropBomb(tempBomb,player1);
    }else if(player1.bombsAwayArray.length < 1 && player1.hearts > 0){
        if(player1.bombCapacity > 0){
            var bomb007 = new droppedBomb(player1.x,player1.y,player1.power);
            dragonBorn(bomb007,"normalBomb");
        }else{
            console.log("no bombs alvailable");
        }
    } 
}

function moveUP(){
    if(checkMapTileCollisions("ABOVE",player1) == false){
        player1.y -= player1.spdY;
        dragonBorn2(player1.y, player1.x, "ABOVE");
    }
}

function moveDOWN(){
    if(checkMapTileCollisions("BELOW",player1) == false){
        player1.y += player1.spdY; 
        dragonBorn2(player1.y, player1.x, "BELOW");
    }
}

function moveLEFT(){
    if(player1.lookLeft == true){
                    
        if(checkMapTileCollisions("LEFT",player1) == false){
           //console.log("est for left movement");
           player1.playerImage.src = "http://zeyeland.com/bomber-kids-master/assets/player_Sprites/playerRun-Left.png";
           player1.x -= player1.spdX;
           dragonBorn2(player1.y, player1.x, "LEFT");
        }
    }
    else{
        player1.playerImage.src = "http://zeyeland.com/bomber-kids-master/assets/player_Sprites/playerChill-Left.png";
        player1.lookLeft = true;
        player1.lookRight = false;
    }
}

function moveRIGHT(){
    if(player1.lookRight == true){
        if(checkMapTileCollisions("RIGHT",player1) == false){
            //console.log("est for right movement");
            player1.playerImage.src = "http://zeyeland.com/bomber-kids-master/assets/player_Sprites/playerRun-Right.png";
            player1.x += player1.spdX;
            dragonBorn2(player1.y, player1.x, "RIGHT");
           
        }
    }
    else{
        player1.playerImage.src = "http://zeyeland.com/bomber-kids-master/assets/player_Sprites/playerChill-Right.png";
        player1.lookRight = true;
        player1.lookLeft = false;
    }
}