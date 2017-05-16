$(function(){
	
	var data_obj = {
		obj_inner : {
			memo1 : "",
			memo2 : "",
			memo3 : "",
			memo4 : "",
			memo5 : ""
		}
	};

	

	var count = 1;
	var list = $("#list");
	var memoList = $('[name=memo-list]');
	var memo = $("#memo-area");

	// load時に一回だけ読み込む
	chrome.storage.local.get("obj_inner", function(items) {
		
		if(items.obj_inner){
			
			memo.val(items.obj_inner.memo1);
			data_obj = {
				obj_inner : {
					memo1 : items.obj_inner.memo1,
					memo2 : items.obj_inner.memo2,
					memo3 : items.obj_inner.memo3,
					memo4 : items.obj_inner.memo4,
					memo5 : items.obj_inner.memo5
				}
			};
		}
  
	});

	// 	chrome.storage.local.get("obj_inner", function(items) {
 //    	memo.val(items.obj_inner.memo1);
 //    	console.log(items.obj_inner);
	// 	// $('[name=memo-list]').change(function(){
	// 	// 	var $this = $(this).val();
	// 	// 	console.log($this)
	// 	// 	switch($this){
	// 	// 		case "memo1":
	// 	// 			memo.val(items.obj_inner.memo1);
	// 	// 			console.log(data_obj.obj_inner.memo1)
	// 	// 			break;
	// 	// 		case "memo2":
	// 	// 			memo.val(items.obj_inner.memo2);
	// 	// 			break;
	// 	// 		case "memo3":
	// 	// 			memo.val(items.obj_inner.memo3);
	// 	// 			break;
	// 	// 		case "memo4":
	// 	// 			memo.val(items.obj_inner.memo4);
	// 	// 			break;
	// 	// 		case "memo5":
	// 	// 			memo.val(items.obj_inner.memo5);
	// 	// 			break;	
	// 	// 	}
	// 	// });
	// });

	$('[name=memo-list]').change(function(){
		var $this = $(this).val(); //option value

		chrome.storage.local.get("obj_inner", function(items) {
			console.log(items)
			if(items.obj_inner){
		    	switch($this){
					case "memo1":
						memo.val(items.obj_inner.memo1);
						break;
					case "memo2":
						memo.val(items.obj_inner.memo2);
						break;
					case "memo3":
						memo.val(items.obj_inner.memo3);
						break;
					case "memo4":
						memo.val(items.obj_inner.memo4);
						break;
					case "memo5":
						memo.val(items.obj_inner.memo5);
						break;	
				}
			}
		});
	});

	// $('[name=memo-list]').change(function(){
	// 	var $this = $(this).val();
	// 	console.log(data_obj.obj_inner)
	// 	switch($this){
	// 		case "memo1":
	// 			memo.val(data_obj.obj_inner.memo1);
	// 			console.log(data_obj.obj_inner.memo1)
	// 			break;
	// 		case "memo2":
	// 			memo.val(data_obj.obj_inner.memo2);
	// 			break;
	// 		case "memo3":
	// 			memo.val(data_obj.obj_inner.memo3);
	// 			break;
	// 		case "memo4":
	// 			memo.val(data_obj.obj_inner.memo4);
	// 			break;
	// 		case "memo5":
	// 			memo.val(data_obj.obj_inner.memo5);
	// 			break;	
	// 	}
	// });
	

	$("#save").on("click",function(){

		// var save = new Date();
		// var year = save.getFullYear();
		// var month = save.getMonth() + 1;
		// var day = save.getDate();

		
		// var title = $("#title-area").val();
		// var date = year + "/" + month + "/" + day;
		// var url = location.href;

		
		// var html;

		// local_obj.id = count;

		// if(title){
		// 	local_obj.title = title;	
		// }else{
		// 	local_obj.title = "MEMO_" + count;
		// }
		
		

		
		// html += '<li>' + local_obj.memo + '</li>';
		// html = '<li>' + local_obj.title;
		// html += '<div>' + local_obj.memo + '</div>';
		// html += '</li>';

		// list.append(html);

		var memoListVal = memoList.val();
		var memoVal = memo.val();


			switch(memoListVal){
				case "memo1":
					data_obj.obj_inner.memo1 = memoVal;
					break;
				case "memo2":
					data_obj.obj_inner.memo2 = memoVal;
					break;
				case "memo3":
					data_obj.obj_inner.memo3 = memoVal;
					break;
				case "memo4":
					data_obj.obj_inner.memo4 = memoVal;
					break;
				case "memo5":
					data_obj.obj_inner.memo5 = memoVal;
					break;	
			}

		


		chrome.storage.local.set(data_obj, function() {
		    console.log(data_obj);
		});

		// count++;

	});

	$("#clear").on("click",function(){

		chrome.storage.local.clear(function(){
			memo.val("");
			console.log("all clear");
		});

	});



	// $(document).on("click","li",function(){
	// 	var list = $("#list");
	// 	var $this = $(this);
	// 	list.find("div").slideUp();
	// 	$this.find("div").slideDown();
	// });

});