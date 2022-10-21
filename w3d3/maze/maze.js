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

/*
class Duck {
let flying;
let quaking;
let xPos;
let yPos;
function takeOff() { // sets flying to true
this.flying = true;
}
function land() { // sets flying to false
this.flying = false;
}
function startQuacking() {// sets quacking to true
this.quaking = true;
}
function stopQuacking() {// sets quacking to false
this.quaking = false;
}
// changes the x and y to the given x, y and console.logs the current status
function moveTo(x, y) {
this.x=x;
this.y=y;
if(this.land() && !this.startQuacking()){
console.log(`Duck is swimming to ${this.x},${this.y}`);
} else if(this.land() && this.startQuacking() ){
console.log(`Duck is swimming to ${this.x},${this.y} while quacking`);
}
if(this.takeOff() && !this.startQuacking()) {
console.log(`Duck is flying to ${this.x},${this.y}`);
} else if(this.takeOff() && this.startQuacking() ) {
console.log(`Duck is flying to ${this.x},${this.y} while quacking`);
}
}
module.exports.Duck = Duck;
 */