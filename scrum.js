document.addEventListener("DOMContentLoaded", function() {
    const wrapper = document.querySelector(".wrapper");
    const generateBtn = document.getElementById("generateBtn");
    const qrImg = document.getElementById("qrImage");
    const courseSelect = document.getElementById("courseSelect");
    const timerElement = document.getElementById('timer');
    let preValue;
    let timer;

    generateBtn.addEventListener("click", () => {
        let qrValue = courseSelect.value.trim();
        if (!qrValue || preValue === qrValue) return;
        preValue = qrValue;
        generateBtn.innerText = "Generating QR Code...";
        QRCode.toDataURL(qrValue, { width: 200, height: 200 }, (err, url) => {
            if (err) return console.error(err);
            qrImg.src = url;
            wrapper.classList.add("active");
            generateBtn.innerText = "Generate QR Code";
            startTimer(30); // Start the timer when QR code is generated
        });
        // Clear any existing timer
    });

    function startTimer(duration) {
        let time = duration;
        updateTimeDisplay(time); // Update timer display immediately when starting
        timer = setInterval(function () {
            time--;
            updateTimeDisplay(time); // Update timer display every second
            if (time <= 0) {
                clearInterval(timer); // Stop the timer when it reaches 00:00
                timerElement.textContent = "00:00";
                wrapper.classList.remove("active");
                qrImg.src = ""; // Clear the QR code image after timer expires
            }
        }, 1000);
    }

    function updateTimeDisplay(time) {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
        timerElement.textContent = `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    }
});
