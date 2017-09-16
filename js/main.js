// home -> contents
$('#top div a').on("click touchend", function(){
	$('#container').fadeIn('fast');
	$('#container section').hide();
    $($(this).attr('href')).fadeToggle('fast');
});
$(document).on('click touchend', function() {
  if (!$(event.target).closest('#top div a').length) {
    /* $('#container').fadeOut('fast'); */
  }
});
$(function(){
    $("#activity-list a").on("click touchend", function() {
        $("#activity-detail article").hide();
        $($(this).attr("href")).fadeToggle('fast');
    });
    return false;
});


//pjax
if ($.support.pjax) {
  $(document).pjax('a[data-pjax]', '#pjax-container')
}
