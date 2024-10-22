class HeaderComponent extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = `
        <header class="labelHeader">
        <nav class="flexbox_container nav-container">
            <left-icons class="flexbox_simple_container">
                <left-icon-one>
                    <a href="#""></a>
                </left-icon-one>
                <left-icon-two>
                    <a href="/home/Assets/Gabriel Setznagl_2024.pdf" download></a>
                </left-icon-two>
            </left-icons>
            <right-icon class="flexbox_simple_container">
                <interactive-menu>
                    <label for="nav__menu-hamburguer__input">
                        <input id="nav__menu-hamburguer__input" type="checkbox">
                    </label>
                </interactive-menu>
                <!-- Elementos do Menu Interativo -->
                <section class="nav__menu-hamburguer__container">
                    <ul class="flexbox_simple_container nav__menu__vertical__text">
                        <li class="nav__menu__vertical-item">
                            <a href="index.html">About</a>
                        </li>
                        <li class="nav__menu__vertical-item">
                            <a href="experience.html">Experience</a>
                        </li>
                        <li class="nav__menu__vertical-item">
                            <a href="skills.html">Skills</a>
                        </li>
                        <li class="nav__menu__vertical-item">
                            <a href="projects.html">Projects</a>
                        </li>
                        <li class="nav__menu__vertical-item">
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                    <interactive-menu-close>
                        <label for="nav__menu-hamburguer__close__input">
                            <input id="nav__menu-hamburguer__close__input" type="checkbox">
                        </label>
                    </interactive-menu-close>
                </section>
            </right-icon>
        </nav>
        </header>
      `;
    const css1 = document.createElement("link");
    css1.rel = "stylesheet";
    css1.href = "/home/Styles/Chore/reset.css";
    shadow.appendChild(css1);

    const css2 = document.createElement("link");
    css2.rel = "stylesheet";
    css2.href = "/home/Styles/Chore/style.css";
    shadow.appendChild(css2);

    /* JS do Menu Interativo */
    const input_DOM = shadow.querySelector('#nav__menu-hamburguer__input');
    const inputClose_DOM = shadow.querySelector('#nav__menu-hamburguer__close__input');
    const content = shadow.querySelector('.nav__menu-hamburguer__container');
    input_DOM.addEventListener('change', function() {
        if (input_DOM.checked) { 
            content.style.display = 'block';
            input_DOM.checked = !input_DOM.checked;
        } else {
            content.style.display = 'none';
            input_DOM.checked = !input_DOM.checked;
    }});
    inputClose_DOM.addEventListener('change', function() {
        if (inputClose_DOM.checked) {
            content.style.display = 'none';
            inputClose_DOM.checked = !inputClose_DOM.checked;
        } else {
            content.style.display = 'block';
            inputClose_DOM.checked = !inputClose_DOM.checked;
    }});


    }
}
customElements.define("header-component", HeaderComponent);
