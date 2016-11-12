//$("#copyright").click(function(){
//  $(this).css('color','purple');
//});"
document.getElementById('copyright').addEventListener("click", function() {
  this.style.color = 'purple';
});
$(document).ready(function() {
  /* Add code from the next steps here */
  $("#copyright").click(function(){
    $(this).css('color','purple');
  });
})
