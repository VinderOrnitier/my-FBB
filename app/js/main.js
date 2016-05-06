$(function(){
    //setTimeout(function(){
    //    $('.my-preloader').fadeOut();
    //}, 7000)

    $("form").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            alert("Thank you!");
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

    $("img, a").on("dragstart", function(event) { event.preventDefault(); });
});