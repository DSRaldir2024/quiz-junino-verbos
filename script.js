const quiz = [
  {
    enunciado: "Qual a cor do cavalo branco de Napoleão?",
    alternativas: ["Verde", "Azul", "Branco"],
    correta: "c"
  },
  {
    enunciado: "Complete: Quem descobriu o Brasil? Pedro Álvares Ca...",
    alternativas: ["bral", "brel", "bril"],
    correta: "a"
  },
  {
    enunciado: "Assinale a alternativa com a concordância verbal correta:",
    alternativas: [
      "Os aluno chegou atrasados.",
      "As meninas foi embora cedo.",
      "As crianças brincaram no parque."
    ],
    correta: "c"
  },
  {
    enunciado: "Qual frase está no tempo verbal futuro do presente?",
    alternativas: [
      "Eu comi a sobremesa.",
      "Nós viajaremos em julho.",
      "Eles estavam estudando."
    ],
    correta: "b"
  },
  {
    enunciado: "Escolha a alternativa com erro de concordância:",
    alternativas: [
      "As estrelas brilham no céu.",
      "O cachorro latem toda noite.",
      "As meninas dançaram quadrilha."
    ],
    correta: "b"
  },
  {
    enunciado: "Em qual frase o verbo está no tempo presente?",
    alternativas: [
      "Eles estudaram para a prova.",
      "Eu estudo todos os dias.",
      "Nós viajaremos amanhã."
    ],
    correta: "b"
  },
  {
    enunciado: "Qual das frases está correta quanto à concordância verbal?",
    alternativas: [
      "Os meninos correu na rua.",
      "Você sabiam da novidade?",
      "As crianças gostam de doce."
    ],
    correta: "c"
  }
];

const letras = ["a", "b", "c"];
const quizContainer = document.getElementById('quiz-container');

quiz.forEach((questao, index) => {
  const div = document.createElement("div");
  div.classList.add("question");

  let html = `<p><strong>${index + 1}. ${questao.enunciado}</strong></p><div class="options">`;
  questao.alternativas.forEach((alt, i) => {
    html += `
      <label>
        <input type="radio" name="q${index}" value="${letras[i]}" />
        ${letras[i]}) ${alt}
      </label>
    `;
  });
  html += `</div>`;
  div.innerHTML = html;
  quizContainer.appendChild(div);
});

function enviarRespostas() {
  let acertos = 0;
  quiz.forEach((questao, index) => {
    const resposta = document.querySelector(`input[name="q${index}"]:checked`);
    if (resposta && resposta.value === questao.correta) {
      acertos++;
    }
  });

  const porcentagem = (acertos / quiz.length) * 100;
  document.getElementById("resultado").innerText =
    `Você acertou ${acertos} de ${quiz.length} questões. Isso dá ${porcentagem.toFixed(1)}% de acerto! 🌽🎯`;
}
