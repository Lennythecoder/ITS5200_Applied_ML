// function that when we press a button it will run
async function runExample1(
  var x = new Float32Array(1, 11)
 x[0] = Document.getElementById('box1').value;
 x[1] = Document.getElementById('box2').value;
 x[2] = Document.getElementById('box3').value;
 x[3] = Document.getElementById('box4').value;
 x[4] = Document.getElementById('box5').value;
 x[5] = Document.getElementById('box6').value;
 x[6] = Document.getElementById('box7').value;
 x[7] = Document.getElementById('box8').value;
 x[8] = Document.getElementById('box9').value;
 x[9] = Document.getElementById('box10').value;
 x[10] = Document.getElementById('box11').value;
 let tensorX = new onnx.Tensor(x, 'float32', (1, 11)
)
