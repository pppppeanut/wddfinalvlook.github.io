$(document).ready(function() {


$("#dot-1").hover(function() {
  $("#slide").css("margin-top","0px");
  if(!$("#dot-1").hasClass("dot-selected")) {
    $("#dot-2").removeClass("dot-selected");
    $("#dot-2").addClass("dot");
    $("#dot-3").removeClass("dot-selected");
    $("#dot-3").addClass("dot");
    $("#dot-1").addClass("dot-selected");
  }
});

$("#dot-2").hover(function() {
  $("#slide").css("margin-top","-500px");
  if(!$("#dot-2").hasClass("dot-selected")) {
    $("#dot-1").removeClass("dot-selected");
    $("#dot-1").addClass("dot");
    $("#dot-3").removeClass("dot-selected");
    $("#dot-3").addClass("dot");
    $("#dot-2").addClass("dot-selected");
  }
});

$("#dot-3").hover(function() {
  $("#slide").css("margin-top","-1000px");
  if(!$("#dot-3").hasClass("dot-selected")) {
    $("#dot-1").removeClass("dot-selected");
    $("#dot-1").addClass("dot");
    $("#dot-2").removeClass("dot-selected");
    $("#dot-2").addClass("dot");
    $("#dot-3").addClass("dot-selected");
  }
});


$("#visioncare-tab").click(function() {
  if(!$("#visioncare-container").hasClass("visioncare-selected")) {
    $("#visioncare-container").removeClass("visioncare-unselected");
    $("#visioncare-container").addClass("visioncare-selected");
    $("#shopstyles-container").removeClass("shopstyles-selected");
    $("#shopstyles-container").addClass("shopstyles-unselected");
  } else {
    $("#visioncare-container").removeClass("visioncare-selected");
    $("#visioncare-container").addClass("visioncare-unselected");

  }
});


$("#shopstyles-tab").click(function() {
if(!$("#shopstyles-container").hasClass("shopstyles-selected")) {
  $("#shopstyles-container").removeClass("shopstyles-unselected");
  $("#shopstyles-container").addClass("shopstyles-selected");
  $("#visioncare-container").removeClass("visioncare-selected");
  $("#visioncare-container").addClass("visioncare-unselected");
  } else {
  $("#shopstyles-container").removeClass("shopstyles-selected");
  $("#shopstyles-container").addClass("shopstyles-unselected");
  }
});



$(window).scroll(function() {
  var height = $(window).scrollTop();

  if(height >= 450) {
    $(".nav-container").addClass("navfixed");
  } else {
    $(".nav-container").removeClass("navfixed");
  }

  if(height >= 1000) {

    $(".nav-container").addClass("navcolor");
    /*$(".button").css("border-color","white");
    $(".button").css("color","white");*/
  } else {
    $(".nav-container").removeClass("navcolor");
  }
});

$("#map-container").hover(function() {
  $("#office").css("opacity","0.6");
  $("#directions-button").css("background-color","black");
});

$("#info").hover(function() {
  $("#office").css("opacity","0.8");
  $("#directions-button").css("background-color","rgb(123, 118, 93)");
});

$("#services-container").hover(function() {
  $("#office").css("opacity","0.8");
  $("#directions-button").css("background-color","rgb(123, 118, 93)");
});

$("#glasses").click(function(){
  $(window).scrollTop(0);
});

$("#about").click(function(){
  $(window).scrollTop(457);
});

$("#services").click(function(){
  $(window).scrollTop(957);
});

$("#contact").click(function(){
  $(window).scrollTop(1457);
});

});