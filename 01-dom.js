
/* document.write('Hola desde JavaScript'); */

/* Busca dentro del html todos los elementos que tienen esa etiqueta 
Devuelve un arreglo */

/* const title = document.getElementsByTagName('h1');
title[0].innerHTML='Título cambiado desde JavaScript';

console.log(title);

/* Accede a un elemento único por el ID */
/* const texto = document.getElementById('text');
texto.innerHTML = 'Este texto está escrito desde JavaScript';

/* Se puede modificar el estilo */

/* texto.style.background='blue';
texto.style.color= 'white';

console.log(texto);
 */

/* Obtiene un elemento por id  */
document.getElementById
/* Obtiene todos los elementos de una clase y los devulve en un arreglo  */
document.getElementsByClassName
/* Obtiene todos los elementos por nombre y los devuelve en un arreglo */
document.getElementsByName



const texto= document.querySelector('#text');
texto.textContent='Estoy escribiendo desde el JavaScript';


/*  Crear elemen tos html*/

const div=document.createElement('div');
const body= document.querySelector('body');

body.append(div);