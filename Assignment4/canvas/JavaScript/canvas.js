


	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");

	time();
	
	function time() {
		ctx.clearRect(0,0,canvas.width, canvas.height);
		move();
		car();
	
	}

	
	
	
	
	///////////
	////car////
	///////////

	var car_x = 20;
	var car_y = 170;
	
    function car(){
		ctx.beginPath();
		ctx.moveTo(13 + car_x, 253 + car_y);
		ctx.lineTo(60 + car_x, 216 + car_y);
		ctx.lineTo(174 + car_x, 171 + car_y);
		ctx.lineTo(265 + car_x, 134 + car_y);
		ctx.lineTo(301 + car_x, 131 + car_y);
		ctx.lineTo(387 + car_x, 138 + car_y);
		ctx.lineTo(421 + car_x, 149 + car_y);
		ctx.lineTo(460 + car_x, 170 + car_y);
		ctx.lineTo(477 + car_x, 175 + car_y);
		ctx.lineTo(494 + car_x, 191 + car_y);
		ctx.lineTo(488 + car_x, 236 + car_y);
		ctx.lineTo(483 + car_x, 205 + car_y);
		ctx.lineTo(470 + car_x, 209 + car_y);
		ctx.lineTo(456 + car_x, 239 + car_y);
		ctx.lineTo(449 + car_x, 268 + car_y);
		ctx.lineTo(438 + car_x, 272 + car_y);
		ctx.lineTo(418 + car_x, 261 + car_y);
		ctx.lineTo(353 + car_x, 286 + car_y);
		ctx.lineTo(311 + car_x, 318 + car_y);
		ctx.lineTo(287 + car_x, 328 + car_y);
		ctx.lineTo(295 + car_x, 282 + car_y);
		ctx.lineTo(280 + car_x, 250 + car_y);
		ctx.lineTo(253 + car_x, 243 + car_y);
		ctx.lineTo(221 + car_x, 257 + car_y);
		ctx.lineTo(193 + car_x, 287 + car_y);
		ctx.lineTo(178 + car_x, 329 + car_y);
		ctx.lineTo(181 + car_x, 361 + car_y);
		ctx.lineTo(139 + car_x, 363 + car_y);
		ctx.lineTo(105 + car_x, 359 + car_y);
		ctx.lineTo(70 + car_x, 311 + car_y);
		ctx.lineTo(13 + car_x, 294 + car_y);
		ctx.lineTo(13 + car_x, 282 + car_y);
		ctx.lineTo(21 + car_x, 286 + car_y);
		ctx.lineTo(37 + car_x, 267 + car_y);
		ctx.lineTo(13 + car_x, 253 + car_y);
		ctx.closePath();
		ctx.stroke();
		ctx.fillStyle = "white";
		ctx.fill();
		ctx.beginPath();
		
		ctx.moveTo(13 + car_x, 253 + car_y);
		ctx.lineTo(37 + car_x, 267 + car_y);
		ctx.lineTo(21 + car_x, 286 + car_y);
		ctx.lineTo(13 + car_x, 282 + car_y);
		ctx.lineTo(13 + car_x, 253 + car_y);
		ctx.closePath();
		ctx.stroke();
		ctx.fillStyle = "gray";
		ctx.fill();
		
		ctx.beginPath();
		ctx.moveTo(70 + car_x, 268 + car_y);  
		ctx.lineTo(97 + car_x, 301 + car_y);
		ctx.lineTo(131 + car_x, 295 + car_y);
		ctx.lineTo(160 + car_x, 269 + car_y);
		ctx.lineTo(70 + car_x, 268 + car_y);
		ctx.closePath();
		ctx.stroke();
		ctx.fillStyle = "gray";
		ctx.fill();
		
		ctx.beginPath();
		ctx.moveTo(13 + car_x, 294 + car_y);
		ctx.lineTo(70 + car_x, 311 + car_y);
		ctx.lineTo(105 + car_x, 359 + car_y);
		ctx.lineTo(43 + car_x, 338 + car_y);
		ctx.lineTo(17 + car_x, 315 + car_y);
		ctx.lineTo(13 + car_x, 294 + car_y);
		ctx.closePath();
		ctx.stroke();
		ctx.fillStyle = "gray";
		ctx.fill();
		
		

		
		
		ctx.beginPath();
		ctx.moveTo(365 + car_x, 137 + car_y);
		ctx.lineTo(303 + car_x, 194 + car_y);
		ctx.lineTo(270 + car_x, 200 + car_y);
		ctx.lineTo(141 + car_x, 185 + car_y);
		ctx.lineTo(266 + car_x, 135 + car_y);
		ctx.lineTo(299 + car_x, 133 + car_y);
		ctx.closePath();
		ctx.stroke();
		ctx.fillStyle = "gray";
		ctx.fill();
		
		ctx.beginPath();
		ctx.moveTo(312 + car_x, 206 + car_y);
		ctx.lineTo(368 + car_x, 152 + car_y);
		ctx.lineTo(395 + car_x, 148 + car_y);
		ctx.lineTo(452 + car_x, 177 + car_y);
		ctx.lineTo(312 + car_x, 206 + car_y);
		ctx.closePath();
		ctx.stroke();
		ctx.fillStyle = "gray";
		ctx.fill();
		
		ctx.beginPath();
		ctx.moveTo(181 + car_x, 361 + car_y);
		ctx.lineTo(204 + car_x, 365 + car_y);
		ctx.lineTo(219 + car_x, 368 + car_y);
		ctx.lineTo(237 + car_x, 363 + car_y);
		ctx.lineTo(252 + car_x, 358 + car_y);
		ctx.lineTo(266 + car_x, 344 + car_y);
		ctx.lineTo(287 + car_x, 328 + car_y);
		ctx.lineTo(295 + car_x, 282 + car_y);
		ctx.lineTo(280 + car_x, 250 + car_y);
		ctx.lineTo(253 + car_x, 243 + car_y);
		ctx.lineTo(221 + car_x, 257 + car_y);
		ctx.lineTo(193 + car_x, 287 + car_y);
		ctx.lineTo(178 + car_x, 329 + car_y);
		ctx.closePath();
		ctx.stroke();
		ctx.fillStyle = "black";
		ctx.fill();
		
		ctx.beginPath();
		ctx.moveTo(449 + car_x, 267 + car_y);
		ctx.lineTo(460 + car_x, 275 + car_y);
		ctx.lineTo(467 + car_x, 274 + car_y);
		ctx.lineTo(478 + car_x, 258 + car_y);
		ctx.lineTo(488 + car_x, 236 + car_y);
		ctx.lineTo(483 + car_x, 205 + car_y);
		ctx.lineTo(470 + car_x, 209 + car_y);
		ctx.lineTo(456 + car_x, 239 + car_y);
		ctx.closePath();
		ctx.stroke();
		ctx.fillStyle = "black";
		ctx.fill();
	
	}
    



	//////////////
	//Smork code//
	//////////////
	
	//All circles location
	var smoke_x = 500;
	var smoke_y = 380;
	
	//Circle random
	var circleNumber_All = 10;
	var circleDistribution_All = 80;

	
	//Gradient
	var gradientMoveGray_All = 20;
	var gradientMoveWhite_All = 20;


	
	function smoke(moveX, moveY, size) {
		//Circle random
		var circleNumber = circleNumber_All;
		var circleDistribution = circleDistribution_All * size;

		
		//Gradient
		var gradientMoveGray = gradientMoveGray_All * size;
		var gradientMoveWhite = gradientMoveWhite_All * size;
		

		var grd = ctx.createRadialGradient(smoke_x + Math.random() * gradientMoveGray + gradientMoveGray / 2 + moveX, smoke_y + Math.random() * gradientMoveGray + gradientMoveGray / 2 + moveY, 5 * size,
												smoke_x + Math.random() * gradientMoveWhite + gradientMoveWhite / 2 + moveX, smoke_y + Math.random() * gradientMoveWhite + gradientMoveWhite / 2 + moveY, 120 * size);
		grd.addColorStop(0,"gray");
		grd.addColorStop(1,"white");
		var smoke = new Array();
		
		for (i = 0; i < circleNumber; i++) { 
			smoke[i] = canvas.getContext("2d");
			smoke[i].beginPath();
			smoke[i].arc(smoke_x + (Math.random() * circleDistribution - circleDistribution / 2) + moveX, smoke_y + (Math.random() * circleDistribution - circleDistribution / 2)+ moveY, 40 * size, 0, 2 * Math.PI);
			smoke[i].fillStyle = grd;
			smoke[i].fill();
		}
		
	}
	
	
	var start = 0;
			
	function move(){	
		var j = start;
		
		for(; j < smoke_y; j = j + 105 ) {
			var X = (Math.random() - 0.5) * 40;
			var Y = 0 - j;
			var s = 0.1 + 0.15 * (j / smoke_y) * 4;
			smoke(X, Y, s);
		}
		start = j -smoke_y;

	}
	
	
	var slider = document.getElementById("timeRange");
	var timer = setInterval(time, slider.value);
	
	slider.oninput = function() {
		clearInterval(timer);
		timer = setInterval(time, this.value);
	}
	
	
	