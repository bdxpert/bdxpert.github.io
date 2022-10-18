$(document).ready(function() {
    $("#start").click(function() {
        startPlay();
    });
});
function startPlay() {
    console.log($("#circle-div").width());
    let growthAmount = $("#growthAmount").val();
    let intervalRate = $("#growthRate").val();
    let numberOfCircle = $("#numberOfCircle").val();
    console.log("growthAmount"+growthAmount);
    console.log("intervalRate:"+intervalRate);
    console.log("numberOfCircle:"+numberOfCircle);
    let intervalId =  setInterval(function() {
        let widthPx = $("#circle-div").width();

        let heightPx = $("#circle-div").height();
        widthPx = widthPx + parseInt(growthAmount);
        heightPx = heightPx + parseInt(growthAmount);
        $("#circle-div").width(widthPx+"px");
        $("#circle-div").height(heightPx+"px");
        // $("#circle-div").zIndex("1");
    },intervalRate);

    $("#circle-div").click(function () {
        $(this).hide();
        intervalId = null;
    });

    let interval2Id =  setInterval(function() {
        for (let i=0; i<numberOfCircle; i++) {
            let widthPx = $("#circle-div-"+i).width();
            console.log("widthPx::"+widthPx);
            let heightPx = $("#circle-div-"+i).height();
            console.log("heightPx::"+heightPx);
            widthPx = widthPx + parseInt(growthAmount);
            heightPx = heightPx + parseInt(growthAmount);
            $("#circle-div-"+i).width(widthPx+"px");
            $("#circle-div-"+i).height(heightPx+"px");
            // $("#circle-div-"+i).zIndex("1");
        }
    },intervalRate);

    /*$("#circle-div").click(function () {
        $(this).hide();
        intervalId = null;
    });*/

    /*setInterval(function() {
        let widthPx = $("#circle-div").width();
        let heightPx = $("#circle-div").height();
        widthPx = widthPx + 10;
        heightPx = heightPx +10;
        $("#circle-div").width(widthPx+"px");
        $("#circle-div").height(heightPx+"px");
    },250);*/
    // create circle
    let width = $("#width").val();
    let height = $("#width").val();

    for(let i=0;i<numberOfCircle;i++) {
        let bgcolor = (""+(100*Math.random(255))+ ","+ 100*(Math.random(255))+  "," +100*(Math.random(255)));
        console.log(bgcolor);
        $("#circles").prepend($("<div>", {
            "id":"circle-div-"+i,
            "css": {
                "width": width+"px",
                "height": height+"px",
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
}
