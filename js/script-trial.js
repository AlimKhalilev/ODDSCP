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

    $("#connect_type").selectric();
});
