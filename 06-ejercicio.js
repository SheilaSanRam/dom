/* Colocar una lista en el documento HTML,
    colocar un boton que diga agregar elemento.
    Cada ves que le den clic al boton debe agregar un elemento
    a la lista.
 */

const lista = document.querySelector('#lista');
const input = document.querySelector('#input');
const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    const elemento = input.value;
    const listaElemento=document.createElement('li');
    listaElemento.textContent=elemento;
    lista.appendChild(listaElemento);
});
