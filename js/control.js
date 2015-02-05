/*control virables*/
var whichBlock = 1;//store a integer indicate which page to be show
var pTimer = null;//print timer


$(document).ready(init);

function init(){

	$("#btn_close").click(closeDoor);
	$("#btn_open").click(openDoor);
	$(".btn_floor").click(panelControl);

	//init printer effect
	$("#foo p").data("text",$("#foo p").text());
	$("#foo").click(function(){
		clearInterval(pTimer);
		$("#foo p").text($("#foo p").data("text"));
	});
	//init slides
	$("#tech section").addClass("slide");
	slideInit($("#tech"));
	//init stickers
	$("#skill section").addClass("sticker");
	initSticker($("#skill"));
	//open the door
	$("#btn_open").click();
}

function closeDoor(e){
	e.stopPropagation();
	$("#lift_door_left").css("left","0");
	$("#lift_door_right").css("right","0");
	$("#lift_door_right").attr("class","lift_door_right_close border");
	switch(whichBlock){
		case 1:
		$("#figure1").css("right","100%");
		$("#intro").css("left","100%");
		break;
		case 2:
		$("#figure2").css("bottom","-100%");
		break;
		case 4:
		clearInterval(pTimer);
		break;

	}

}

function openDoor(e){
	e.stopPropagation();
	$("#lift_door_left").css("left","-50%");
	$("#lift_door_right").css("right","-50%");

	switch(whichBlock){
		case 1:
		$("#figure1").css("right","50%");
		$("#intro").css("left","50%");
		break;
		case 2:
		$("#figure2").css("bottom","0");
		break;
		case 3:
		$("section:nth-child("+whichSlide+")").show();
		break;
		case 4:
		printer($("#foo p"));
		break;
	}

}
function panelControl(e){
	e.stopPropagation();
	var nextBlock = $(this).index() + 1; 
	if(nextBlock == whichBlock) //same level no need to move
	{
		$("#btn_open").click();
		return;
	}

	$(".btn_floor").unbind('click');
	$("#btn_close").click();
	setTimeout(function(){//stay while the door is closing
		$(".content:nth-child("+ whichBlock + ")").hide();
		whichBlock = nextBlock; 
		$(".content:nth-child("+ whichBlock + ")").show();
		$("#indicator").addClass("flickering");
		setTimeout(function(){//stay while the elevator is moving;
			$("#btn_open").click();
			$(".btn_floor").click(panelControl);
			$("#indicator").removeClass("flickering").text("floor " + whichBlock);
		},1000);
	}, 1000);
}


function printer(elem){
	var txt = elem.data("text");
	elem.text("").show();
	if(pTimer){
		clearInterval(pTimer);
	}
	var i = 0;
	pTimer = setInterval(function(){
		elem.append(txt[i++]);
		if(i >= txt.length)
			clearInterval(pTimer);
	}, 100);
}