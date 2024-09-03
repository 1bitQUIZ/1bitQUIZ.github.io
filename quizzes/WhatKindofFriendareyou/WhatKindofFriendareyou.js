function displayQuiz() {
    const questions = [
        {
            question: "Your homie invites you to a Halloween party tonight. How do you react?",
            choices: ["First halloweekend!! Let’s go! It’s gonna be a fun time.", "I might chill and think about just watching a movie instead."],
            weights: [
                {extrovertScore: +3, introvertScore: 0 } ,
                {introvertScore: +1, extrovertScore: 0 } , 
            ]
        },
        {
            question: "On the way to the party, your friend suggests hitting up a costume store for last-minute matching accessories.",
            choices: ["Matching necklaces or headbands would be so cute!", "Nah, let's just head straight to the party. We might end up being late."],
            weights: [
                {intuitionScore: +3, sensingScore: 0 } , 
                {sensingScore: +1, intuitionScore: 0 } ,
            ]
        },
        {
            question: "Once you get to the party, your friend introduces you to a bunch of new people. How do u feel so far?",
            choices: ["I wanna see everyone's different costumes! Make some new friends.", "It's cool, just chilling."],
            weights: [
                {extrovertScore: +3, introvertScore: 0 } , 
                {introvertScore: +1, extrovertScore: 0 } , 
            ]
        },
        {
            question: "While you’re chilling, all of a sudden your friend accidentally steps on someone’s costume... tearing it slightly. What should we do?! ",
            choices: ["I'd apologize and let them know. I’d feel super bad if I didn't. ", "I Should buy them a drink so they’re not pressed"],
            weights: [
                {feelingScore: +3, thinkingScore: 0 } , 
                {thinkingScore: +1, feelingScore: 0 } , 
            ]
        },
        {
            question: " Suddenly, the lights flicker, and the party transforms into a haunted house. You hear screaming somewhere… and a hidden door opens beside you slowly… ",
            choices: ["idk man… hidden door? Kinda sus", "Dude… Hidden door??? Kinda sick!"],
            weights: [
                {judgingScore: +1, perceivingScore: 0 } , 
                {perceivingScore: +3, judgingScore: 0 } , 
            ]
        },
        {
            question:"As you enter deeper into the haunted house, you come across a fork in the path. ",
            choices: ["... why do they both look so bad. But this one looks slightly LESS bad I think", "Both paths look the same, may as well just pick one! any works :>"],
            weights: [
                {judgingScore: +3, perceivingScore: 0 } , 
                {perceivingScore: +1, judgingScore: 0 } , 
            ]
        },
        {
            question:"The fork in the path leads to a dimly lit corridor… you start hearing faint whispers and see eerie shadows(???) ahead.",
            choices: ["do you hear that?? am I going insane?? Should we check it out??", "me personally?? I’ll observe from a distance. Let’s backtrack and take the other path"],
            weights: [
                {intuitionScore: +1, sensingScore: 0 } , 
                {sensingScore: +3, intuitionScore: 0 } , 
            ]
        },
        {
            question:"On the other side of the fork we find some “ghosts” having a spontaneous dance-off in one of the rooms. What do you do: ",
            choices: ["…Join them??", "RUN!"],
            weights: [
                {extrovertScore: +1, introvertScore: 0 } , 
                {introvertScore: +3, extrovertScore: 0 } , 
            ]
        },
        {
            question: "The ghosts were NOT friendly... ... RUN RUN RUN!!!",
            choices: ["Why were they dancing?!?!?"],
            weights: [
                {extrovertScore: 0, introvertScore: 0 } , 
                {introvertScore: 0, extrovertScore: 0} , 
            ]
        },
        {
            question:"Congrats on escaping! We ended up in a weird room filled with “ancient artifacts”. You and your friend are thinking about whether to interact with the artifacts or leave them undisturbed.",
            choices: ["DUDE we should just leave like… rn", "Lighten up! Ghosts aren't even real. This is probably just a prank"],
            weights: [
                {feelingScore: +1, thinkingScore: 0 } , 
                {thinkingScore: +3, feelingScore: 0 } , 
            ]
        },
        {
            question:"In that same room, a friend notices a mysterious decoration trapped in one of the artifacts… :",
            choices: ["huh, I wonder what thats doing there…", "it’s awfully well made for something that’s supposed to be ancient. "],
            weights: [
                {intuitionScore: +3, sensingScore: 0 } , 
                {sensingScore: +1, intuitionScore: 0 } , 
            ]
        },
        {
            question:"The mysterious decoration ends up being a map!! That same map seems to be able to help you escape, but your friend suggests splitting up to cover more ground :",
            choices: ["nah…. We HAVE to stick together and figure this out together", "think out the pros/cons of splitting up "],
            weights: [
                {feelingScore: +3, thinkingScore: 0 } , 
                {thinkingScore: +1, feelingScore: 0 } , 
            ]
        },
        {
            question:"As you approach the exit, you realize that the haunted house wasn’t really haunted after all!!! You see a group of people outside telling a ghost story with other party-goers. You:",
            choices: ["Go home: bro this is not what I signed up for", "Stay: ... That was kind of fun"],
            weights: [
                {judgingScore: +1, perceivingScore: 0 } , 
                {perceivingScore: +3, judgingScore: 0 } , 
            ]
        },
        {
            question: "Congratulations on your escape. We hope you had a fun Halloweekend!!! We are now processing your results!",
            choices: ["Click to see what kind of Friend you are!"],
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
            "Q1 Friend.png",
            "Q2 Friend.png",
            "Q3 Friend.png",
            "Q4 Friend.png",
            "Q5 Friend.png",
            "Q6 Friend.png",
            "Q7 Friend.png",
            "Q8 Friend.png",
            "RUN.png",
            "Q9 Friend.png",
            "Q10 Friend.png",
            "Q11 Friend.png",
            "Q12 Friend.png",
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
                "ENTJ": "ENTJ Friend.png",
                "INTJ": "INTJ Friend.png",
                "ENTP": "ENTP Friend.png",
                "INTP": "INTP Friend.png",
                "ENFJ": "ENFJ Friend.png",
                "INFJ": "INFJ Friend.png",
                "ENFP": "ENFP Friend.png",
                "INFP": "INFP Friend.png",
                "ESFJ": "ESFJ Friend.png",
                "ISFJ": "ISFJ Friend.png",
                "ESTJ": "ESTJ Friend.png",
                "ISTJ": "ISTJ Friend.png",
                "ESTP": "ESTP Friend.png",
                "ISTP": "ISTP Friend.png",
                "ESFP": "ESFP Friend.png",
                "ISFP": "ISFP Friend.png",
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
        window.location.href = 'https://1bitquiz.github.io/quizzes/WhatKindofFriendareyou/WhatKindofFriendareyou.html'; 
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
