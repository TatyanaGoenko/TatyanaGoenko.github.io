  var arr = []; 
  var arrNumber = prompt('Введите число элементов массива:',5); 
    for(var i=0;i < arrNumber;i++)
{
    arr[i] = prompt('Введите ['+(i+1)+'] имя пользователя'); 
}
    console.log('массив', arr);
  var userName = prompt('Введите имя пользователя');
  var coincidence;
	for (var i=0;i < arrNumber;i++){ 
	if (userName == arr[i]){
	coincidence=1;
}
}
  if (coincidence==1){
    alert (userName+' , поздравляем вы зашли на сайт!!!' );
} 
  else {
	alert('Совпадений не найдено, попробуйте еще раз!!!');
}