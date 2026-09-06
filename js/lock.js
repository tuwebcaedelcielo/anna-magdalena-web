document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('lock-form');
  if (!form) return;

  var PASSWORD = '1234';

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var input = document.getElementById('lock-input');
    var error = document.getElementById('lock-error');
    if (input.value === PASSWORD) {
      sessionStorage.setItem('am_unlocked', 'yes');
      location.reload();
    } else {
      error.style.display = 'block';
      input.value = '';
      input.focus();
    }
  });
});
