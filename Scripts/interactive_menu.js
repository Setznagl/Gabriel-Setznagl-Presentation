document.addEventListener('DOMContentLoaded', function() {
    const input_DOM = document.getElementById('nav__menu-hamburguer__input');
    const content = document.querySelector('.nav__menu-hamburguer__container');
  
    input_DOM.addEventListener('change', function() {
      if (input_DOM.checked) {
        content.style.display = 'block';
      } else {
        content.style.display = 'none';
      }
    });
  });
  