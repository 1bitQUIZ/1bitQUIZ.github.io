function displayQuiz() {
    const questions = [
        {
            question: "Welcome to NatsTeaShop! We’re so happy to have you on board. Out of curiosity… What type of boba do you want to try out for later today?? No promises though! ;) ",
            choices: ["“It’s kind of hot today, so a nice refreshing fruit bubble tea would be really nice!“", "“I’m not too sure! I like all kinds of bbt. I might get a mango slushie later, or maybe even a brown sugar milk tea. We’ll see later. What’s your favorite?“"],
            weights: [
                {judgingScore: +3, perceivingScore: 0 } ,
                {perceivingScore: +1, judgingScore: 0 } , 
            ]
        },
        {
            question: "ohhh nice! You can always change your mind later so don’t worry. We’ll start training with learning front of house, cash till first.",
            choices: ["“LET'S GO?! I get to talk to all the pretty abg’s first??? Crazy“.", "“…Sure! Sounds good.“"],
            weights: [
                {extrovertScore: +3, introvertScore: 0 } ,
                {introvertScore: +1, extrovertScore: 0 } , 
            ]
        },
        {
            question: "…So here are all of the buttons for all of our drinks! They’re organized into different sections, milk tea, fruit tea, slushies, hot drinks, etc. It’ll take a bit of time to get used to, don't get too stressed out. ",
            choices: ["“Oh man… That's going to be really hard to memorize. I’ll be relying on you from now on with any questions!“", " “Hmmm… it’s a lot to memorize, but I’m sure I’ll get it eventually! I’ll take a photo of the menu and practice in my spare time.“"],
            weights: [
                {feelingScore: +3, thinkingScore: 0 } , 
                {thinkingScore: +1, feelingScore: 0 } , 
            ]
        },
        {
            question: "PRACTICE TIME!! Time to take some customers' orders! ",
            choices: ["Sounds good!"],
            weights: [
                {extrovertScore: 0, introvertScore: 0 } , 
                {introvertScore: 0, extrovertScore: 0} , 
            ]
        },
        {
            question: "*a pretty girl/boy walks in through the front* “Hey, can I have a large passionfruit green tea with 30% sweetener and less ice?”",
            choices: ["(she/he’s really good looking… Maybe I should ask for their number…?) ", "(what is a passionfruit?)"],
            weights: [
                {intuitionScore: +3, sensingScore: 0 } , 
                {sensingScore: +1, intuitionScore: 0 } , 
            ]
        },
        {
            question: "*a highschool girl walks in through the front* “Can I please have a taro slush with strawberry popping pearls? Regular sweetness”",
            choices: ["(taro slush is kinda basic) ", "(hmm, I’ve never punched this one in before) "],
            weights: [
                {intuitionScore: +1, sensingScore: 0 } , 
                {sensingScore: +3, intuitionScore: 0 } , 
            ]
        },
        {
            question:"*a college boy walks in through the front* “It's my first time here ... do you have any recommendations?”",
            choices: ["(Gives them ur personal fave) ", "(Gives them the first drink u see)"],
            weights: [
                {extrovertScore: +3, introvertScore: 0 } , 
                {introvertScore: +1, extrovertScore: 0 } , 
            ]
        },
        {
            question:"*a little boy walks in all alone* “I think im a little lost… can you help me find my mom?” ",
            choices: ["“omg...omg... when did you lose her? Are you alright?”", "“yeah, just stay here for now. Do you know your mom’s phone number? I can give her a call.” "],
            weights: [
                {feelingScore: +3, thinkingScore: 0 } , 
                {thinkingScore: +1, feelingScore: 0 } , 
            ]
        },
        {
            question: "Practice time is over~!!! Great job. We recommended new drinks, helped a little boy, and got some great practice in. Now we will move onto making drinks for the first time. ",
            choices: ["yay!!"],
            weights: [
                {extrovertScore: 0, introvertScore: 0 } , 
                {introvertScore: 0, extrovertScore: 0} , 
            ]
        },
        {
            question:"Making drinks is pretty fun, but I will say… It is a little challenging at first. Getting muscle memory, and also just memorizing all of the drinks, but don’t worry. You got it! It’ll be light work. ",
            choices: ["“I’m sure it’ll be fine! I’ll set small miniature goals for myself everyday and work my way up!“", "“Light work! I’m sure to just pick it up as I go. Thanks for the warning!“"],
            weights: [
                {judgingScore: +1, perceivingScore: 0 } , 
                {perceivingScore: +3, judgingScore: 0 } , 
            ]
        },
        {
            question:"What do you think you'll enjoy more? ",
            choices: [" Making shaken drinks. I really enjoy working front of house, and talking to everyone!", "Making pearls in the back of the kitchen. It’ll be so nice later on, blasting music, and just chillin in the back."],
            weights: [
                {extrovertScore: +1, introvertScore: 0 } , 
                {introvertScore: +3, extrovertScore: 0 } , 
            ]
        },
        {
            question:"As you’re shaking a drink, your hands slip and the drink goes flying EVERYWHERE.  ",
            choices: ["“I am so sorry. Oh my god, I don't even know how that happened… ;-;“", "Dang, I should really clean this up as fast as possible. “Where do you guys keep the mop? I’ll clean it up.“ "],
            weights: [
                {feelingScore: +1, thinkingScore: 0 } , 
                {thinkingScore: +3, feelingScore: 0 } , 
            ]
        },
        {
            question:"Congrats! We’re all done training! You’re all on your own now… Is what I said, but it’s a little slow today. Do you… ",
            choices: ["Relax and make some bonds with your fellow coworkers, taking the day as it comes?", "Clean the surrounding area while waiting for any customers to walk in? "],
            weights: [
                {intuitionScore: +3, sensingScore: 0 } , 
                {sensingScore: +1, intuitionScore: 0 } , 
            ]
        },
        {
            question:"Nice job today!!! We’ll see you tomorrow. Don’t forget to get a drink for yourself on the way out :) ",
            choices: ["“If you’re off around the same time tomorrow let's go on a walk later!“", "“Thank you! It was nice meeting you.”"],
            weights: [
                {extrovertScore: +3, introvertScore: 0 } , 
                {introvertScore: +1, extrovertScore: 0 } , 
            ]
        },
        {
            question: "Congratulations on your first day~!. We are now processing your results!",
            choices: ["Click to see what kind of BBT you are!"],
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
            "Q1BBT.png",
            "Q2BBT.png",
            "Q3BBT.png",
            "Practice.png",
            "Q4BBT.png",
            "Q5BBT.png",
            "Q6BBT.png",
            "Q7BBT.png",
            "PracticeOver.png",
            "Q8BBT.png",
            "Q9BBT.png",
            "Q10BBT.png",
            "Q11BBT.png",
            "Q12BBT.png",
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
            "3.png",
            "4.png",
            "5.png",
            "6.png",
            "7.png",
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
                "ENTJ": "ENTJ BBT.png",
                "INTJ": "INTJ BBT.png",
                "ENTP": "ENTP BBT.png",
                "INTP": "INTP BBT.png",
                "ENFJ": "ENFJ BBT.png",
                "INFJ": "INFJ BBT.png",
                "ENFP": "ENFP BBT.png",
                "INFP": "INFP BBT.png",
                "ESFJ": "ESFJ BBT.png",
                "ISFJ": "ISFJ BBT.png",
                "ESTJ": "ESTJ BBT.png",
                "ISTJ": "ISTJ BBT.png",
                "ESTP": "ESTP BBT.png",
                "ISTP": "ISTP BBT.png",
                "ESFP": "ESFP BBT.png",
                "ISFP": "ISFP BBT.png",
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
        window.location.href = 'https://1bitquiz.github.io/quizzes/WhatKindofBBTareyou/WhatKindofBBTareyou.html'; 
    });
});

const backToMainPageButton = document.getElementById('back-to-main-page');

document.addEventListener('DOMContentLoaded', function() {
    const backButton = document.getElementById('back-to-main-page');

    backButton.addEventListener('click', function() {
        window.location.href = 'https://1bitquiz.github.io/'; 
    });
})
function navigateToHomePage() {
    resetQuiz(); 
    document.getElementById('home').style.display = 'block';
    document.getElementById('quiz-page').style.display = 'none';
}
