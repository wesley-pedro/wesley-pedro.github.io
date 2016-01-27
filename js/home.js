$(document).ready(main);

function main (){
	$('.btn-menu').click(function() {
		$('nav, #mascara').attr('class', $('nav').hasClass('open') ? '' : 'open');
		$('nav')[0].scrollTop = 0;
		$('.filhos-submenu').slideUp('fast');
		$('body').css({ 'overflow': $('nav').hasClass('open') ? 'hidden' : 'auto' });
		$('#icon-mobile').toggleClass('open-menu');
	});

	$('#mascara').on('vmousedown', function() {
		$('nav, #mascara').removeClass('open');
		$('body').css({'overflow':'auto'});
		$('#icon-mobile').toggleClass('open-menu');
	});

	$('.submenu').click (function() {
		$(this).children('.filhos-submenu').slideToggle('fast');
	});
}

$(document).ready(function() {
	var dragging = false, distanceOfScreen = 0;
	$('nav').on('vmousedown', function (e) {
		distanceOfScreen = e.clientX;
		dragging = true;


	}).on('vmouseup', function (e) {
		if (parseInt($('nav').css('left')) * -5 > $('body')[0].offsetWidth / 2){
			$('nav, #mascara').removeClass('open');
			$('body').css({'overflow':'auto'});
			$('#icon-mobile').removeClass('open-menu');
		}else{
			$('body').css({'overflow':'hidden'});
			$('#icon-mobile').addClass('open-menu');
		}
		$('nav').removeAttr('style');
		dragging = false;
	});

	$('html').on('vmousedown', function(p){
			pegar = p.pageX;
	}).on('vmouseup', function(e){
		if ((pegar) < 50){
			$('nav, #mascara').attr('class', $('nav').hasClass('open') ? '' : 'open');
			$('#icon-mobile').toggleClass('open-menu');
		}
		$('.btn-menu').bind('click');
	})

	$('nav').on('vmousemove', function(e) {
		if (!dragging)
			return;

		// if(dragging){
		// 	$('.btn-menu').unbind('click');
		// }

		var distance = -(distanceOfScreen - e.clientX)
		if (distance <= 0)
			$('nav').css({ 'left': - (distanceOfScreen - e.clientX) + 'px', 'transition': 'none'});
	});
});

//vmouse... indica o drop no celular


// taphold = mouseup
// tap = click
// swipe = deslizar
// swipeleft = deslizar para esquerda
// swiperight = deslizar para direita