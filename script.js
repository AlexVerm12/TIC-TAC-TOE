let fields = [];
let gameOver = false;
let currentShape = "cross";

function fillShape(id) { // Die Variable Id bekommt den Wert vom angeklickten Feld (0-8)
  if (!fields[id] && !gameOver) { // gameOver ist standartmässig auf false gesetzt. durch das ! wird es auf true umgewandelt und die function wird ausgeführt. Sobald jemand gewonnen hat wird gameOver auf true gesetzt. Dann wird durch das ! gameOver auf false umgewandelt und die Function wird nicht mehr ausgeführt.
    // durch das rufzeichen wird die if abfrage umgedreht. D.H: statt wenn etwas drinnen steht wird die function ausgeführt heißt es jetzt die function wird ausgeführt wenn an dieser Stelle noch nichts drinnen steht.
    if (currentShape == "cross") { // Wenn die Variable gerade den Wert 'Cross' hat, dann wird der Wert zu Circle umgewandelt.
      currentShape = "circle";
      document.getElementById("player-1").classList.add("player-inactive"); // Wenn Circle an der Reihe ist, wird Cross inactive
      document.getElementById("player-2").classList.remove("player-inactive");
    } else {
      currentShape = "cross";
      document.getElementById("player-1").classList.remove("player-inactive"); // Wenn Cross an der Reihe ist, wird circle inaktiv
      document.getElementById("player-2").classList.add("player-inactive");
    }

    fields[id] = currentShape; // Hier wird abwechselnd der Wert Cross und Circle in das array eingefügt.

    draw();
    checkForWin();
  }
}

function restart(){
    gameOver = false;
    fields = [];
    document.getElementById('game-over').classList.add('d-none');
    document.getElementById('restart-btn').classList.add('d-none');
for(i = 1; i < 9; i++ ){
    document.getElementById('line-' + i).classList.add('d-none');
}
for(i = 0; i < 9; i++ ){
    document.getElementById('circle-' + i).classList.add('d-none');
    document.getElementById('cross-' + i).classList.add('d-none');
}

}


function draw() { // Da beide bilder (cross + circle) schon in den Feldern eingefügt und ausgeblendet sind, muss hier das richtige wieder eingeblendet werden
  for (let i = 0; i < fields.length; i++) {
    if (fields[i] == "circle") { // Wenn im Array Circle steht, wird der Kreis in dem angeklickten Feld eingeblendet
      document.getElementById("circle-" + i).classList.remove("d-none");
    }
    if (fields[i] == "cross") { // Wenn im Array Cross steht, wird das Kreuz in dem angeklickten Feld eingeblendet 
      document.getElementById("cross-" + i).classList.remove("d-none");
    }
  }
}

function checkForWin() { // Hier werden alle Siegmöglichkeiten erörtert.
  let winner;

  if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {
    winner = fields[0];
    document.getElementById('line-1').style.transform = 'scalex(1)';
  }

  if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
    winner = fields[3];
    document.getElementById('line-2').style.transform = 'scalex(1)';
  }
  if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
    winner = fields[6];
    document.getElementById('line-3').style.transform = 'scalex(1)';
  }
  if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
    winner = fields[0];
    document.getElementById('line-4').style.transform = 'rotate(90deg) scalex(1)';
  }
  if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
    winner = fields[1];
    document.getElementById('line-5').style.transform = 'rotate(90deg) scalex(1)';
  }
  if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
    winner = fields[2];
    document.getElementById('line-6').style.transform = 'rotate(90deg) scalex(1)';
  }
  if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
    winner = fields[0];
    document.getElementById('line-7').style.transform = 'rotate(45deg) scalex(1)';
  }
  if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
    winner = fields[2];
    document.getElementById('line-8').style.transform = 'rotate(135deg) scalex(1)';
  }
  if (winner) {
    gameOver = true; // gameOver wird auf true gesetzt wenn jemand gewonnen hat.
    setTimeout(function() {
    document.getElementById('game-over').classList.remove('d-none');
    document.getElementById('restart-btn').classList.remove('d-none');  
    }, 1000);
   
  }
}
