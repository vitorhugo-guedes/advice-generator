import { getAdvice } from "./api.js";

const adviceEl = document.querySelector('#advice');
const adviceIdEl = document.querySelector('#adviceID');
const diceBtn = document.querySelector('#diceBtn');

diceBtn.addEventListener('click', displayAdvice);

async function displayAdvice(){
    const { slip } = await getAdvice();
    
    adviceEl.textContent = slip.advice;
    adviceIdEl.textContent = slip.id;
    disableBtn();
}
displayAdvice();

function disableBtn(){
    diceBtn.disabled = true;
    diceBtn.classList.add('dice-btn__disabled');

    setTimeout(()=>{
        diceBtn.disabled = false;
        diceBtn.classList.remove('dice-btn__disabled');
    }, 2100)
}