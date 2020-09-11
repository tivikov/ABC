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
		$(this).find('.schedule-box_week__item').not('.train').find('.schedule-box_week__item-text').hide();

	});

	$('.schedule-rest').each(function() {
		var dayRest = +$(this).data('rest');
		$(this).find('.schedule-box_week__item').eq(dayRest-1).addClass('rest');
		$(this).find('.schedule-box_week__item').not('.train').find('.schedule-box_week__item-text').show().html('<span>Задание</span><span class="short">З</span>');
		$(this).find('.schedule-box_week__item.rest').find('.schedule-box_week__item-text').html('<span>Выходной</span><span class="short">В</span>');

	})

	$('.schedule-box').click(function(){
		$('.schedule-box').removeClass('selected');
		$(this).addClass('selected');
		$('[name=schedule-week][value="'+($(this).index()+1)+'"]').prop('checked', true);
	})


	$('.select-time__item').each(function(e){
		var input = $(this).find('.select-time__item-input');
		var defaultTime = input.data('default');
		input.val(defaultTime);
		input.clockpicker({
			donetext: "Применить"
		});
		
	})
	$('.select-time-widget').each(function(e){
		var input = $(this).find('.select-time__item-input');
		var defaultTime = input.data('default');
		input.val(defaultTime);
		input.clockpicker();
		
	})
	var prevArrow = '<div class="prev-arrow"><svg width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d)"><circle r="21" transform="matrix(-1 0 0 1 33 33)" fill="white"/></g><path d="M22.2929 33.7071C21.9024 33.3166 21.9024 32.6834 22.2929 32.2929L28.6569 25.9289C29.0474 25.5384 29.6805 25.5384 30.0711 25.9289C30.4616 26.3195 30.4616 26.9526 30.0711 27.3431L24.4142 33L30.0711 38.6569C30.4616 39.0474 30.4616 39.6805 30.0711 40.0711C29.6805 40.4616 29.0474 40.4616 28.6569 40.0711L22.2929 33.7071ZM43 34L23 34V32L43 32V34Z" fill="#0451A5"/><defs><filter id="filter0_d" x="0" y="0" width="74" height="74" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dx="4" dy="4"/><feGaussianBlur stdDeviation="8"/><feColorMatrix type="matrix" values="0 0 0 0 0.0156863 0 0 0 0 0.317647 0 0 0 0 0.647059 0 0 0 0.1 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg></div>';
	
	var nextArrow= '<div class="next-arrow"><svg width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d)"><circle cx="33" cy="33" r="21" fill="white"/></g><path d="M43.7071 33.7071C44.0976 33.3166 44.0976 32.6834 43.7071 32.2929L37.3431 25.9289C36.9526 25.5384 36.3195 25.5384 35.9289 25.9289C35.5384 26.3195 35.5384 26.9526 35.9289 27.3431L41.5858 33L35.9289 38.6569C35.5384 39.0474 35.5384 39.6805 35.9289 40.0711C36.3195 40.4616 36.9526 40.4616 37.3431 40.0711L43.7071 33.7071ZM23 34L43 34V32L23 32V34Z" fill="#0451A5"/><defs><filter id="filter0_d" x="0" y="0" width="74" height="74" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dx="4" dy="4"/><feGaussianBlur stdDeviation="8"/><feColorMatrix type="matrix" values="0 0 0 0 0.0156863 0 0 0 0 0.317647 0 0 0 0 0.647059 0 0 0 0.1 0"/<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg></div>';

	var helpSlick = $('.help-popup').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: false,
		slide: 'div',
		dots: true,
		prevArrow: prevArrow,
		nextArrow: nextArrow,
		afterChange: function(event, slick, currentSlide, nextSlide) {
			console.log(nextSlide);
		}
	});

	helpSlick.on('beforeChange', function(event, slick, currentSlide, nextSlide){
		// finally let's do this after changing slides
		var lastSlide = (nextSlide+1 == slick.slideCount)?true:false;
		// console.log(lastSlide);
		if(lastSlide) {
			$('.next-arrow').html('<svg width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg"> <g filter="url(#filter0_d)"> <circle cx="33" cy="33" r="21" fill="white"/> </g> <path d="M34.5425 33L39.7772 27.765C39.9212 27.6209 40.0007 27.4287 40.0009 27.2237C40.0009 27.0185 39.9215 26.8261 39.7772 26.6822L39.3185 26.2236C39.1743 26.0791 38.982 26 38.7768 26C38.5719 26 38.3797 26.0791 38.2354 26.2236L33.0007 31.4582L27.7657 26.2236C27.6217 26.0791 27.4293 26 27.2242 26C27.0193 26 26.827 26.0791 26.683 26.2236L26.224 26.6822C25.9253 26.9809 25.9253 27.4667 26.224 27.765L31.4589 33L26.224 38.2347C26.0799 38.3791 26.0006 38.5713 26.0006 38.7763C26.0006 38.9813 26.0799 39.1736 26.224 39.3178L26.6829 39.7764C26.8269 39.9208 27.0193 40 27.2241 40C27.4292 40 27.6216 39.9208 27.7656 39.7764L33.0006 34.5417L38.2353 39.7764C38.3795 39.9208 38.5718 40 38.7767 40H38.7769C38.9819 40 39.1742 39.9208 39.3184 39.7764L39.7771 39.3178C39.9211 39.1737 40.0006 38.9813 40.0006 38.7763C40.0006 38.5713 39.9211 38.3791 39.7771 38.2349L34.5425 33Z" fill="#0451A5"/> <defs> <filter id="filter0_d" x="0" y="0" width="74" height="74" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/> <feOffset dx="4" dy="4"/> <feGaussianBlur stdDeviation="8"/> <feColorMatrix type="matrix" values="0 0 0 0 0.0156863 0 0 0 0 0.317647 0 0 0 0 0.647059 0 0 0 0.1 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/> </filter> </defs> </svg>').addClass('close-help');
		}
		else {
			$('.next-arrow').html(nextArrow).removeClass('close-help');
		}
});
	if($('div').is('#help')) {
		$('.help').magnificPopup({
			closeBtnInside: false,
			showCloseBtn: false,
			callbacks: {
				open: function() {
					helpSlick.slick('refresh');
				},
				close: function() {
					helpSlick.slick('slickGoTo', 0);
					$('.next-arrow').html(nextArrow).removeClass('close-help');
					helpSlick.slick('refresh');
				}
			}
		});

		
		
	}

	$('.open-default-popup').magnificPopup();
	$(document).click(function(e){
		if($(e.target).parents('.close-help').length != 0) {
			$.magnificPopup.close();
		}
	})
	$('.apply-close').click(function(){
		$.magnificPopup.close();
	})	

	$('.set-timer').setsTimer();
	$('.testing-timer').setStartTimer();
	if($('.testing-list').length > 0) {
		new SimpleBar($('.testing-list')[0], {autoHide: false });
	}
	
	
});

// new SimpleBar($('#left-bar')[0]);

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
	widthBar = (widthBar<50)? (widthBar+2): widthBar;
	this.find('.colored-line').width(widthBar+"%");
};

$.fn.setStartTimer = function () {
	if(this.length == 0) {
		return;
	}
	let starting = false;
	let ths = this;
	let seconds = 0;
	let timer;

	this.find('.button-reset').click(function(){
		starting = false;
		seconds = 0;
		ths.find('.testing-timer-number span').html(getHMS(seconds));
		$('.testing-timer-result').hide();
		ths.find('.button-timer').html('Старт');
		ths.find('.testing-timer-number span').removeClass('bold');
		$(this).hide();
	})
	this.find('.button-timer').click(function(){
		if(!starting) {
			timer = setInterval(() => {
				seconds++;
				ths.find('.testing-timer-number span').html(getHMS(seconds));
				
			}, 1000)
			$(this).html('Стоп');
			starting = true;
			
		}
		else {
			$('.testing-timer-result').show();
			ths.find('.testing-timer-number span').addClass('bold');
			$(this).html('Сохранить');
			clearInterval(timer);
			showResetButton();
		}
	});
	
	function showResetButton() {
		ths.find('.button-reset').show();
	}
}

$.fn.setsTimer = function() {
	if(this.length == 0) {
		return;
	}
	const regexp = /tm:(\d+)?/g;
	let str = this.html();
	
	let searchStr = [...str.matchAll(regexp)][0][0];
	
	let seconds = [...str.matchAll(regexp)][0][1];
	str = str.replace(searchStr, "");
	this.html(str);
	this.append('<div class="time-str">'+getHMS(seconds)+'</div>');
	this.append('<button type="button" class="time-button">Старт</button>');
	let ths = this;

	this.find('.time-button').click(function(){
		if(seconds <= 0) {
			return;
		}
		let timerCount = setInterval(() => {
			
			seconds--;
			ths.find('.time-str').html(getHMS(seconds));
			if(seconds <= 0) {
				clearInterval(timerCount);
			}
		}, 1000)
	})
	
}

function getHMS(val) {
	let hours = Math.floor(val/3600);
	let minutes = Math.floor(val/60) - (hours * 60);
	let seconds = val%60;
	let formatted = [
		hours.toString().padStart(2, '0'),
		minutes.toString().padStart(2, '0'),
		seconds.toString().padStart(2, '0')
	].join(':');
	return formatted;
}
