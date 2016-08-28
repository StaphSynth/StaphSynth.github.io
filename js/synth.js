//show/hide the main menu when nav icon clicked/tapped on mobile view
$("#navIcon").click(function(event){
  //console.log("click!");
  $("#mainMenu ul").toggle();
});

/*Remove inline style from #mainMenu ul if window width > 800px on window resize event.
Prevents inline style from over-riding CSS style rules in @media query*/
$(window).resize(function() {
  if($(window).width() >= 800) {
    //if($("#mainMenu ul").attr("style") === "display: none;" || $("#mainMenu ul").attr("style") === "display: block;")
        $("#mainMenu ul").removeAttr("style");
  }
});//end window resize event

/*Create text-shadow on github social icon in .gitLink when mouse hovers over parent*/
$(function() {
  $(".gitLink a").hover(function() {
    //on hover, add text-show
    $(".gitLink .social").css("text-shadow", "0px 0px 2px  #ddd");
  }, function() {
    // on mouseout, remove the text-shadow
    $(".gitLink .social").css("text-shadow", "");
  });
});

//console.log("synth.js has loaded and run");
