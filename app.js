var player1 = [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0]
];

var player2 = [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0]
];


var score = 0;
var activePlayer = 0;
var div = document.getElementById('table');

console.log(player1.length);
console.log(player1[0].length);

function drawTable(player){
    let table = '';
    for(let x = 0; x < 9; x++){
        table += '<tr>';
        for(let y = 0; y < 9; y++){
            table += "<th id='row" + x +"col" + y + "'></th>";
        }
        table += '</tr>';
    }
    div.innerHTML = table;
}

function random(){
    return Math.floor(Math.random() *8);
}

function randomMoves(){
    return Math.floor(Math.random() *4) +1;
}

function place(value){
    let complete = false;
    while (complete != true){
        let x = random();
        let y = random();
        if (player1[x][y] == 0){
            if(checkHorizontal(x,y,value)){
                edgeDetection(player1);
                complete = true;
                return true;
            }
            else if (checkVertical(x,y,value)){
                edgeDetection(player1);
                complete = true;
                return true;
            }   
        }
    }
}

function checkHorizontal(x,y,length){
    try{
        if (length == 5){
            if ((length - 5) > -1){
                if (player1[x][(y-1)] == 0 && player1[(x)][(y-2)] == 0 && player1[x][(y-3)] == 0 && player1[x][(y-4)] == 0){
                    console.log('here');
                    for(let b = 0; b < 5; b++){
                        player1[(x)][(y-b)] = 1;
                    }
                    return 1;
                }
            }
            else if ((length + 5) < 8){
                if (player1[x][(y+1)] == 0 && player1[(x)][(y+2)] == 0 && player1[x][(y+3)] == 0 && player1[x][(y+4)] == 0){
                    console.log('here');
                    for(let b = 0; b < 5; b++){
                        player1[(x)][(y+b)] = 1;
                    }
                    return 1;
                }
            }
        }
        if (length == 4){
            if ((length - 5) > -1){
                if (player1[x][(y-1)] == 0 && player1[(x)][(y-2)] == 0 && player1[x][(y-3)] == 0){
                    console.log('here');
                    for(let b = 0; b < 4; b++){
                        player1[(x)][(y-b)] = 1;
                    }
                    return 1;
                }
            }
            else if ((length + 5) < 8){
                if (player1[x][(y+1)] == 0 && player1[(x)][(y+2)] == 0 && player1[x][(y+3)] == 0){
                    console.log('here');
                    for(let b = 0; b < 4; b++){
                        player1[(x)][(y+b)] = 1;
                    }
                    return 1;
                }
            }
        }
        if (length == 3){
            if ((length - 5) > -1){
                if (player1[x][(y-1)] == 0 && player1[(x)][(y-2)] == 0){
                    console.log('here');
                    for(let b = 0; b < 3; b++){
                        player1[(x)][(y-b)] = 1;
                    }
                    return 1;
                }
            }
            else if ((length + 5) < 8){
                if (player1[x][(y+1)] == 0 && player1[(x)][(y+2)] == 0){
                    console.log('here');
                    for(let b = 0; b < 3; b++){
                        player1[(x)][(y+b)] = 1;
                    }
                    return 1;
                }
            }
        }
        if (length == 2){
            if ((length - 5) > -1){
                if (player1[x][(y-1)] == 0){
                    console.log('here');
                    for(let b = 0; b < 2; b++){
                        player1[(x)][(y-b)] = 1;
                    }
                    return 1;
                }
            }
            else if ((length + 5) < 8){
                if (player1[x][(y+1)] == 0){
                    console.log('here');
                    for(let b = 0; b < 2; b++){
                        player1[(x)][(y+b)] = 1;
                    }
                    return 1;
                }
            }
        }
    }
    catch {
        return false;
    }
}

function checkVertical(x,y,length){
    try{
        if (length == 5){
            if ((length - 5) > -1){
                if (player1[(x-1)][y] == 0 && player1[(x-2)][y] == 0 && player1[(x-3)][y] == 0 && player1[(x-4)][y] == 0){
                    for(let b = 0; b < 5; b++){
                        console.log((x-b) + " " +y);
                        player1[(x-b)][y] = 1;
                    }
                    return 1;
                }
            }
            else if ((length + 5) < 8){
                if (player1[(x+1)][y] == 0 && player1[(x+2)][y] == 0 && player1[(x+3)][y] == 0 && player1[(x+4)][y] == 0){
                    for(let b = 0; b < 5; b++){
                        console.log((x+b) + " " +y);
                        player1[(x+b)][y] = 1;
                    }
                    return 1;
                }
            }
        }
        if (length == 4){
            if ((length - 4) > -1){
                if (player1[(x-1)][y] == 0 && player1[(x-2)][y] == 0 && player1[(x-3)][y] == 0){
                    for(let b = 0; b < 4; b++){
                        player1[(x-b)][y] = 1;
                    }
                    return 1;
                }
            }
            else if ((length + 4) < 8){
                if (player1[(x+1)][y] == 0 && player1[(x+2)][y] == 0 && player1[(x+3)][y] == 0){
                    for(let b = 0; b < 4; b++){
                        player1[(x+b)][y] = 1;
                    }
                    return 1;
                }
            }
        }
        if (length == 3){
            if ((length - 3) > -1){
                if (player1[(x-1)][y] == 0 && player1[(x-2)][y] == 0){
                    for(let b = 0; b < 3; b++){
                        player1[(x-b)][y] = 1;
                    }
                    return 1;
                }
            }
            else if ((length + 3) < 8){
                if (player1[(x+1)][y] == 0 && player1[(x+2)][y] == 0){
                    for(let b = 0; b < 3; b++){
                        player1[(x+b)][y] = 1;
                    }
                    return 1;
                }
            }
        }
        if (length == 2){
            if ((length - 3) > -1){
                if (player1[(x-1)][y] == 0){
                    for(let b = 0; b < 2; b++){
                        player1[(x-b)][y] = 1;
                    }
                    return 1;
                }
            }
            else if ((length + 3) < 8){
                if (player1[(x+1)][y] == 0){
                    for(let b = 0; b < 2; b++){
                        player1[(x+b)][y] = 1;
                    }
                    return 1;
                }
            }
        }
    }
    catch {
        return false;
    }
}

function standardizeX(id){
    let x = id.substring(0,4)
    return parseInt(x.replace('row',''));
}

function standardizeY(id){
    let y = id.substring(4,8)
    return parseInt(y.replace('col',''));
}

function edgeDetection(player){
    for (let x = 0; x < player.length; x++){
        for (let y = 0; y < player[0].length; y++){
            if(player[x][y] == 1){//finds cells users have selected
                if ((y-1) != -1){//left
                    if(player[x][y-1] != 1){player[x][y-1] = 2;}
                }
                if ((x-1) !=-1 && (y+1) != 10){//top-right
                    if (player[x-1][y+1] != 1){player[x-1][y+1] = 2;}
                }
                if ((x-1) !=-1 && (y-1) !=-1){//top-left
                    if (player[x-1][y-1] != 1){player[x-1][y-1] = 2;}
                }
                if ((x-1) != -1){//top
                    if (player[x-1][y] != 1){player[x-1][y] = 2;}
                }
                if ((x+1) != -1){//underneath
                    if (player[x+1][y] != 1){player[x+1][y] = 2;}
                }
                if ((x+1) != 10 && (y-1) != -1){//bottom-left
                    if (player[x+1][y-1] != 1){player[x+1][y-1] = 2;}
                }
                if ((x+1) != 10 && (y+1) != -1){//bottom-right
                    if (player[x+1][y+1] != 1){player[x+1][y+1] = 2;}
                }
                if ((y+1) != -1){//rightside
                    if (player[x][y+1] != 1){player[x][y+1] = 2;}
                }
            }
        }
    }
    return 'completed';
}

place(5);
place(4);
place(3);
place(3);
place(2);
drawTable(player2);

var cells = document.getElementsByTagName('th');
for (let cell of cells){
    cell.addEventListener('click', function() {
        let x = standardizeX(cell.id);
        let y = standardizeY(cell.id);
        if (player1[x][y] == 1){
            cell.className = "red";
            score++;
        }
        if (score == 17){
            alert('Game Won :)');
        }
    }, {once:true});
}