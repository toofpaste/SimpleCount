
function plusMinus(){
  var num = 0;
  $("#number").text(num);
  $("#plus").click(function() {
    num++;
    $("#number").text(num);
    console.log("+" + num);
    submit(num);
    });
  $("#minus").click(function() {
    num--;
    $("#number").text(num);
    console.log("-:" + num);
    submit(num);
    });
};
function submit(num){
  $("form#formOne").submit(function(event){
    event.preventDefault();
    $("#print").text("$" + (num*5));
  });
}


$(function(){
  plusMinus();
});
