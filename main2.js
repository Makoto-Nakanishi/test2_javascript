
   'use strict';
{   
    var time = 0;
    var timerLabel = document.getElementById('timerLabel');
    var startBtn = document.getElementById('startBtn');
    var stopBtn = document.getElementById('stopBtn');
    var resetBtn = document.getElementById('resetBtn');
    var id;  

    function start() {
        startBtn.disabled = true;
        time++;  

        var min = Math.floor(time/100/60)
        var sec = Math.floor(time/100);
        var mSec = time % 100;
        
        if (min < 10) min = '0' + min;
        if (sec >= 60) sec = sec % 60; 
        if (sec < 10) sec = '0' + sec; 
        if (mSec < 10) mSec = '0' + mSec;

        timerLabel.innerHTML = min + ':' + sec + ':' + mSec;
        id = setTimeout(start, 10);
    }

    function stop() {
        clearTimeout(id);
        startBtn.disabled = false;

    }

    function reset() {
        clearTimeout(id);
        time = 0;
        timerLabel.innerHTML = '00:00:00';
        startBtn.disabled= false;
    }

    startBtn.addEventListener('click', start, false); 
    stopBtn.addEventListener('click', stop, false); 
    resetBtn.addEventListener('click', reset, false); 
}