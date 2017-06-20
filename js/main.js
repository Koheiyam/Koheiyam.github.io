$(function(){
    $('#btn div a').click(function(){
    	$('#black').fadeIn('fast');
    	$('#black section').hide();
        $($(this).attr('href')).fadeToggle('fast');
    });
    $('#black').click(function(){
    	$('#black').fadeOut();
    });
});