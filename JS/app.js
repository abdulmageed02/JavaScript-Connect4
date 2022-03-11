let btn = document.getElementById("btn");
btn.addEventListener("click",setData)


function setData(){

let username = document.getElementById("username").value;
let gameMode=document.querySelector('input[name="gameMode"]:checked').value;
let gameLevel=document.querySelector('input[name="gameLevel"]:checked').value;
let SecondPlayer = document.getElementById("SecondPlayer").value;
let regName = /^[a-zA-Z0-9_]*$/; 
if( !regName.test(username) || username == ""|| ((gameMode == "Player" && !regName.test(SecondPlayer)))){
swal({
    title: "All fields must be filled",
    icon: "error",
  });
// add css style with red div on the username input 
}else{

    localStorage.setItem("username",username);
    localStorage.setItem("gameMode",gameMode);
    localStorage.setItem("gameLevel",gameLevel);
    window.location.replace("Game.html");
    
  }
  
if(gameMode=="Player"){
  SecondPlayer = localStorage.setItem("SecondPlayer",SecondPlayer)
}
}

function secondInput(v){
  let sp = document.getElementById("SecondPlayer");
  
  if(v == "PC"){
    sp.value="PC"
    sp.style.visibility = "hidden";
    username.placeholder = "UserName"
  }
  else{
    sp.value="PC"
    sp.style.visibility = "visible";
    username.placeholder = "First Player"
    
  }
}



   function showNotification(){
     const notification = new Notification("Connect Four",{
       body: "Welcome To Our Game"
     })
   }
   if(Notification.permission === "granted"){
     showNotification();
   }
 