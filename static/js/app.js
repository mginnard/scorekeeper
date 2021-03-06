document.addEventListener("DOMContentLoaded", function() { // Makes sure the document has completed loading before executing anything wrapped inside.

    // Generic function that gets the current score on demand.
    var getScore;
    getScore = function() {
        var data;
        data = document
            .getElementById("score")
            .innerHTML;
        return score = parseInt(data); // Turn the string into an int for computation.
    }

    // Generic function that changes the display
    // with whatever the new score is.
    var updateScore; 
    updateScore = function(newScore) {
        document
            .getElementById("score")
            .innerHTML = newScore;
    };

    // When the (+) point button is pressed...
    var increaseButton;
    increaseButton = document
        .getElementById("increase-point")
        .addEventListener("click", function() {
            getScore();
            score = (score + 1); // Add a point to score.
            newScore = score.toString(); // Convert score back to a string, and give it the newScore name.
            updateScore(newScore); // Call updateScore with the new score, so it's displayed.
    });

    // When the (-) point button is pressed...
    var decreaseButton;
    decreaseButton = document
        .getElementById("decrease-point")
        .addEventListener("click", function() {
            getScore();

            if (score > 0) {
                score = (score - 1); // Subtract a point from the score.
                newScore = score.toString(); // Convert score back to a string, and give it the newScore name.
                updateScore(newScore); // Call updateScore with the new score, so it's displayed.
            }
    });

    // When the input has a value, and the submit button is pressed...
    document
        .getElementById("custom-score-button")
        .addEventListener("click", function() {
            getScore();

            var inputString;
            inputString = document
                .getElementById("custom-score-input")
                .value;
            
            if (inputString.length !== 0) {
                inputNumber = parseInt(inputString);

                if (inputNumber < 0) {
                    inputNumber = 0;
                }

                newScore = inputNumber.toString();
                updateScore(newScore);
            }
        })
});