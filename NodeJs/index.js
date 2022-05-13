const questions = [
  "O que aprendi hoje?",
  "O que me deixou aborrecido? E o que eu poderia fazer para melhorar?",
  "O que me deixou feliz?",
  "Quantas pessoas ajudei hoje?",
];

const ask = (index = 0) => {
  process.stdout.write(questions[index] + "\n");
};

ask();

const answer = [];

process.stdin.on("data", (data) => {
  answer.push(data.toString().trim());
  if (answer.length < questions.length) {
    ask(answer.length);
  } else {
    console.log(answer);
    process.exit();
  }
});

process.on("exit", () => {
  console.log(`
    Fala Gustavo

    O que você aprendeu hoje foi:
    ${answer[0]}

    O que te aborreceu hoje foi:
    ${answer[1]}

    O que te deixou feliz hoje foi:
    ${answer[2]}

    Você ajudou ${answer[3]} pessoas hoje!

    Volte amanhã para novas reflexões
    `);
});
