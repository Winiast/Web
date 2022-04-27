function print() {
  return bomDia();
}

function bomDia() {
  let h1 = document.createElement("h1");
  h1.innerText = "Bom dia Usuario";

  let body = document.querySelector("body");
  let header = document.querySelector("header");
  body.insertBefore(h1, header);
}
