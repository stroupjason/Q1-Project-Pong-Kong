$(document).ready(function() {
  $(".button-collapse").sideNav();
});

console.log("konichiwa!");


// <--login.html page-->
$(document).ready(function() {
  Materialize.updateTextFields();
});

//<----Map Icons---->


var map;

function initMap() {

  map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 39.7314634,
      lng: -104.9982198
    },
    zoom: 12,

  });


  var gt = new google.maps.Marker({
    position: {
      lat: 39.7314634,
      lng: -104.9982198
    },
    map: map,
    title: 'Golden Triangle',
    address: "1062 Delaware St, Denver, CO 80204"
  });
  markers.push(gt);

  var platte = new google.maps.Marker({
    position: {
      lat: 39.757895,
      lng: -105.006972
    },
    map: map,
    title: 'Platte',
    address: "1644 Platte St, Denver, CO 80202"
  });
  markers.push(platte);
}
//Add Marker function


var markers = [];

function setMapOnAll(map) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}

$("#typeLocation").keyup(function() {
  for (var i = 0; i < markers.length; i++) {
    var string = markers[i].title,
      substring = $(this).val();
    if (string.includes(substring)) {
      var mapElement = $('#map');
      $('h4').text(markers[i].address);

      //pokemon var
      // var $pokemon = $('#typeLocation').text().length;
      // $pokemon++;
      function getRandomPokemon(min, max) {
        return Math.random() * (max - min) + min;
      }
        var $pokemon = getRandomPokemon(1, 151).toFixed();


      //pokemon api get request
      $.get("http://pokeapi.co/api/v2/pokemon/" + $pokemon + "/")

      .then(function(data){

        var pokeName = data.name;
        var pokeImg = ('<img src=" ' + data.sprites.front_default + ' ">');

        $("#img").html(pokeImg);
        $("#pokemonName").html(pokeName);

      });

    }
  }

});

// $('button').click(function(event) {
//   event.preventDefault();
//   console.log('hiya!');
// });
