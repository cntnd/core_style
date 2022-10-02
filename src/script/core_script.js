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
  var self = $(".module_box[data-module="+module+"][data-uuid="+uuid+"]");
  var parent = self.parent();
  var end = parent.find(".module_box_end");
  var height = end.offset().top - self.offset().top;
  var width = parent.width();
  console.log(module, uuid, "top",self.offset().top,parent.offset().top);
  self.css("height", height).css("width", width).css("top", self.offset().top).css("position","absolute");
}
