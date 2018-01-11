$(function(){
    $('a').click(function(){
            var url = $(this).attr('href');
            if (url != '') {
                $('body').fadeOut(240);
                setTimeout(function(){
                    location.href = url;
                }, 240);
            }
            return false;
    });
});