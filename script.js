const dino = document.getElementById("dino");

var images = ["url('images/cactus.PNG')","url('images/two.jpg')","url('images/soldier.jpg')","url('images/car.jpg')"];

function jump(){
    var y;
    if(dino.classList != "jump"){
        dino.classList.add("jump");

        setTimeout(() => {
            dino.classList.remove("jump");
        }, 300);
        setTimeout(() => {
            var y = Math.floor(Math.random() * images.length);
            document.getElementById("cactus").style.backgroundImage = images[y];
        }, 300);
    }
    
    
}

var i = 0;

let isAlive = setInterval(function(){
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    
    document.getElementById("score").innerHTML= i++;

    if(cactusLeft<50 && cactusLeft>0 && dinoTop >= 140){
        alert("Game Over!! Your Score is "+i);
        i = 0;
        //window.getComputedStyle(cactus).getPropertyValue("left") = 150;
    }

}, 10);

document.body.addEventListener('click', function(event){
    jump();
});