$(function(){


    for (var i = 0; i < places.length; i++) { // this is all new
      $("#location" + (i + 1)).append(places[i].location);
      $("#landmark" + (i + 1)).append(places[i].landmarks);
      $("#date" + (i + 1)).append(places[i].date + " ");
      $("#notes" + (i + 1)).append(places[i].notes);
    }

$("#image1").click(function() {
  $("#place1").slideDown();
});
$("#image2").click(function() {
  $("#place2").slideDown();
});
$("#image3").click(function() {
  $("#place3").slideDown();
});
$("#image4").click(function() {
  $("#place4").slideDown();
});
$("#image5").click(function() {
  $("#place5").slideDown();
});
$("#image6").click(function() {
  $("#place6").slideDown();
});

});





function Place(location, landmarks, date, notes) { // changed the function to place from places
  this.location = location,
  this.landmarks = landmarks,
  this.date = date,
  this.notes = notes
}

var hawaii = new Place ("Hawaii", ["Observatory", "Volcanic Rock", "Palm Tree", "Royal Hawaiian"], [1999, 2018], "Aloha. Beautiful waves, beaches, and lots of Poke, pork, and spam.");

var japan = new Place ("Japan", ["Deer Forest", "Kurama Mountain", "Family Mart", "Sega Arcade", "Tokyo"], [2018], "Cherry blossoms, litter-free environment, and everyone is 'lawful good' alignment.");

var england = new Place ("England", ["London", "London Eye", "Millenium Bridge", "River Thames", "Big Ben"], [2004], "Terrible native food, lots of rain, and a large assortment of interesting and colloquial accents.");

var china = new Place ("China", ["The Great Wall", "Tianmen Square", "Temple of a Thousand Soldiers", "Xi'an Wall"], [2018], "Beautiful architecture, endless night markets, and great prices.");

var canada = new Place ("Canada", ["Snow", "Big Ass trees", "Toronto", "Ontario", "Vancouver", "Edmonton"], [2006, 2017], "Peaceful people, great tasting tree sap, and all-denim tuxedos.");

var washington = new Place ("Washington State", ["Space Needle", "Pike Place Market", "Mt. Rainier", "Capital Hill"], [2018], "Terrible traffic, wonderful views, friendly people, extremely expensive, and a lot of homelessness.");

var places = [hawaii, japan, england, china, canada, washington]; // This is new
