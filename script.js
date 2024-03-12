let input;
let time = 0;
let gravityAcceleration = 9.8;
let mouseFollowing = true;


let circleArray = [];
let squareArray = [];

let mouseX;
let mouseY;

function drawThing() {
  
  if (mouseFollowing==true){  
    for (let i = 0; i < circleArray.length; i++) {circleArray[i].draw();}
  
    for (let i = 0; i < squareArray.length; i++) {squareArray[i].draw();}
  }

}

document.addEventListener('mousemove', function(event) {
  mouseX = event.clientX;
  mouseY = event.clientY;
  // if (mouseFollowing == true){thing.x=mouseX,thing.y=mouseY}
});

function frame_execute() {
  requestAnimationFrame(frame_execute);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  time++;

  ctx.beginPath();
  ctx.moveTo(0, 500);
  ctx.lineTo(canvas.width, 500);
  ctx.stroke();

  ctx.fillText(`mousePos : (${mouseX},${mouseY})`,10,400);
  ctx.fillText(`time : ${time}`, 10, 10);

  drawThing();
}

frame_execute();

document.addEventListener("keydown", function(e) {
  if (e.key == "p") {
    input = prompt("prompt")

    switch (input) {
      case "/circle":
        ra = parseFloat(prompt("radius_oneSideLength input"));
        eM = parseFloat(prompt("elasticModulus input"));
        ma = parseFloat(prompt("Mass input"));
        de = parseFloat(prompt("Density input"));
        mouseFollowing = true

        circleArray.push(new circle(ra, eM, ma, de));
        break;

      case "/square":
        ra = parseFloat(prompt("radius_oneSideLength input"));
        eM = parseFloat(prompt("elasticModulus input"));
        ma = parseFloat(prompt("Mass input"));
        de = parseFloat(prompt("Density input"));
        mouseFollowing = true

        squareArray.push(new square(ra, eM, ma, de));
        break;

      default:
        alert("wrong prompt")
        break;
    }
  }
});


document.addEventListener("click",function(e){
  if(drawing=true){
    mouseFollowing=true;
    // velocity = velocity + gravityAcceleration
    // thing.y = thing.y + velocity 
  }
})