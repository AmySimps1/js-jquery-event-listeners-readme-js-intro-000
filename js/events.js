//define functions here

$(document).ready(function(){

function getIt(){
  $('p').on('click', function(){
  alert("Hey!");
  });
}

function frameIt(){
  $('.tasty').on('load', function(){
  load('img');
  });
}

function pressIt(){
  $('p').on('keydown', function(){
  alert("Hey!");
  });
}


$(document).on('keydown', function(key) {
  if(key.which == 71){
      alert('g was pressed');
  }
});



function submitIt(){
  $('form').on('submit', function(){
  alert("Hey!");
  });
}


});
