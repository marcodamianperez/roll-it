const generateRandomNumber = () => {
    return Math.floor(Math.random() * (6 - 1 + 1)) + 1;
}

const render = () => {

    const number = generateRandomNumber();

    const diceContainer = document.querySelector('#dice-container');
    diceContainer.innerHTML = `
    <img src="./img/${number}.svg" alt="dice number ${number}">
    <figcaption>Total: ${number}</figcaption>
    `;
}

const btnRoll = document.querySelector('#btn-roll');

btnRoll.addEventListener('click', render);
window.addEventListener('DOMContentLoaded', render);