// Full question bank
const questionBank = [
    { q: "Find the odd one out: Apple, Banana, Carrot, Mango", options: ["Apple", "Banana", "Carrot", "Mango"], answer: "Carrot" },
    { q: "Complete the series: 2, 4, 8, 16, ?", options: ["18", "20", "32", "24"], answer: "32" },
    { q: "Find the missing number: 5, 10, 15, ?, 25", options: ["18", "20", "22", "24"], answer: "20" },
    { q: "Which one is a non-living thing?", options: ["Dog", "Tree", "Rock", "Bird"], answer: "Rock" },
    { q: "Find the analogy: Book : Reading :: Knife : ?", options: ["Cutting", "Eating", "Writing", "Cooking"], answer: "Cutting" },
    { q: "Arrange in alphabetical order: Zebra, Apple, Mango, Ball", options: ["Zebra, Apple, Mango, Ball", "Apple, Ball, Mango, Zebra", "Mango, Ball, Apple, Zebra", "Ball, Zebra, Apple, Mango"], answer: "Apple, Ball, Mango, Zebra" },
    { q: "Find the odd one out: Monday, Wednesday, Friday, June", options: ["Monday", "Wednesday", "Friday", "June"], answer: "June" },
    { q: "Complete the series: 1, 1, 2, 3, 5, ?", options: ["6", "7", "8", "13"], answer: "8" },
    { q: "Find the missing number: 7, 14, 21, ?, 35", options: ["25", "28", "30", "32"], answer: "28" },
    { q: "Which is the heaviest?", options: ["1kg Cotton", "1kg Iron", "1kg Water", "1kg Sand"], answer: "All same" },
    { q: "Find the analogy: Pen : Write :: Knife : ?", options: ["Eat", "Cut", "Draw", "Cook"], answer: "Cut" },
    { q: "Arrange in ascending order: 50, 20, 70, 10, 40", options: ["10,20,40,50,70", "20,10,40,50,70", "10,20,50,40,70", "10,40,20,50,70"], answer: "10,20,40,50,70" }
];

// Pick 10 questions randomly (repetition allowed)
function pickRandomQuestionsWithRepetition() {
    let selected = [];
    for (let i = 0; i < 10; i++) {
        const randomIndex = Math.floor(Math.random() * questionBank.length);
        selected.push(questionBank[randomIndex]);
    }
    return selected;
}

// Initialize test
let questions = pickRandomQuestionsWithRepetition();

let currentQuestion = 0;
let score = 0;
let userAnswers = Array(questions.length).fill(null);

let globalTime = 0;  // Total test time
let questionTime = 15; // Seconds per question
let questionTimer;    // Interval for per question timer

// DOM Elements
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const timerEl = document.getElementById("timer");
const resultBox = document.getElementById("result-box");
const quizBox = document.getElementById("quiz-box");
const scoreEl = document.getElementById("score");
const totalEl = document.getElementById("total");
const percentageEl = document.getElementById("percentage");
const detailedResult = document.getElementById("detailed-result");
const restartBtn = document.getElementById("restart-btn");

// Show question
function showQuestion() {
    const q = questions[currentQuestion];
    questionEl.textContent = `Q${currentQuestion + 1}. ${q.q}`;
    optionsEl.innerHTML = "";

    q.options.forEach(option => {
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.classList.add("btn", "btn-outline-primary");
        btn.addEventListener("click", () => selectOption(option, btn));
        optionsEl.appendChild(btn);
    });

    prevBtn.disabled = currentQuestion === 0;
    nextBtn.textContent = currentQuestion === questions.length - 1 ? "Submit" : "Next";
    nextBtn.disabled = true; // disable Next until click

    startQuestionTimer(); // Start per question timer
}

// Instant feedback
function selectOption(option, btn) {
    const q = questions[currentQuestion];
    userAnswers[currentQuestion] = option;

    // Disable all buttons
    Array.from(optionsEl.children).forEach(b => {
        b.disabled = true;
        if (b.textContent === q.answer) b.classList.add("correct"); // correct green
    });

    if (option === q.answer) btn.classList.add("correct");
    else btn.classList.add("wrong");

    clearInterval(questionTimer); // Stop timer on click
    nextBtn.disabled = false;
}

// Next / Previous
nextBtn.addEventListener("click", () => {
    moveToNextQuestion();
});

prevBtn.addEventListener("click", () => {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
    }
});

// Per question timer
function startQuestionTimer() {
    let timeLeft = questionTime;
    timerEl.textContent = `Time Left: ${timeLeft}s`;

    clearInterval(questionTimer);
    questionTimer = setInterval(() => {
        timeLeft--;
        timerEl.textContent = `Time Left: ${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(questionTimer);
            moveToNextQuestion();
        }
    }, 1000);
}

// Move to next question automatically
function moveToNextQuestion() {
    // If user did not answer, mark null
    if (!userAnswers[currentQuestion]) userAnswers[currentQuestion] = null;

    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion();
    } else {
        calculateResult();
    }
}

// Calculate result
function calculateResult() {
    clearInterval(questionTimer);
    quizBox.classList.add("d-none");
    resultBox.classList.remove("d-none");

    let score = 0;
    detailedResult.innerHTML = "";

    questions.forEach((q, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer === q.answer;
        if (isCorrect) score++;

        const div = document.createElement("div");
        div.innerHTML = `<strong>Q${index + 1}:</strong> ${q.q} <br>
                         <strong>Your Answer:</strong> <span class="${isCorrect ? 'correct' : 'wrong'}">${userAnswer || 'Not Answered'}</span> <br>
                         <strong>Correct Answer:</strong> ${q.answer}<hr>`;
        detailedResult.appendChild(div);
    });

    scoreEl.textContent = score;
    totalEl.textContent = questions.length;
    percentageEl.textContent = ((score / questions.length) * 100).toFixed(2);
}

// Restart test
restartBtn.addEventListener("click", () => {
    currentQuestion = 0;
    score = 0;
    userAnswers = Array(10).fill(null);
    questions = pickRandomQuestionsWithRepetition();
    resultBox.classList.add("d-none");
    quizBox.classList.remove("d-none");
    showQuestion();
});

// Start first question
showQuestion();
