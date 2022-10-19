$(document).ready(function() {
    let gameStart = false;
    $("#start").click(function() {
        gameStart = true;
        $(".boundary").removeClass("youlose");

        $("#status").text("Click the \"S\" to begin.");
    });

    $(".boundary").mouseover(function() {
        /*
         * make all boundary red
         */
        if (gameStart) {
            $(".boundary").each(function () {
                $(this).addClass("youlose");
            });
            $("#status").text("Sorry you lost!");
            gameStart= false;
        }
    });
    $("#maze").mouseleave(function(){
        if(gameStart) {
            $(".boundary").each(function () {
                $(this).addClass("youlose");
            });
            $("#status").text("Sorry you lost!");
            gameStart= false;
        }
    });

    $("#end").click(function() {
        gameStart = false;
        if($(".boundary").hasClass("youlose")) {
            $("#status").text("Sorry you lost!");
        } else {
            $("#status").text("You win! :]");
        }
    });
});