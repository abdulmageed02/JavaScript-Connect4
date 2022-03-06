

// if( document.referrer != 'http://127.0.0.1:5500/index.html') {
//      alert("Page is Not accesissble this way!");
//         document.location.assign("http://127.0.0.1:5500/index.html")
// }else{
//     let username = localStorage.getItem("username");
//     let gameMode = localStorage.getItem("gameMode");
//     let gameLevel = localStorage.getItem("gameLevel");
    
//     console.log(username,gameMode,gameLevel);
// }

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
        }
        else{
                currentCircle.classList.add("yellowCircle");
                currentPlayer=playerRed;
        }
        console.log(r,c);
        freeColumns[c]-=1;
        
        checkWinner("Hard")
                //  checkHz();
                // checkVl();
                // checkDiagonalAntiClockWise();
                // checkDiagonalClockWise();
        
}}

function checkWinner(gameLevel){
        if(gameLevel=="Hard"){
                checkHz();
                checkVl();
                checkDiagonalAntiClockWise();
                checkDiagonalClockWise();
        }
        else{
                //checkHz();
                //checkVl();  
        }
}
startBtn.addEventListener("click", () => {
        pressed=true;
})
function checkHz(){
        for(let r=0;r<rows;r++){
                for(let c=0;c<columns-3;c++){
                        if(board[r][c] != ' '){
                        if(board[r][c]==board[r][c+1] && board[r][c+1]==board[r][c+2] && board[r][c+2]==board[r][c+3]){
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
                                        showWinnerStatus(board[r][c]);
                                        return;
                                }
                        }
                }
        }
}
function showWinnerStatus(winner){
        let status = document.getElementById("winner");
        status.cssText='color:black, background-color:red';
        status.innerHTML=winner;
        gameOver=true;
        if(confirm("Do you want to restart ? ")){
                for(let i=0;i<board.length;i++){
                        for(let j=0;j<board[i].length;j++){
                                board[i][j]=" ";
                                let b = document.getElementById(i.toString()+"-"+j.toString());
                                b.classList.remove("redCircle","yellowCircle");
                                console.log(b);
                                gameOver=false;
                                pressed=false;
                                freeColumns=[5,5,5,5,5,5,5]
                        }
                }
                
        }
        
}