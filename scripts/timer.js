// Timer functionality
let timerInterval;
const timerDisplay = document.getElementById('timerDisplay');
const timerBtn = document.getElementById('timerBtn');
let initialTime = 5 * 60; // Default to 5 minutes
let timeLeft = initialTime;

// Pomodoro Counter
let pomodoroCounter = document.getElementById('pomodoroCounter');

function updateTimerDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
    timerBtn.textContent = 'Start Timer';
    updateTimerDisplay();
    return;
  }

  timerBtn.textContent = 'Pause Timer';
  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      timerInterval = null;
      timerBtn.textContent = 'Start Timer';
      new Notification('Timer Complete', { body: 'Your Pomodoro has finished!' });
      timeLeft = initialTime;
      updateTimerDisplay();

      pomodoroCounter.textContent = parseInt(pomodoroCounter.textContent) + 1;

      if (parseInt(pomodoroCounter.textContent) % 4 === 0) {
        const takeLongBreak = confirm("You've completed 4 Pomodoros! Would you like to take a longer break?");
        if (takeLongBreak) {
          initialTime = 15 * 60; // Set longer break time, e.g., 15 minutes
          timeLeft = initialTime;
          updateTimerDisplay();
        }
      }
    }
  }, 1000);
}

timerBtn.addEventListener('click', startTimer);

// Set up duration buttons
document.querySelectorAll('.durationBtn').forEach(button => {
  button.addEventListener('click', () => {
    initialTime = parseInt(button.getAttribute('data-time')) * 60;
    timeLeft = initialTime;
    updateTimerDisplay();
  });
});
