let textArea = document.querySelector('.text-area');
let totalCounter = document.querySelector('.total-counter');
let remainingCounter = document.querySelector('.remaining-counter');

let maxCharacters = document.querySelector('.max-characters');

textArea.addEventListener('keyup', () => {
    UpdateCounter()
});
maxCharacters.addEventListener('keyup', () => {
    UpdateCounter()
});

function UpdateCounter() {
    totalCounter.innerHTML = textArea.value.length;
    remainingCounter.innerHTML = maxCharacters.value - textArea.value.length;
    textArea.maxLength = maxCharacters.value;
}