$(document).ready(function() {
    $("#adultos").click(function(){
        $("#visualizador").load("adultos.html");
    });
    $("#ninios").click(function(){
        $("#visualizador").load("niños.html");
    });
    $("#babys").click(function(){
        $("#visualizador").load("baby_showers.html");
    });
});