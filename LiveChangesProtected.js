$(document).ready(function() {
    $('.InputfieldPageName input').blur(function() {
        // if they happen to change the name field on their own, then disable from further changes matching name to new title
        modifiedName = $(this).val();
    });
});