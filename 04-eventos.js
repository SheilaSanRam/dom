/* El signo $ hace referencia a un elemento de html */

const $btn=document.querySelector('#btn');

/* Los parámetros son el evento, la función anónima; mouseover reconoce cada vez que el mouse pasa sobre un elemento */
$btn.addEventListener('click',()=>{
    /* console.log('Me presionaste'); */
    const boton2=document.createElement('BUTTON');
    boton2.innerHTML='Este es el nuevo botón';
    const body= document.querySelector('body');
    body.append(boton2);
});

const $inpText=document.querySelector('#text');

/* Los parámetros son el evento, la función anónima 
solo detecta que se están presionando las teclas*/
    /* $inpText.addEventListener('keydown',()=>{
        console.log('Escribiste algo');
    }); */

/* Aquí se registra qué tecla se presionó */
    /* $inpText.addEventListener('keydown',(e)=>{
        console.log(e);
    });
    */

/* Aquí se va "juntando" el texto que el usuario ingresó */
$inpText.addEventListener('keyup',(e)=>{
    console.log(e.target.value);
});
