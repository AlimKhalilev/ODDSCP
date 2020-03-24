$('.section-faq-container-items-item').click(function () {
    var comments = $(this).children(":last");
    var title = $(this);
    var icon = $(this).children(":first").children(":last");

    if (!comments.is(':visible')) {
        comments.slideDown('normal', function () {
            title.css("background-color", "#363d4c");
            icon.css("transform", "rotate(180deg)");
        });
    } else {
        comments.slideUp('normal', function () {
            title.css("background-color", "");
            icon.css("transform", "");
        });
    }
});