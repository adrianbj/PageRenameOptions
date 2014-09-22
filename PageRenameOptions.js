/**
 * Convert a title/headline to an ASCII URL name
 *
 * 1. Convert accented characters to the ASCII equivalent.
 * 2. Convert non -_a-z0-9. to blank.
 * 3. Replace multiple dashes with single dash.
 * 4. This is a modified version of InputfieldPageTitle.js that ensures that the name always changes whenever the title changes
 */


$(document).ready(function() {

    var $nameField = $("#Inputfield__pw_page_name");

    // check if namefield exists, because pages like homepage don't have one
    if(!$nameField.length) return;

    var $titleField = $(".InputfieldPageTitle input[type=text]");
    initialName = $('.InputfieldPageName input').val();
    pageAutoRename_active = true;

    $(".InputfieldPageName .LanguageSupport input[type=text]").each(function() {
        // if language support enabled and any of the page names contains something
        // then prevent title from populating name fields
        if($(this).val().length > 0) pageAutoRename_active = false;
    });

    var pageAutoRename_titleKeyup = function() {
        if(!pageAutoRename_active) return;
        if(typeof initialTitleConverted !== 'undefined' && initialTitleConverted != initialName) return; // don't change name if the name was already different at the start of editing
        if(typeof modifiedName !== 'undefined' && modifiedName != initialName) return;

        // var val = $(this).val().substring(0, 128);
        var val = $(this).val(); // @adrian
        var id = $(this).attr('id').replace(/Inputfield_title_*/, 'Inputfield__pw_page_name');
        $nameField = $("#" + id);
        if($nameField.size() > 0) $nameField.val(val).trigger('blur');
    }

    // $titleField.keyup(titleKeyup);
    if(pageAutoRename_active) $titleField.bind('keyup change', pageAutoRename_titleKeyup);

});
