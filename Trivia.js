let currentQuestionIndex = 0;  
let questionsData = [];  
let Score = 0;
const answerDiv = document.createElement("div");
async function APIfetcher() {
    let error = document.querySelector(".error"); 
    try {
        const response = await fetch(`https://opentdb.com/api.php?amount=10&difficulty=easy`);
        const data = await response.json();
        if (data.response_code === 0) {
            questionsData = data.results; 
            displayQuestion(currentQuestionIndex);  
        } else {
            error.innerHTML = `Error fetching the questions: ${data.response_code}`;  
        }
    } catch (error) {
   
        console.error(error);
        error.innerHTML = "Error while fetching data"; 
    }
}   
function displayQuestion(index) {
    const container = document.querySelector(".container");
    container.innerHTML = "";
    if (index >= questionsData.length) {
        container.innerHTML = `
            <div class="end-screen">
                <h2>Quiz Completed!</h2>
                <p>Your final score is: ${Score}/${questionsData.length}</p>
                <button onclick="location.reload()">Restart Quiz</button> <a href="index.html"><button>Back To Home</button></a>
            </div>
        `;
        return; 
    }
    const question = questionsData[index];
    const questionDiv = document.createElement("div");
    let answers = [question.correct_answer, ...question.incorrect_answers];
    answers.sort(() => Math.random() - 0.5);

    questionDiv.innerHTML = `
        <h3>${index + 1}. ${question.question}</h3>
        <ul>
            ${answers
                .map(answer => 
                    `<li><button onclick="checkAnswer('${answer}', '${question.correct_answer}', ${index})">${answer}</button></li>`
                )
                .join('')}
        </ul>
    `;

    container.appendChild(questionDiv);
}

function nextQuestion(){
    currentQuestionIndex++;
    displayQuestion(currentQuestionIndex);
}
function checkAnswer(selectedAnswer, correctAnswer,) {
    const container = document.querySelector(".container");

    if (selectedAnswer === correctAnswer) {
        Score++;
        answerDiv.innerHTML = `
            <h3>Correct</h3>
            <button onclick="setTimeout(nextQuestion, 100)">Next</button>
        `;
    } else {
        answerDiv.innerHTML = `
           <h3>Wrong! The correct answer was: ${correctAnswer}</h3>
            <button onclick="setTimeout(nextQuestion, 100)">Next</button>
        `;
    }
    
    container.appendChild(answerDiv);
}
window.onload = APIfetcher;

