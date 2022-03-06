let btn = document.getElementById("btn");




btn.addEventListener("click",setData)


function setData(){

    
let username = document.getElementById("username").value;
let gameMode=document.querySelector('input[name="gameMode"]:checked').value;
let gameLevel=document.querySelector('input[name="gameLevel"]:checked').value;
if(username == ""){
swal({
    title: "Please Enter ur username",
    icon: "error",
  });
// add css style with red div on the username input 
}else{

    localStorage.setItem("username",username);
    localStorage.setItem("gameMode",gameMode);
    localStorage.setItem("gameLevel",gameLevel);

    window.location.href = "http://127.0.0.1:5500/Game.html";
    
}}





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
