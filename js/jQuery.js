$(function(){

  // 네비게이션 바
  $('.menu-wrap > li').mouseenter(function(){
    if($(this).children().hasClass("sub-menu")) {   // 서브메뉴가 존재한다면,
      $(this).stop().children(".sub-menu").animate({
        height: 'show', 
        width:'100%', 
        opacity:"show"
      }, 300)
      $(this).stop().children(".sub-menu").fadeIn(500);
      $('#globalnav-curtain').fadeIn();
    }
    else{   // 서브메뉴가 없다면,
      $('#globalnav-curtain').fadeOut();
    }
  });

  $('.sub-menu').mouseleave(function(){
    $(this).stop().animate({
      height: 'hide',
      width:'100%', 
      opacity:"show"
    }, 300);
    $(this).stop().fadeOut(300);
    $('#globalnav-curtain').stop().fadeOut();
  })


    // deliver-celeb

    const deliver_celeb_items = $(".item-container > a").get();   // 아이템 배열(4개)
    // 글자 버튼 클릭
    $('.btn-deliver-celeb').on('click', function(){
      const thisBtn = $(this).attr('id').toLocaleLowerCase().split("btn")[1]

      // class 활성화
      $('.btn-deliver-celeb').removeClass("active");
      $(this).addClass("active");

      // 이미지 변경
      if($("#btnDeliver").hasClass("active")){    // QUICK DELIVERY이 활성화 되어있다면,
        $.each (deliver_celeb_items, function(i, el){
          $(this).find('img').attr("src", `../img/delivery0${i+1}.png`);
        })
      }
      else{   // CELEB이 활성화 되어있다면,
        $.each (deliver_celeb_items, function(i, el){
          // TODO: 위에처럼 변경바람
          $(this).find('img').attr("src", "https://images.unsplash.com/photo-1689874099574-b2c02629348b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60");
        })
      }

      // 글자 변경
      $.getJSON('../documents/deliver-celeb-items-list.json', function(data){
        $.each(deliver_celeb_items, function(i, el){
          $(this).find('.item-name').text(data[thisBtn][i].name)
          $(this).find('.item-price').text(`${data[thisBtn][i].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원`)
          $(this).attr("href", `#${data[thisBtn][i].name}`)   // TODO: 링크도 제이슨 파일에 넣고 변경
        })
      })
    })

});