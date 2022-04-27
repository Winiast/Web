// parentElement e parentNode, conseguimos pegar o elemento pai do query selecionado

// let variaveis = document.querySelector("body");

// console.log(variaveis.parentElement);

// childNode pegando elementos filhos dos query

// let variaveis = document.querySelector("body");

// console.log(variaveis.childNode);

// children

//firstChild firstElementChild

//lastChild lastElementChild

// Navegando pelos elementos irmaos

// let va = document.querySelector("h1");

// console.log(va.nextElementSibling);

// console.log(va.nextSibling);

// Criando um elemento HTML através do Javascript

let div = document.createElement("div");
div.innerText = "Olá devs";

let body = document.querySelector("body");
//preprend and append

body.prepend(div);

let script = document.querySelector("script");
// insertBefore
body.insertBefore(div, script);
