$(document).ready(function () {
    $(".button-collapse").sideNav({
        menuWidth: 200
    });
    $('.side-nav li').click(() => {
        $('.side-nav').sideNav('hide');
    })
});

