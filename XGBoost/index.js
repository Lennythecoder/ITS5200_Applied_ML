// function that runs when a button is pressed
async function runExample1() {
  var x = [];
  x[0] = document.getElementById('box1').value;
  x[1] = document.getElementById('box2').value;
  x[2] = document.getElementById('box3').value;
  x[3] = document.getElementById('box4').value;
  x[4] = document.getElementById('box5').value;
  x[5] = document.getElementById('box6').value;
  x[6] = document.getElementById('box7').value;
  x[7] = document.getElementById('box8').value;
  x[8] = document.getElementById('box9').value;
  x[9] = document.getElementById('box10').value;
  x[10] = document.getElementById('box11').value;
  
  let tensorX = new ort.Tensor(x, 'float32', [1, 11]);
  let feeds = { 'input_name_in_model': tensorX }; 
  
  let session = await ort.InferenceSession('xgboost_winequality_ort.onnx'); 
  let result = await session.run(feeds);
  let outputData = result.variable.data;
  
  outputData = parseFloat(outputData).toFixed(2); // Correct variable name and parsing.
  let predictions = document.getElementById('predictions');
  predictions.innerHTML = `<hr> Got an Output Tensor with values: <br/>
    <table>
      <tr>
        <td>Rating of Wine Quality</td>
        <td id="td0">${outputData}</td> <!-- Correct variable name -->
      </tr>
    </table>
  `;
}
