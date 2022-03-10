let btn = document.getElementById("btn");
btn.addEventListener("click",setData)


function setData(){

let username = document.getElementById("username").value;
let gameMode=document.querySelector('input[name="gameMode"]:checked').value;
let gameLevel=document.querySelector('input[name="gameLevel"]:checked').value;
let SecondPlayer = document.getElementById("SecondPlayer").value;
if(username == "" || SecondPlayer == ""){
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
    sp.style.visibility = "hidden";
    username.placeholder = "UserName"
  }
  else{
    sp.style.visibility = "visible";
    username.placeholder = "First Player"
    
  }
}








// function notifyMe(){
//     console.log(Notification.permission)
//     if(Notification.permission=="granted"){
//         alert("we have permission!")
//     }
//     else if(Notification.permission=="denied"){
//         Notification.requestPermission.then(permission => {
//             console.log(Notification.permission)
//         });
//         const notification = new Notification("new message from jimmy" ,{
//             body : "hey from jimmy",

//         })
//     }
// }
