$(() => {
    const clearMsg = () => $("#success").text("");
    const addedSuccess = (data) => {
        $("#msg").text(data);
        $("#success").text("Cart successfully updated");
        // $("#question").focus();
          setTimeout(clearMsg, 3000);
    }
    const noSuccess = () => {
        $("#success").text("Unable to reach server");
        setTimeout(clearMsg, 10000);
    }
//name:req.body.name, price:req.body.price, quantity: 1
    $("#add").submit(() => {
        const data = {
            name: $("#name").val(),
            price: $("#price").val(),
            quantity: 1,
        };
        $.post({
            url: "/addToCart",
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8"
        }).done(addedSuccess)
            .fail(noSuccess);

        return false;
    });
});