function checkIt() {
  // Initialize scores
  var fail = 0;
  var study = 0;
  var more = 0;
  var relax = 0;
  var quiz = 0;
  // Get all checkbox elements from form
  var elements = document.getElementsByClassName('answer');

  // Tally results
  for (var e of elements) {

    if (e.checked) {
      if (e.value == 'fail') {
        fail++;
      }
      else if (e.value == 'study'){
        study++;
      }
      else if (e.value == 'more'){
        more++;
      }
      else if (e.value == 'relax'){
        relax++;
      }
      else if (e.value == 'quiz'){
        quiz++;
      }
    }
  }

  // Determine result
  var counts = "Fail: " + fail +  ", " + "Start Studying: " + study + ", " + "Study More: " + more +  ", " +  "Relax: " + relax +  ", " + "Keep taking quizzes: " + quiz;


  // What is the highest value?
  var max = Math.max(fail, study, more, relax, quiz);

  // Form a message
  var message;

  if (max == fail) {
    message = "Oh no, you won’t pass. Maybe if you pull out that old textbook AND STOP TAKING QUIZZES ONLINE you’ll be ok... Good luck with your future in your mom’s basement";
  }
  else if (max == study) {
    message = "You better start studying if you want to be sure to pass. Get off your lazy bum AND STOP TAKING QUIZZES ONLINE unless you want to be flipping burgers for the rest of your life!";
  }
  else if (max == more) {
    message = "You’ll pass after some more studying. Keep focus and keep going. You might do better if you get a tutor AND STOP TAKING QUIZZES ONLINE!!! ";
  }
  else if (max == relax) {
    message = "You got this! You’ll pass. Just relax and keep on going. You shouldn’t really keep taking quizzes online, but instead go over a few key concepts in your notes. ";
  }
  else if (max == quiz) {
    message = "You definitely will pass ( and probably know this ). You’re already so prepared you could take a couple more quizzes. ";
  }

// custom result title
  var title = "Make a Pizza to See if You'll Pass Your Finals";

// custom result header
  var heading;

  if (max == fail) {
    heading = "Sorry, But You're Going to FAIL!";
  }
  else if (max == study) {
    heading = "You Need to Start Studying";
  }
  else if (max == more) {
    heading = "You Should Study Some More";
  }
  else if (max == relax) {
    heading = "You Need to Chill";
  }
  else if (max == quiz) {
    heading = "You're Going to Ace This ";
  }

  var image;

  if (max == fail) {
    image = "<img src='img/quiz_1/fail.jpg'/>";
  }
  else if (max == study) {
    image = "<img src='img/quiz_1/study.jpg'/>";
  }
  else if (max == more) {
    image = "<img src='img/quiz_1/more.jpg'/>";
  }
  else if (max == relax) {
    image = "<img src='img/quiz_1/relax.jpg'/>";
  }
  else if (max == quiz) {
    image = "<img src='img/quiz_1/quiz.jpg'/>";
  }
  // Display result
  //document.getElementById('result').innerHTML = counts;
    document.getElementById('result-text').innerHTML = message;
    document.getElementById('result-title').innerHTML = title;
    document.getElementById('result-heading').innerHTML = heading;
    document.getElementById('result-image').innerHTML = image;
}
