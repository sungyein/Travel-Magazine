// trigger
  $('.trigger').click(function(){
    $(this).toggleClass('active')
    $('.gnb-wrap').toggleClass('active')
  })
  $('.gnb-wrap a').click(function(){
    $('.gnb-wrap, .trigger').removeClass('active')
  })

