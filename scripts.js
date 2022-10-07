//Javasacript

const passwordBoxes = document.querySelectorAll('input[type=password]');
console.log(passwordBoxes.item(1));


passwordBoxes.forEach((selectedBox) => {
    selectedBox.addEventListener('keyup', () =>{
        if ((passwordBoxes.item(0).value == passwordBoxes.item(1).value) && (passwordBoxes.item(0).value)) {
            passwordBoxes.item(0).setCustomValidity('');
            passwordBoxes.item(1).setCustomValidity('');
        } else {
            passwordBoxes.item(0).setCustomValidity('Passwords Do Not Match');
            passwordBoxes.item(1).setCustomValidity('Passwords Do Not Match');
        }
    })
});

const submitButton = document.querySelector('button');
const invalidInputs = document.querySelectorAll('input:invalid');
