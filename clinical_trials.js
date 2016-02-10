


$(document).ready(function() {
  $(".btn").on("click", addItem);
  $(".link-delete").on("click", deleteItem);
  $("ol").on("click", ".link-delete", deleteItem);
});


function addItem() {
console.log("yup!")

  var text = window.prompt("New Cancer Type");
  var delete_link = '<a href="#" class="link-delete">(Delete)</a>'
  $("ol").append("<li>" + text + " " + delete_link + "</li>");
  //
  var numItems = $("li").length;
  $(".total").html(numItems + " types");

  // Challenge: Differentiate between 1 item vs. more items
  if (numItems = 1) {
$(".total").html(numItems + " type");
}
  else {
    $(".total").html(numItems+ " types");
  }
}

// This function deletes an item from the list.
// The "event" parameter holds information on which
// item the user wishes to remove.
function deleteItem(event) {
  console.info(event);
  // $(event.target).remove();
  $(event.target).parent().remove();
  var numItems = $("li").length;
  $(".total").html(numItems + " types");


}
