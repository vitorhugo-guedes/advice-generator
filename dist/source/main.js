import { getAdvice } from "./api.js";

const adviceEl = document.querySelector('#advice');
const adviceIdEl = document.querySelector('#adviceID');
const diceBtn = document.querySelector('#diceBtn');


diceBtn.addEventListener('click', displayAdvice);

async function displayAdvice(){
    const { slip } = await getAdvice();
    
    adviceEl.textContent = slip.advice;
    adviceIdEl.textContent = slip.id;
    // disableBtn();
}
displayAdvice();

function disableBtn(){
    setTimeout(()=>{
        diceBtn.disabled = true;
    }, 2000)
}