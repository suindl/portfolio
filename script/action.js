let audioCheck = 1;
$('.lp,.btn_youtube').click(function(){;
    if(audioCheck == 1){
        $('.pause').fadeIn(100)
        $('body').prepend('<div id="youtube_sound"><iframe src="https://www.youtube.com/embed/qR69Rf4IG6g?autoplay=1" allow="autoplay;"></iframe></div>')
        $('.header_box').addClass('on');
        $('#youtube_sound').css('display', 'none');
    }
    audioCheck = 2
    return false
});

$('.pause').click(function(){   
    $('#youtube_sound').remove();
    $('.pause').fadeOut(100)
    $('.header_box').removeClass('on')
    audioCheck = 1
});

$('.header_box .gnb li').mouseover(function(){
    let gnbLeft = $(this).position().left;
    let liW = $(this).width()/2;
    $('.header_box nav .circle').css({left:gnbLeft + liW - 13})
})

$('.header_box .gnb li').click(function(){
    let gnbHref = $(this).find('a').attr('href');
    let targetTop = $('.'+gnbHref).offset().top;
    $('html').animate({scrollTop:targetTop});
    return false
})
$('.memo li').click(function(){
    let gnbHref = $(this).find('a').attr('href');
    let targetTop = $('.'+gnbHref).offset().top;
    $('html').animate({scrollTop:targetTop});
    return false
})

$(window).scroll(function(){
    let scrT = $(this).scrollTop();
    if(scrT >= 1000){
        $('.gotop').fadeIn(200)
    } else {
        $('.gotop').fadeOut(200);
    }
});
$('.goup').click(function(){
    $('html').animate({scrollTop:0});
    return false
});

$('.website').mouseover(function(){
    let moH = $(this).height()
    let imgH = $(this).find('img').height()
    $(this).find('img').css({top:-imgH + moH});
}).mouseout(function(){
    $(this).find('img').css({top:0});
})

$('.mo').mouseover(function(){
    let $img = $(this).find('img');
    let moH = $(this).height();
    let imgH = $img.height();
    $img.stop().animate({ top: -imgH + moH }, 700); // '.mo' 요소에 대한 애니메이션 속도를 500ms로 설정
}).mouseout(function(){
    let $img = $(this).find('img');
    $img.stop().animate({ top: 0 }, 300); // '.mo' 요소에 대한 애니메이션 속도를 500ms로 설정
});



// $('.header_box').click(function() {
//     var $record = $(this).find('.lp');

//     var rotationAngle = 0; 
//     $({ rotation: rotationAngle }).animate({ rotation: rotationAngle + 360 }, {
//         duration: 2000, 
//         easing: 'linear',
//         step: function(now) {
//             $record.css({
//                 transform: 'rotate(' + now + 'deg)'
//             });
//         },
//         complete: function() {
//             rotationAngle += 360;
//         }
//     });
// });
