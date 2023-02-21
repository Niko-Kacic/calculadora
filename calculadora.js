
//Se toma el input donde se mostraran los valores
let result = document.getElementById('result');

//Función que agrega los valores tomados en el input de solo lectura
function addToResult(value) {
  result.value += value;
}

//función que permite borrar el ultimo número sin borrar todo con el método slice
function backspace() {
    let result = document.getElementById('result');
    result.value = result.value.slice(0, -1);
}

//función que borra o recetea todo el input con los valores agregados
function clearResult() {
  result.value = '';
}



function calculate() {//función que realiza el calculo de cada operacion
    let result = document.getElementById('result');

    //expresión regular con el método replace donde cada patron busca aparición de numeros antes o despues de un paréntesis
    //esto permite agrupar números en paréntesis para hacer operaciónes mas facil de leer
    let expression = result.value.replace(/(\d+)\(/g, '$1*(').replace(/\)(\d+)/g, ')*$1');
    
    try {
      result.value = eval(expression);//eval() evalua las operaciones, pese a que este metodo esta depreciado e inseguro. Para este caso practico no implica riesgo.
    } catch(error) {
      alert('Invalid calculation');//En caso una operación no valida, se arroja un error en el catch
    }
}
  

  