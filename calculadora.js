let result = document.getElementById('result');

function addToResult(value) {
  result.value += value;
}

function backspace() {
    let result = document.getElementById('result');
    result.value = result.value.slice(0, -1);
}
  
function clearResult() {
  result.value = '';
}



function calculate() {
    let result = document.getElementById('result');
    let expression = result.value.replace(/(\d+)\(/g, '$1*(').replace(/\)(\d+)/g, ')*$1');
    try {
      result.value = eval(expression);
    } catch(error) {
      alert('Invalid calculation');
    }
}
  

  