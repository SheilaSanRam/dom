const edad = document.querySelector('#edad');
const input = document.querySelector('#input');



/* Obtener el valor del input */
const readAge = () => {
    const mensaje = input.value >=18 ? 'Eres mayor de edad':'Eres menor de edad';
    edad.textContent = mensaje;
} 

