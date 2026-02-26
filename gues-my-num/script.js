'use strict';
const num = document.querySelector('.number');
const check = document.querySelector('.check');
let number = Math.trunc(Math.random() * 20) + 1;
const score = document.querySelector('.score');
const msg = document.querySelector('.message');
let cnt = 20;
let highscore = 0;
const displaymsg = function (message) {
  msg.textContent = message;
};
//cheking the guess
check.addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  //guess is empty
  if (!guess) {
    msg.textContent = 'No insput';
  }
  //guess is correct
  else if (guess == number) {
    displaymsg('Correct Number');
    document.body.style.backgroundColor = 'green';
    document.querySelector('.title').textContent = 'Your Win';
    if (cnt > highscore) {
      highscore = cnt;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  // guess is wrong
  else if (guess !== number) {
    //cheking the attempts
    if (cnt > 0) {
      //your near to it
      if (guess <= number + 3 && guess >= number - 3) {
        displaymsg('your near to it');
        cnt--;
        score.textContent = cnt;
      }
      //it too low
      else if (guess < number) {
        displaymsg('its too low');
        cnt--;
        score.textContent = cnt;
      }
      //its too high
      else if (guess > number) {
        displaymsg('its too high');
        cnt--;
        score.textContent = cnt;
      }
    }
    //out of chances
    else {
      msg.textContent = 'your out of your chances';
      document.body.style.backgroundColor = 'red';
      document.querySelector('.title').textContent = 'Game Over';
    }
  }
});
//click again
document.querySelector('.again').addEventListener('click', () => {
  cnt = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  num.textContent = '?';
  document.querySelector('.guess').value = '';
  score.textContent = cnt;
  msg.textContent = 'Start Guessing...';
  document.body.style.backgroundColor = '#222';
});
