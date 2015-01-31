$(document).ready(function(){
	$("#btn_open").click(function(){
		$("#lift_door_left").attr("lang","open");
		$("#lift_door_right").attr("lang","open");
	});
	$("#btn_close").click(function(){
		$("#lift_door_left").removeAttr("lang");
		$("#lift_door_right").removeAttr("lang");
	});
	$("#btn_turn").click(function(){
		$("#lift").attr("lang","turn");

	})
});