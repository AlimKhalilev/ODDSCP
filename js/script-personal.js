$(document).ready(function() {
    $("#copy_text").click(function() {
        var text = $('#copy_text').text();
        var $temp = $("<input>");
	    $("body").append($temp);
	    $temp.val($('#copy_text').text()).select();
	    document.execCommand("copy");
	    $temp.remove();
        $(this).text('Ключ скопирован!');
        setTimeout(function() {
            $("#copy_text").text(text);
        }, 2000);
    });

    $(".section-personal-container-bottom-password-form-input > img").click(function() {
        var input = $(this).prev();
        if (this.name == "pass_show") {
            input.attr("type", "password");
            $(this).attr("name", "pass_hide");
            $(this).attr("src", "dist/img/pass-hide.svg");
        }
        else {
            input.attr("type", "text");
            $(this).attr("name", "pass_show");
            $(this).attr("src", "dist/img/pass-show.svg");
        }
    });
});
