$("div[name='tooltip_open']").click(function() {
    if (this.classList.contains("active")) {
        $(this).removeClass("active");
    }
    else {
        $(this).addClass("active");
    }
})