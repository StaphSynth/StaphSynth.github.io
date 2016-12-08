/*show/hide the main menu when nav icon clicked/tapped on mobile view
also blurs the button after event and rotates the menu direction caret*/
$("#navIcon").click(function(event){
  $("#mainMenu ul").slideToggle("fast","swing");
  $("#navIcon").blur();
  $(".fa-caret-down").toggleClass("fa-rotate-180");
});

/*For figure captions: centre the caption if there's only one line of text, otherwise leave it justified.
Calc: get the container height and divide by line hieght. If the answer is 1, then there's only 1 line*/
$(".caption").each(function(){
  var height = $(this).height();
  var lineHeight = $(this).css("line-height");
  lineHeight = parseFloat(lineHeight);
  if(Math.round(height / lineHeight) < 2)
    $(this).css("text-align", "center");
});

/*Remove inline style from #mainMenu ul if window width > 800px on window resize event.
Prevents inline style from over-riding CSS style rules in @media query*/
$(window).resize(function() {
  if($(window).width() >= 800) {
    $("#mainMenu ul").removeAttr("style");
  }
});//end window resize event

/*Create text-shadow on github social icon in .gitLink when mouse hovers over parent*/
$(function() {
  $(".gitLink a").hover(function() {
    //on hover, add text-shadow
    $(".gitLink .social").css("text-shadow", "0px 0px 2px  #ddd");
  }, function() {
    // on mouseout, remove the text-shadow
    $(".gitLink .social").css("text-shadow", "none");
  });
});

//console.log("synth.js has loaded and run");
