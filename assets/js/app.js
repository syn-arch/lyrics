$(function () {
  $(".loading").hide();

  $(".play").click(function () {
    $(this).addClass("hide");
    $(".quotes").addClass("hide");
    $(".quotes-author").addClass("hide");

    setTimeout(() => {
      visualizer();
    }, 1000);

    setTimeout(() => {
      $(".rabbit-lyrics").removeClass("hide");
    }, 2000);
  });
});
