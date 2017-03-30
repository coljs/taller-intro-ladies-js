console.log('Hola Mundo <3')

var $form = $('#contact-form')

$('#biography-btn').on('click', function () {
  $('#biography-cont').toggleClass('hidden')
})

$('#contact-btn').on('click', function () {
  $('#contact-form').toggleClass('hidden')
})

$form.on('submit', function (e) {
  e.preventDefault()
  $.post($form.attr('action'), {
      email: $('#email').val(),
      text: $('#text').val()
    })
    .then(function (res) {
      alert(res.message)
    }, function (err) {
      console.error(err)
      alert('Error sending the form.')
    })
})