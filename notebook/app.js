$(document).ready(function() {
  $("#btn").click(function() {
    $("#foto1").addClass("matebook2");
    $("#foto1").removeClass("matebook1");

    $("#foto2").addClass("matebook1");
    $("#foto2").removeClass("matebook2");

    // $(".matebook2").addClass("matebook1");
    //$(".matebook").removeClass("matebook2");
  });
});

$(document).ready(function() {
  $("#btn1").click(function() {
    $("#foto1").addClass("matebook1");
    $("#foto1").removeClass("matebook2");

    $("#foto2").addClass("matebook2");
    $("#foto2").removeClass("matebook1");
  });
});
