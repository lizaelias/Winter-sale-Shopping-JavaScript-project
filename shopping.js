function getTextElementById(elementId) {
    const textElementField = document.getElementById(elementId);
    const textElementFieldString = textElementField.innerText;
    const textElementValue = parseFloat(textElementFieldString);
    return textElementValue;
}

let sum = 0;

function addToCalculationEntry(typeName, value) {
    const textElement = document.getElementById('entry-list');
    const count = textElement.childElementCount;

    const p = document.createElement('p');

    p.innerHTML = `${count + 1}. ${typeName}`;

    sum = sum + value;
    const totalPrice = document.getElementById('total-price');

    totalPrice.innerText = sum;

    if (sum > 0) {
        const buyButton = document.getElementById('buy-button');
        buyButton.removeAttribute('disabled');
    }

    textElement.appendChild(p);
}

function discount() {
    const totalDiscount = sum * 0.50;
    document.getElementById('discount-id').innerText = totalDiscount.toFixed(2);

    const totalAmount = Math.max(0, sum - totalDiscount); // Avoid negative total amounts
    document.getElementById('total-price-in-producet').innerText = totalAmount.toFixed(2);
}

document.getElementById('Apply-btn').addEventListener('click', function (event) {
    const button = document.getElementById('buy-button');
    const code = document.getElementById('input-value').value;

    if (sum >= 500 && (code === 'SELL500'||code ==='sell500')) {
        button.removeAttribute('disabled');
    } else {
        button.setAttribute('disabled', true);
    }
});

document.getElementById('home').addEventListener('click', function () {
    location.reload();
});






function cardOne() {
    const totalPrice = getTextElementById('car-price-one');
    addToCalculationEntry('Olay Regenerist', totalPrice);
}

function cardTow() {
    const totalPrice = getTextElementById('car-price-tow'); // Corrected parameter name
    addToCalculationEntry('Neutrogena', totalPrice);
}

function cardThree() {
    const totalPrice = getTextElementById('car-price-three');
    addToCalculationEntry('Himalaya', totalPrice);
}

function cardFor() {
    const totalPrice = getTextElementById('car-price-for');
    addToCalculationEntry('Vince', totalPrice);
}

function cardFive() {
    const totalPrice = getTextElementById('car-price-five');
    addToCalculationEntry('glow lovely', totalPrice);
}

function cardsix() { // Corrected function name
    const totalPrice = getTextElementById('car-price-six');
    addToCalculationEntry('Garnier Man', totalPrice);
}
