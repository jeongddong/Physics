let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


var input;
let time = 0;
let radius_oneSideLength = 10;
let mass = 0;
let density = 0;
let shiftDistance = 0;
let gravityAcceleration = 9.8;
let acceleration = 0;
let velocity = 0;
let elasticModulus;
let elasticPotentialEnergy = 0;
let gravityPotentialEnergy = 0;
let kineticEnergy = 0;
let drawing = false;
let mouseFollowing = true;

let mouseX;
let mouseY;

let thing = {
  x: canvas.width / 2, // 초기 x 좌표를 캔버스의 중앙으로 설정
  y: canvas.height / 2 // 초기 y 좌표를 캔버스의 중앙으로 설정
};

function drawThing() {
  if (drawing == true && input == "/circle") {
    ctx.beginPath();
    ctx.arc(thing.x, thing.y, radius_oneSideLength, 0, 2 * Math.PI);
    ctx.stroke();
  }
  if (drawing == true && input == "/square")
    ctx.strokeRect(thing.x - radius_oneSideLength / 2, thing.y - radius_oneSideLength / 2, radius_oneSideLength, radius_oneSideLength);
}

document.addEventListener('mousemove', function(event) {
  mouseX = event.clientX;
  mouseY = event.clientY;
  if (mouseFollowing == true){thing.x=mouseX,thing.y=mouseY}
});

function frame_execute() {
  requestAnimationFrame(frame_execute);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  time++;

  ctx.beginPath();
  ctx.moveTo(0, 500);
  ctx.lineTo(canvas.width, 500);
  ctx.stroke();

  ctx.fillText(`mousePos : (${mouseX},${mouseY})`,10,400)
  ctx.fillText(`thingPos : (${thing.x},${thing.y})`, 10, 410);
  ctx.fillText(`time : ${time}`, 10, 10);
  ctx.fillText(`radius_oneSideLength : ${radius_oneSideLength}`, 10, 20);
  ctx.fillText(`mass : ${mass}`, 10, 30);
  ctx.fillText(`density : ${density}`, 10, 40);
  ctx.fillText(`shiftDistance : ${shiftDistance}`, 10, 50);
  ctx.fillText(`gravityAcceleration : ${gravityAcceleration}`, 10, 60);
  ctx.fillText(`acceleration : ${acceleration}`, 10, 70);
  ctx.fillText(`velocity : ${velocity}`, 10, 80);
  ctx.fillText(`elasticModulus : ${elasticModulus}`, 10, 90);
  ctx.fillText(`elasticPotentialEnergy : ${elasticPotentialEnergy}`, 10, 100);
  ctx.fillText(`gravityPotentialEnergy : ${gravityPotentialEnergy}`, 10, 110);
  ctx.fillText(`kineticEnergy : ${kineticEnergy}`, 10, 120);

  drawThing();
}

frame_execute();

document.addEventListener("keydown", function(e) {
    if (e.key == "p") {

    input = prompt("prompt")

    if (input == "/circle") {
      drawing = true;
      mouseFollowing = true;
      radius_oneSideLength = parseFloat(prompt("radius_oneSideLength input"));
      elasticModulus = parseFloat(prompt("elasticModulus input"))
    }

    else if (input == "/square") {
      drawing = true;
      mouseFollowing = true
      radius_oneSideLength = parseFloat(prompt("radius_oneSideLength input"));
      elasticModulus = parseFloat(prompt("elasticModulus input"))
    }

    else if (input == "/non") {
      drawing = false;
    }

    else {
      alert("wrong prompt")
    }
  }
});


document.addEventListener("click",function(e){
  if(drawing=true){
    mouseFollowing=false;
    velocity = velocity + gravityAcceleration
    thing.y = thing.y + velocity 
  }
})


