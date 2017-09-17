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
  $(document).pjax('a:not([target]', '#pjax-container')
}

$(function(){
        // pjaxの設定
        $.pjax({
            area : '.detailSns, #contents', //再描画させるエリア
            link : '.pjaxLink', // pjaxを発動させるlinkにつけるclass
            ajax : { timeout: 2500 }, // ajaxの通信のタイムアウト時間
            wait : 200, // 押してから発動するまでの時間
            cache: { click: false, submit: false, popstate: false },  // キャッシュの設定
            load: { head: 'base, meta, link', css: true, script: true },  // 再描画するエリアを選べる、インラインスクリプトを動作させるかどうか
// http://falsandtru.github.io/jquery-pjax/api/callback/

            callbacks:{ // callbackを設定出来る
                    ajax : {  //　
                        success: function(event, setting, data, textStatus, jqXHR){
                             console.log("ajax.success");
                        }
                    },
                    update : {
                        content: {
                            after : function( event, setting, srcContent, dstContent ) {
                                console.log(srcContent + ': update.content.after');
                            }
                        }
                    }
                }
        });
});