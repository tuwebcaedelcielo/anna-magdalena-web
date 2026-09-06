document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }

  var form = document.querySelector('.simple-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = form.querySelector('#nombre');
      var msg = document.createElement('p');
      msg.textContent = '¡Gracias' + (name && name.value ? ', ' + name.value : '') + '! Hemos recibido tu mensaje y te contactaremos en breve. Mientras tanto, también puedes llamarnos directamente al 640 74 34 39.';
      msg.style.marginTop = '18px';
      msg.style.padding = '14px 16px';
      msg.style.background = '#EFE6D2';
      msg.style.borderLeft = '3px solid #AD8A3E';
      msg.style.fontSize = '0.95rem';
      form.appendChild(msg);
      form.reset();
    });
  }
});
