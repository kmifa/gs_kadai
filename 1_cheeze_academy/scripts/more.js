var FFV = FFV || {};

(function(namespace){

	var More = function(){};

	More.prototype.init = function(){

		More.prototype.onClickBtn();

	}

	More.prototype.onClickBtn = function(){

		var btn = $(".more-btn"),
			block = $(".n-blocks");

		btn.on("click",function(){

			block.slideDown(400,function(){
				btn.parent().remove();
			});

		});


	}

	namespace.More = More;


})(FFV);