// Everyday javascript like document.getElementByid, console.log, ra ra ra
import { convertToMorse, convertToEnglish } from './translate.js';

const morseCodeInput = document.getElementById('morseCodeInput');
const englishWord = document.getElementById('englishWord');
const morseOutput = document.getElementById('morseOutput');
const englishOutput = document.getElementById('englishOutput'); 

document.getElementById('translateEnglish').addEventListener("click", (event) => {
    morseOutput.value = convertToMorse(englishWord.value);
})

document.getElementById('translateMorse').addEventListener("click", (event) => {
    englishOutput.value = convertToEnglish(morseCodeInput.value);
})

