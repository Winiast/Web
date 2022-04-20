function Conceitos(nota) {
  if (nota >= 90) {
    console.log("Conceito A");
  } else if (nota >= 80 && nota < 89) {
    console.log("Conceio B");
  } else if (nota >= 70 && nota < 79) {
    console.log("Conceio C");
  } else if (nota >= 60 && nota < 69) {
    console.log("Conceio D");
  } else {
    console.log("Conceio F");
  }
}

Conceitos(75);
