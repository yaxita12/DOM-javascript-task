// Define your questions and options
const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "London", "Paris", "Madrid"],
        answer: 2 // Index of the correct answer (Paris)
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        answer: 1 // Index of the correct answer (Mars)
    },
    {
        question: "Which gas do plants absorb from the atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        answer: 1 // Index of the correct answer (Carbon Dioxide)
    }
];

// Initialize variables
let currentQuestionIndex = 0;
const questionContainer = document.getElementById("question-container");
const questionText = document.getElementById("question");
const optionsDiv = document.getElementById("options");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

// Function to load and display the current question
function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    optionsDiv.innerHTML = "";

    currentQuestion.options.forEach((option, index) => {
        const radioInput = document.createElement("input");
        radioInput.type = "radio";
        radioInput.name = "options";
        radioInput.value = index;

        const optionLabel = document.createElement("label");
        optionLabel.textContent = option;

        optionsDiv.appendChild(radioInput);
        optionsDiv.appendChild(optionLabel);
        optionsDiv.appendChild(document.createElement("br"));
    });
}

// Event listener for the "Next" button
nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        alert("You have completed all the questions!");
        currentQuestionIndex = questions.length - 1; // Prevent going beyond the last question
    }
});

// Event listener for the "Previous" button
prevButton.addEventListener("click", () => {
    currentQuestionIndex--;
    if (currentQuestionIndex >= 0) {
        loadQuestion();
    } else {
        currentQuestionIndex = 0; // Prevent going below the first question
    }
});

// Initial question load
loadQuestion();
