$(document).ready(function() {
  $("form#survey").submit(function(event){
    event.preventDefault();
    var sq1 = $("input#sq1").val();
    var sq2 = $("input#sq2").val();
    var sq3 = $("input#sq3").val();
    var arrayInput = [sq1, sq2, sq3];

    $("#response1").text(arrayInput[1]);
    $("#response2").text(arrayInput[0]);
    $("#response3").text(arrayInput[2]);
    $("#result").show();
  });
});
