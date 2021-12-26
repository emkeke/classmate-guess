const resetBtn = document.querySelector('#resetBtn');
const btnResult = document.querySelector('#btn-results');
let studentPhoto = document.querySelector('#photo-img');

const students = [
    {
        name : "Alexander B",
        image: "assets/images/students/alexander-bergquist.jpg",
    },
    {
        name: "Alexander K",
        image: "assets/images/students/alexander-kocman.jpg",
    },
    {
        name: "Benjamin B",
        image: "assets/images/students/benjamin-benson.jpg",
    },
    {
        name: "Benjamin T",
        image: "assets/images/students/benjamin-tsubarah.jpg",
    },
    {
        name: "Calle",
        image: "assets/images/students/calle-nilsson.jpg",
    },
    {
        name: "Chikage",
        image: "assets/images/students/chikage-takahashi-molander.jpg",
    },
    {
        name: "Daniel",
        image: "assets/images/students/daniel-be.jpg",
    },
    {
        name: "Daniel",
        image: "assets/images/students/daniel-carlsson.jpg",
    },
    {
        name: "Elin",
        image: "assets/images/students/elin-ahlgren.jpg",
    },
    {
        name: "Emma",
        image: "assets/images/students/emma-kack.jpg",
    },
    {
        name: "Eric",
        image: "assets/images/students/eric-stahl.jpg",
    },
    {
        name: "Frans",
        image: "assets/images/students/frans-gustavson-passe.jpg",
    },
    {
        name: "Glafira",
        image: "assets/images/students/glafira-veretennikova.jpg",
    },
    {
        name: "Gustaf",
        image: "assets/images/students/gustaf-gronlund.jpg",
    },
    {
        name: "Hanna",
        image: "assets/images/students/hanna-hakanson.jpg",
    },
    {
        name: "Heidi",
        image: "assets/images/students/heidi-sjoberg.jpg",
    },
    {
        name: "Hugo",
        image: "assets/images/students/hugo-carzborn.jpg",
    },
    {
        name: "Jesper",
        image: "assets/images/students/jesper-kling.jpg",
    },
    {
        name: "Johan",
        image: "assets/images/students/johan-ranestam.jpg",
    },
    {
        name: "Johanna B",
        image: "assets/images/students/johanna-backstrom.jpg",
    },
    {
        name: "Johanna J",
        image: "assets/images/students/johanna-jonsson.jpg",
    },
    {
        name: "Jona",
        image: "assets/images/students/jona-torsson.jpg",
    },
    {
        name: "Josefine",
        image: "assets/images/students/josefine-ahlstedt.jpg",
    },
    {
        name: "Julia J",
        image: "assets/images/students/julia-jespersdotter-hogman.jpg",
    },
    {
        name: "Julia N",
        image: "assets/images/students/julia-nemell.jpg",
    },
    {
        name: "Linus",
        image: "assets/images/students/linus-lindberg.jpg",
    },
    {
        name: "Malin",
        image: "assets/images/students/malin-olsson.jpg",
    },
    {
        name: "Maria H",
        image: "assets/images/students/maria-haara-lundhammar.jpg",
    },
    {
        name: "Maria L",
        image: "assets/images/students/maria-lovgren.jpg",
    },
    {
        name: "Nikola",
        image: "assets/images/students/nikola-dimitrijoski.jpg",
    },
    {
        name: "Paulina",
        image: "assets/images/students/paulina-kiendys.jpg",
    },
    {
        name: "Raymond",
        image: "assets/images/students/raymond-lam.jpg",
    },
    {
        name: "Robin",
        image: "assets/images/students/robin-karlsson.jpg",
    },
    {
        name: "Sara",
        image: "assets/images/students/sara-almqvist.jpg",
    },
    {
        name: "Tim",
        image: "assets/images/students/tim-nilsson.jpg",
    },
    {
        name: "Tirapat",
        image: "assets/images/students/tirapat-sukjit.jpg",
    },
    {
        name: "Tobias",
        image: "assets/images/students/tobias-silfverberg.jpg",
    },
    {
        name: "Wiktoria",
        image: "assets/images/students/wiktoria-dobrzewinska.jpg",
    },
];

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');

const answerButtons = [btn1, btn2, btn3, btn4];

const randomize = (max) => {
	return Math.floor(Math.random() * max);
};

const getNewStudent = (name) => {
    let incorrectAnswer = name[0];
    while (name.includes(incorrectAnswer)) {
        let randomNr = randomize(students.length);
        let person = students[randomNr];
        incorrectAnswer = person.name; 
    }
    return incorrectAnswer;
}


const totalScore = document.querySelector('#total-score');
const getMySore = document.getElementById('score');
const gameEnd = document.getElementById('end-game');
const endedGame = document.getElementById('endText');
let score = 0;
let counter = 0;
let total = 0;
let finalScore = 0;

const correctAnswer = (students) => {
    score++;
    counter++;
    startGame(students);
}
const endOfGame = () => {
    console.log("game ended");
    gameEnd.style.display = 'block';
    endedGame.innerText = "End of game";
    if (total === 0) {
        total = counter;
        return;
    }
    if (finalScore === 0) {
        finalScore = score;
        return;
    }
}

const wrongAnswer = (students) => {
    counter++;
    startGame(students);
}

const startGame = (students) => {
    
    if (students.length === 0) {
        endOfGame()
        return;
    }

    let indexOfArray = randomize(students.length); 
    let classMate = students[indexOfArray]; 
    let nameOf = classMate.name;
    btn1.innerText = nameOf; 
    studentPhoto.src = classMate.image; 


    let nameOfStudent = [nameOf];
    let nextQuestion = students.filter((next) => { 
        return next.name !== nameOf;
    })

// ändrade map till forEach..
    answerButtons.forEach((choiceBtn) => {
        let incorrectAnswer = getNewStudent(nameOfStudent);

        choiceBtn.onclick = () => {
            wrongAnswer(nextQuestion);             
        }
        nameOfStudent.push(incorrectAnswer);
        choiceBtn.innerText = incorrectAnswer; 
    })

    indexOfArray = randomize(answerButtons.length)
    answerButtons[indexOfArray].innerText = nameOf;

    answerButtons[indexOfArray].onclick = () => {
        correctAnswer(nextQuestion);
    } 
}

const startAgain = () => {
    score = 0;
    counter = 0;
    finalScore = 0;
    total = 0;
    startGame(students);
    totalScore.style.display = 'none';
    // totalScore.classList.add('none');
    gameEnd.style.display = 'none';

}

resetBtn.onclick = startAgain;
startAgain();

btnResult.addEventListener('click', (e) => {
    e.preventDefault();
    const showScore = `${finalScore} / ${total}`;
    getMySore.innerText = showScore;
    totalScore.style.display = 'block';
});