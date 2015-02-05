var whichSlide = 1;

function slideInit(elem){
	$(".slide").hide();
	$(".slide:nth-child(1)").show();
	$(".slide:nth-child(2)").addClass("slide_next").show();
	addCtrBar(elem);
	$("#slide_ctrb_left").click(function(){
		slidePrev();
	});
	$("#slide_ctrb_right").click(function(){
		slideNext();
	});
}
function slidePrev(){
	if(whichSlide <= 1)
		return;	
	var p = $(".slide:nth-child("+whichSlide+")");
	if(p.next().hasClass("slide"))
		p.next().hide().removeClass("slide_next");
	p.addClass("slide_next");
	if(p.prev().hasClass("slide"))
		p.prev().removeClass("slide_prev");
	if(whichSlide >= 2)
		p.prev().prev().addClass("slide_prev").show();
	whichSlide--;
}
function slideNext(){
	if(whichSlide >= $(".slide").length)
		return;
	var p = $(".slide:nth-child("+whichSlide+")");
	p.addClass("slide_prev");
	p.prev().hide().removeClass("slide_prev");
	p.next().removeClass("slide_next");
	if(whichSlide + 2 <= $(".slide").length)
		p.next().next().addClass("slide_next").show();
	whichSlide++;
}

function addCtrBar(elem){
	$("<a id = 'slide_ctrb_left' href = '#'></a><a id = 'slide_ctrb_right' href = '#'></a>").appendTo(elem);
}