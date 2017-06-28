// home -> contents
$('#btn div a').on("click touchend", function(){
	$('#black').fadeIn('fast');
	$('#black section').hide();
    $($(this).attr('href')).fadeToggle('fast');
});
$(document).on('click touchend', function() {
  if (!$(event.target).closest('.contents, #activity-list, #activity-detail, #btn div a').length) {
    $('#black').fadeOut('fast');
  }
});
$(function(){
    $("#activity-list a").on("click touchend", function() {
        $("#activity-detail article").hide();
        $($(this).attr("href")).fadeToggle('fast');
    });
    return false;
});


//lazyload
