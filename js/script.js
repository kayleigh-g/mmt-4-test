

var slider = $(".slider1");
slider.slider({
  max:10,
  min: 1, 
  change: function (event,ui){
    richtingx=ui.value

  }
  
  })

var slider = $(".slider2");
slider.slider({
  max:true,
  min: false, 
  change: function (event,ui){
    driehoekFill =ui.value

  }
  })

var slider = $(".slider3");
slider.slider({
  max: 255,
  min: 0, 
  change: function (event,ui){
    offsetAchtergrondKleur=ui.value;

  }
  })
   

  
$('#contact').click(function()
{
  $('#content').show('slide');
  $('#contact').hide();
  $('#back').show();
});  

$('#back').click(function()
{
  $('#content').hide('slide');
  $('#contact').show();
  $('#back').hide();
});  


var video = document.getElementById("videoPlayer"); 

function play() {
  var videoPlayer = document.getElementById("videoPlayer");
  var speelAf = document.getElementById("speelAf");
  if (videoPlayer.paused) {
  videoPlayer.play();
  speelAf.textContent = "||";
  } else {
  videoPlayer.pause();
  speelAf.textContent = ">";
  }
  }

  function rewind(param) {
  var videoPlayer = document.getElementById("videoPlayer");
  videoPlayer.currentTime += param;
  }







