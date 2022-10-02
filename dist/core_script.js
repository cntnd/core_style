$(document).ready(function(){
  // avoid multiple runs of same js code
  if (cntnd_core === undefined) {
    $('[data-toggle]').click(function () {
      if (!$(this).hasClass("active")) {
        var type = $(this).data("toggle");
        var target = $(this).data("target");

        if (type === "tabs") {
          tabs($(this), $("#" + target))
        } else {
          $("#" + target).toggleClass(type);
        }
      }
    });

    function tabs(me, target) {
      $(".tabs__tab").removeClass("active");
      $(".tabs__content--pane").removeClass("active");
      me.addClass("active")
      target.addClass("active")
    }

    $(".check-dependent").click(function () {
      var dependent = $(this).data("check-dependent");
      var dependents = dependent.split(';');
      dependents.forEach(element => {
        $("#" + element).prop('checked', $(this).prop('checked'));
      });
    });

    $(".disable-dependent").click(function () {
      var dependent = $(this).data("disable-dependent");
      var dependents = dependent.split(';');
      dependents.forEach(element => {
        $("#" + element).prop('disabled', $(this).prop('checked'));
      });
    });
  }
  var cntnd_core = true;
});
