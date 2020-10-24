$(document).ready(function() {
    const order = JSON.parse(localStorage.getItem('order'));
    order.dateOfBirth = order.DOB;
    delete order.DOB;
    order.timeOfBirth = order.timeofbirth;
    delete order.timeofbirth
    order.placeOfBirth = order.place;
    delete order.place;
    console.log(order);
    // alert(order);

    if (order.service == 'Query from contact page') {
        $.ajax({
            url: "https://yidikam-sendmail.herokuapp.com/api/appointment/book",
            type: "POST",
            data: order,
            success: function(response) {
                window.location.replace("./contact_Confirmation.html");
                localStorage.removeItem('order');
            },
            error: function(jqXHR, response, errorThrown) {
                alert(response, errorThrown);
            }
        });
    } else {

        $.ajax({
            url: "https://yidikam-sendmail.herokuapp.com/api/appointment/book",
            type: "POST",
            data: order,
            success: function(response) {
                window.location.replace("./confirmation.html");
                localStorage.removeItem('order');
            },
            error: function(jqXHR, response, errorThrown) {
                alert(response, errorThrown);
            }
        });
    }
});