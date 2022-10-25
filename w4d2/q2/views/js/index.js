$(() => {
    const clearMsg = () => $("#msg").text("");
    const addedSuccess = (data) => {
        $("#question").val("");
        $("#msg").text(data);
        $("#question").focus();
        // setTimeout(clearMsg, 3000);
    }
    const noSuccess = () => {
        $("#msg").text("Unable to reach server");
        setTimeout(clearMsg, 10000);
    }

    $("#add").submit(() => {
        if($("#question").val() !="") {
            $.get({
                url: "/8ball?question="+encodeURIComponent($("#question").val()),
                // data: JSON.stringify(data),
                contentType: "application/json; charset=utf-8"
            }).done(addedSuccess)
                .fail(noSuccess);
        }
        return false;
    });
});