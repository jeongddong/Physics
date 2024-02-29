var firstX;
var firstY;
var laterX;
var laterY;

document.addEventListener("keydown", function(e) {
  if (e.code == "Space") {
    firstX = thing.x;
    firstY = thing.y;
  }
});

document.addEventListener("keyup", function(e) {
  if (e.code == "Space") {
    laterX = thing.x;
    laterY = thing.y;
    console.log(firstX, firstY, laterX, laterY);
  }
});
