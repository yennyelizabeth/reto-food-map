$(document).ready(function(){
  $('#myCarouselCustom').carousel();
  // Link Prev
  $("#prevBtn").click(function(){
      $("#myCarouselCustom").carousel("prev");
  });
  // Link Next
  $("#nextBtn").click(function(){
      $("#myCarouselCustom").carousel("next");
  });
});

