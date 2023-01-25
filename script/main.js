// dark-mode
var count = 0;

$('.badge').on('click', function(){
  count = count + 1;
  if (count % 2 == 1){
    $('.badge').html('Light Mode 🔄');
    $('.light').addClass('dark');
    $('.dark').removeClass('light');
  } else {
    $('.badge').html('Dark Mode 🔄');
    $('.dark').addClass('light');
    $('.dark').removeClass('dark');
  }
});

