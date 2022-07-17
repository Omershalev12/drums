for(var i=0; i < 7; i++){
    document.querySelectorAll("button")[i].addEventListener("click", mouseClick);
    document.addEventListener("keydown", keyboardPress); //Relevant to all click in the page, not a specific object
}

function mouseClick(){
    handleClick(this.innerHTML);
    buttonAnimation(this.innerHTML);
}

function keyboardPress(Event){
    // the event keyword gives us information about the keyboard mouseClick. from this information we get the
    // 'key' key in order to know the specific letter that was pressed.
    handleClick(Event.key);
    buttonAnimation(Event.key);
}

function handleClick(key){
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;  
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;  
        case "j":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break; 
        case "k":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;   
        case "l":
            var audio = new Audio("sounds/kick.wav");
            audio.play();
            break;
        default:
            break;
    }
}

function buttonAnimation(key){
    document.querySelector("." + key).classList.add("pressed");
    setTimeout(function(){ document.querySelector("." + key).classList.remove("pressed");}, 50);
}