function checkIt() {
  // Initialize scores
  var corgi = 0;
  var border = 0;
  var aussie  = 0;
  var golden = 0;
  var poodle = 0;
  var bernie = 0;
  // Get all checkbox elements from form
  var elements = document.getElementsByClassName('answer');

  // Tally results
  for (var e of elements) {

    if (e.checked) {
      if (e.value == 'corgi') {
        corgi++;
      }
      else if (e.value == 'border'){
        border++;
      }
      else if (e.value == 'aussie'){
        aussie++;
      }
      else if (e.value == 'golden'){
        golden++;
      }
      else if (e.value == 'poodle'){
        poodle++;
      }
      else if (e.value == 'bernie'){
        bernie++;
      }
    }
  }

  // Determine result
  var counts = "corgi: " + corgi +  ", " + "border: " + border + ", " + "aussie: " + aussie +  ", " +  "golden: " + golden +  ", " + "Keep taking poodlezes: " + poodle + "bernie: " + bernie ;


  // What is the highest value?
  var max = Math.max(corgi, border, aussie, golden, poodle, bernie);

  // Form a message
  var message;

  if (max == corgi) {
    message = "corgi";
  }
  else if (max == border) {
    message = "border";
  }
  else if (max == aussie) {
    message = "aussie ";
  }
  else if (max == golden) {
    message = "golden ";
  }
  else if (max == poodle) {
    message = "poodle";
  }
  else if (max == bernie) {
    message = "bernie";
  }

// custom result title
  var title = "Answer These Questions and We'll tell You What Dog Breed You Are";

// custom result header
  var heading;

  if (max == corgi) {
    heading = "  You're a Corgi!!";
  }
  else if (max == border) {
    heading = " You're a Border Collie!!";
  }
  else if (max == aussie) {
    heading = " You're an Aussie!!";
  }
  else if (max == golden) {
    heading = "You're a Golden Retriever!!";
  }
  else if (max == poodle) {
    heading = "You're a Poodle!! ";
  }
  else if (max == bernie) {
    heading = "You're a Bernese Mountain Dog!!";
  }

  var image;

  if (max == corgi) {
    image = "<img src='img/quiz_2/corgi.jpg'/>";
  }
  else if (max == border) {
    image = "<img src='img/quiz_2/border.jpg'/>";
  }
  else if (max == aussie) {
    image = "<img src='img/quiz_2/aussie.jpg'/>";
  }
  else if (max == golden) {
    image = "<img src='img/quiz_2/golden.jpg'/>";
  }
  else if (max == poodle) {
    image = "<img src='img/quiz_2/poodle.jpg'/>";
  }
  else if (max == bernie) {
    image = "<img src='img/quiz_2/bernie.jpg'/>";
  }
  // Display result
  //document.getElementById('result').innerHTML = counts;
    document.getElementById('result-text').innerHTML = message;
    document.getElementById('result-title').innerHTML = title;
    document.getElementById('result-heading').innerHTML = heading;
    document.getElementById('result-image').innerHTML = image;
}
