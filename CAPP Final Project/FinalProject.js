

   $(window).on('load resize', function(){
  	console.log('Width: ' + $(window).width() );
	});

	var p = $('.section1').find('p');
	$('.b1').on('click', function(){
	p.addClass('bold');
	console.log(p);
	});
	$('.b2').on('click', function(){
	p.removeClass('bold');
	console.log(p);
	});

	var main = $('.main').find('h1');
	$(main).on('click', function() {
		console.log('Text: ' + $(this).text());
		console.log('Color: ' + $(this).css('color'));
		console.log('font-size: ' + $(this).css('font-size'));
	});
	var main = $('.main').find('h2');
	$(main).on('click', function() {
		console.log('Text: ' + $(this).text());
		console.log('Color: ' + $(this).css('color'));
		console.log('font-size: ' + $(this).css('font-size'));
	});
	var main = $('.main').find('h3');
	$(main).on('click', function() {
		console.log('Text: ' + $(this).text());
		console.log('Color: ' + $(this).css('color'));
		console.log('font-size: ' + $(this).css('font-size'));
	});
	var main = $('.main').find('h4');
	$(main).on('click', function() {
		console.log('Text: ' + $(this).text());
		console.log('Color: ' + $(this).css('color'));
		console.log('font-size: ' + $(this).css('font-size'));
	});
	var main = $('.main').find('h5');
	$(main).on('click', function() {
		console.log('Text: ' + $(this).text());
		console.log('Color: ' + $(this).css('color'));
		console.log('font-size: ' + $(this).css('font-size'));
	});
	var main = $('.main').find('h6');
	$(main).on('click', function() {
		console.log('Text: ' + $(this).text());
		console.log('Color: ' + $(this).css('color'));
		console.log('font-size: ' + $(this).css('font-size'));
	});

	var mainimg = $('.main').find('img');
	console.log(mainimg);
	$(mainimg).on('click', function() {
		console.log('Width: ' + $(this).width());
		console.log('Height: ' + $(this).height());
		console.log('Alt Text: ' + $(this).attr('alt'));
	});


