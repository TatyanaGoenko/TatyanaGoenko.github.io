var time = document.getElementsByClassName('time');
var mtime = document.getElementsByClassName('mtime');
var timerList = document.getElementsByClassName('timer_list');

var btnStart = document.getElementsByClassName('btn-success');
btnStart[0].addEventListener("click", handlerStart);

var btnSplit = document.getElementsByClassName('btn-warning');
btnSplit[0].addEventListener("click", handlerSplit);

var btnReset = document.getElementsByClassName('btn-danger');
btnReset[0].addEventListener("click", handlerReset);

var initialDate;
var timeGapID;
var timeGap = 10;


var stopwatch = {
	hour: 0,
	minute: 0,
	second: 0,
	millisecond: 0,

	clear : function() {
		this.hour = 0;
		this.minute = 0;
		this.second = 0;
		this.millisecond = 0;
	},
	addSecond : function() {
		this.second++;
		if (this.second == 60){
			this.second = 0;
			this.minute++;
			if (this.minute==60){
				this.minute = 0;
				this.hour++;
	}}
	},
   addMillisecond : function(count) {
        this.millisecond+=count;
        if (this.millisecond >= 1000){
            this.addSecond();
            this.millisecond-=1000;
    }
  },
  	Stroka: function() {
	var strHour = (this.hour > 9)? this.hour: '0' + this.hour;
    var strMinute = (this.minute > 9)? this.minute:'0'+ this.minute;
    var strSecond = (this.second > 9)? this.second:'0' + this.second;
    return strHour + ' : ' + strMinute + ' : ' + strSecond;
	},
	
    displayMillisecond: function() {
    if(this.millisecond > 99){
      return this.millisecond + '';
    }
    if(this.millisecond > 9){
      return '0' + this.millisecond;
    }
      return '00' + this.millisecond;
  }
}
function handlerStart(){
	var btnName = this.innerHTML;
	if (btnName === 'STOP') {
    insertToTimerList(this);
    this.innerHTML = 'RESUME';
    clearInterval(timeGapID);
  } else {
    this.innerHTML = 'STOP';
	  timeGapID = setInterval(startTimer,timeGap);
	  initialDate = new Date();
  }
}
function handlerReset(){
	btnStart[0].innerHTML = 'START';
	stopwatch.clear();
	time[0].innerText = stopwatch.Stroka();
  	mtime[0].innerHTML = stopwatch.displayMillisecond();
  	clearInterval(timeGapID);
  	timerList[0].innerHTML = '';
}
function startTimer(){
	var start = new Date();
	stopwatch.addMillisecond(start.getTime() - initialDate.getTime());
    initialDate = start;
	time[0].innerText = stopwatch.Stroka();
	mtime[0].innerHTML = stopwatch.displayMillisecond();
}

function handlerSplit(){
  	insertToTimerList(this);
}

function insertToTimerList (elem){
  if ((btnStart[0].innerHTML !== 'START') && (btnStart[0].innerHTML !== 'RESUME')){
    timerList[0].innerHTML += elem.innerText + ' '+ stopwatch.Stroka() + '.' + stopwatch.displayMillisecond()+'<br>';
  }
}