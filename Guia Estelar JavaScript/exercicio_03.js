function transform(degree) {
  const VerF = degree.toUpperCase().includes("F");
  const VerC = degree.toUpperCase().includes("C");

  if (!VerC && !VerF) {
    throw new Error("Grau não encontrado");
  }

  if (VerF) {
    let NumberValue = Number(degree.toUpperCase().replace("F", ""));
    let TranformCelsius = (NumberValue - 32) * (5 / 9);
    let ViewCelsius = String(TranformCelsius + "C");
    console.log(ViewCelsius);
  } else if (VerC) {
    let NumberCelsiusValue = Number(degree.toUpperCase().replace("C", ""));
    let TransformFahrenheit = (NumberCelsiusValue * 9) / 5 + 32;
    let ViewsFahrenheit = String(TransformFahrenheit + "F");
    console.log(ViewsFahrenheit);
  }
}

try {
  transform("20C");
} catch (error) {
  console.log(error.message);
}
