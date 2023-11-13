document.addEventListener('DOMContentLoaded', function () {

    const muteButton = document.getElementById('muteButton');
    const audio = document.getElementById('audio');


    muteButton.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            muteButton.textContent = 'Mute';
        } else {
            audio.pause();
            muteButton.textContent = 'Play';
        }
    });
    
});