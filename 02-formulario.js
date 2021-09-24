const nameTitle = document.querySelector('#name');
const input =  document.querySelector('#input');

/* Obtener el valor del input */
const writeName = () => {
    const inputValue = input.value;
    nameTitle.textContent = inputValue;
}