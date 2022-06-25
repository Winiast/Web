const button = document.querySelector(".light");
const midPage = document.querySelector(".elements-mid");
const h2 = document.querySelector("h2");
const footerPage = document.querySelector(".footer");

let colorChange = ["white", "rgba(3, 0, 0, 0.98)"];
let i = 0;

button.addEventListener("click", () => {
  console.log("teste");
  if (i == 0) {
    i++;
    midPage.style.backgroundColor = colorChange[i];
    footerPage.style.backgroundColor = colorChange[i];
    midPage.style.color = colorChange[i - 1];
    footerPage.style.color = colorChange[i - 1];
  } else {
    i = 0;
    midPage.style.backgroundColor = colorChange[i];
    footerPage.style.backgroundColor = colorChange[i];
    midPage.style.color = colorChange[i + 1];
    footerPage.style.color = colorChange[i + 1];
  }
});
