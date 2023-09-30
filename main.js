let stopwatchInterval;
let isRunning = false;
let startTime;
let lapCount = 1;

function startStop() {
  const startStopButton = document.getElementById('startStop');
  if (!isRunning) {
    startTime = new Date().getTime();
    stopwatchInterval = setInterval(updateDisplay, 1000);
    startStopButton.innerHTML = 'Stop';
  } else {
    clearInterval(stopwatchInterval);
    startStopButton.innerHTML = 'Start';
  }
  isRunning = !isRunning;
}

function updateDisplay() {
  const currentTime = new Date().getTime();
  const elapsedTime = currentTime - startTime;
  const formattedTime = formatTime(elapsedTime);
  document.getElementById('display').innerHTML = formattedTime;
}

function formatTime(milliseconds) {
  const date = new Date(milliseconds);
  const hours = date.getUTCHours().toString().padStart(2, '0');
  const minutes = date.getUTCMinutes().toString().padStart(2, '0');
  const seconds = date.getUTCSeconds().toString().padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}

function lap() {
  const lapsList = document.getElementById('laps');
  const lapTime = document.getElementById('display').innerHTML;
  const lapItem = document.createElement('li');
  lapItem.innerText = `Lap ${lapCount}: ${lapTime}`;
  lapsList.appendChild(lapItem);
  lapCount++;
}

function reset() {
  clearInterval(stopwatchInterval);
  isRunning = false;
  document.getElementById('startStop').innerHTML = 'Start';
  document.getElementById('display').innerHTML = '00:00:00';
  const lapsList = document.getElementById('laps');
  lapsList.innerHTML = '';
  lapCount = 1;
}