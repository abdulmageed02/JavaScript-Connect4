let btn = document.getElementById("btn");




btn.addEventListener("click",setData)


function setData(){

    
let username = document.getElementById("username").value;
let gameMode=document.querySelector('input[name="gameMode"]:checked').value;
let gameLevel=document.querySelector('input[name="gameLevel"]:checked').value;
if(username == ""){
alert("Please Enter ur username");
// add css style with red div on the username input 
}else{

    localStorage.setItem("username",username)
    localStorage.setItem("gameMode",gameMode);
    localStorage.setItem("gameLevel",gameLevel);

    window.location.href = "http://127.0.0.1:5500/Game.html";
    
}}
;


// console.log(username,gameLevel,gameMode);


