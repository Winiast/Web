const { EventEmitter } = require("events");
// Requirindo eventos

// Criando o objeto eventos
const ev = new EventEmitter();
// Escutando eventos
ev.on("Hello", () => {
  console.log("TO OUVINDO");
});

for (let i = 0; i < 5; i++) {
  console.log(i);
  if (i == 3) {
    // Gritando um evento para fora
    ev.emit("Hello");
  }
}
// Escuta o evento apenas 1 vez
// ev.once("Hello");
