$(document).ready(function() {
    $("#circle-div").click(function () {
        $(this).hide();
        intervalId = null;
    });

    let intervalId =  setInterval(function() {
        let widthPx = $("#circle-div").width();
        let heightPx = $("#circle-div").height();
        widthPx = widthPx + 10;
        heightPx = heightPx +10;
        $("#circle-div").width(widthPx+"px");
        $("#circle-div").height(heightPx+"px");
    },250);

    $("#circle-div").click(function () {
        $(this).hide();
        intervalId = null;
    });
    let interval2Id =  setInterval(function() {
        for (let i=0; i<10; i++) {
            if($("#circle-div-"+i).is(":visible")) {
                let widthPx = $("#circle-div-"+i).width();
                console.log("widthPx::"+widthPx);
                let heightPx = $("#circle-div-"+i).height();
                console.log("heightPx::"+heightPx);
                widthPx = widthPx + 10;
                heightPx = heightPx + 10;
                $("#circle-div-"+i).width(widthPx+"px");
                $("#circle-div-"+i).height(heightPx+"px");
            }
            // $("#circle-div-"+i).zIndex("1");
        }
    },250);
    // check all hidden
    let isV = 1;
    for (let i=0; i<10; i++) {
        if($("#circle-div-"+i).is(":visible")) {
            isV = 0;
        }
        // $("#circle-div-"+i).zIndex("1");
    }
    if(isV === 1) {
        interval2Id = null;
    }
    for(let i=0;i<10;i++) {
        let bgcolor = (""+(100*Math.random(255))+ ","+ 100*(Math.random(255))+  "," +100*(Math.random(255)));
        console.log(bgcolor);
        $("#circles").prepend($("<div>", {
            "id":"circle-div-"+i,
            "css": {
                "width": 50+"px",
                "height": 50+"px",
                // "border": "2px solid black",
                "border": "1px solid blueviolet",
                "border-radius": "50%",
                "position": "fixed",
                "top": (10*i)+"%",
                "left": (10*i)+"%",
                "background-color": "rgb("+bgcolor+")",
                "z-index": 1
            },
            "click": function() {
                $(this).hide();
            }
        }));
    }
});
