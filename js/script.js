function cursorAnimation(){
	$('#cursor').animate({
		opacity: 0
	}, 'fast', 'swing').animate({
		opacity: 1
	}, 'fast', 'swing');
}

var textLength = 0;
var textArr = [
	'Hello there, My name is John Otu',
	'this is line 2',
	'this is line 3'
	]

$(document).ready(function(){
	$('.console').append('<span>johnotu:~$ </span><span id="text"></span><span id="cursor"> | </span>');

	setInterval ('cursorAnimation()', 600);

	typeText();
})

 

function typeText(){
	textField = $('#text');
	text = textArr[1];
	type();
}

function type(){
	textField.html(text.substr(0, textLength++));
	if(textLength < text.length+1){
		setTimeout('type()', 50);
	} else {
		textLength = 0;
		text = '';
	}
}