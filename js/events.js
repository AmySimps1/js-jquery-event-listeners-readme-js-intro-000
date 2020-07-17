
function getIt(){
  $('p').on('click', function(){
  alert("Hey!");
  });
}

function frameIt(){
  $('#tasty').on('load', function(){
  console.log('img');
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
  alert("Your form is going to be submitted now.");
  });
}
