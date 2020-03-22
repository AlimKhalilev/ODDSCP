$('.section-faq-container-items-item-top > img').click(function () {
    var comments = $(this).parent().next();
    var title = $(this).parent().parent();
    var icon = $(this);

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