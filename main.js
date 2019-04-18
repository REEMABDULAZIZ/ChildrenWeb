$(document).ready(function(){
 
  $('#name-form').on('submit',changeHeader);

  function changeHeader(event){
    event.preventDefault();
   var name= $('#name ').val();
   console.log(name);
   $('h3').text(' Hello '+  name + "  Let's Learn Together  ");
  }

})
