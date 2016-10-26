$("#menudown").click(function(){
    $("#hiddennav").toggle();
    $("#menuup").toggle();
    $("#menudown").toggle();
    $( "#menu" ).css('margin-bottom','-40px');
    $( "#cover-text" ).css('margin-top','0px');
});

$("#menuup").click(function(){
    $("#hiddennav").toggle();
    $("#menudown").toggle();
    $("#menuup").toggle();
    $( "#menu" ).css('margin-bottom','0px');
    $( "#cover-text" ).css('margin-top','0px');
});

$("#cover-hi").click(function(){
  $("#hiddennav").show();
  $("#menuup").show();
  $("#menudown").hide();
  $( "#menu" ).css('margin-bottom','-40px');
  $( "#cover-text" ).css('margin-top','0px');
});

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});

$('[data-toggle="popover"]').popover({
  placement: "bottom",
  trigger: "hover"
})

if(jQuery('#cover-hi').data('clicked')) {
    $( "#cover-hi" ).css('margin-left','0px');
}
