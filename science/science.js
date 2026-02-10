/***********************
 * SCIENCE TEST SERIES
 * Exam Ready JS File
 ***********************/

const data = {
  physics: [
    {q:"Unit of force is?", options:["Newton","Joule","Watt","Volt"], answer:0},
    {q:"Speed of light?", options:["3×10^8 m/s","1500 m/s","300 m/s","30 km/s"], answer:0},
    {q:"SI unit of work?", options:["Joule","Newton","Watt","Volt"], answer:0},
    {q:"Power formula?", options:["W/t","F×d","V×I","I×R"], answer:2},
    {q:"Acceleration unit?", options:["m/s","m/s²","km/h","N"], answer:1},
    {q:"Ohm’s law?", options:["V=IR","P=VI","F=ma","E=mc²"], answer:0},
    {q:"SI unit of pressure?", options:["Pascal","Bar","Newton","Joule"], answer:0},
    {q:"Energy unit?", options:["Joule","Watt","Ampere","Volt"], answer:0},
    {q:"Sound travels fastest in?", options:["Solid","Liquid","Gas","Vacuum"], answer:0},
    {q:"Electric current unit?", options:["Ampere","Volt","Ohm","Watt"], answer:0},
    {q:"Heat transfer by radiation needs?", options:["Medium","No medium","Water","Air"], answer:1},
    {q:"Mirror used in headlights?", options:["Concave","Convex","Plane","None"], answer:0},
    {q:"Velocity unit?", options:["m/s","m","s","m/s²"], answer:0},
    {q:"Density formula?", options:["m/v","v/m","m×v","m+v"], answer:0},
    {q:"SI unit of frequency?", options:["Hertz","Second","Watt","Volt"], answer:0}
  ]
};

/* ---------- VARIABLES ---------- */
let questions = [];
let index = 0;
let score = 0;
let totalTime = 300;      // 5 minutes
let questionTime = 40;   // 40 seconds
let totalTimer, qTimer;
let currentSubject = "";

/* ---------- SHUFFLE (NO REPEAT) ---------- */
function shuffle(arr){
  return arr.sort(() => Math.random() - 0.5);
}

/* ---------- START TEST ---------- */
function startTest(subject){
  clearInterval(totalTimer);
  clearInterval(qTimer);

  currentSubject = subject;
  questions = shuffle([...data[subject]]).slice(0,15);

  index = 0;
  score = 0;
  totalTime = 300;
  questionTime = 40;

  document.getElementById("subject-box").classList.add("hide");
  document.getElementById("result").classList.add("hide");
  document.getElementById("exam-box").classList.remove("hide");

  loadQuestion();
  startTotalTimer();
  startQuestionTimer();
}

/* ---------- TOTAL TIMER ---------- */
function startTotalTimer(){
  totalTimer = setInterval(()=>{
    let m = Math.floor(totalTime/60);
    let s = totalTime % 60;
    document.getElementById("time").innerText =
      `${m}:${s<10?'0'+s:s}`;
    totalTime--;
    if(totalTime < 0) submitTest();
  },1000);
}

/* ---------- QUESTION TIMER ---------- */
function startQuestionTimer(){
  qTimer = setInterval(()=>{
    questionTime--;
    if(questionTime <= 0){
      nextQuestion(true);
    }
  },1000);
}

/* ---------- LOAD QUESTION ---------- */
function loadQuestion(){
  questionTime = 40;
  document.getElementById("qno").innerText = index + 1;
  document.getElementById("question").innerText = questions[index].q;

  let optDiv = document.getElementById("options");
  optDiv.innerHTML = "";

  questions[index].options.forEach((op,i)=>{
    optDiv.innerHTML +=
      `<label>
        <input type="radio" name="opt" value="${i}"> ${op}
      </label>`;
  });
}

/* ---------- NEXT QUESTION ---------- */
function nextQuestion(auto=false){
  clearInterval(qTimer);

  let selected = document.querySelector("input[name='opt']:checked");

  if(!selected && !auto){
    startQuestionTimer();
    return alert("Option select karo");
  }

  if(selected){
    let labels = document.querySelectorAll("#options label");
    labels[questions[index].answer].classList.add("correct");

    if(parseInt(selected.value) !== questions[index].answer){
      labels[selected.value].classList.add("wrong");
    } else {
      score++;
    }
  }

  setTimeout(()=>{
    index++;
    if(index < questions.length){
      loadQuestion();
      startQuestionTimer();
    } else {
      submitTest();
    }
  },600);
}

/* ---------- SUBMIT TEST ---------- */
function submitTest(){
  clearInterval(totalTimer);
  clearInterval(qTimer);

  document.getElementById("exam-box").classList.add("hide");

  let history = JSON.parse(localStorage.getItem("testResults")) || [];
  history.push({
    date: new Date().toLocaleString(),
    subject: currentSubject,
    score: score,
    total: questions.length
  });
  localStorage.setItem("testResults", JSON.stringify(history));

  document.getElementById("result").classList.remove("hide");
  document.getElementById("scoreText").innerText =
    `Your Score: ${score} / ${questions.length}`;
}

/* ---------- RESTART TEST ---------- */
function restartTest(){
  clearInterval(totalTimer);
  clearInterval(qTimer);

  questions = shuffle([...data[currentSubject]]).slice(0,15);
  index = 0;
  score = 0;
  totalTime = 300;
  questionTime = 40;

  document.getElementById("result").classList.add("hide");
  document.getElementById("exam-box").classList.remove("hide");

  loadQuestion();
  startTotalTimer();
  startQuestionTimer();
}

/* ---------- GO HOME ---------- */
function goHome(){
  clearInterval(totalTimer);
  clearInterval(qTimer);

  document.getElementById("result").classList.add("hide");
  document.getElementById("exam-box").classList.add("hide");
  document.getElementById("subject-box").classList.remove("hide");
}

/* ---------- SHOW HISTORY ---------- */
function showHistory(){
  let history = JSON.parse(localStorage.getItem("testResults")) || [];
  let hDiv = document.getElementById("history");

  if(history.length === 0){
    hDiv.innerText = "No previous results found.";
    return;
  }

  let html = "<h3>Previous Test Results</h3>";
  history.forEach((h,i)=>{
    html += `<p>${i+1}. ${h.date} | ${h.subject.toUpperCase()} → ${h.score}/${h.total}</p>`;
  });

  hDiv.innerHTML = html;
}


window.onload = function () {
  if (localStorage.getItem("darkMode") === "on") {
    document.body.classList.add("dark");
    document.getElementById("darkToggle").innerText = "☀ Light Mode";
  }
};

function toggleDarkMode() {
  document.body.classList.toggle("dark");

  let btn = document.getElementById("darkToggle");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("darkMode", "on");
    btn.innerText = "☀ Light Mode";
  } else {
    localStorage.setItem("darkMode", "off");
    btn.innerText = "🌙 Dark Mode";
  }
}
