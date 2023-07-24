$(document).ready(function(){

  // 네비게이션 바
  $('.menu-wrap > li').mouseenter(function(){
      if($(this).children().hasClass("sub-menu")) {
        $(this).children(".sub-menu").addClass("go");
        $('.white-box').slideDown(300).addClass( "active" );
        $('#globalnav-curtain').css('opacity', 1);
      }else{
        $(".menu-wrap").children("*").removeClass("go");
        $(this).children(".sub-menu").css('opacity', 0);
        $('.white-box').stop().slideUp(300).removeClass( "active" );
        $('#globalnav-curtain').css('opacity', 0);
      }
    });
    // $('.menu-wrap > li').mouseleave(function(){
    //   $(this).stop();
    //   $(this).children(".sub-menu").removeClass( "go" );
    //   $('.white-box').slideUp().removeClass( "active" );
    //   $('#globalnav-curtain').css('opacity', 0);
    // });

    $('.white-box').mouseenter(function(){
      $(this).css('display', block);
    });
    $('.white-box').mouseleave(function(){
      $('.sub-menu').removeClass( "go" );
      $('.white-box').stop().slideUp(300).removeClass( "active" );
      $('#globalnav-curtain').css('opacity', 0);
    });


    

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
        console.log(data[thisBtn])
        $.each(deliver_celeb_items, function(i, el){
          $(this).find('.item-name').text(data[thisBtn][i].name)
          $(this).find('.item-price').text(`${data[thisBtn][i].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원`)
          $(this).attr("href", `#${data[thisBtn][i].name}`)   // TODO: 링크도 제이슨 파일에 넣고 변경
        })
      })
    })

});