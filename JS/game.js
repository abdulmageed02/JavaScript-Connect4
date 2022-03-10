
let username , gameMode , gameLevel , SecondPlayer , game_Data;

if( document.referrer.split("/").at(-1) != 'index.html') {
        swal.fire({
                title: "Not accesible this way!",
                icon: "error",
              }).then(() => {
                document.location.replace("index.html");
              })
}else{
        username = localStorage.getItem("username");
        gameMode = localStorage.getItem("gameMode");
        gameLevel = localStorage.getItem("gameLevel");
        
        game_Data = document.getElementById("gamedata");
        
        if(gameMode=="PC"){
                game_Data.innerHTML = `${username} Vs PC `}
        else{
                SecondPlayer = localStorage.getItem("SecondPlayer");
                game_Data.innerHTML = `${username} Vs ${SecondPlayer}`
        }
    console.log(username,gameMode,gameLevel);
}

let playerRed = "Red"
let playerYellow = "yellow"
let currentPlayer = playerRed
let gameOver = false
let board;
let rows = 6
let columns = 7
let freeColumns = []
let pressed = false
let startBtn = document.getElementById("btn");
let circle;
let confDiv;
let winFlag=0;
let TURN = document.getElementById("Turn")


window.onload=function(){
        setGame();
}

function setGame(){
        board = []
        freeColumns=[5,5,5,5,5,5,5]
        for(r=0;r<rows;r++){
                let row = []
                for(c=0;c<columns;c++){
                        row.push(" ");
                        circle = document.createElement("div");
                        circle.id=r.toString()+ "-" +c.toString();
                        circle.classList.add("circle");
                        document.getElementById("board").append(circle);
                        circle.addEventListener("click",drawCircle);
                }
                board.push(row)
        }
}
function drawCircle(){
        if(pressed){
        if(gameOver){
                return;
        }
        let coord = this.id.split("-");
        let r = Number(coord[0]);
        let c = Number(coord[1]);
        r = freeColumns[c];
        if(r<0){return;}
        board[r][c]=currentPlayer;
        let currentCircle = document.getElementById(r.toString()+"-"+c.toString());
        if(currentPlayer==playerRed){
                currentCircle.classList.add("redCircle");
                currentPlayer=playerYellow;
                Turn.innerHTML= `<p>${currentPlayer}'s Turn</p>`

        if(gameMode === "PC") { 
                document.getElementById("board").style.cssText="pointer-events: none;"
                setTimeout(pcTurn, 2000)
                // pcTurn()
        }

        }
        else{
                currentCircle.classList.add("yellowCircle");
                currentPlayer=playerRed;
                Turn.innerHTML= `<p>${currentPlayer}'s Turn</p>`
        }
        console.log(r,c);
        freeColumns[c]-=1;
        
        checkWinner(gameLevel);
        if(winFlag===0){
        checkDraw();
        }
}}

function checkWinner(gameLevel){
        if(gameLevel=="Hard"){
                checkHzHARD();
                checkVlHARD();
                checkDiagonalAntiClockWise();
                checkDiagonalClockWise();
        }
        else{
                checkHz();
                checkVl();  
        }
        
}
startBtn.addEventListener("click", () => {
        pressed=true;
})
function checkHzHARD(){
        for(let r=0;r<rows;r++){
                for(let c=0;c<columns-4;c++){
                        if(board[r][c] != ' '){
                        if(board[r][c]==board[r][c+1] && board[r][c+1]==board[r][c+2] && board[r][c+2]==board[r][c+3] && board[r][c+3]==board[r][c+4] ){
                                // winFlag=1;
                                showWinnerStatus(board[r][c]);
                                return;
                        }
                    }
                }
        }
}
function checkVlHARD(){
        for(let c=0;c<columns;c++){
                for(let r=0;r<rows-4;r++){
                        if(board[r][c] != ' '){
                        if(board[r][c]==board[r+1][c] && board[r+1][c]==board[r+2][c] && board[r+2][c]==board[r+3][c] && board[r+3][c]==board[r+4][c]){
                                // winFlag=1;
                                showWinnerStatus(board[r][c]);
                                return;
                        }
                    }
                }
        }
}
function checkHz(){
        for(let r=0;r<rows;r++){
                for(let c=0;c<columns-3;c++){
                        if(board[r][c] != ' '){
                        if(board[r][c]==board[r][c+1] && board[r][c+1]==board[r][c+2] && board[r][c+2]==board[r][c+3]){
                                // winFlag=1;
                                showWinnerStatus(board[r][c]);
                                return;
                        }
                    }
                }
        }
}
function checkVl(){
        for(let c=0;c<columns;c++){
                for(let r=0;r<rows-3;r++){
                        if(board[r][c] != ' '){
                        if(board[r][c]==board[r+1][c] && board[r+1][c]==board[r+2][c] && board[r+2][c]==board[r+3][c]){
                                // winFlag=1;
                                showWinnerStatus(board[r][c]);
                                return;
                        }
                    }
                }
        }
}
function checkDiagonalClockWise(){
        for(let r=0;r<rows-4;r++){
                for(let c=0;c<columns-4;c++){
                        if(board[r][c]!=' '){
                                if(board[r][c]==board[r+1][c+1] && board[r+1][c+1]==board[r+2][c+2] && board[r+2][c+2]==board[r+3][c+3] && board[r+3][c+3]==board[r+4][c+4]){
                                        // winFlag=1;
                                        showWinnerStatus(board[r][c]);
                                        return;
                                }
                        }
                }
        }
}
function checkDiagonalAntiClockWise(){
        for(let r=0;r<rows-4;r++){
                for(let c=0;c<columns;c++){
                        if(board[r][c]!=' '){
                                if(board[r][c]==board[r+1][c-1] && board[r+1][c-1]==board[r+2][c-2] && board[r+2][c-2]==board[r+3][c-3] && board[r+3][c-3]==board[r+4][c-4]){
                                        // winFlag=1;
                                        showWinnerStatus(board[r][c]);
                                        return;
                                }
                        }
                }
        }
}
function showWinnerStatus(winner){
        if(winner == "Red"){color = "red"} else {color = "yellow"}
        let status = document.getElementById("winner");
        status.cssText='color:black, background-color:red';
        status.innerHTML= `<span style="color:${color}">${winner} have won the game </span>`;
        // let status2 = document.getElementById("loser");
        // status2.cssText='color:black, background-color:red';
        // status2.innerHTML=loser;
        // gameOver=true;

        //  confDiv = document.getElementById("Confirm");
        //  confDiv.style.visibility='visible';
        if(winner===playerRed){
                Swal.fire({  
                        title: 'Player red won',  
                        text: "Play Again?",
                        confirmButtonText: `Yes`,  
                        showDenyButton: true, 
                        icon: 'success',
                        allowOutsideClick: false,
                        allowEscapeKey: false,
                      }).then((result) => {  
                          if (result.isConfirmed) {    
                                conf();
                          } else if (result.isDenied) {    
                                document.location.replace("index.html")
                               }
                      });    
        }
        else if(winner===playerYellow){
                Swal.fire({  
                        title: 'Player yellow won',  
                        text: "Play Again?",
                        confirmButtonText: `Yes`,  
                        showDenyButton: true, 
                        icon: 'success',
                        allowOutsideClick: false,
                        allowEscapeKey: false,
                      }).then((result) => {  
                          if (result.isConfirmed) {    
                                conf();
                          } else if (result.isDenied) {    
                                document.location.assign("index.html")
                               }
                      });    
        }
}
/////////////////////// 
function checkDraw(){
        let cnt=0;   
        for(c=0;c<columns;c++){
                if(board[0][c]!==' '){
                        cnt++;
                }
        }
        console.log(cnt);
        if(cnt===7){
        document.getElementById("winner").innerHTML= `<span>DRAW</span>`; 
        Swal.fire({  
                title: 'Draw',  
                text: "Play Again?",
                confirmButtonText: `Yes`,  
                showDenyButton: true, 
                icon: 'success',
                allowOutsideClick: false,
                allowEscapeKey: false,
              }).then((result) => {  
                  if (result.isConfirmed) {    
                        conf();
                  } else if (result.isDenied) {    
                        document.location.assign("index.html")
                       }
              });
        }
}
////////////////////////
       

function pcTurn(){
        let r , c;
        if(gameOver){
                return;
        }

        while(true){
        c = getRandom(0,7);
        r = freeColumns[c];
        if(r<0){continue;}
        if(board[r][c] === " "){break;}
        }

        board[r][c]=currentPlayer;
        
        let currentCircle = document.getElementById(r.toString()+"-"+c.toString());
       
                currentCircle.classList.add("yellowCircle");
                currentPlayer=playerRed;
                Turn.innerHTML= `<p>${currentPlayer}'s Turn</p>`
                console.log(board[r][c],r,c,"PC");
                freeColumns[c]-=1  
                document.getElementById("board").style.cssText="pointer-events: auto;"

        }


function getRandom(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
      }


function conf (){
        for(let i=0;i<board.length;i++){
                for(let j=0;j<board[i].length;j++){
                        board[i][j]=" ";
                        let b = document.getElementById(i.toString()+"-"+j.toString());
                        b.classList.remove("redCircle","yellowCircle");
                        console.log(b);
                        gameOver=false;
                        pressed=false;
                        freeColumns=[5,5,5,5,5,5,5];
                        currentPlayer = playerRed;
                }
        }
}
