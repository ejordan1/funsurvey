$(document).ready(function(){
  $(".form").submit(function(event){
    debugger;
    var name = $("input#name").val();
    var food = $("#favefood").val();
    var music = $("input:radio[name=musictype]:checked").val();
    var dob = $("input#born").val();
    var favcolor = $("input#color").val();
    alert(name + " "+food + ", " + music + ", " + dob + ", " + favcolor);
    alert("working");
    event.preventDefault();
  });
});
