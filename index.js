let timerr = document.getElementById("time");
timerr.innerHTML = `00:00:00`;

var miliseconds = 0;
var seconds = 0;
var minutes = 0;
var timerId;
let count = 0;
var start = document.getElementById("start");
var lap = document.getElementById("lap");
let lapList = document.getElementById("lap-list");

function startTimer(){
  timerId = setInterval(clock, 10);
}

function clock(){
  miliseconds++;

  if(miliseconds / 60 == 1){
    miliseconds = 0;
    seconds++;
  }

  if(seconds / 60 == 1){
    seconds = 0;
    minutes++;
  }

  timerr.innerHTML = (minutes > 9 ? minutes : "0" + minutes) + ":" + (seconds > 9 ? seconds : "0" + seconds) + ":" + (miliseconds > 9 ? miliseconds : "0" + miliseconds);

  start.innerHTML = `Stop`;
  start.onclick = stopTimer;
  start.classList.remove("black");
  start.classList.add("red");

  lap.innerHTML = `Lap`;
}

function stopTimer(){
  clearInterval(timerId);
  start.innerHTML = `Start`;
  start.onclick = startTimer;
  start.classList.remove("red");
  start.classList.add("black");

  lap.innerHTML = `Reset`;
  lap.onclick = resetTimer;
}

function resetTimer(){
  clearInterval(timerId);
  timerr.innerHTML = `00:00:00`;
  miliseconds = 0;
  seconds = 0;
  minutes = 0;

  lap.innerHTML = `Lap`;

  lapList.innerHTML = "";

}

function lapTime(){
  let initTime = (minutes > 9 ? minutes : "0" + minutes) + ":" + (seconds > 9 ? seconds : "0" + seconds) + ":" + (miliseconds > 9 ? miliseconds : "0" + miliseconds);
  count++;
  lapList.innerHTML += `
  <li><div>Lap ${count}</div><div>  ${initTime}</div></li>
  `
}