$(document).ready(function() {
    var $input = $(".InputfieldPageTitle input[type=text]");
    if($input.length && typeof InputfieldPageName !== 'undefined') initialTitleConverted = InputfieldPageName.sanitize($input.val());
});
