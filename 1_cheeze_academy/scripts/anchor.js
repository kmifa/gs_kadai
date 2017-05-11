var FFV = FFV || {};

(function(namespace){

	var Anchor = function(){};

	// var wordRandom = new FFV.WordRandom();

	Anchor.prototype.init = function(){
		Anchor.prototype.onClickId();
		// Anchor.prototype.apperWall();
	}


	Anchor.prototype.onClickId = function(){

		
		

		var speed = 1;
	    var navHeight = 120;
	    var margin = 55;

		$('nav a[href^="#"]').click(function() {

			cancelAnimationFrame(req);
	      
	      
	      var href= $(this).attr("href");
	      var word = $(this).text();
	      var target = $(href == "#" || href == "" ? 'html' : href);
	      var position = target.offset().top - navHeight - margin;

	      Anchor.prototype.apperWall(word);

	      //callback関数にしたい・・・
	      setTimeout(function(){
	      	$('body,html').animate({scrollTop:position}, speed, 'swing');
	      },450);



	      
	      
	      
	      return false;
	    });

	}

	Anchor.prototype.wordRandom = function(select){

		var shuffleWord = "abcdefghijklmnopqrstuvwxyz0123456789",
			wordArray = [],
			selectWordArray = [],
			timer_1,
			selectWord = select,
			selectWordLen = selectWord.length,
			shuffleWordLen = shuffleWord.length,
			speedCount = 0,
			stopCount = 0;


		timer_1 = setInterval(function(){

			speedCount += 1;

			if(speedCount < 100){
				// 止まるまでの処理
				for(var i = 0; i < selectWordLen; i++){
					wordArray[i] = shuffleWord[Math.floor(Math.random() * shuffleWordLen)];
				}
			}else{


				for(var j = stopCount; j < selectWordLen; j++){

					wordArray[j] = shuffleWord[Math.floor(Math.random() * selectWordLen)];
				}

				if(speedCount % 20 == 0){

					wordArray[stopCount] = selectWord[stopCount];
					stopCount += 1;

				}

				if(stopCount == selectWordLen){
					clearInterval(timer_1);

					setTimeout(function(){
						$("#apper-wall").animate({
								opacity : 0,
								left : 100 + "%"
						},600,"easeOutCubic");
						$("body").css({
							overflow : "visible"
						});
						animate();
					},200)
				}
			}

			$("#apper-wall").find("p").text(wordArray.join(""));


		},10);

	}


	Anchor.prototype.apperWall = function(select){

		var wall = $("#apper-wall");

		$("body").css({
			overflow : "hidden"
		});

		wall.css({
			left : -100 + "%",
			opacity : 1
		}).animate({
			left : 0 + "%"
		},400,"easeOutCubic");

		Anchor.prototype.wordRandom(select);


	}


	namespace.Anchor = Anchor;

})(FFV);