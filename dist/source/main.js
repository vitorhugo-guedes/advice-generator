import { getAdvice } from "./api.js";

const adviceEl = document.querySelector('#advice');
const adviceIdEl = document.querySelector('#adviceID');
const diceBtn = document.querySelector('#diceBtn');


diceBtn.addEventListener('click', async ()=>{
    const { slip } = await getAdvice();

    adviceEl.innerHTML = slip.advice;
    adviceIdEl.innerHTML = slip.id;
})
