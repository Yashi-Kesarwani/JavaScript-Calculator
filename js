var calc = document.getElementById('display');
const display = (x)=> {
  calc.value += x;
  if(x === 'c') {
    calc.value = '';
  }
}
const equals = ()=> {
 x = calc.value;
  x = eval(x);
  calc.value = x;
}
const power = ()=> {
  x = calc.value;
  x = eval(x*x);
  calc.value = x;
}
const backspace = ()=> {
  var num = calc.value;
  calc.value = num.substring(0,num.length-1);
}
