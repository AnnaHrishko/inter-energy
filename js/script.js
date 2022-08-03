$('.line-select').change(function() { //селектор, при измении его измении, меняется заголовок(h2 с классом test) на значение текса выбраного нами из option
  $('.test').text($(this).val())

})


$('.click-chapter').click(function(){
    $(this).next().toggleClass('active');
    return false
});


$('.button').click(function() { 
  let name = $('#name').val(); 
  let email = $('#email').val(); 
  let phone = $('#phone').val(); 
  let message = $('#message').val(); 
  //alert('Name: ' + name + '. \n Email: ' + email + '. \n Phone:' + phone + '. \n Message:' + message)

  if(name.length < 3) {
    alert('введите полное имя')
  } else if(name.length >= 3 && name.length <= 8) {
    alert('форма успешно заполнена')
  } else {
    alert('слишком много символов')
  }


  return false
});


var input = document.querySelector("#phone");
window.intlTelInput(input);


$('.burger').click(function(){
  $('.menu').toggleClass('active');
  $(this).toggleClass('active')
});



