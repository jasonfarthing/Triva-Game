
$(document).ready(function () {
    $("#questions").hide();

    $("#startButton").click(function () {
        $("#questions").show("slow");

        timer();
    });



    var countdown = 45;

    var intervalId;
    var correctAnswers = 0;
    var incorrectAnswers = 0;

    //timer countdown functions

    function decrement() {
        countdown--;
        $("#countdown-timer").text(countdown);
        if (countdown == 0) {
            stop();
            // alert("Time is UP!");
            // intervalId = 0;
        }
    }

    function timer() {
        if (intervalId) {
            return;
        }
        intervalId = setInterval(decrement, 1000);
        console.log(countdown);
    }

    function reset() {
        counter = 45;

        intervalId = null;
    }

    function stop() {
        checkRightAnswers();
        $("#questions").hide();
        $("#countdown-timer").text("Time is UP! You got " + correctAnswers + " questions correct.");
        clearInterval(intervalId);
        intervalId = null;
    }


    function checkRightAnswers() {
        //     if ($("#correct").)
        1
        var selValue = $('input[name=optradio]:checked');
        console.log(selValue);
        for (var i = 0; i < selValue.length; i++) {
            var correct = selValue.eq(i).attr("id")
            if (correct == "correct") {
                console.log("THIS WORKS HURRAY!");
                correctAnswers++;
                console.log(correctAnswers);
                console.log(incorrectAnswers);

            }
        }
        // correctAnswers++
    }


    //questions right
    // function showCorrectAnswers () {
    //     if (show correct answers in screen)
    //     $("#countdown-timer").text("You got " +  + "correct answers!")

    /*function ( to add up correct answers)
    if user choice == #correct
    correctAnswers++
    
    */



});