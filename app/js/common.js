$(function() {

	$('.video-wrapper iframe').each(function(){
		var videoW = $(this).width();
		
		$(this).height(videoW*9/16);
	})

	$(window).resize(function() {
		$('.video-wrapper iframe').each(function(){
			var videoW = $(this).width();
			
			$(this).height(videoW*9/16);
		})
	})

	$('.video-button').on('click', function(e) {
		e.preventDefault();
		$(this).parent().find('iframe')[0].src += '?autoplay=1';
		$(this).parent().find('iframe').show();
		$(this).parent().find('.video-cover').hide();
		$(this).hide();
	})

	var timeLeft = +$('#time-left').data('time-left');
	$('#time-left').html(calcTimeLeft(timeLeft));
	let timer = setInterval(() => {
		timeLeft-=1;
		
		$('#time-left').html(calcTimeLeft(timeLeft));
	}, 60000)


	$('#hamburger').click(function(){
		$('.abc_left_bar').addClass("active");
		
	})
	$('.progress-bar').progressBar();
	

	$(document).click(function (e){ // событие клика по веб-документу
		var div = $(".abc_left_bar"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0 && !$('#hamburger').is(e.target) && $('#hamburger').has(e.target).length === 0) { // и не по его дочерним элементам
			div.removeClass("active"); // скрываем его
		}
	});

	$('.schedule-box_week').each(function() {
		var daysTrain = $(this).data('days').split(',').map(item => +item);
		for(var i = 0; i<daysTrain.length; i++) {
			$(this).find('.schedule-box_week__item').eq(daysTrain[i] - 1).addClass('train');
		}
		$(this).find('.schedule-box_week__item').not('.train').find('.schedule-box_week__item-text').remove();

	});

	$('.schedule-box').click(function(){
		$('.schedule-box').removeClass('selected');
		$(this).addClass('selected');
		$('[name=schedule-week][value="'+($(this).index()+1)+'"]').prop('checked', true);
	})

});

new SimpleBar($('#left-bar')[0]);

function calcTimeLeft(val) {
	let hours = Math.floor(val/60);
	if(hours<10) {
		hours = '0'+hours;
	}
	let minutes = val%60;
	if(minutes<10) {
		return hours+" : 0" + minutes;
	}
	return hours+" : " + minutes;
}

$.fn.progressBar = function() {
	var currentStep =  this.data('step');
	var countSteps = this.find('.step').length;
	this.find('.step').eq(currentStep - 1).addClass('current');
	for(var i = 0; i<currentStep-1; i++) {
		this.find('.step').eq(i).addClass('colored');
	} 
	var widthBar = 100/(countSteps - 1)*(currentStep - 1);
	widthBar = (widthBar==100)? 98 : widthBar;
	this.find('.colored-line').width(widthBar+"%");
};