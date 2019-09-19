$(document).ready(function () {

  $(".work").on("click", function (e) {
    e.preventDefault();
    //window.open($(this).attr("linkUrl"));
    window.open($(this).attr("linkUrl"));
  });
  $(".code").on("click", function (e) {
    e.preventDefault();
    window.open($(this).attr("linkUrl2"));
  });

  $(".resume").on("click", function () {
    window.location.href = $(this).attr("linkUrl");
  });

  $(".fa").on("click", function () {
    alert("you click this");
    location.href = $(this).attr("linkUrl");
  });


})
