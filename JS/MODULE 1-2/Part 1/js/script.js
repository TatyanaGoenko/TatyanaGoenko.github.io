function pow(number, power){
  var number=+prompt('Введите целое число');
  var power=+prompt('Введите целое число');
  
if (power>0){
  var result=1;
  for (var i=0; i<power;i++){
    result*=number;
}
    console.log('Результат вычислений:', result);
}

else if (power==0){
    console.log('Результат вычислений =1');	
} 

else {
  var newResult=1;
  for (j=0;j<Math.abs(power);j++){
    newResult*=number;
}
    console.log('Результат вычислений:', +1/newResult);
}
return result;
}
    pow();
