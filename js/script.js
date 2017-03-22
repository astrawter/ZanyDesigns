/**
 * Created by afstr on 3/14/2017.
 */

$(document).ready(function () {
    $('ul.nav > li').click(function (e) {
        $('ul.nav > li').removeClass('active');
        $(this).addClass('active');
    });

    $('.navbar-brand').click(function (e) {
        $('ul.nav > li').removeClass('active');
        $('ul.nav >li:first').addClass('active');
    });
});