

if( document.referrer != 'http://127.0.0.1:5500/index.html') {
     alert("Page is Not accesissble this way");
        document.location.assign("http://127.0.0.1:5500/index.html")
}else{
    let username = localStorage.getItem("username");
    let gameMode = localStorage.getItem("gameMode");
    let gameLevel = localStorage.getItem("gameLevel");
    
    console.log(username,gameMode,gameLevel);
}


//design el game 
        // based on game level game mode 
        // show user name   

// let start = document.getElementById("btn");
// btn.addEventListener("click",draw);

// function draw(){
        
       
//    document.getElementById("container").appendChild( document.createElement("div").document.className= "circle");
// }