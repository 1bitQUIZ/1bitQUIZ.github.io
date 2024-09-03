function displayQuiz() {
    const questions = [
        {
            question: "It’s your first day at Sonny Angel High School. What did you do the night before? ",
            choices: ["I spent like 2 hours planning out my fit for the next day", "I just played games all night. I’ll cross the bridge when I get there :P "],
            weights: [
                {judgingScore: +3, perceivingScore: 0 } , 
                {perceivingScore: +1, judgingScore: 0 } , 
            ]
        },
        {
            question: "As you’re walking in through the front doors how do you feel?",
            choices: ["Super excited. It’s my first day after all!!!", "I'm going to puke, :o. I literally cannot wait to go back home"],
            weights: [
                {extrovertScore: +3, introvertScore: 0 } , 
                {introvertScore: +1, extrovertScore: 0 } , 
            ]
        },
        {
            question: "The bell starts ringing, and you know you're going to be late, but you see your friends in the corner of your eye. What do you do?",
            choices: ["Already sprinting to my homies! Gotta say hi real quick.", "Start bee-lining to my first class. I’m going to be late, and I’ll see them at lunch anyways. "],
            weights: [
                {feelingScore: +3, thinkingScore: 0 } , 
                {thinkingScore: +1, feelingScore: 0 } , 
            ]
        },
        {
            question: "Tick, Tock, Tick, Tock. You’re just watching the clock in class. The teacher is such a bore. In your imagination, what does the clock look like?",
            choices: ["Looks like I only have 5x more ten minutes to go", "Huh? I blanked out. I started day-dreaming half way through the class"],
            weights: [
                {sensingScore: +1, intuitionScore: 0 } , 
                {intuitionScore: +3, sensingScore: 0 } , 
            ]
        },
        {
            question: "Whoooo~!! Class is finally over~!! As you’re standing up to leave the cute boy/girl besides you asks if you could eat lunch together.",
            choices: ["I would love to eat lunch with you! (dude, wtf)", " …um, sure! (peeing myself)"],
            weights: [
                {extrovertScore: +1, introvertScore: 0 } , 
                {introvertScore: +3, extrovertScore: 0 } , 
            ]
        },
        {
            question:"Oh ho ho. Would you look at that, you find yourself eating lunch with them. What’s your game winning rizz?",
            choices: ["Yappers rizz: “so, what’s your favorite color”", "Mysterious rizz: Just eat silently… (how did i end up here?)"],
            weights: [
                {intuitionScore: +1, sensingScore: 0 } , 
                {sensingScore: +3, intuitionScore: 0 } , 
            ]
        },
        {
            question:"They seem to be really really taken with you and they ask you if you would like to go on a date next week",
            choices: ["Im so down! *checks schedule*, I should be pretty free on the weekend!", "I don't have anything planned for next week so just hmu!"],
            weights: [
                {judgingScore: +1, perceivingScore: 0 } , 
                {perceivingScore: +3, judgingScore: 0 } , 
            ]
        },
        {
            question:"As lunch ends, they start to pack up and tell you “It was nice eating lunch with the cutest person in the room. See you around!“",
            choices: ["... Its so over, I am WHIPPED. Down bad. Down bad Terrible. ", "Am I just getting glazed right now? Wtf just happened."],
            weights: [
                {feelingScore: +1, thinkingScore: 0 } , 
                {thinkingScore: +3, feelingScore: 0 } , 
            ]
        },
        {
            question:"While you’re sitting in class, you can’t help but notice that they aren’t here. Boredom hits, and memories of her/him start flooding your brain again.",
            choices: ["I’m so cooked. It’s so over. I’m already daydreaming about them. ", "I can’t stop thinking about what happened. How did that even happen to me?"],
            weights: [
                {feelingScore: +3, thinkingScore: 0 } , 
                {thinkingScore: +1, feelingScore: 0 } , 
            ]
        },
        {
            question:"Congrats you made it through the first day!!! All of a sudden you are transported back home. Right onto your bed, your eyes start to feel sleepy... Do you:",
            choices: ["Force yourself to get up and do homework like you said you would", "Doom scroll/Play games"],
            weights: [
                {judgingScore: +3, perceivingScore: 0 } , 
                {perceivingScore: +1, judgingScore: 0 } , 
            ]
        },
        {
            question:"Oop well. Looks like you fell asleep either way. Wakey wakey soldier!!! You’re getting a call from your best friend. ",
            choices: ["*picks up immediately and spills all the tea about what happened today at lunch*", "*groans and looks at the phone*. “Hey whats up!”"],
            weights: [
                {extrovertScore: +3, introvertScore: 0 } , 
                {introvertScore: +1, extrovertScore: 0 } , 
            ]
        },
        {
            question:"Your last thought before sleep completely takes over you... You can't help but wonder… ",
            choices: ["Will she ask me for lunch again tomorrow?", "Am I even going to wake up for school tomorrow?"],
            weights: [
                {intuitionScore: +3, sensingScore: 0 } , 
                {sensingScore: +1, intuitionScore: 0 } , 
            ]
        },
        {
            question: "We are now processing your results!",
            choices: ["Click to see what kind of Sonny Angel you are!"],
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
            "Q1 Sonny.png",
            "Q2 Sonny.png",
            "Q3 Sonny.png",
            "Q4 Sonny.png",
            "Q5 Sonny.png",
            "Q6 Sonny.png",
            "Q7 Sonny.png",
            "Q8 Sonny.png",
            "Q9 Sonny.png",
            "Q10 Sonny.png",
            "Q11 Sonny.png",
            "Q12 Sonny.png",
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
                "ENTJ": "ENTJ Sonny Angel.png",
                "INTJ": "INTJ Sonny Angel.png",
                "ENTP": "ENTP Sonny Angel.png",
                "INTP": "INTP Sonny Angel.png",
                "ENFJ": "ENFJ Sonny Angel.png",
                "INFJ": "INFJ Sonny Angel.png",
                "ENFP": "ENFP Sonny Angel.png",
                "INFP": "INFP Sonny Angel.png",
                "ESFJ": "ESFJ Sonny Angel.png",
                "ISFJ": "ISFJ Sonny Angel.png",
                "ESTJ": "ESTJ Sonny Angel.png",
                "ISTJ": "ISTJ Sonny Angel.png",
                "ESTP": "ESTP Sonny Angel.png",
                "ISTP": "ISTP Sonny Angel.png",
                "ESFP": "ESFP Sonny Angel.png",
                "ISFP": "ISFP Sonny Angel.png",
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
        window.location.href = 'http://127.0.0.1:5500/quizzes/WhatKindofSonnyAngelareyou/WhatKindofSonnyAngelareyou.html'; 
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
