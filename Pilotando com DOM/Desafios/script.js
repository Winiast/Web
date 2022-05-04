const openModalButton = document.getElementById("openModal");

const janela = document.querySelector(".modal-wrapper");

function executarBotao() {
  janela.classList.remove("invisible");
}

document.addEventListener("keydown", function (event) {
  const isEscKey = event.key === "Escape";
  if (isEscKey == true) {
    janela.classList.add("invisible");
  }
});
