$(document).ready(function(){
	$('.fade').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  slide: '> div',
  cssEase: 'linear'
});
});

$("[data-toggle=tooltip").tooltip();