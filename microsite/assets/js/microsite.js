$(".f-bckgrd").click(function(){
    $(".title").addClass('fade');
    $(this).addClass('fade2');
    $(".title").hide();
});

$(".title").click(function(){
    $(".title").addClass('fade');
    $(".opening").addClass('fade2');
});

$(".nav1").hover(function(){
    $(".pj1").addClass('show');
});

$(".nav2").hover(function(){
    $(".pj2").addClass('show');
});

$(".nav3").hover(function(){
    $(".pj3").addClass('show');
});

$(".nav4").hover(function(){
    $(".pj4").addClass('show');
});