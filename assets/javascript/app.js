$(document).ready(function () {
    showStartButton()
    //variables

    var asked = [];
    var timer = 10;
    var intervalId;
    var correctAnswerIs;
    var correctIndex;
    var firstClick = true;

    //counters
    var numberCorrectAnswers=0;
    var numberWrongAnswers=0;

    var question = {
        number: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        text: ["What was the first publicly traded U.S. company to reach a $1 trillion market cap?",
            "On the popular social website Reddit, what does AMA stand for?",
            "What do the letters CPU stand for when referring to the “brains” of a computer?",
            "On which popular website do users send tweets?",
            "The Connecticut Leather Company later became what toy company that was popular in the 1980s for its Cabbage Patch Kids and video game consoles?",
            "What does the acronym USB stand for when referring to a computer port?",
            "In 1975 an engineer created the first electronic camera while working for what company?",
            "Nintendo is a consumer electronics and video game company founded in what country?",
            "The first person shooter video game Doom was first released in what year?",
            "The companies HP, Microsoft and Apple were all started in a what?"],
        correctAnswer: ["B", "C", "A", "B", "D", "C", "D", "B", "B", "D"],
        choiceA: ["Walmart", "Advanced Measurement Approach", "Central Processing Unit",
            "FaceBook", "Mattel", "Uniform Serial Bandwidth", "Logitech", "USA", "1994", "Starbucks"],
        choiceB: ["Apple", "All Mods and Admins", "Central Policy Unit", "Twitter", "Fisher-Price",
            "Uniform Serial Bus", "Xerox", "Japan", "1993", "College campus"],
        choiceC: ["Intel", "Ask Me Anything", "Computer Power User", "Reddit", "Atari",
            "Universal Serial Bus", "Apple", "South Korea", "1990", "Dorm room"],
        choiceD: ["Microsoft", "American Medical Association", "Critical Patch Update",
            "SnapChat", "Coleco", "Uncommonly Swift Bandwidth", "Kodak", "Taiwan", "1997", "Garage"]


    };

    //20
    var wrongAnswer = {
        gif: ["https://media.giphy.com/media/3o7qE1bQOcKqwBGUQ8/giphy.gif",
            "https://media.giphy.com/media/XQVEc2S7knPBm/giphy.gif",
            "https://media.giphy.com/media/xT39D14ZQGal0UwS1G/giphy.gif",
            "https://media.giphy.com/media/l396QUa4k8rFVK2xW/giphy.gif",
            "https://media.giphy.com/media/n5EiEUJjJ2hcQ/giphy.gif",
            "https://media.giphy.com/media/k5C3IjpVxFvJS/giphy.gif",
            "https://media.giphy.com/media/1zSz5MVw4zKg0/giphy.gif",
            "https://media.giphy.com/media/RddAJiGxTPQFa/giphy.gif",
            "https://media.giphy.com/media/TfS8MAR9ucLHW/giphy.gif",
            "https://media.giphy.com/media/wYyTHMm50f4Dm/giphy.gif",
            "https://media.giphy.com/media/4HcAjSnloKGut6CTxH/giphy.gif",
            "https://media.giphy.com/media/9J7i4fKvfqnRvpyNjM/giphy.gif",
            "https://media.giphy.com/media/gnE4FFhtFoLKM/giphy.gif",
            "https://media.giphy.com/media/w6etTIjCn7nExl9xI6/giphy.gif",
            "https://media.giphy.com/media/8GbvxxFHJDBa8/giphy.gif",
            "https://media.giphy.com/media/l0MYQLUe1kuJUUSHu/giphy.gif",
            "https://media.giphy.com/media/9Vb9gWFgb9a4zUXDSW/giphy.gif",
            "https://media.giphy.com/media/xT9DPBBQ4CM3bVTkek/giphy.gif",
            "https://media.giphy.com/media/rUQ3jVUsb5Hwc/giphy.gif",
            "https://media.giphy.com/media/PNug04TwLpA0i1d54D/giphy.gif"]
    };

    //19
    var rightAnswer = {
        gif: ["https://media.giphy.com/media/YTbZzCkRQCEJa/giphy.gif",
            "https://media.giphy.com/media/xUPGcMzwkOY01nj6hi/giphy.gif",
            "https://media.giphy.com/media/1PMVNNKVIL8Ig/giphy.gif",
            "https://media.giphy.com/media/l41m74ATRsVYOUI92/giphy.gif",
            "https://media.giphy.com/media/3FQ1YRBV0TnTi6eG4g/giphy.gif",
            "https://media.giphy.com/media/l3vRjj95cs0FCTVLO/giphy.gif",
            "https://media.giphy.com/media/hZj44bR9FVI3K/giphy.gif",
            "https://media.giphy.com/media/2wgZKbS5MTqRUpzmNm/giphy.gif",
            "https://media.giphy.com/media/cXRdGDNCsiGX6S0qOM/giphy.gif",
            "https://media.giphy.com/media/nXxOjZrbnbRxS/giphy.gif",
            "https://media.giphy.com/media/Wq6DnHvHchrTG/giphy.gif",
            "https://media.giphy.com/media/l0HlP2ms0eUc5nlHG/giphy.gif",
            "https://media.giphy.com/media/E99OMc6pkdvGw/giphy.gif",
            "https://media.giphy.com/media/ap6wcjRyi8HoA/giphy.gif",
            "https://media.giphy.com/media/l0MYy7QpDDVGVfAAw/giphy.gif",
            "https://media.giphy.com/media/l1J9wXoC8W4JFmREY/giphy.gif",
            "https://media.giphy.com/media/l0HlTyYgujdjMowg0/giphy.gif",
            "https://media.giphy.com/media/2Wf4hVaqoD6DbZFhj1/giphy.gif",
            "https://media.giphy.com/media/xT0xevrRDWAGgLaxm8/giphy.gif"]
    };

    var outOfTime = {
        gif: ["https://media.giphy.com/media/xUySTEJYS5F1Cayg92/giphy.gif",
            "https://media.giphy.com/media/ZO91JK6HBDeCMQXkK4/giphy.gif",
            "https://media.giphy.com/media/26DNibhe8qS7c8dQk/giphy.gif",
            "https://media.giphy.com/media/9V1DWfcnh08x5L4vud/giphy.gif",
            "https://media.giphy.com/media/1XdfVRTyn5d31Q1lG0/giphy.gif",
            "https://media.giphy.com/media/JzOyy8vKMCwvK/giphy.gif",
            "https://media.giphy.com/media/d3yxg15kJppJilnW/giphy.gif",
            "https://media.giphy.com/media/3ohhwpUr8ieYNKsWKk/giphy.gif",
            "https://media.giphy.com/media/3ornjXizVZDbngmjRK/giphy.gif",
            "https://media.giphy.com/media/HcDfXRU7fqKLC/giphy.gif",
            "https://media.giphy.com/media/26n6xBpxNXExDfuKc/giphy.gif"]
    };


    function loadGif(type) {


        if (type === "winner") {
            var pickRight = Math.floor(Math.random() * rightAnswer.gif.length)
            $("#gifHolder").attr("src", rightAnswer.gif[pickRight])
        }
        else if (type === "loser") {
            var pickWrong = Math.floor(Math.random() * wrongAnswer.gif.length)
            $("#gifHolder").attr("src", wrongAnswer.gif[pickWrong])

        }
        else if (type = "timesUp") {
            var slowPick = Math.floor(Math.random() * outOfTime.gif.length)
            $("#gifHolder").attr("src", outOfTime.gif[slowPick])

        }
    };

    function showGif() {

        //hide the buttons
        document.getElementById("A").style.display = "none";
        document.getElementById("B").style.display = "none";
        document.getElementById("C").style.display = "none";
        document.getElementById("D").style.display = "none";

        //display the gif
        document.getElementById("gifHolder").style.display = "block";
    }

    function showAnswerButtons() {

        //display the buttons
        resetButtons()
        // document.getElementById("A").style.display = "block";
        // document.getElementById("B").style.display = "block";
        // document.getElementById("C").style.display = "block";
        // document.getElementById("D").style.display = "block";

        //hide the gif
        document.getElementById("gifHolder").style.display = "none";

    }

    function postQuestion() {

        //get the next question
        var findNewQuestion = true;
        var alreadyAsked = false;

        //reset the timer
        // timer = 10;

        while (findNewQuestion) {
            var random = Math.floor(Math.random() * question.text.length)


            for (i = 0; i < asked.length; i++) {
                if (asked[i] === random) {
                    //question asked, pick new question
                    alreadyAsked = true;
                }
            }

            if (!alreadyAsked) {
                findNewQuestion = false;
            }

        }

        //add the question to the asked array
        asked.push(random);

        if (asked.length < 10) {
            // alert("length of asked: " + asked.length)
            // alert(random);
            // break;
            loadAnswers(random)
            correctIndex = random
            correctAnswerIs = question.correctAnswer[random]

            $("#questionRow").html(question.text[random])

            showAnswerButtons()
        }
        else {
            $("#timerRow").html("Game Over")
            stopTimer()

        };

    }

    function resetButtons() {
        document.getElementById("A").style.display = "block";
        document.getElementById("A").style.background = "blue";
        document.getElementById("B").style.display = "block";
        document.getElementById("B").style.background = "blue"
        document.getElementById("C").style.display = "block";
        document.getElementById("C").style.background = "blue"
        document.getElementById("D").style.display = "block";
        document.getElementById("D").style.background = "blue"

    }
    function showStartButton() {

        //Hide the answer buttons
        document.getElementById("A").style.display = "none";
        document.getElementById("B").style.display = "none";
        document.getElementById("C").style.display = "none";
        document.getElementById("D").style.display = "none";
    
        //Hide the gif holder
        document.getElementById("gifHolder").style.display = "none";

        //show only the start button
        document.getElementById("start-button").style.display = "block";
        $("#start-button").html("START")
    };

    function gameSetup() {

        //intialize the asked array
        asked = [];
        //hide the gif
        document.getElementById("gifHolder").style.display = "none";
        showStartButton()
    }

    function timesUp() {
        //state times up
        $("#timerRow").html("Times up!")

        showCorrectAnswer(correctIndex);
        showGif();
        loadGif(timesUp);
        //wait three seconds
        // setTimeout(function () {
            //show the correct answer
            //show wrongAnswer gif\
            // alert("hello")

        // }, 2000);

        //show wrongAnswer gif\
        // showGif()
        // loadGif()
        //increment the question counte

        //wait three seconds
        setTimeout(function () {
            showAnswerButtons()

        }, 4000)
    };

    function correctAnswer() {
        //stop timer
        stopTimer()

        //state answer is correct
        $("#timerRow").html("CORRECT!")

        //show the correct answer
        showCorrectAnswer(correctIndex)

        numberCorrectAnswers ++
        setTimeout(function () {
            showGif()
            loadGif("winner")
        },1200);


    };

    function showCorrectAnswer(index) {
        var correctLetter = question.correctAnswer[index];

        // document.getElementById("A").style.display = "none";
        // document.getElementById("B").style.display = "none";
        // document.getElementById("C").style.display = "none";
        // document.getElementById("D").style.display = "none";

        switch (correctLetter) {
            case "A":
                // document.getElementById("A").style.display = "block";
                document.getElementById("A").style.background = "orange"
                break;
            case "B":
                // document.getElementById("B").style.display = "block";
                document.getElementById("B").style.background = "orange"
                break;
            case "C":
                // document.getElementById("C").style.display = "block";
                document.getElementById("C").style.background = "orange"
                break;
            case "D":
                // document.getElementById("D").style.display = "block";
                document.getElementById("D").style.background = "orange"
                break;
        }

    }

    
    function startTimer() {
        clearInterval(intervalId);
        timer = 10;
        intervalId = setInterval(function () {
            //  Decrease number by one.
            timer--;

            //  Show the number in the #show-number tag.
            $("#timerRow").html("<h2>" + "Remaining time: " + timer + "</h2>");

            //  Once number hits zero...
            if (timer === 0) {

                //  ...run the stop function.
                //  stop();

                //  Alert the user that time is up.
                timesUp()
                clearInterval(intervalId);
            }
        }, 1000)


    };

    function stopTimer() {
        clearInterval(intervalId);
    };

    function loadAnswers(questionID) {
        // alert(questionID)
        $("#A").html(question.choiceA[questionID])
        $("#B").html(question.choiceB[questionID])
        $("#C").html(question.choiceC[questionID])
        $("#D").html(question.choiceD[questionID])
    };

    function badAnswer() {
        stopTimer()

        //state answer is incorrect
        $("#timerRow").html("WRONG!");

        numberWrongAnswers++

        //show the correct answer
        showCorrectAnswer(correctIndex);

        setTimeout(function () {
            showGif()
            loadGif("loser")
        }, 1000);
        //show the correctAnswer gif


    };


    $(".btn").on("click", function () {

        if (firstClick) {
            firstClick = false;
            document.getElementById("start-button").style.display = "none";
            postQuestion()
            startTimer()
        }
        else {

            if (correctAnswerIs == this.id) {
                correctAnswer()
            }
            else {

                badAnswer();

            }

            setTimeout(function () {

                //check the number of questions
                $("#gifHolder").attr("src", "")
                // resetButtons()
                showAnswerButtons()
                postQuestion()
                startTimer()

            }, 3000);
            // alert(this.id)


        }
    })


})
//https://media.giphy.com/media/26BGP98lm74FJgfNS/giphy.gif