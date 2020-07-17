$(document).ready(function(){
getIt();
frameIt();
pressIt();
submitIt();

// call functions here

});
//Define a function getIt that does not accept a parameter. The function should bind a click event to the p tag. When the paragraph is clicked, the function should alert "Hey!".
function getIt(){
  $('p').on('click', function(){
  alert("Hey!");
  });
}

function frameIt(){
  $('img').on('load', function(){
  $('img').addClass('tasty');
  });
}

function pressIt(){
$(document).on('keydown', function(key) {
  if(key.which == 71){
      alert('g was pressed');
  }
});
}

function submitIt(){
  $('form').on('submit', function(){
  alert("Your form is going to be submitted now.");
  });
}
