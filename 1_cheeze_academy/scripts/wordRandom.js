var FFV = FFV || {};

(function(namespace){

	var WordRandom = function(){};

	// private

	var shuffleWord = "abcdefghijklmnopqrstuvwxyz0123456789",
		wordArray = [],
		selectWordArray = [],
		timer;

	namespace.WordRandom = WordRandom;

})(FFV);




$(function() {

  var l           = 7;
  var randomWord  = "abcdefghijklmnopqrstuvwxyz0123456789";
  var userWord    = "Hello World"; //最後に出したい文字
  var wordArray   = [];
  var userWordArray = []; //userWord用の配列

  var userWordLength = userWord.length;
  var wordLength  = randomWord.length;
  var randomSpeedCount = 0;
  var wordSpeedCount   = 0;

  var timer;

  for(var ttt = 0; ttt < userWordLength; ttt++){
    userWordArray[ttt] = userWord[ttt];
  }

 
  function startTimer() {

    timer = setInterval(function() {

      wordSpeedCount += 1;
      
      if(wordSpeedCount < 200){
        for(var i = 0; i < userWordLength; i++){
          wordArray[i] = randomWord[Math.floor(Math.random() * wordLength)];
        }
      }else{
          appear();
      }

      $(".test").text(wordArray.join(""));

    }, 10);

  }


  function stopTimer() {
    clearInterval(timer);
  }


  function appear(){

    for (var i = randomSpeedCount; i < userWordLength; i++) {

        wordArray[i] = randomWord[Math.floor(Math.random() * wordLength)];
      
      }
    if(wordSpeedCount % 20 == 0){

      wordArray[randomSpeedCount] = userWordArray[randomSpeedCount];
      randomSpeedCount += 1;
    }

    if(randomSpeedCount == userWordLength){
      stopTimer();
    }
  }

startTimer();


$("button").on("click",function(){

  randomSpeedCount = 0;
  wordSpeedCount = 0;
  startTimer();

});

});