let body = document.body, 
    r = document.querySelector('#r'),
    g = document.querySelector('#g'),
    b = document.querySelector('#b'),
    outputR = document.querySelector('#outputR'),
    outputG = document.querySelector('#outputG'),
    outputB = document.querySelector('#outputB'),
    hexVal_out = document.querySelector('#hexVal'),
    reset = document.querySelector('#resetButton');
 
function setColor(){
  var rHexVal = parseInt(r.value, 10).toString(16),
      gHexVal = parseInt(g.value, 10).toString(16),
      bHexVal = parseInt(b.value, 10).toString(16),
      hexVal = "#" + pad(rHexVal) + pad(gHexVal) + pad(bHexVal);
  body.style.backgroundColor = hexVal; 
  hexVal_out.value = hexVal;
  body.style.color = 'white';
  hexVal_out.style.color = 'white';
  reset.style.color = 'white';
}
 
function pad(n){
  return (n.length<2) ? "0"+n : n;
}
 
//changes output number in real time
r.addEventListener('input', function() {
  setColor();
  outputR.value = r.value;
}, false);
 
g.addEventListener('input', function() {
  setColor();
  outputG.value = g.value;
}, false);
 
b.addEventListener('input', function() {
  setColor();
  outputB.value = b.value;
}, false);

reset.addEventListener('click', function() {
  Reset()
}, false);

function Reset(){
  r.value=0; //resets slider position
  g.value=0;
  b.value=0;
  
  outputR.value=0; //resets output value
  outputG.value=0;
  outputB.value=0;
  
  hexVal.value = "#000000"; //resets HEX value
  body.style.backgroundColor = 'white'; 
  body.style.color = 'black';
  hexVal_out.style.color = 'black';
  reset.style.color = 'black';
};
