// Functions sem nomes
const sum = function (number01, number02) {
  console.log(number01 + number02);
};

sum(5, 9);
// Escopos
let subject = "teste";

function createThink(subject) {
  subject = "study";
  return subject;
}

console.log(createThink(subject));
console.log(subject);

// hoisting

sayMyName();

function sayMyName() {
  console.log("Gustavo");
}

// arrow function

const sayName = (name) => {};

//callback function

const sayNamew = (nome) => {
  console.log("antes da callback");
  nome();
  console.log("depois da callback");
};

sayNamew(() => {
  console.log("estou em uma callback");
});
