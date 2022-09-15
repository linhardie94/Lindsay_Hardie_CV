$(document).ready(function () {
    $('#whoIs').hide();


    $('#who').hover(function () {
        $('#whoIs').toggle("slide:right");
    });

    $('#whereIs').hide();


    $('#where').hover(function () {
        $('#whereIs').toggle("slide:right");
    });

    $('#whyIs').hide();


    $('#why').hover(function () {
        $('#whyIs').toggle("slide:right");
    });
});