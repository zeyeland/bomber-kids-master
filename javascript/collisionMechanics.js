


function checkMapTileCollisions(direction, focusObject){

  var checkWall = checkWallCollisions(direction, focusObject);
  var checkItemBlocks = checkItemBlocksCollisions(direction, focusObject);
  var check4Bomb = check4Bombs(direction, focusObject);
  var check4Players = check4PlayerCollisions(direction, focusObject)

  if(checkWall == true || checkItemBlocks == true || check4Bomb ==true || check4Players ==true)
  {
    return true
  }
  else return false;
}

function check4PlayerCollisions(direction, focusObject){
  //console.log("checking for bombs");
  if(direction == "ABOVE" &&  playerGrid[focusObject.y/canvasHEIGHTblock-1][focusObject.x/canvasWIDTHblock] == 1  ){
    return true;
  }
  if(direction == "BELOW" &&  playerGrid[focusObject.y/canvasHEIGHTblock+1][focusObject.x/canvasWIDTHblock] == 1  ){
    return true;
  }
  if(direction == "RIGHT" &&  playerGrid[focusObject.y/canvasHEIGHTblock][focusObject.x/canvasWIDTHblock+1] == 1  ){
    return true;
  }
  if(direction == "LEFT" &&  playerGrid[focusObject.y/canvasHEIGHTblock][focusObject.x/canvasWIDTHblock-1] == 1  ){
    return true;
  }
}

function check4Bombs(direction, focusObject){
  //console.log("checking for bombs");
  if(direction == "ABOVE" &&  bombArray.includes(
    objectGrid[focusObject.y/canvasHEIGHTblock-1][focusObject.x/canvasWIDTHblock])  ){
    return true;
  }
  if(direction == "BELOW" &&  bombArray.includes(
    objectGrid[focusObject.y/canvasHEIGHTblock+1][focusObject.x/canvasWIDTHblock])  ){
    return true;
  }
  if(direction == "RIGHT" &&  bombArray.includes(
    objectGrid[focusObject.y/canvasHEIGHTblock][focusObject.x/canvasWIDTHblock+1])  ){
    return true;
  }
  if(direction == "LEFT" &&  bombArray.includes(
    objectGrid[focusObject.y/canvasHEIGHTblock][focusObject.x/canvasWIDTHblock-1])  ){
    return true;
  }
}

function checkWallCollisions(direction,focusObject){

  if(direction == "ABOVE" && ( mapGrid[focusObject.y/canvasHEIGHTblock-1][focusObject.x/canvasWIDTHblock] == 8 || mapGrid[focusObject.y/canvasHEIGHTblock-1][focusObject.x/canvasWIDTHblock] == 9) ){
    return true;
  }
  if(direction == "BELOW" && ( mapGrid[focusObject.y/canvasHEIGHTblock+1][focusObject.x/canvasWIDTHblock] == 8 || mapGrid[focusObject.y/canvasHEIGHTblock+1][focusObject.x/canvasWIDTHblock] == 9) ){
    return true;
  }
  if(direction == "RIGHT" && ( mapGrid[focusObject.y/canvasHEIGHTblock][focusObject.x/canvasWIDTHblock+1] == 8 || mapGrid[focusObject.y/canvasHEIGHTblock][focusObject.x/canvasWIDTHblock+1] == 9) ){
    return true;
  }
  if(direction == "LEFT" && ( mapGrid[focusObject.y/canvasHEIGHTblock][focusObject.x/canvasWIDTHblock-1] == 8 || mapGrid[focusObject.y/canvasHEIGHTblock][focusObject.x/canvasWIDTHblock-1] == 9) ){
    return true;
  }
  
  return false;
  

}

function checkItemBlocksCollisions(direction,focusObject){
  if(direction == "ABOVE" &&  blockArray.includes(objectGrid[focusObject.y/canvasHEIGHTblock-1][focusObject.x/canvasWIDTHblock]) ){
    return true;
  }
  if(direction == "BELOW" &&  blockArray.includes(objectGrid[focusObject.y/canvasHEIGHTblock+1][focusObject.x/canvasWIDTHblock]) ){
    return true;
  }
  if(direction == "RIGHT" &&  blockArray.includes(objectGrid[focusObject.y/canvasHEIGHTblock][focusObject.x/canvasWIDTHblock+1]) ){
    return true;
  }  
  if(direction == "LEFT" &&  blockArray.includes(objectGrid[focusObject.y/canvasHEIGHTblock][focusObject.x/canvasWIDTHblock-1]) ){
    return true;
  }
  return false
}



/////////////////////////////////////////////////////////////////////////////////////////////
function explodeCollisions(direction,focusObject,z){
  var checkWalls = bomb2WallAndBlocksCollisions(direction,focusObject,z);
  var checkBombs = bomb2FireCollisions(direction,focusObject,z);
  if(checkWalls == true || checkBombs == true)
  {
    return true
  }
  else return false;
}

//the function looks for bomb fire to other placed bombs collisions
function bomb2FireCollisions(direction,focusObject,z){
  
  if(direction == "ABOVE" &&  bombArray.includes(objectGrid[focusObject.y/canvasHEIGHTblock-z][focusObject.x/canvasWIDTHblock])  ){
    objectGrid[focusObject.y/canvasHEIGHTblock-z][focusObject.x/canvasWIDTHblock].timer = 51;
    return true;
  }
  if(direction == "BELOW" &&  bombArray.includes(objectGrid[focusObject.y/canvasHEIGHTblock+z][focusObject.x/canvasWIDTHblock])  ){
    objectGrid[focusObject.y/canvasHEIGHTblock+z][focusObject.x/canvasWIDTHblock].timer = 51;
    return true;
  }
  if(direction == "RIGHT" &&  bombArray.includes(objectGrid[focusObject.y/canvasHEIGHTblock][focusObject.x/canvasWIDTHblock+z])  ){
    objectGrid[focusObject.y/canvasHEIGHTblock][focusObject.x/canvasWIDTHblock+z].timer = 51;
    return true;
  }
  if(direction == "LEFT" &&  bombArray.includes(objectGrid[focusObject.y/canvasHEIGHTblock][focusObject.x/canvasWIDTHblock-z])  ){
    objectGrid[focusObject.y/canvasHEIGHTblock][focusObject.x/canvasWIDTHblock-z].timer = 51;
    return true;
  }

  return false;
}

function bomb2WallAndBlocksCollisions(direction,focusObject,z){
  //checks object grid for destrutable block colliosion // check map grid for wall brik collisions
  //we need to check for other bombs
  if(direction == "ABOVE" && ( blockArray.includes(objectGrid[focusObject.y/canvasHEIGHTblock-z][focusObject.x/canvasWIDTHblock])  || mapGrid[focusObject.y/canvasHEIGHTblock-z][focusObject.x/canvasWIDTHblock] == 8 || mapGrid[focusObject.y/canvasHEIGHTblock-z][focusObject.x/canvasWIDTHblock] == 9) ){
    if(blockArray.includes(objectGrid[focusObject.y/canvasHEIGHTblock-z][focusObject.x/canvasWIDTHblock])){
      objectGrid[focusObject.y/canvasHEIGHTblock-z][focusObject.x/canvasWIDTHblock].updateTWO();
    }
    return true;
  }
  if(direction == "BELOW" && ( blockArray.includes(objectGrid[focusObject.y/canvasHEIGHTblock+z][focusObject.x/canvasWIDTHblock]) || mapGrid[focusObject.y/canvasHEIGHTblock+z][focusObject.x/canvasWIDTHblock] == 8 ||  mapGrid[focusObject.y/canvasHEIGHTblock+z][focusObject.x/canvasWIDTHblock] == 9) ){
    if(blockArray.includes(objectGrid[focusObject.y/canvasHEIGHTblock+z][focusObject.x/canvasWIDTHblock])){
        objectGrid[focusObject.y/canvasHEIGHTblock+z][focusObject.x/canvasWIDTHblock].updateTWO();
    }
    return true;
  }
  if(direction == "RIGHT" && ( blockArray.includes(objectGrid[focusObject.y/canvasHEIGHTblock][focusObject.x/canvasWIDTHblock+z]) || mapGrid[focusObject.y/canvasHEIGHTblock][focusObject.x/canvasWIDTHblock+z] == 8 ||  mapGrid[focusObject.y/canvasHEIGHTblock][focusObject.x/canvasWIDTHblock+z] == 9) ){
    if(blockArray.includes(objectGrid[focusObject.y/canvasHEIGHTblock][focusObject.x/canvasWIDTHblock+z])){
      objectGrid[focusObject.y/canvasHEIGHTblock][focusObject.x/canvasWIDTHblock+z].updateTWO();
    }
    return true;
  }
  if(direction == "LEFT" && ( blockArray.includes(objectGrid[focusObject.y/canvasHEIGHTblock][focusObject.x/canvasWIDTHblock-z]) || mapGrid[focusObject.y/canvasHEIGHTblock][focusObject.x/canvasWIDTHblock-z] == 8 ||  mapGrid[focusObject.y/canvasHEIGHTblock][focusObject.x/canvasWIDTHblock-z] == 9) ){
    if(blockArray.includes(objectGrid[focusObject.y/canvasHEIGHTblock][focusObject.x/canvasWIDTHblock-z])){
      objectGrid[focusObject.y/canvasHEIGHTblock][focusObject.x/canvasWIDTHblock-z].updateTWO();
    }
    return true;
  }
  
  return false;
}
