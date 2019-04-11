
function plusMinus(){
  var num = 0;
  $("#number").text(num);
  $("#plus").click(function() {
    num++;
    $("#number").text(num);
    console.log("+" + num);
    });
  $("#minus").click(function() {
    num--;
    $("#number").text(num);
    console.log("-" + num);
    });
};


$(function(){
  plusMinus();
});
