// NEET-OS Core Logic
document.addEventListener('DOMContentLoaded', () => {
    // 1. Initializing Variables from LocalStorage
    let studySeconds = parseInt(localStorage.getItem('studySeconds')) || 0;
    let isTimerRunning = false;
    let timerInterval;

    // Load Chapter Data (Example: 100 chapters structure)
    let chapters = JSON.parse(localStorage.getItem('neetChapters')) || 
                   Array.from({ length: 100 }, (_, i) => ({ id: i + 1, status: 'pending', progress: 0 }));

    // 2. Timer Logic
    const timerDisplay = document.getElementById('timer');
    const startBtn = document.getElementById('startBtn');
    const pauseBtn = document.getElementById('pauseBtn');

    function updateTimerDisplay() {
        const hrs = Math.floor(studySeconds / 3600);
        const mins = Math.floor((studySeconds % 3600) / 60);
        const secs = studySeconds % 60;
        timerDisplay.textContent = `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }

    window.startTimer = () => {
        if (!isTimerRunning) {
            isTimerRunning = true;
            startBtn.textContent = "Studying...";
            startBtn.classList.add('pulse');
            timerInterval = setInterval(() => {
                studySeconds++;
                updateTimerDisplay();
                if (studySeconds % 60 === 0) saveToStorage(); // Auto-save every minute
            }, 1000);
        }
    };

    window.pauseBtn = () => {
        isTimerRunning = false;
        clearInterval(timerInterval);
        startBtn.textContent = "Resume Session";
        startBtn.classList.remove('pulse');
        saveToStorage();
    };

    if(startBtn) startBtn.addEventListener('click', window.startTimer);
    if(pauseBtn) pauseBtn.addEventListener('click', window.pauseBtn);

    // 3. Target Checklist & Rest Logic
    const checkboxes = document.querySelectorAll('.checklist input[type="checkbox"]');
    const restMsg = document.getElementById('rest-msg');
    const restPopup = document.getElementById('rest-popup');

    checkboxes.forEach(box => {
        box.addEventListener('change', () => {
            const allChecked = Array.from(checkboxes).every(c => c.checked);
            if (allChecked) {
                restMsg.classList.remove('hidden');
                triggerRestTimer();
            }
        });
    });

    function triggerRestTimer() {
        restPopup.classList.remove('hidden');
        let timeLeft = 600; // 10 minutes
        const breakDisplay = document.getElementById('break-timer');
        
        const breakInterval = setInterval(() => {
            let m = Math.floor(timeLeft / 60);
            let s = timeLeft % 60;
            breakDisplay.textContent = `${m}:${s.toString().padStart(2, '0')}`;
            if (timeLeft <= 0) {
                clearInterval(breakInterval);
                restPopup.classList.add('hidden');
                alert("Break Over! Back to work, Doctor.");
            }
            timeLeft--;
        }, 1000);
    }

    // 4. Persistence (Storage)
    function saveToStorage() {
        localStorage.setItem('studySeconds', studySeconds);
        localStorage.setItem('neetChapters', JSON.stringify(chapters));
    }

    // 5. Health Tips (Random alerts)
    setInterval(() => {
        if (isTimerRunning) {
            const tips = ["Drink water!", "Stretch your back.", "Blink your eyes.", "Correct your posture."];
            const randomTip = tips[Math.floor(Math.random() * tips.length)];
            console.log(`%c Health Alert: ${randomTip}`, 'color: #38bdf8; font-weight: bold;');
        }
    }, 1800000); // Every 30 mins

    updateTimerDisplay();
});