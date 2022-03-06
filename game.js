

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
        
        // checkHz();
        // checkVl();
        // checkDiagonalClockWise();
        // checkDiagonalAntiClockWise();
}}
