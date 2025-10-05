const questions = [
  {
    question: "Qual seu objetivo principal com nossos produtos?",
    answers: [
      { text: "Hidratação intensa", product: "Creme Hidratante Revitalizante" },
      { text: "Perfume delicado e duradouro", product: "Perfume em Creme de Rosas Brancas" },
      { text: "Cuidado capilar profundo", product: "Máscara Capilar Nutritiva" },
      { text: "Alívio e refrescância", product: "Creme para os Pés de Rosas e Alecrim" }
    ]
  },
  {
    question: "Qual aroma você prefere?",
    answers: [
      { text: "Floral suave", product: "Perfume em Creme de Rosas Brancas" },
      { text: "Ervas refrescantes", product: "Creme para os Pés de Rosas e Alecrim" },
      { text: "Neutro ou leve", product: "Creme Hidratante Revitalizante "Doce e nutritivo", product: "Máscara Capilar Nutritiva" }
    ]
  },
  {
    question: "Qual tipo de cuidado você mais valoriza?",
    answers: [
      { text: "Pele hidratada e radiante", product: "Creme Hidratante Revitalizante" },
      { text: "Perfume exclusivo", product: "Perfume em Creme de Rosas Brancas" },
      { text: "Relaxamento dos pés", product: "Creme para os Pés de Rosas e Alecrim" },
    ]
  }
];

let currentQuestionIndex = 0;
let scores = {};

const questionEl = document.getElementById('question');
const answersEl = document.getElementById('answers');
const nextBtn = document.getElementById('next-btn');
const resultEl = document.getElementById('result');

function showQuestion(){
  nextBtn.style.display = 'none';
  resultEl.innerHTML = '';
  const q = questions[currentQuestionIndex];
  questionEl.textContent = q.question;
  answersEl.innerHTML = '';
  q.answers.forEach(answer=>{
    const btn = document.createElement('button');
    btn.textContent = answer.text;
    btn.classList.add('answer-btn');
    btn.addEventListener('click',()=>{
      selectAnswer(answer.product);
    });
    answersEl.appendChild(btn);
  });
}

function selectAnswer(product){
  scores[product] = scores[product] ? scores[product]+1 : 1;
  nextBtn.style.display = 'inline-block';
}

nextBtn.addEventListener('click',()=>{
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){
    showQuestion();
  } else {
    showResult();
  }
});

function showResult(){
  let maxScore = 0;
  let bestProduct = '';
  for(const product in scores){
    if(scores[product] > maxScore){
      maxScore = scores[product];
      bestProduct = product;
    }
  }
  questionEl.style.display = 'none';
  answersEl.style.display = 'none';
  nextBtn.style.display = 'none';
  resultEl.innerHTML = `🎉 O produto ideal para você é: <strong>${bestProduct}</strong>!`;
}

// Inicializa
showQuestion();
