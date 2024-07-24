// javascript for results.html //

let savedCorrectCount = sessionStorage.getItem('correctCount');
let savedIncorrectCount = sessionStorage.getItem('incorrectCount');
let savedTotalQuestions = sessionStorage.getItem('totalQuestions');


let percent = document.getElementById('percent');
let percentMessage = document.getElementById('percent-message');

function fractionToPercentage(numerator, denominator) {
    const decimal = numerator / denominator;
    const percentage = Math.round(decimal * 100);
    return percentage;
}

function displayResults() {
    
    console.log(savedCorrectCount);
    let percentage = fractionToPercentage(savedCorrectCount, savedTotalQuestions);
    percent.textContent = `${percentage}`;
    if (percentage >= 70) {
        percent.classList.add('green');
        percentMessage.classList.add('green');
        percentMessage.textContent = `You passed! May the Force be with You.`;
    } else {
        percent.classList.add('red');
        percentMessage.classList.add('red');
        percentMessage.textContent = `You failed! You were supposed to be the chosen one!`;
    }
    
}

const resetButton = document.getElementById('reset-quiz');

function resetQuiz() {
    sessionStorage.setItem('savedCorrectCount') = 0;
    sessionStorage.setItem('savedIncorrectCount') = 0;
    sessionStorage.setItem('savedTotalQuestions') = 0;
}

displayResults();
