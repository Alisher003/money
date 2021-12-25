let elForm = document.querySelector(".form");
let elFormInput = document.querySelector(".form__input");
let elFormSelect = document.querySelector(".form__select");
let elResult = document.querySelector(".form__result")

let elUSD = 10786.75;
let elRUBL = 149.76;
let elEURO = 12895.46;
let elUZB;

elForm.addEventListener('submit', function(evt) {
    evt.preventDefault();

    let inputValue = elFormInput.value;
    let selectValue = elFormSelect.value;

    if(selectValue === "usd") {
        elUZB = inputValue * elUSD;
    } else if(selectValue === "rubl") {
        elUZB = inputValue * elRUBL;
    } else if(selectValue === "euro") {
        elUZB = inputValue * elEURO;
    }

    elResult.textContent = elUZB;

})