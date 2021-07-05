//import './sass/main.scss';

const colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];
let intervalId = null;
let isStarted = false;

const refs = {
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
};

refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);

function onStartBtnClick() {
  if (isStarted) {
    return;
  }
  intervalId = setInterval(setRandomColor, 1000);
  isStarted = true;
  updateStartBtnStatus();
}

function onStopBtnClick() {
  clearInterval(intervalId);
  isStarted = false;
  updateStartBtnStatus();
}

function updateStartBtnStatus() {
  refs.startBtn.disabled = isStarted;
}

function setRandomColor() {
  document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
