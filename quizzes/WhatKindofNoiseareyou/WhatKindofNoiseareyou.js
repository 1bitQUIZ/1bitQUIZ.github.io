function displayQuiz() {
    const questions = [
        {
            question: "Congratulations! You are our 1-millionth customer!!! As the first-place winner, you have won a trip for 2 to the lovely Japan!",
            choices: ["….woah… WHAT! I need to call my bsf rn.", "do I have to take two people…?"],
            weights: [
                {judgingScore: +3, perceivingScore: 0 } ,
                {perceivingScore: +1, judgingScore:0 } , 
            ]
        },
        {
            question: "Actually… Now that I think about it, the organizers of the raffle gave me a planned out itinerary",
            choices: [" i should just follow it, it’s better to know what I’m doing everyday.", "i kind of want to take the day as I go, I dont really want to be rushed around everywhere"],
            weights: [
                {thinkingScore: +1, feelingScore: 0 } , 
                {feelingScore: +3, thinkingScore: 0 } ,
            ]
        },
        {
            question: "What do you think of while planning your airport fit?",
            choices: ["i have to dress cool, but not try-hard. I wanna be someones airport crush.", " i need to dress comfy, because the flight is like 14+ hours. "],
            weights: [
                {intuitionScore: +3, sensingScore: 0 } ,
                {sensingScore: +1, intuitionScore: 0 } , 
            ]
        },
        {
            question: "4...3...2...1... TAKEOFF. As you’re staring at the city get smaller and smaller underneath you, a major highway with cars driving along catches your eye. ",
            choices: ["8 am on a monday, these cars are probably going to work for the day.", "it’s so crazy to me how everyone has a different direction in life. Who even knows where these guys are going."],
            weights: [
                {thinkingScore: +3, feelingScore: 0 } , 
                {feelingScore: +1, thinkingScore: 0 } , 
            ]
        },
        {
            question: "After 14 grueling hours, you finally arrive in Japan. Except, you can’t seem to find your way out of the airport",
            choices: [" i should really just ask someone for help, I’ve been walking around for quite some time now… “Excuse me!!!”", "i can do it… I can do it… I can do it… The exit must be here somewhere…"],
            weights: [
                {extrovertScore: +3, introvertScore: 0 } , 
                {introvertScore: +1, extrovertScore: 0 } , 
            ]
        },
        {
            question:"When your eyes adjust, all you can see is the bustling city and the greenery intertwining.",
            choices: ["... its so pretty", "***already taking a photo***"],
            weights: [
                {feelingScore: +3, thinkingScore: 0 } , 
                {thinkingScore: +1, feelingScore: 0 } , 
            ]
        },
        {
            question:"Your taxi comes to pick you up and he starts telling you all about his life, and his life prior to being a taxi man.",
            choices: ["thats so cool, his life story is so deep", "well… he’s a taxi-driver right now. "],
            weights: [
                {intuitionScore: +1, sensingScore: 0 } ,
                {sensingScore: +3, intuitionScore: 0 } , 
            ]
        },
        {
            question:"Once you’ve settled down at your hotel, its time to head out again! The desk receptionist told you that theres a festival happening not too far off today, but you already decided you would go to the temple today. ",
            choices: ["i should go to the temple because thats what I decided earlier, and I already did my research on it.", "it’s for one day only! If I skip it today, then I won’t be able to go tomorrow. The festival it is."],
            weights: [
                {judgingScore: +1, perceivingScore: 0 } , 
                {perceivingScore: +3, judgingScore: 0 } , 
            ]
        },
        {
            question:"You tell the desk receptionist you’re going to the festival, and she recommend you to wear a kimono/montsuki. What are your thoughts?",
            choices: ["it’ll be fun! It’d be a one in a lifetime moment", "uh... I don’t want to garner attention to myself…"],
            weights: [
                {extrovertScore: +3, introvertScore: 0 } , 
                {introvertScore: +1, extrovertScore: 0 } , 
            ]
        },
        {
            question:"The festival is super busy! There’s lots of snacks and food items available, like takoyaki, candy apples, etc!",
            choices: ["ooooo I have to keep walking around and keep looking. I have to make sure I know what's available before I make a choice.", "***already bought 2 candy apples, 1 taiyaki, and 1 dango***"],
            weights: [
                {intuitionScore: +3, sensingScore: 0 } , 
                {sensingScore: +1, intuitionScore: 0 } , 
            ]
        },
        {
            question:"A nice local tells you that there will be fireworks at the end of the festival… But the only issue is that the fireworks will happen late at night",
            choices: [" I’ve already seen fireworks a bunch before. These probably won’t be any different, so I’ll just head home.", "this is my first time ever that I’ve seen fireworks in Japan. I should stay."],
            weights: [
                {thinkingScore: +3, feelingScore: 0 } , 
                {feelingScore: +1, thinkingScore: 0 } , 
            ]
        },
        {
            question:"Nice! The festival was a success! As you’re laying in bed...What’re you thinking about?",
            choices: ["today was a good day. I should start planning out tomorrow’s day too.", "everything. today was such a good day."],
            weights: [
                {judgingScore: +3, perceivingScore: 0 } ,
                {perceivingScore: +1, judgingScore: 0 } , 
            ]
        },
        {
            question: "We hope you enjoyed your trip! And we are now processing your results...",
            choices: ["Click to see what kind of Noise you are!"],
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
            "Q1Noise.png",
            "Q2Noise.png",
            "Q3Noise.png",
            "Q4Noise.png",
            "Q5Noise.png",
            "Q6Noise.png",
            "Q7Noise.png",
            "Q8Noise.png",
            "Q9Noise.png",
            "Q10Noise.png",
            "Q11Noise.png",
            "Q12Noise.png",
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
                "ENTJ": "ENTJ Noise.png",
                "INTJ": "INTJ Noise.png",
                "ENTP": "ENTP Noise.png",
                "INTP": "INTP Noise.png",
                "ENFJ": "ENFJ Noise.png",
                "INFJ": "INFJ Noise.png",
                "ENFP": "ENFP Noise.png",
                "INFP": "INFP Noise.png",
                "ESFJ": "ESFJ Noise.png",
                "ISFJ": "ISFJ Noise.png",
                "ESTJ": "ESTJ Noise.png",
                "ISTJ": "ISTJ Noise.png",
                "ESTP": "ESTP Noise.png",
                "ISTP": "ISTP Noise.png",
                "ESFP": "ESFP Noise.png",
                "ISFP": "ISFP Noise.png",
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
        window.location.href = 'http://127.0.0.1:5500/quizzes/WhatKindofNoiseareyou/WhatKindofNoiseareyou.html'; 
    });
});

const backToMainPageButton = document.getElementById('back-to-main-page');

document.addEventListener('DOMContentLoaded', function() {
    const backButton = document.getElementById('back-to-main-page');

    backButton.addEventListener('click', function() {
        window.location.href = 'http://127.0.0.1:5500/index.html'; 
    });
});


function navigateToHomePage() {
    resetQuiz(); 
    document.getElementById('home').style.display = 'block';
    document.getElementById('quiz-page').style.display = 'none';
}
