

$(function() {
	$("#about").fadeOut();
	$("#trailer").fadeOut();
	$("#cover").hide();

	$('.nav').hide().delay(500).fadeIn(1000);

	$('.links').eq(0).click(function() {
		$('.links').removeClass('selected');
		$(this).addClass('selected');

		$("#cover").fadeOut();
		$("#trailer").fadeOut();
		$("#about").fadeIn("slow");
	})

	$('.links').eq(1).click(function() {
		$('.links').removeClass('selected');
		$(this).addClass('selected');

		$("#cover").fadeOut();
		$("#about").fadeOut();
		$("#trailer").fadeIn("slow");

	})

	$('.links').eq(2).click(function() {
		$('.links').removeClass('selected');
		$(this).addClass('selected');

		$("#about").fadeOut();
		$("#trailer").fadeOut();
		$("#cover").fadeIn("slow");
		
	})


});