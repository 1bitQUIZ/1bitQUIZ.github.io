function displayQuiz() {
    const questions = [
        {
            question: "While you’re exploring your backyard one day, you find a circle of mushrooms that seem to faintly glow. The stars seem to be inviting you towards it.",
            choices: ["This seems like a bad idea… but theres a always a first for everything!", "hmmm… seems risky, I should just go back inside while I still can"],
            weights: [
                {extrovertScore: +3, introvertScore: 0 } , 
                {introvertScore: +1, extrovertScore: 0 } , 
            ]
        },
        {
            question: "Suddenly you lose vision… When you awake all you can smell is flowers and musk. Looks like you got transported to the middle of a fairy woodlands.",
            choices: ["Where am I? It looks kinda nice here.", "…Don’t tell me. Did I just get spirited away?"],
            weights: [
                {intuitionScore: +3, sensingScore: 0 } , 
                {sensingScore: +1, intuitionScore: 0 } ,
            ]
        },
        {
            question: "Well! You’re already here. So you decide to keep on walking… On your walk you come across a talking fox asking for help, it seems that they are also lost.",
            choices: ["I wish I could help you... But im a little lost myself :<", "Um… I may be lost too haha! But you can join me if you would like! We can be lost together."],
            weights: [
                {thinkingScore: +1, feelingScore: 0 } , 
                {feelingScore: +3, thinkingScore: 0 } , 
            ]
        },
        {
            question: "Turns out the fox’s name is Lily! You and Lily become fast friends and eventually reach a sparkling stream with stepping stones that lead across the river. ",
            choices: ["I should carefully cross. What would Lily say if I fell? I would literally never hear the end of it.", "You only live once. “I’ll race you to the other side Lily!!“"],
            weights: [
                {judgingScore: +3, perceivingScore: 0 } ,
                {perceivingScore: +1, judgingScore: 0 } , 
            ]
        },
        {
            question: "On the other side, you find a bunch of playful foxes. These are Lily’s friends!! Congratulations! We’ve officially helped out Lily, and now it’s time to continue our journey. ",
            choices: ["Ah… I’m going to miss Lily! I wish she could come with me on my journey.", "I’m going to miss Lily :< , but on the bright side: now I can start really thinking about how I'm gonna leave this place."],
            weights: [
                {extrovertScore: +1, introvertScore: 0 } , 
                {introvertScore: +3, extrovertScore: 0 } , 
            ]
        },
        {
            question:"Lily’s friends give us two gifts as a thank you. a mysterious, glowing amulet and a beautifully carved wooden charm. Which one do you like more?",
            choices: ["Obviously the amulet… It’s literally glowing… How does it do that??? ", "The wooden charm! How did these foxes even carve this out… Do foxes even have thumbs???"],
            weights: [
                {intuitionScore: +3, sensingScore: 0 } , 
                {sensingScore: +1, intuitionScore: 0 } , 
            ]
        },
        {
            question:"While walking alone, you get bored and start playing with the amulet. Suddenly, a magical barrier appears, blocking your way. ",
            choices: ["Huh… It came up because I started rubbing on the glowing amulet. Surely I just have to rub it again, right? ", "Yeah, I’m just going to cry. I’ve had enough :^)"],
            weights: [
                {thinkingScore: +3, feelingScore: 0 } , 
                {feelingScore: +1, thinkingScore: 0 } , 
            ]
        },
        {
            question:"Thankfully the barrier fell down… Though I’m not really sure how.... Anyways, There are two paths up-ahead: one well-marked but longer, the other a shortcut through a dense forest",
            choices: ["I’m better off just taking the well-marked path. I’m already lost, wouldn't want to make it worse", "I’m already lost, may as well take the shorter route. "],
            weights: [
                {judgingScore: +1, perceivingScore: 0 } , 
                {perceivingScore: +3, judgingScore: 0 } , 
            ]
        },
        {
            question:"As you trek along you meet a wise, old owl who says he can help you leave the forest. What do you say to the owl?",
            choices: ["THANK YOU!!!! I am so happy to see you!", "How do I know you'll actually help me?"],
            weights: [
                {extrovertScore: +1, introvertScore: 0 } , 
                {introvertScore: +3, extrovertScore: 0 } , 
            ]
        },
        {
            question:"The owl laughs at you, and proceeds to give you a riddle to solve in exchange for a safe passageway out of the forest",
            choices: ["The answer to the riddle is probably found in the riddle’s symbolism and deeper meaning... I just need to think harder", "The answer to the riddle is probably found in the literal clues found in the riddle... I just need to think harder"],
            weights: [
                {intuitionScore: +1, sensingScore: 0 } , 
                {sensingScore: +3, intuitionScore: 0 } , 
            ]
        },
        {
            question:"After 10 grueling hours, you finally solve the owl's riddle. How do you feel? ",
            choices: ["My head hurts so bad... I can't believe it took me that long :^)", "LFG!!! It took 10 hours, and I feel like crap but we STILL got it!! >:D "],
            weights: [
                {thinkingScore: +1, feelingScore: 0 } , 
                {feelingScore: +3, thinkingScore: 0 } , 
            ]
        },
        {
            question:"The owl’s riddle led us to a safe passageway, and as we are nearing the woodlands edge, you suddenly find a pretty flower that call outs to you. What do you do?",
            choices: ["Not this again… I need to leave right now. ", "What’s one more adventure…!"],
            weights: [
                {judgingScore: +3, perceivingScore: 0 } , 
                {perceivingScore: +1, judgingScore: 0 } , 
            ]
        },
        {
            question: "Congratulations!! You made it through the forest! Click here to find out which Quiet you are!",
            choices: ["Click to see what kind of Quiet you are!"],
            weights: [
                {extrovertScore: 0, introvertScore: 0 } ,
                {introvertScore: 0, extrovertScore: 0} , 
            ]
        },
    ]



    let currentQuestionIndex = 0;
    let introvertScore = 0;
    let extrovertScore = 0;
    let judgingScore = 0;
    let perceivingScore = 0;
    let sensingScore = 0;
    let intuitionScore = 0;
    let thinkingScore = 0;
    let feelingScore = 0;


    function displayQuestionImage(questionIndex) {
        const imageURLs = [
            "Q1Quiet.png",
            "Q2Quiet.png",
            "Q3Quiet.png",
            "Q4Quiet.png",
            "Q5Quiet.png",
            "Q6Quiet.png",
            "Q7Quiet.png",
            "Q8Quiet.png",
            "Q9Quiet.png",
            "Q10Quiet.png",
            "Q11Quiet.png",
            "Q12Quiet.png",
            "processingNoise.gif",
        ];
        const questionImageElement = document.getElementById('question-image');
        questionImageElement.src = imageURLs[questionIndex];
    }

    document.getElementById('begin-quiz').addEventListener('click', function() {
        document.getElementById('home').style.display = 'none';
        document.getElementById('quiz-page').style.display = 'block';
    });

    function displayCurrentQuestion() {
        const currentQuestion = questions[currentQuestionIndex];
        const questionElement = document.getElementById('question');
        const progressImageElement = document.getElementById('question-progress-image');
        const choiceContainers = document.getElementById('choices');

        choiceContainers.innerHTML = '';

        questionElement.textContent = currentQuestion.question;
        progressImageElement.src = getQuestionProgressImage(currentQuestionIndex);

        displayQuestionImage(currentQuestionIndex);

        currentQuestion.choices.forEach((choice, index) => {
            const button = document.createElement('button');
            button.textContent = choice;
            button.classList.add('choices');
            button.addEventListener('click', () => handleChoiceClick(index));
            choiceContainers.appendChild(button);
        });
        }

    function getQuestionProgressImage(questionIndex) {
        const progressImageURLs = [
            "1.png",
            "2.png",
            "3.png",
            "4.png",
            "5.png",
            "6.png",
            "7.png",
            "8.png",
            "9.png",
            "10.png",
            "11.png",
            "12.png",
        ];
        return progressImageURLs[questionIndex] || "";
    }

    function handleChoiceClick(choiceIndex) {
        const currentQuestion = questions[currentQuestionIndex];
        const selectedChoiceWeight = currentQuestion.weights[choiceIndex];
        console.log("Selected choice weight:", selectedChoiceWeight);

                if (selectedChoiceWeight.hasOwnProperty('introvertScore')) {
                    introvertScore += selectedChoiceWeight.introvertScore;
                }
                if (selectedChoiceWeight.hasOwnProperty('extrovertScore')) {
                    extrovertScore += selectedChoiceWeight.extrovertScore;
                }
                if (selectedChoiceWeight.hasOwnProperty('judgingScore')) {
                    judgingScore += selectedChoiceWeight.judgingScore;
                }
                if (selectedChoiceWeight.hasOwnProperty('perceivingScore')) {
                    perceivingScore += selectedChoiceWeight.perceivingScore;
                }
                if (selectedChoiceWeight.hasOwnProperty('sensingScore')) {
                    sensingScore += selectedChoiceWeight.sensingScore;
                }
                if (selectedChoiceWeight.hasOwnProperty('intuitionScore')) {
                    intuitionScore += selectedChoiceWeight.intuitionScore;
                }
                if (selectedChoiceWeight.hasOwnProperty('thinkingScore')) {
                    thinkingScore += selectedChoiceWeight.thinkingScore;
                }
                if (selectedChoiceWeight.hasOwnProperty('feelingScore')) {
                    feelingScore += selectedChoiceWeight.feelingScore;
                }

            currentQuestionIndex++;

            if (currentQuestionIndex < questions.length) {
                displayCurrentQuestion();
            } else {
                calculateMBTITypeAndDisplayImage();
            }
        }

    function calculateMBTITypeAndDisplayImage() {
        const introextro = introvertScore > extrovertScore ? "I" :"E";
        const sensint = sensingScore > intuitionScore ? "S" : "N";
        const thinkfeel = thinkingScore > feelingScore ? "T" : "F";
        const judgeper = judgingScore > perceivingScore ? "J" : "P";
        const mbtiTypeString = introextro + sensint + thinkfeel + judgeper;

        console.log("MBTI Type:", mbtiTypeString);

        document.getElementById('results').style.display = 'none';

        const questionElement = document.getElementById('question');
        const choiceContainers = document.getElementById('choices');
        const quizContainer = document.getElementById('quiz');
        const thumbnailImage = document.querySelector('img[src="Thumbnail.gif"]');
        questionElement.remove();
        choiceContainers.remove();
        quizContainer.remove();
        thumbnailImage.remove();

        displayImage(mbtiTypeString);

        document.getElementById('results').style.display = 'block'
    }

        function getMBTIImageUrl(mbtiTypeString) {
            const MBTIImageUrls = {
                "ENTJ": "ENTJ Quiet.png",
                "INTJ": "INTJ Quiet.png",
                "ENTP": "ENTP Quiet.png",
                "INTP": "INTP Quiet.png",
                "ENFJ": "ENFJ Quiet.png",
                "INFJ": "INFJ Quiet.png",
                "ENFP": "ENFP Quiet.png",
                "INFP": "INFP Quiet.png",
                "ESFJ": "ESFJ Quiet.png",
                "ISFJ": "ISFJ Quiet.png",
                "ESTJ": "ESTJ Quiet.png",
                "ISTJ": "ISTJ Quiet.png",
                "ESTP": "ESTP Quiet.png",
                "ISTP": "ISTP Quiet.png",
                "ESFP": "ESFP Quiet.png",
                "ISFP": "ISFP Quiet.png",
            };
            return MBTIImageUrls[mbtiTypeString] || ""
        }

        function displayImage(mbtiTypeString) {
            const imageURL = getMBTIImageUrl(mbtiTypeString);
            const mbtiImageContainer = document.getElementById('mbti-image');
            const imageElement = document.createElement('img');
            imageElement.src = imageURL;

            mbtiImageContainer.appendChild(imageElement);

    }
        displayCurrentQuestion();
        document.addEventListener('DOMContentLoaded', () => {
        const choiceContainers = document.querySelectorAll('.choice-container');
        choiceContainers.forEach((container) => {
            const choices = container.querySelectorAll('button');
            choices.forEach((choice, choiceIndex) => {
                choice.addEventListener('click', () => {
                    handleChoiceClick(choiceIndex);
                });
            });
        });
    });
}

displayQuiz();
document.addEventListener('DOMContentLoaded', function() {
    const shareButton = document.querySelector('.share-button');

    shareButton.addEventListener('click', function() {
        const url = window.location.href;

        navigator.clipboard.writeText(url)
            .then(() => {
                alert('Quiz URL copied to clipboard!');
            })
            .catch(err => {
                console.error('Failed to copy URL: ', err);
            });
    });
});

const backToHomeButton = document.getElementById('back-to-home');

document.addEventListener('DOMContentLoaded', function() {
    const backButton = document.getElementById('back-to-home');

    backButton.addEventListener('click', function() {
        window.location.href = 'https://1bitquiz.github.io/quizzes/WhatKindofSilenceareyou/WhatKindofSilenceareyou.html'; 
    });
});

const backToMainPageButton = document.getElementById('back-to-main-page');

document.addEventListener('DOMContentLoaded', function() {
    const backButton = document.getElementById('back-to-main-page');

    backButton.addEventListener('click', function() {
        window.location.href = 'https://1bitquiz.github.io/'; 
    });
});

function navigateToHomePage() {
    resetQuiz(); 
    document.getElementById('home').style.display = 'block';
    document.getElementById('quiz-page').style.display = 'none';
}
