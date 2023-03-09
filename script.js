// for (let index = 0; index < 10; index++) {
//     console.log(getPin());

// }


function getPin() {
    const pin = genaratePin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    } else {
        //console.log('pin not 4 digit found');
        return getPin();
    }
}

function genaratePin() {
    const random = Math.round(Math.random() * 10000);
    return random;
}

document.getElementById('Generate Pin').addEventListener('click', function() {
    const pin = getPin();
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
})
document.getElementById('calculator').addEventListener('click', function(event) {
    let number = event.target.innerText
    const typedNumbers = document.getElementById('typed-numbers');
    const previousTypedNumber = typedNumbers.value



    if (isNaN(number)) {
        if (number === 'C') {
            typedNumbers.value = ''
        } else if (number === '<') {
            const digits = previousTypedNumber.split('')
            digits.pop();
            const remaingDigit = digits.join('');
            typedNumbers.value = remaingDigit
        }

    } else {
        const newTypedNumber = previousTypedNumber + number;
        typedNumbers.value = newTypedNumber

    }
})
document.getElementById('verify').addEventListener('click', function() {
    const displayPinField = document.getElementById('display-pin')
    const currentField = displayPinField.value

    const typedNumbers = document.getElementById('typed-numbers');
    const previousTypedNumber = typedNumbers.value

    displayPinField.value = '';
    typedNumbers.value = '';


    const pinSucces = document.getElementById('pin-Succes');
    const pinFail = document.getElementById('pin-failed');
    const pinEmpty = document.getElementById('pin-empty');

    if (currentField === '') {
        console.log(pinSucces);
        pinEmpty.style.display = 'block';
        pinSucces.style.display = 'none';
        pinFail.style.display = 'none';
        alert('Please input number');

    } else if (currentField === previousTypedNumber) {
        console.log(pinSucces);
        pinSucces.style.display = 'block';
        pinFail.style.display = 'none';
        pinEmpty.style.display = 'none';
        alert("✅ Pin Matched... Secret door is opening for you");
    } else {
        console.log(pinSucces);
        pinFail.style.display = 'block';
        pinSucces.style.display = 'none';
        pinEmpty.style.display = 'none';
        alert("❌ Pin Didn't Match, Please try again");

    }


})