$(document).ready(function () {

    var winCounter = 0;
    var lossCounter = 0;
    var computerGuess = Math.floor(Math.random() * (121 - 19) + 19);
    var total = 0;
    var guessAdder = [];

    // random number button values
    var buttonValue1 = Math.floor(Math.random() * 12) + 1;
    var buttonValue2 = Math.floor(Math.random() * 12) + 1;
    var buttonValue3 = Math.floor(Math.random() * 12) + 1;
    var buttonValue4 = Math.floor(Math.random() * 12) + 1;
    console.log(buttonValue1, buttonValue2, buttonValue3, buttonValue4);

    
    var winCounterSpan = document.getElementById("winCounter");
    var lossCounterSpan = document.getElementById("lossCounter");
    var totalSpan = $("#total");
    var computerGuessSpan = document.getElementById("computerGuess");


    winCounterSpan.textContent = winCounter;
    lossCounterSpan.textContent = lossCounter;
    totalSpan.textContent = total;
    computerGuessSpan.textContent = computerGuess;

    function getSum(total, num) {
        return total + num;
    }

    function myFunction(item) {
        document.getElementById("total").innerHTML = guessAdder.reduce(getSum);
    }

    $("body").on("click", "#1", function () {
        $("#guessTotalCounter").text(buttonValue1);
        guessAdder.push(buttonValue1);
        console.log(guessAdder);
        myFunction();
    });

    $("body").on("click", "#2", function () {
        $("#guessTotalCounter").text(buttonValue2);
        guessAdder.push(buttonValue2);
        console.log(guessAdder);
        myFunction();
    });

    $("body").on("click", "#3", function () {
        $("#guessTotalCounter").text(buttonValue3);
        guessAdder.push(buttonValue3);
        console.log(guessAdder);
        myFunction();
    });

    $("body").on("click", "#4", function () {
        $("#guessTotalCounter").text(buttonValue4);
        guessAdder.push(buttonValue4);
        console.log(guessAdder);
        myFunction();
    });

    // create win conbdition loop
    if (total === computerGuess) {
        winCounter++;
        // reset computer guess
        // reset button values
        // clear toal span
    }

    //create loss condition loop
    if (total > computerGuess) {
        lossCounter++;
        // reset computer guess
        // reset button values
        // clear total span 
    }

});


