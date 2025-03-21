const child = document.getElementById("child");

let left = 0;
let y = 0;
let direction = "right";

const move = setInterval(function(){
    if(direction == "right"){
        left++;
        if(left == 450){
            direction = "bottom";
        }
    } else if(direction == "bottom"){
        y++;
        if(y == 450){
            direction = "left";
        }
    } else if(direction == "left"){
        left--;
        if(left == 0){
            direction = "top";
        }
    } else{
        y--;
        if(y == 0 && left == 0){
            direction = "right";
        }
    }

    child.style.left = left + 'px';
    child.style.top = y + 'px';
}, 5);