String.prototype.repeat = function(num) {
    return new Array(num + 1).join(this);
}

function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

function getRandomDirection() {
	return {x: Math.random()*2-1, y: Math.random()*2-1};
}

$(document).ready(function() {
	/* Code to generate dummy data. */
	// var html = $('.columns').html();
	// var replicated = html.repeat(4);
	// $('.columns').html(replicated);
	// $('img').each(function(i) {
	// 	$(this).attr('src', 'img/' + (i+1) + '.jpg');
	// });

	var area = [0,0,$('body').width(),$('body').height()]
	$('body').imagesLoaded(function() {
		$('a').each(function(i) {
			$(this).throwable({
				autostart: true,
				impulse: {
					f: 50,
					p: getRandomDirection()
				},
				gravity: {
					x: 0, y: 0
				},
				bounce: 0.5,
				containment: area,
				damping: 5,
				shape: "box"
			});
		});
	});
});


