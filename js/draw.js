$(document).ready(function(){
	drawLift();
});

function drawLift(){
	var c = document.getElementById("lift");
	var ctx = c.getContext("2d");
	var h = c.height = window.innerHeight , w = c.width = window.innerWidth;/*canvas needs resize*/
	var rWX = .05, rWY = .05,rBY = .1,rBX = .1;
	var pts = [
	[0,0],[rWX*w,rWY*h],[w-rWX*w,rWY*h],[w,0],
	[0,0],[rWX*w,rWY*h],[rWX*w,h-rWY*h],[0,h],
	[0,h],[rWX*w,h-rWY*h],[w-rWX*w,h-rWY*h],[w,h],
	[w,h],[w-rWX*w,h-rWY*h],[w-rWX*w,rWY*h],[w,0],
	];
	var rects = [
	[w*rWX,h*rWY],[w*(1-rWX*2),h*(rBY)],
	[w*rWX,h*(rWY+rBY)],[w*rBX,h*(1-2*rWY-rBY)],
	[w*(1-rWX-rBX),h*(rWY+rBY)],[w*rBX,h*(1-2*rWY-rBY)],
	];
	var grdDir = [
	[0,0],[0,rWY*h],
	[0,0],[rWX*w,0],
	[0,h],[0,h-rWY*h],
	[w,h],[w-rWX*w,h]
	];
	var lightBlue = "#addfff";
	var darkBlue = "#576d7c";
	
	/*top left bottom right*/
	for(var i = 0; i < 4; i++){
		var grd = ctx.createLinearGradient(grdDir[i*2 + 0][0],grdDir[i*2 + 0][1],grdDir[i*2 + 1][0],grdDir[i*2 + 1][1]);
		grd.addColorStop(0,lightBlue);
		grd.addColorStop(1,darkBlue);
		ctx.fillStyle = grd;
		ctx.beginPath();
		ctx.moveTo(pts[i*4 + 0][0],pts[i*4 + 0][1]);
		ctx.lineTo(pts[i*4 + 1][0],pts[i*4 + 1][1]);
		ctx.lineTo(pts[i*4 + 2][0],pts[i*4 + 2][1]);
		ctx.lineTo(pts[i*4 + 3][0],pts[i*4 + 3][1]);
		ctx.fill();
		ctx.stroke();
	}

	/*top left right bar*/
/*	ctx.fillStyle = darkBlue;
	for(var i = 0; i < 3;i++){
		ctx.beginPath();
		ctx.rect(rects[i*2][0],rects[i*2][1],rects[i*2+1][0],rects[i*2+1][1]);
		ctx.fill();
		ctx.stroke();
	}*/
}