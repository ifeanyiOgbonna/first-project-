
$(function() {
$(".toggle").on("click", function() {
  if($(".navigation-list").hasClass("active")) {
    $(".navigation-list").removeClass("active");
  }
  else {
    $(".navigation-list").addClass("active");
  }
})
});