window.onload = function(){
    "use strict";
    // put all of your code here
    var animationDuration = 250;

    let intervalId;
    document.getElementById("start").onclick = function () {
        // console.log(ANIMATIONS);
        console.log(document.getElementById("text-area").value);
        CUSTOM = document.getElementById("text-area").value;
        if(ANIMATIONS["CUSTOM"] =="") {
            ANIMATIONS["Custom"] = ANIMATIONS["custom"] = ANIMATIONS["CUSTOM"] = CUSTOM;
        }
        // enable stop button
        document.getElementById("stop").disabled = false;

        // document.getElementById("animation").value
        var str = ANIMATIONS[document.getElementById("animation").value]
        var arrStr = str.split("=====");
        console.log(arrStr);

        /*
            setTimeout(function run() {
                document.getElementById("text-area").value = item;
                setTimeout(run, animationDuration);
            }, animationDuration);
        */
        if(!intervalId) {
            let count = arrStr.length;
            let indx = 0;
            intervalId = setInterval(function () {
                console.log("in loop");


                if (indx == count || indx > count) {
                    indx = 0;
                } else {
                    // console.log("out loop");
                    document.getElementById("text-area").value = arrStr[indx];
                    indx++;
                }
            }, animationDuration);
        }
        document.getElementById("start").disabled = true;
    };
    document.getElementById("turbo").onclick = function (){
        if(document.getElementById("turbo").checked) {
            console.log("turbo");
            animationDuration = 50;
        } else {
            animationDuration = 250;
        }
    }
    document.getElementById("stop").onclick = function () {
        // enable stop button
        document.getElementById("stop").disabled = true;
        document.getElementById("start").disabled = false;
        // loop = false;
        clearInterval(intervalId);
        // release our intervalID from the variable
        intervalId = null;
    };

    document.getElementById("animation").onchange = function() {
        if(document.getElementById("animation").value != "") {
            document.getElementById("text-area").value = ANIMATIONS[document.getElementById("animation").value];
        }
    }

//Tiny (7pt), Small (10pt), Medium (12pt), Large (16pt), Extra Large (24pt), XXL (32pt)
    document.getElementById("fontsize").onchange = function() {
        console.log(document.getElementById("fontsize").value);
        document.getElementById("text-area").style.fontSize = document.getElementById("fontsize").value;
        /*
        if(document.getElementById("fontsize").value === "Tiny") {
            document.getElementById("text-area").style.fontSize = "7pt";
            // document.getElementById("text-area").value = ANIMATIONS[document.getElementById("animation").value];
        } else if(document.getElementById("fontsize").value === "Small") {
            document.getElementById("text-area").style.fontSize = "10pt";
        } else if(document.getElementById("fontsize").value === "Medium") {
            document.getElementById("text-area").style.fontSize = "12pt";
        } else if(document.getElementById("fontsize").value === "Large") {
            document.getElementById("text-area").style.fontSize = "16pt";
        } else if(document.getElementById("fontsize").value === "Extra Large") {
            document.getElementById("text-area").style.fontSize = "24pt";
        } else if(document.getElementById("fontsize").value === "XXL") {
            document.getElementById("text-area").style.fontSize = "32pt";
        }
         */
    }
}
