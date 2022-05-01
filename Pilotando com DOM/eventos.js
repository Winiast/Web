// function print() {
//   return bomDia();
// }

// function bomDia() {
//   let h1 = document.createElement("h1");
//   h1.innerText = "Bom dia Usuario";

//   let body = document.querySelector("body");
//   let header = document.querySelector("header");
//   body.insertBefore(h1, header);
// }

// const input = document.querySelector("input");
// // onkeydown = ao apertar a tecla já aciona
// // onkeyup = só aciona ao soltar a tecla
// input.onkeydown = () => {
//   console.log("Ola");
// };

// input.onkeyup = () => {
//   console.log("ate");
// };

const h2 = document.querySelector("h2");

h2.addEventListener("click", () => {
  console.log("teste");
});
