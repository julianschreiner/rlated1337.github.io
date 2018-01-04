document.addEventListener('keydown', function(event) {
  if (event.keyCode == 82) {
    //alert("reset");
    var can = document.getElementById("canvas");
    var ctx = can.getContext('2d');
    ctx.clearRect(0, 0, can.width, can.height);

  }
});

function resize_canvas() {
  canvas = document.getElementById("canvas");
  if (canvas.width < window.innerWidth) {
    canvas.width = window.innerWidth;
  }

  if (canvas.height < window.innerHeight) {
    canvas.height = window.innerHeight;
  }
}

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var centerX = canvas.width / 2;
var centerY = canvas.height / 2;
var colors = ["orange", "purple", "grey"];



function draw_curve(w, x, y, z, movetox, movetoy, linetox, linetoy) {
  var cx = document.getElementById('canvas').getContext("2d");
  cx.beginPath();
  cx.moveTo(movetox, movetoy);
  cx.translate(x, y);
  // control=(60,10) goal=(90,90)
  cx.quadraticCurveTo(w, x, y, z);
  cx.lineTo(linetox, linetoy);
  var rand_seed = Math.floor((Math.random() * colors.length) + 0); //0-colors.length
  cx.strokeStyle = colors[rand_seed];;
  cx.closePath();
  cx.stroke();
}

function draw_curve_2(w, x, y, z, movetox, movetoy, linetox, linetoy) {
  var cx = document.getElementById('canvas').getContext("2d");
  cx.beginPath();
  cx.moveTo(movetox, movetoy);
  cx.translate(x, y);
  // control=(60,10) goal=(90,90)
  cx.quadraticCurveTo(w, x, y, z);
  cx.lineTo(linetox, linetoy);
  var rand_seed = Math.floor((Math.random() * colors.length) + 0); //0-colors.length
  cx.strokeStyle = colors[rand_seed];;
  cx.closePath();
  cx.stroke();
}


function draw(w, x, y, z, movetox, movetoy, linetox, linetoy) {
  //ctx.clearRect(20,20,100,50);
  draw_curve(w, x, y, z, movetox, movetoy, linetox, linetoy);
}

function draw_2(w, x, y, z, movetox, movetoy, linetox, linetoy){
  draw_curve_2(w, x, y, z, movetox, movetoy, linetox, linetoy);
}

function animate() {
  window.requestAnimationFrame(animate);

  //x,y
  var x = Math.floor((Math.random() * 2) + 1);
  var y = Math.floor((Math.random() * 2) + 1);

  var w = Math.floor((Math.random() * 10) + 1);
  var z = Math.floor((Math.random() * 5) + 1);

  var movetox = Math.floor((Math.random() * 100) + 1);
  var movetoy = Math.floor((Math.random() * 25) + 1);
  var linetox = Math.floor((Math.random() * 30000) + 1);
  var linetoy = Math.floor((Math.random() * 20000) + 1);

  draw(w, x, y, z, movetox, movetoy, linetox, linetoy);
  draw_2(w, x, y, z, movetox, movetoy, linetox, linetoy);


  setTimeout(function() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      window.cancelAnimationFrame(animate);
      draw(w,-4,-6,z,movetoy,movetox,linetoy,linetox);
      setInterval(draw(w,-4,-6,z,movetoy,movetox,linetoy,linetox), 3000);
    },
    3000);

    setTimeout(function() {
        window.cancelAnimationFrame(animate);
        draw(w, 4, 6, z, movetox, movetoy, linetox, linetoy);
        setInterval(draw(w, 4, 6, z, movetox, movetoy, linetox, linetoy), 6000);
      },
      6000);
/*
      setTimeout(function() {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          window.cancelAnimationFrame(animate);
          draw(w,-4,-6,z,movetoy,movetox,linetoy,linetox);

        },
        9000);
*/



}



animate();


resize_canvas();
