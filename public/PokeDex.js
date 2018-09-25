
$('.horizontal .progress-fill span').each(function(){
  var percent = $(this).html();
  $(this).parent().css('width', percent);
});


$('.poke-container img').on('click', function() {
  var PokeGif = $(this).attr("src");
  PokeGif = PokeGif.replace("still.png", "animated.gif");
  PokeGif = PokeGif.replace("PokeStill", "PokeGifs");
  $("#PokeGifRight").attr("src", PokeGif);

  $("#info").css({"visibility":"visible"});
});

$('form').on('submit', function(e) {
  e.preventDefault();

  var types = $('input[type=text]').val().replace(' ', '');
  types = types.split(',');
  console.log(types);

  //creates
  var PokeName = types.map(function(name) {
    return $.ajax({
      url: 'https://pokeapi.co/api/v2/pokemon/' + name,
      dataType: 'json',
      method: 'GET'
    });
  });

});
