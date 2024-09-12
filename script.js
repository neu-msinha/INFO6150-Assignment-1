// Scroll Animation
window.addEventListener('scroll', function() {
    document.querySelectorAll('section').forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            section.classList.add('scroll-visible');
        }
    });
});

// Audio Control Popup
const audioControlButton = document.getElementById('audio-control-button');
const audioPopup = document.getElementById('audio-popup');
const closePopupButton = document.getElementById('close-popup');
const backgroundAudio = document.getElementById('background-audio');
const muteUnmuteButton = document.getElementById('mute-unmute');
const playPauseButton = document.getElementById('play-pause');
const volumeControl = document.getElementById('volume-control');

audioControlButton.addEventListener('click', () => {
    audioPopup.style.display = 'block';
});

closePopupButton.addEventListener('click', () => {
    audioPopup.style.display = 'none';
});

muteUnmuteButton.addEventListener('click', () => {
    if (backgroundAudio.muted) {
        backgroundAudio.muted = false;
        muteUnmuteButton.textContent = 'Mute';
    } else {
        backgroundAudio.muted = true;
        muteUnmuteButton.textContent = 'Unmute';
    }
});

playPauseButton.addEventListener('click', () => {
    if (backgroundAudio.paused) {
        backgroundAudio.play();
    } else {
        backgroundAudio.pause();
    }
});

volumeControl.addEventListener('input', () => {
    backgroundAudio.volume = volumeControl.value;
});

// Initialize volume
volumeControl.value = backgroundAudio.volume;

// Handle clicks on dropdown items
document.querySelectorAll('.dropdown-content a').forEach(item => {
    item.addEventListener('click', () => {
        const toggle = document.getElementById('dropdown-toggle');
        toggle.checked = false; // Close the dropdown when a place is selected
    });
});

