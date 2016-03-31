document.addEventListener("DOMContentLoaded", function() { // Makes sure the document has completed loading before executing anything wrapped inside.

    // document.getElementById("toggle-animation").addEventListener("click", function() {
    //         document
    //             .getElementById("animated-div")
    //             .classList
    //             .toggle("open");
    //     });

    // var animatedDivs = document
    //     .getElementsByClassName("animated-divs");

    // for (var i = 0; i < animatedDivs.length; i++) {
    //     animatedDivs[i].addEventListener("click", function(){
    //         this
    //             .classList
    //             .toggle("rotate-animate");
    //         this
    //             .innerHTML = "<p>Animation!</p>";
    //     });
    // }

    var data;
    data = document
        .getElementById("score")
        .innerHTML;
    score = parseInt(data);
    console.log(score);
    console.log(typeof(score));

    var increaseButton;
    increaseButton = document
        .getElementById("increase-point")
        .addEventListener("click", function() {
            score = (score + 1);
            increasedScore = score.toString();
            // console.log(increasedScore);
            // console.log(typeof(increasedScore));
            document
                .getElementById("score")
                .innerHTML = increasedScore;
    });
});