const generateRandomNumber = () => {
    return Math.floor(Math.random() * (6 - 1 + 1)) + 1;
}

const render = (e, use2Dice) => {
    e.preventDefault();
    
    if (use2Dice) {
        const number1 = generateRandomNumber();
        const number2 = generateRandomNumber();
        
        const imageDice1 = document.querySelector('#image-dice1');
        const imageDice2 = document.querySelector('#image-dice2');
        imageDice1.setAttribute('src', `./${number1}.svg`);
        imageDice1.setAttribute('alt', `dice number ${number1}`);
        imageDice2.setAttribute('src', `./${number2}.svg`);
        imageDice2.setAttribute('alt', `dice number ${number2}`);
        imageDice2.style.display = 'inline';
        
        const total = document.querySelector('#total');
        total.textContent = number1 + number2;
    } else {
        const imageDice2 = document.querySelector('#image-dice2');
        imageDice2.style.display = 'none';
        const number = generateRandomNumber();

        const imageDice1 = document.querySelector('#image-dice1');
        imageDice1.setAttribute('src', `./${number}.svg`);
        imageDice1.setAttribute('alt', `dice number ${number}`);
        const total = document.querySelector('#total');
        total.textContent = number;
    }
}

window.addEventListener('DOMContentLoaded', render);

const btnRoll = document.querySelector('#btn-roll');
const checkbox = document.querySelector('#switch');

checkbox.addEventListener('change', (e) => {
    const use2Dice = checkbox.checked;
    render(e, use2Dice);
});

btnRoll.addEventListener('click', (e) => {
    const use2Dice = checkbox.checked;
    render(e, use2Dice);
});