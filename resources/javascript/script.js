// quiz.js

const characters = [
    "Admiral Ackbar",
    "Admiral Firmus Piett",
    "Admiral Holdo",
    "Admiral Motti",
    "BB-8",
    "Bib Fortuna",
    "Boba Fett",
    "C-3PO",
    "Chewbacca",
    "Chirrut Îmwe",
    "Count Dooku",
    "Darth Maul",
    "Darth Vader",
    "Emperor Palpatine",
    "Enfys Nest",
    "EV-9D9",
    "Figrin D'an and the Modal Nodes",
    "Finn",
    "General Grievous",
    "Grand Moff Tarkin",
    "Greedo",
    "Han Solo",
    "IG-88",
    "Jabba the Hutt",
    "Jango Fett",
    "K-2SO",
    "Kylo Ren",
    "Lando Calrissian",
    "Lobot",
    "Luke Skywalker",
    "Mace Windu",
    "Max Rebo",
    "Mon Mothma",
    "Nien Nunb",
    "Obi-Wan Kenobi",
    "Oola",
    "Padmé Amidala",
    "Poe Dameron",
    "Ponda Baba",
    "Princess Leia",
    "Q'ira",
    "Qui-Gon Jinn",
    "R2-D2",
    "Rey",
    "Salacious B. Crumb",
    "Sebulba",
    "Uncle Owen",
    "Wedge Antilles",
    "Wicket W. Warrick",
    "Yoda"
];

const imagePaths = {
    "Admiral Ackbar": "./resources/images/admiral_ackbar.webp",
    "Admiral Firmus Piett": "./resources/images/admiral_firmus_piett.webp",
    "Admiral Holdo": "./resources/images/admiral_holdo.webp",
    "Admiral Motti": "./resources/images/admiral_motti.webp",
    "BB-8": "./resources/images/bb_8.webp",
    "Bib Fortuna": "./resources/images/bib_fortuna.webp",
    "Boba Fett": "./resources/images/boba_fett.webp",
    "C-3PO": "./resources/images/c_3po.webp",
    "Chewbacca": "./resources/images/chewy.webp",
    "Chirrut Îmwe": "./resources/images/chirrut_imwe.webp",
    "Count Dooku": "./resources/images/count_dooku.webp",
    "Darth Maul": "./resources/images/darth_maul.webp",
    "Darth Vader": "./resources/images/darth_vader.webp",
    "Emperor Palpatine": "./resources/images/emperor_palpatine.webp",
    "Enfys Nest": "./resources/images/enfys_nest.webp",
    "EV-9D9": "./resources/images/ev_9d9.webp",
    "Figrin D'an and the Modal Nodes": "./resources/images/figrin_dan_modal_nodes.webp",
    "Finn": "./resources/images/finn.webp",
    "General Grievous": "./resources/images/general_grievous.webp",
    "Grand Moff Tarkin": "./resources/images/grand_moff_tarkin.webp",
    "Greedo": "./resources/images/greedo.webp",
    "Han Solo": "./resources/images/han_solo.webp",
    "IG-88": "./resources/images/ig_88.webp",
    "Jabba the Hutt": "./resources/images/jabba_the_hutt.webp",
    "Jango Fett": "./resources/images/jango_fett.webp",
    "K-2SO": "./resources/images/k_2so.webp",
    "Kylo Ren": "./resources/images/kylo_ren.webp",
    "Lando Calrissian": "./resources/images/lando_calrissian.webp",
    "Lobot": "./resources/images/lobot.webp",
    "Luke Skywalker": "./resources/images/luke_skywalker.webp",
    "Mace Windu": "./resources/images/mace_windu.webp",
    "Max Rebo": "./resources/images/max_rebo.webp",
    "Mon Mothma": "./resources/images/mon_mothma.webp",
    "Nien Nunb": "./resources/images/nien_nunb.webp",
    "Obi-Wan Kenobi": "./resources/images/obi_wan_kenobi.webp",
    "Oola": "./resources/images/oola.webp",
    "Padmé Amidala": "./resources/images/padme_amidala.webp",
    "Poe Dameron": "./resources/images/poe_dameron.webp",
    "Ponda Baba": "./resources/images/ponda_baba.webp",
    "Princess Leia": "./resources/images/princess_leia.webp",
    "Q'ira": "./resources/images/qira.webp",
    "Qui-Gon Jinn": "./resources/images/qui_gon_jinn.webp",
    "R2-D2": "./resources/images/r2_d2.webp",
    "Rey": "./resources/images/rey.webp",
    "Salacious B. Crumb": "./resources/images/salacious_b_crumb.webp",
    "Sebulba": "./resources/images/sebulba.webp",
    "Uncle Owen": "./resources/images/uncle_owen.webp",
    "Wedge Antilles": "./resources/images/wedge_antilles.webp",
    "Wicket W. Warrick": "./resources/images/wicket_warrick.webp",
    "Yoda": "./resources/images/yoda.webp"
};


function randomChoice(imagePaths) {
    const characterNames = Object.values(imagePaths);
    const shuffledCharacterNames = [...characterNames];

    for (let i = shuffledCharacterNames.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledCharacterNames[i], shuffledCharacterNames[j]] = [shuffledCharacterNames[j], shuffledCharacterNames[i]];
    }

    return shuffledCharacterNames;
}



function displayQuestion(correctAnswer, imagePaths) {
    const shuffledChoices = randomChoice(Object.values(imagePaths).filter(choice => choice !== correctAnswer));
    const buttonElements = document.querySelectorAll(".answers");
    const randomIndex = Math.floor(Math.random() * 4);
    buttonElements.forEach((button, index) => {
        if (index === randomIndex) {
            button.textContent = correctAnswer;
        } else {
            button.textContent = shuffledChoices.pop();
        }
    });
}



function shuffleButtons() {
    const buttonsContainer = document.getElementById("answers");
    const buttons = Array.from(buttonsContainer.children);
    for (let i = buttons.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        buttonsContainer.insertBefore(buttons[j], buttons[i]);
    }
}

const characterNames = Object.keys(imagePaths);
const randomIndex = Math.floor(Math.random() * characterNames.length);
const selectedCharacter = characterNames[randomIndex];


const characterImage = document.getElementById("character-img");
characterImage.src = imagePaths[selectedCharacter];



let correctAnswer = selectedCharacter;
let correctCount = 0;
let incorrectCount = 0;
let totalQuestions = 0;


const choiceButton = document.querySelectorAll(".choice1, .choice2, .choice3, .correct");
let userAnswer;
let feedbackMessage = document.getElementById('feedback-message');


for (const button of choiceButton) {
  button.addEventListener('click', () => {
    userAnswer = button.textContent;
    let isCorrect = userAnswer === correctAnswer;
    console.log(userAnswer);
  });
}

const submitButton = document.getElementById('submit');
const choiceButtons = document.querySelectorAll(".answers");
let storedData = window.name;


let submitted = false;


// ... (your existing code)

// When the user submits an answer
submitButton.addEventListener('click', () => {
    let isCorrect = userAnswer === correctAnswer;
    for (const button of choiceButtons) {
        button.classList.add('unclickable');
    }
    console.log("Correct answer:", correctAnswer);
    console.log("User's answer:", userAnswer);
    console.log("Is correct?", isCorrect);
    submitButton.disabled = true;

    if (isCorrect) {
        correctCount++;
        feedbackMessage.textContent = "That's Correct! You are one with the Force";
        feedbackMessage.classList.add('green');
    } else {
        incorrectCount++;
        feedbackMessage.textContent = "WRONG!! The Jedi Council does not grant you the rank of Master";
        feedbackMessage.classList.add('red');
    }
    totalQuestions++;
    submitted = true;
    console.log(`Correct answers: ${correctCount}/${totalQuestions}`);
    console.log(`Incorrect answers: ${incorrectCount}/${totalQuestions}`);
    
    // Save the scores to local storage
    localStorage.setItem('correctCount', correctCount);
    localStorage.setItem('incorrectCount', incorrectCount);
    localStorage.setItem('totalQuestions', totalQuestions);
});

// ... (rest of your existing code)

// When the page loads (e.g., in your initialization logic)
const savedCorrectCount = parseInt(localStorage.getItem('correctCount')) || 0;
const savedIncorrectCount = parseInt(localStorage.getItem('incorrectCount')) || 0;
const savedTotalQuestions = parseInt(localStorage.getItem('totalQuestions')) || 0;

// Display the saved scores wherever needed
console.log(`Saved correct answers: ${savedCorrectCount}`);
console.log(`Saved incorrect answers: ${savedIncorrectCount}`);
console.log(`Saved total questions answered: ${savedTotalQuestions}`);


const nextPageButton = document.getElementById('next-page');

nextPageButton.addEventListener('click', () => {
    console.log("Next Page button clicked!"); 
    if (submitted) {
        window.location.reload();
    } else {
        console.log("Submit an answer first before proceeding to the next page!");
    }
});

displayQuestion(correctAnswer, characters);
shuffleButtons();
