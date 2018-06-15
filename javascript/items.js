var itemsList = [];

function itemBombUp(x,y){
    this.x = x;
    this.y = y;
    this.itemImage = new Image();
    this.itemImage.src = "http://zeyeland.com/bomber-kids-master/assets/passed_sprites/bombUp.png";

    itemsList.push(this);
    
    objectGrid[this.y/canvasHEIGHTblock][this.x/canvasWIDTHblock] = this;

    this.update = function(){
        if(player1.x == this.x && player1.y == this.y){
            player1.bombCapacity++;
            objectGrid[this.y/canvasHEIGHTblock][this.x/canvasWIDTHblock] = 0;
        }
        drawItem(this);
    }
}

function itemPowerUp(x,y){
    this.x = x;
    this.y = y;
    this.itemImage = new Image();
    this.itemImage.src = "http://zeyeland.com/bomber-kids-master/assets/passed_sprites/powerUp.png";

    itemsList.push(this);
    objectGrid[this.y/canvasHEIGHTblock][this.x/canvasWIDTHblock] = this;

    this.update = function(){
        if(player1.x == this.x && player1.y == this.y){
            player1.power++;
            objectGrid[this.y/canvasHEIGHTblock][this.x/canvasWIDTHblock] = 0;
        }
        drawItem(this);
    }
}

function itemHeartUp(x,y){
    this.x = x;
    this.y = y;
    this.itemImage = new Image();
    this.itemImage.src = "http://zeyeland.com/bomber-kids-master/assets/passed_sprites/heartUp.png";

    itemsList.push(this);
    objectGrid[this.y/canvasHEIGHTblock][this.x/canvasWIDTHblock] = this;

    this.update = function(){
        if(player1.x == this.x && player1.y == this.y){
            player1.hearts++;
            objectGrid[this.y/canvasHEIGHTblock][this.x/canvasWIDTHblock] = 0;
        }
        drawItem(this);
    }
}

function itemGreenBomb(x,y){
    this.x = x;
    this.y = y;
    this.itemImage = new Image();
    this.itemImage.src = "http://zeyeland.com/bomber-kids-master/assets/passed_sprites/bombGreen.png";

    itemsList.push(this);
    
    objectGrid[this.y/canvasHEIGHTblock][this.x/canvasWIDTHblock] = this;

    this.update = function(){
        if(player1.x == this.x && player1.y == this.y){
            player1.bombsAwayArray.push("GREEN");
            player1.bombsAwayArray.push("GREEN");
            player1.bombsAwayArray.push("GREEN");
            console.log(player1.bombsAwayArray);
            objectGrid[this.y/canvasHEIGHTblock][this.x/canvasWIDTHblock] = 0;
        }
        drawItem(this);
    }
}

function itemBlueBomb(x,y){
    this.x = x;
    this.y = y;
    this.itemImage = new Image();
    this.itemImage.src = "http://zeyeland.com/bomber-kids-master/assets/passed_sprites/bombBlue.png";

    itemsList.push(this);
    
    objectGrid[this.y/canvasHEIGHTblock][this.x/canvasWIDTHblock] = this;

    this.update = function(){
        if(player1.x == this.x && player1.y == this.y){
            player1.bombsAwayArray.push("BLUE");
            player1.bombsAwayArray.push("BLUE");
            console.log(player1.bombsAwayArray);
            objectGrid[this.y/canvasHEIGHTblock][this.x/canvasWIDTHblock] = 0;
        }
        drawItem(this);
    }
}

function itemRedBomb(x,y){
    this.x = x;
    this.y = y;
    this.itemImage = new Image();
    this.itemImage.src = "http://zeyeland.com/bomber-kids-master/assets/passed_sprites/bombRed.png";

    itemsList.push(this);
    
    objectGrid[this.y/canvasHEIGHTblock][this.x/canvasWIDTHblock] = this;

    this.update = function(){
        if(player1.x == this.x && player1.y == this.y){
            player1.bombsAwayArray.push("RED");
            console.log(player1.bombsAwayArray);
            objectGrid[this.y/canvasHEIGHTblock][this.x/canvasWIDTHblock] = 0;
        }
        drawItem(this);
    }
}

function itemGreyBomb(x,y){
    this.x = x;
    this.y = y;
    this.itemImage = new Image();
    this.itemImage.src = "http://zeyeland.com/bomber-kids-master/assets/passed_sprites/bombGrey.png";

    itemsList.push(this);
    
    objectGrid[this.y/canvasHEIGHTblock][this.x/canvasWIDTHblock] = this;

    this.update = function(){
        if(player1.x == this.x && player1.y == this.y){
            player1.bombsAwayArray.push("GREY");
            player1.bombsAwayArray.push("GREY");
            console.log(player1.bombsAwayArray);
            objectGrid[this.y/canvasHEIGHTblock][this.x/canvasWIDTHblock] = 0;
        }
        drawItem(this);
    }
}




///////////////////////////////////////////
///////////////////////////////////////////
function generateItemChance(x,y){
    var randomNumber = Math.floor(Math.random() * 11);
    if(randomNumber > 7){
        generateItem(x,y);
        //console.log('something was dropped');
    }
    else{
        objectGrid[y/canvasHEIGHTblock][x/canvasWIDTHblock] = 0;  
        //console.log('nothing was dropped');
    }
}

function generateItem(x,y){
    var randomNumber = Math.floor(Math.random() * 13);
    //var randomNumber = 6;
    switch(randomNumber) {
        case 0:
            var newItem = new itemBombUp(x,y);
            //console.log(newItem);
            break;
        case 1:
            var newItem = new itemPowerUp(x,y);
            //console.log(newItem);
            break;
        case 2:
            var newItem = new itemBombUp(x,y);
            //console.log(newItem);
            break;
        case 3:
            var newItem = new itemPowerUp(x,y);
            //console.log(newItem);
            break;
        case 4:
            var newItem = new itemHeartUp(x,y);
            //console.log(newItem);
            break;
        case 5:
            var newItem = new itemBlueBomb(x,y);
            //console.log(newItem);
            break;
        case 6:
            var newItem = new itemGreenBomb(x,y);
            //console.log(newItem);
            break;
        case 7:
            var newItem = new itemGreyBomb(x,y);
            //console.log(newItem);
            break;
        case 8:
            var newItem = new itemRedBomb(x,y);
            //console.log(newItem);
            break;
        case 9:
            var newItem = new itemBombUp(x,y);
            //console.log(newItem);
            break; 
        case 10:
            var newItem = new itemPowerUp(x,y);
            //console.log(newItem);
            break;
        case 11:
            var newItem = new itemBombUp(x,y);
            //console.log(newItem);
            break;
        case 12:
            var newItem = new itemBombUp(x,y);
            //console.log(newItem);
            break;          
    }
}

function drawItem(itemObject){
    if(itemObject != 0 && itemObject != null && itemObject != false){
    ctx.drawImage(itemObject.itemImage,itemObject.x,itemObject.y,canvasWIDTHblock,canvasHEIGHTblock);
    }
}