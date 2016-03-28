var objTest = {
createContainer:function(parentElem){
	var container = document.createElement('div');
	container.className = 'container';
	parentElem.appendChild(container);
},
createTitle: function(container,titleName){
    var title = document.createElement('h1');
    title.className	= 'title';
	title.innerHTML = titleName ||'Тест по программированию';
	var container = document.querySelector('.container');
	container.appendChild(title);
},
createList: function(container){
	var list = document.createElement('ul');
	list.className = 'list';
	var container = document.querySelector('.container');
	container.appendChild(list);
},
createQuestion:function(list,question1Name,question2Name,question3Name){
	var question1 = document.createElement('li');
	question1.className = 'question1';
    question1.innerHTML = question1Name||'1. Вопрос № 1';
	var list = document.querySelector('.list');
	list.appendChild(question1);
	var question2 = document.createElement('li');
	question2.className = 'question2';
    question2.innerHTML = question2Name||'2. Вопрос № 2';
	var list = document.querySelector('.list');
	list.appendChild(question2);
    var question3 = document.createElement('li');
	question3.className = 'question3';
    question3.innerHTML = question3Name||'3. Вопрос № 3';
	var list = document.querySelector('.list');
	list.appendChild(question3); 	
},
createAnswer1: function(question1){
	var answer1 = document.createElement('li');
	var answer2 = document.createElement('li');
	var answer3 = document.createElement('li');
	var label1 = document.createElement('label');
	var label2 = document.createElement('label');
	var label3 = document.createElement('label');
	answer1.className = 'answer1';
	answer2.className = 'answer2';
	answer3.className = 'answer3';
    label1.innerHTML = '<input type="checkbox" value="">' + 'Вариант ответа № 1';
    label2.innerHTML = '<input type="checkbox" value="">' + 'Вариант ответа № 2';
    label3.innerHTML = '<input type="checkbox" value="">' + 'Вариант ответа № 3';
	var question1 = document.querySelector('.question1');
	question1.appendChild(answer1);
	question1.appendChild(answer2);
	question1.appendChild(answer3);
	answer1.appendChild(label1);
	answer2.appendChild(label2);
	answer3.appendChild(label3);
},
createAnswer2: function(question2){
	var answer4 = document.createElement('li');
	var answer5 = document.createElement('li');
	var answer6 = document.createElement('li');
	var label4 = document.createElement('label');
    var label5 = document.createElement('label');
	var label6 = document.createElement('label');
	answer4.className = 'answer4';
	answer5.className = 'answer5';
	answer6.className = 'answer6';
    label4.innerHTML = '<input type="checkbox" value="">' + 'Вариант ответа № 1';
    label5.innerHTML = '<input type="checkbox" value="">' + 'Вариант ответа № 2';
    label6.innerHTML = '<input type="checkbox" value="">' + 'Вариант ответа № 3';
	var question2 = document.querySelector('.question2');
	question2.appendChild(answer4);
	question2.appendChild(answer5);
	question2.appendChild(answer6);
	answer4.appendChild(label4);
	answer5.appendChild(label5);
	answer6.appendChild(label6);
},
createAnswer3: function(question3){
	var answer7 = document.createElement('li');
	var answer8 = document.createElement('li');
	var answer9 = document.createElement('li');
	var label7 = document.createElement('label');
    var label8 = document.createElement('label');
	var label9 = document.createElement('label');
	answer7.className = 'answer7';
	answer8.className = 'answer8';
	answer9.className = 'answer9';
    label7.innerHTML = '<input type="checkbox" value="">' + 'Вариант ответа № 1';
    label8.innerHTML = '<input type="checkbox" value="">' + 'Вариант ответа № 2';
    label9.innerHTML = '<input type="checkbox" value="">' + 'Вариант ответа № 3';
	var question3 = document.querySelector('.question3');
	question3.appendChild(answer7);
	question3.appendChild(answer8);
	question3.appendChild(answer9);
	answer7.appendChild(label7);
	answer8.appendChild(label8);
	answer9.appendChild(label9);
},
createButton: function(container, buttonName){
    var result = document.createElement('button');
    result.className	= 'result_button';
	result.innerHTML = buttonName ||'Проверить результат';
	var container = document.querySelector('.container');
	container.appendChild(result);
}	
}
var element = document.body;
objTest.createContainer(element);
objTest.createTitle();
objTest.createList();
objTest.createQuestion();
objTest.createAnswer1();
objTest.createAnswer2();
objTest.createAnswer3();
objTest.createButton();