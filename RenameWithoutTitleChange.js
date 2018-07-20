$(document).ready(function() {
    var $nameField = $("#Inputfield__pw_page_name");

    // check if namefield exists, because pages like homepage don't have one
    if(!$nameField.length) return;

    if(typeof InputfieldPageName !== 'undefined') {
        var pageTitle = ProcessWire.config.pageRenameOptionsPageTitle ? ProcessWire.config.pageRenameOptionsPageTitle : $(".InputfieldPageTitle input[type=text]").val();
        $nameField.val(InputfieldPageName.sanitize(pageTitle)).trigger('blur');
    }
});