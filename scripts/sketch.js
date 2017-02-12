//Created and maintained by Natalie Orsi at http://natalieorsi.net

window.onresize = function() {
  var w = window.innerWidth;
  var h = window.innerHeight*.3;  
  canvas.size(w,h);
  width = w;
  height = h;
  var text_size = window.innerWidth*.05;
  textSize(text_size);
};

function setup() {
  createCanvas(window.innerWidth, window.innerHeight*.3);
  background(255);
  var text_x = window.innerWidth*.05;
  var text_y = window.innerHeight*.1;
  var text_size = window.innerWidth*.05;
  var s = "Natalie Orsi";
  textFont("Raleway");
  textSize(text_size);
  text(s, text_x, text_y);
}

String.prototype.width = function(font) {
  var f = font || '12px arial',
      o = $('<div>' + this + '</div>')
            .css({'position': 'absolute', 'float': 'left', 'white-space': 'nowrap', 'visibility': 'hidden', 'font': f})
            .appendTo($('body')),
      w = o.width();

  o.remove();

  return w;
}



function draw() {
  var x_click = "Natalie ".width();

}

function keyPressed() {
  
}

function keyReleased() {
}