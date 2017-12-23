$(document).ready(function() {
  var $btn = $('#submit');
  $btn.attr('disabled', true);

  /*var inputUser = $('#username');
  $(inputUser).keydown(function() {
    if (inputUser.val().length >= 2) {
      $('p:first-of-type span').hide();
    } else {
      $('p:first-of-type span').show();
    }
  });
  var inputPassword = $('#password');
  $(inputPassword)..*/

  function begin() {
  // ocultamos todos los span
  $('form p span').hide();

  var $usernameInput = $('#username');
  var $passwordInput = $('#password');
  var $confirmPasswordInput = $('#confirm_password');
  var $submit = $('#submit');

  function isUsernameValid() {
    return $usernameInput.val().length >= 3;
  }

  function isPasswordValid() {
    return $passwordInput.val().length >= 6;
  }

  function arePasswordsMaching() {
    return $passwordInput.val() === $confirmPasswordInput.val();
  }

  function usernameEvent() {
    if (isUsernameValid())
      $usernameInput.next().hide();
    else
      $usernameInput.next().show();
  }

  function passwordEvent() {
    if (isPasswordValid())
      $passwordInput.next().hide();
    else
      $passwordInput.next().show();
  }

  function confirmPasswordEvent() {
    if (arePasswordsMaching())
      $confirmPasswordInput.next().hide();
    else
      $confirmPasswordInput.next().show();
  }

  function areAllValidationsPassing() {
    return isUsernameValid() && isPasswordValid() && arePasswordsMaching();
  }

  function formStateEvent() {
    $submit.prop('disabled', !areAllValidationsPassing());
  }

  // hacemos focus al input username
  $usernameInput.focus();

  $usernameInput
    .focus(usernameEvent)
    .on('keyup', usernameEvent)
    .on('keyup', passwordEvent)
    .on('keyup', formStateEvent);

  $passwordInput
    .focus(passwordEvent)
    .on('keyup', passwordEvent)
    .on('keyup', confirmPasswordEvent)
    .on('keyup', formStateEvent);

  $confirmPasswordInput
    .focus(confirmPasswordEvent)
    .on('keyup', confirmPasswordEvent)
    .on('keyup', formStateEvent);

  formStateEvent();
}

$(document).ready(begin);
});
