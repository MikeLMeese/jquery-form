let nameInfo = $("#name");
let emailInfo = $("#email");
let numberInfo = $("#phone");
let message = $("#message");
let required = [nameInfo, emailInfo, numberInfo];
let warning = $("p");
// //Adding button functionality
$(document).ready(function () {
  $("#submit").on("click", function () {
    for (let i = 0; i < required.length; i++) {
      if (required[i].val() == "") {
        warning.html("Please Fill Out Required Fields").addClass("warning");
        required[i].prev().addClass("warning");
      } else if (required[i].val() !== "") {
        required[i].prev().removeClass("warning");
      }
    }
    if ($("label").hasClass("warning")) {
      warning.html("Please Fill Out Required Fields").addClass("warning");
    } else {
      $("form").remove();
      $("h2").text("Thanks for your feedback!");
    }
  });
});
