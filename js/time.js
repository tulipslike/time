$(function(){
  
  $('#all-wrap').each(function(){
    var $wrap = $(this),
        $themeBtn = $wrap.find('.theme-btn'),
        $mobile = $wrap.find('.mobile'),
        $span = $mobile.find('.screen span');       
    
    $themeBtn.on('click', 'a', function(){
      //테마메뉴 부모(li)의 모든 클래스 삭제
      $themeBtn.children().removeClass('on');
      //클릭한 앵커의 부모(li)에 클래스 주기
      $(this).parent().addClass('on');
      
      //#all-wrap 클래스 삭제
      $wrap.removeClass();
      //클릭한 앵커안에 작성된 글자 가져와서 저장(변수)
      //.html() .text() .val()
      //==> #all-wrap 클래스로 추가하기!!
      $wrap.addClass($(this).text());
      
      //CSS 전환효과X ==> 모바일 화면 프레임 아웃 => 인 하기
//      $mobile
//        .stop().animate({right: -1300}, 1000, function(){
//        $(this).stop().animate({right: -300}, 1000)
//      })
    });
    
    //시계 만들기
    setInterval(function(){
      //컴퓨터 시간 가져오기
      var now = new Date(),
          hr = now.getHours(),
          min = now.getMinutes(),
          sec = now.getSeconds();

      if(hr < 10) {
        hrNum = '0' + hr
      } else {
        hrNum = hr
      }
      
      if(min < 10) {
        minNum = '0' + min
      } else {
        minNum = min
      }
      
      if(sec < 10) {
        secNum = '0' + sec
      } else {
        secNum = sec
      }
            
      $span.eq(0).text(hrNum);
      $span.eq(1).text(minNum);
      $span.eq(2).text(secNum);
      
    }, 1000)
    
    //시간에 따라 자동으로 테마 바꾸기
    var now = new Date(),
        hr = now.getHours(),
        $li = $themeBtn.find('li');
      
      if(hr >= 6 && hr < 12) {
        $wrap.removeClass();
        $wrap.addClass('morning');
        $li.removeClass();
        $li.eq(0).addClass('on')
      } else if (hr >= 12 && hr < 18) {
        $wrap.removeClass();
        $wrap.addClass('afternoon');
        $li.removeClass();
        $li.eq(1).addClass('on')
      } else if (hr >= 18 && hr < 22) {
        $wrap.removeClass();
        $wrap.addClass('evening');
        $li.removeClass();
        $li.eq(2).addClass('on')
      } else if (hr >= 22 && hr < 24) {
        $wrap.removeClass();
        $wrap.addClass('night');
        $li.removeClass();
        $li.eq(3).addClass('on')
      } else {
        $wrap.removeClass();
        $wrap.addClass('night');
        $li.removeClass();
        $li.eq(3).addClass('on')
      }
    
    //1분 마다 체크
    /*setInterval(function(){
      var now = new Date(),
        hr = now.getHours(),
        $li = $themeBtn.find('li');
      
      if(hr >= 6 && hr < 12) {
        $wrap.removeClass();
        $wrap.addClass('morning');
        $li.removeClass();
        $li.eq(0).addClass('on')
      } else if (hr >= 12 && hr < 18) {
        $wrap.removeClass();
        $wrap.addClass('afternoon');
        $li.removeClass();
        $li.eq(1).addClass('on')
      } else if (hr >= 18 && hr < 22) {
        $wrap.removeClass();
        $wrap.addClass('evening');
        $li.removeClass();
        $li.eq(2).addClass('on')
      } else if (hr >= 22 && hr < 24) {
        $wrap.removeClass();
        $wrap.addClass('night');
        $li.removeClass();
        $li.eq(3).addClass('on')
      } else {
        $wrap.removeClass();
        $wrap.addClass('night');
        $li.removeClass();
        $li.eq(3).addClass('on')
      }
      
    }, 5000);*/
    //1초 == 1000 x 60초
        
  });
  
});





