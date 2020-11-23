$(document).ready(function () {
  $("#adultos").click(function () {
    $("#visualizador").load("adultos.html");
    $("adultos").addClass("active");
    $("ninios").removeClass("active");
    $("babys").removeClass("active");
  });
  $("#ninios").click(function () {
    $("#visualizador").load("ninios.html");
    $("adultos").removeClass("active");
    $("ninios").addClass("active");
    $("babys").removeClass("active");
  });
  $("#babys").click(function () {
    $("#visualizador").load("baby_showers.html");
    $("adultos").removeClass("active");
    $("ninios").removeClass("active");
    $("babys").addClass("active");
  });


  function fixMenuTextSize() {
  if ($(window).width() <= 453) {
    $("#menu1").removeClass("title").addClass("subtitle");
    $("#menu2").removeClass("title").addClass("subtitle");
    $("#menu3").removeClass("title").addClass("subtitle");
  }else{
    $("#menu1").removeClass("subtitle").addClass("title");
    $("#menu2").removeClass("subtitle").addClass("title");
    $("#menu3").removeClass("subtitle").addClass("title");
  };
  };

  fixMenuTextSize();

  $(window).resize(function(){
    fixMenuTextSize();
});
});
