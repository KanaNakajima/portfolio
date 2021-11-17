$(function(){
    // #で始まるリンクをクリックしたら実行されます
    $('a[href^="#about"]').click(function() {
    
      var adjust = 0 ; // 変更
      // スクロールの速度
      let speed = 1000; // ミリ秒で記述
      let href= $(this).attr("href");
      let target = $(href == "#" || href == "" ? 'html' : href);
      let position = target.offset().top + adjust - 90;
      
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
    });
  });