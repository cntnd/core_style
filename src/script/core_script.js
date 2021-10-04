$(document).ready(function(){

  $('[data-toggle]').click(function(){
    if (!$(this).hasClass("active")) {
      var type = $(this).data("toggle");
      var target = $(this).data("target");

      console.log("toggle:", type, target)
      if (type === "tabs") {
        tabs($(this), $("#" + target))
      }
      else {
        $("#" + target).toggleClass(type);
      }
    }
  });

  function tabs(me, target){
    $(".tabs__tab").removeClass("active");
    $(".tabs__content--pane").removeClass("active");
    me.addClass("active")
    target.addClass("active")
  }

});
