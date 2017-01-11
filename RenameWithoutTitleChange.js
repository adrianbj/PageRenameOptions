$(document).ready(function() {
    var $nameField = $("#Inputfield__pw_page_name");

    // check if namefield exists, because pages like homepage don't have one
    if(!$nameField.length) return;

    if(typeof InputfieldPageName !== 'undefined') $nameField.val(InputfieldPageName.sanitize($(".InputfieldPageTitle input[type=text]").val())).trigger('blur');
});