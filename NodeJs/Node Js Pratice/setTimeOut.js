const timeOut = 2000;

// let finish = () => {
//   console.log("Done!");
// };
// // Seta um tempo para executar uma função setTimeout(função, tempo para aguardar);

// let time = setTimeout(finish, timeOut);

// // Cancela o Timeout da aplicação que estiver dentro dos parenteses/ clearTimeOut(Timeout que será cancelado);

// clearTimeout(time);

// clearInterval(time);

// Explorando conceito, temos um intervalo de 2 segundos que verifica o estado do servidor, e após 8 segundo trocamos o valor
// assim fazendo com que o servidor "caia", usando conceitos do setInterval(função, tempo) e setTimeOut(função, tempo)

let i = 0;

const checking = () => {
  if (i == 0) {
    console.log("It's Ok");
  } else {
    console.log("Server drop");
  }
};

setInterval(checking, timeOut);

setTimeout(() => {
  i = 3;
}, 8000);
