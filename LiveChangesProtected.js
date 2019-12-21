$(document).ready(function() {
    // if they happen to change the name field on their own, then disable from further changes matching name to new title
    $('.InputfieldPageName input').blur(function() {
        modifiedName = $(this).val();
    });
    // need focus in addition to blur as sometime one works and sometimes the other
    $('.InputfieldPageName input').focus(function() {
        modifiedName = $(this).val();
    });
});