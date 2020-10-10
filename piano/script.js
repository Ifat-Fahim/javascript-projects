//Selectors
const piano = document.querySelector('.piano');
const whiteKeys = document.querySelectorAll('.white');
const blackKeys = document.querySelectorAll('.black');
const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j'];

//Event listeners
piano.addEventListener('click', (e) => {
    playNote(e.target);
})

//Making it keyboard focusable

document.addEventListener('keypress', (e) => {
    if(e.repeat) return;
    const key = e.key;
    const whiteKeyIndex = WHITE_KEYS.indexOf(key);
    const blackKeyIndex = BLACK_KEYS.indexOf(key);
    if(whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex]);
    if(blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex]);
})

//functions
function playNote(key) {
    const dataKey = key.dataset.key;
    const note = document.getElementById(dataKey);
    note.currentTime = 0;
    note.play();
    key.classList.add('active');
    note.addEventListener('ended', () => {
        key.classList.remove('active');
    })
}
