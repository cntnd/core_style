$(document).ready(function(){

  $('[data-toggle]').click(function(){
    if (!$(this).hasClass("active")) {
      var type = $(this).data("toggle");
      var target = $(this).data("target");

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

  $(".check-dependent").click(function(){
    var dependent = $(this).data("check-dependent");
    var dependents = dependent.split(';');
    dependents.forEach(element => {
      $("#"+element).prop('checked', $(this).prop('checked'));
    });
  });

  $(".disable-dependent").click(function(){
    var dependent = $(this).data("disable-dependent");
    var dependents = dependent.split(';');
    dependents.forEach(element => {
      $("#"+element).prop('disabled', $(this).prop('checked'));
    });
  });
});

// Module Box
function moduleBox(module, uuid) {
  var self = $(".module_box_outer[data-module=" + module + "][data-uuid=" + uuid + "]");
  var inner = $(".module_box_outer[data-module=" + module + "][data-uuid=" + uuid + "] .module_box_inner");
  var label = $(".module_box_outer[data-module=" + module + "][data-uuid=" + uuid + "] .module_box_inner label");
  var end = $(".module_box_end[data-module=" + module + "][data-uuid=" + uuid + "]");
  var height = end.offset().top - self.offset().top - inner.height();
  var width = self.parent().width();
  var top = self.offset().top;
  self.css("height", height).css("width", width).css("position","absolute").css("top", top);
  label.css("margin-top",-label.outerHeight());
}
