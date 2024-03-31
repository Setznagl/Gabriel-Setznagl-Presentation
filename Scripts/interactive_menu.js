document.addEventListener('DOMContentLoaded', function() {
    const input_DOM = document.getElementById('nav__menu-hamburguer__input');
    const inputClose_DOM = document.getElementById('nav__menu-hamburguer__close__input');
    const content = document.querySelector('.nav__menu-hamburguer__container');
  
    input_DOM.addEventListener('change', function() {
      if (input_DOM.checked) {
        content.style.display = 'block';
        input_DOM.checked = !input_DOM.checked;
      } else {
        content.style.display = 'none';
        input_DOM.checked = !input_DOM.checked;
      }
    });
    inputClose_DOM.addEventListener('change', function() {
      if (inputClose_DOM.checked) {
        content.style.display = 'none';
        inputClose_DOM.checked = !inputClose_DOM.checked;
      } else {
        content.style.display = 'block';
        inputClose_DOM.checked = !inputClose_DOM.checked;
      }
    });
  });
  
  