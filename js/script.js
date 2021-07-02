$(document).ready(function() {
	$('#plustoggle').click(function() {
		$("#cardtoggle").slideToggle("slow");
		$("#cardtoggle2").hide();
		$("#cardtoggle3").hide();
	});
	$("#cardtoggle2").hide();
	$('#plustoggle2').click(function() {
		$("#cardtoggle2").slideToggle("slow");
		$("#cardtoggle").hide();
		$("#cardtoggle3").hide();
	});
	$("#cardtoggle3").hide();
	$('#plustoggle3').click(function() {
		$("#cardtoggle3").slideToggle("slow")
		$("#cardtoggle2").hide();
		$("#cardtoggle").hide();
	});
	$('.counter-value').each(function(){
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        },{
            duration: 3500,
            easing: 'swing',
            step: function (now){
                $(this).text(Math.ceil(now));
            }
        });
    });
});