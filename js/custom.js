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
});

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});
