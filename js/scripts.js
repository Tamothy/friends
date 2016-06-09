$(document).ready(function() {
  $("form#friends").submit(function(event) {
    var mood = $("select#mood").val();
    var gender = $("select#gender").val();


    if (gender === "male" && mood === "curious") {
      $("#joey").show();
      $("#phoebe").hide();
      $("#ross").hide();
      $("#chandler").hide();
      $("#monica").hide();
      $("#rachel").hide();
    } else if (gender === "male" && mood === "sad") {
      $("#joey").hide();
      $("#phoebe").hide();
      $("#ross").show();
      $("#chandler").hide();
      $("#monica").hide();
      $("#rachel").hide();
    } else if (gender === "male" && mood === "tidy") {
      $("#joey").hide();
      $("#phoebe").hide();
      $("#ross").hide();
      $("#chandler").show();
      $("#monica").hide();
      $("#rachel").hide();
    } else if (gender === "female" && mood === "curious") {
      $("#joey").hide();
      $("#phoebe").show();
      $("#ross").hide();
      $("#chandler").hide();
      $("#monica").hide();
      $("#rachel").hide();
    } else if (gender === "female" && mood === "sad") {
      $("#joey").hide();
      $("#phoebe").hide();
      $("#ross").hide();
      $("#chandler").hide();
      $("#monica").hide();
      $("#rachel").show();
    } else if (gender === "female" && mood === "tidy") {
      $("#joey").hide();
      $("#phoebe").hide();
      $("#ross").hide();
      $("#chandler").hide();
      $("#monica").show();
      $("#rachel").hide();
    }
    event.preventDefault();
  });
});
