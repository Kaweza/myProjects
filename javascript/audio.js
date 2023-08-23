const backgroundAudio = document.getElementById("background-audio");

// Play the audio when the page loads
document.addEventListener("DOMContentLoaded", function () {
    backgroundAudio.play();
});

// Pause the audio when the user navigates away from the page
window.addEventListener("beforeunload", function () {
    backgroundAudio.pause();
});
