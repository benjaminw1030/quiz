$(document).ready(function() {
  $("form#food").submit(function() {
    event.preventDefault();
    var fish = 0;
    var steak = 0;
    var iceCream = 0;
    
    var activity = $("input:radio[name=activity]:checked").val();
    if (activity === "swimming") {
      fish += 1;
    } else if (activity === "salad") {
      steak += 1;
    } else if (activity === "skiing") {
      iceCream += 1;
    }
    
    var vacation = $("input:radio[name=vacation]:checked").val();
    if (vacation === "hawaii") {
      fish += 1;
    } else if (vacation === "nebraska") {
      steak += 1;
    } else if (vacation === "alaska") {
      iceCream += 1;
    }
    
    var movie = $("input:radio[name=movie]:checked").val();
    if (movie === "jaws") {
      fish += 1;
    } else if (movie === "range") {
      steak += 1;
    } else if (movie === "titanic") {
      iceCream += 1;
    }
    
    var book = $("input:radio[name=book]:checked").val();
    if (book === "mobyDick") {
      fish += 1;
    } else if (book === "animalFarm") {
      steak += 1;
    } else if (book === "frozen") {
      iceCream += 1;
    }
    
    var job = $("input:radio[name=job]:checked").val();
    if (job === "scuba") {
      fish += 1;
    } else if (job === "cowboy") {
      steak += 1;
    } else if (job === "scientist") {
      iceCream += 1;
    }
    
    if (fish > steak && fish > iceCream) {
      $("#result").text("You are fish! Scrumptious!");
    } else if (fish > steak && fish === iceCream) {
      $("#result").text("You are fish-flavored ice cream! Gross!");
    } else if (iceCream > fish && iceCream > steak) {
      $("#result").text("You are ice cream! DELICIOUS!")
    } else if (iceCream > fish && iceCream === steak) {
      $("#result").text("You are steak-flavored ice cream! What?");
    } else if (steak > fish && steak > iceCream) {
      $("#result").text("you are steak! YUMMMM")
    } else if (steak > iceCream && steak === fish) {
      $("#result").text("You are steakfish! Weird!");
    }

    console.log(fish);
    console.log(steak);
    console.log(iceCream);
  });
});