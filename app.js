$(document).ready(function(){
  var todoList = [];  
   var todo = function(input){
    var $li = $('ol').append('<li>'+ input +'</li>');
   };   
  $('.btn-submit').click(function(){
    todoList.push($('input').val());
    localStorage.setItem('list', JSON.stringify(todoList));
    todo($('input').val());
    $('input').val('');
  });
  $('.btn-delete').click(function(){
    var deleteTodo = todoList.splice(0, 1);
    localStorage.setItem('list', JSON.stringify(todoList));
    $('ol').html('');
    todoList.forEach(todo => {
       $('ol').append('<li>'+ todo +'</li>');
    });  
  });

});