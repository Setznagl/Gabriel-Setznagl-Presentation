class FormEmailSender extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });
        shadow.innerHTML =
            `
            <section class="contact-form-section">
                <div class="flexbox_container centralize_flexbox_vertical_items">
                  <h2 id="contactUs">Contact Me</h2>
                  <form id="contact-form" class="flexbox_simple_container centralize_flexbox_vertical_items">
                    <div class="form-group">
                      <label for="name">Name:</label>
                      <input type="text" id="name" name="name" required />
                    </div>
                    <div class="form-group">
                      <label for="email">Email:</label>
                      <input type="email" id="email" name="email" required />
                    </div>
                    <div class="form-group">
                      <label for="message">Message:</label>
                      <textarea id="message" name="message" required></textarea>
                    </div>
                    <button type="submit">Send</button>
                  </form>
                  <p id="response-message"></p>
                </div>
              </section>
            `
        const css1 = document.createElement("link");
        css1.rel = "stylesheet";
        css1.href = "/home/Styles/Chore/reset.css";
        shadow.appendChild(css1);

        const css2 = document.createElement("link");
        css2.rel = "stylesheet";
        css2.href = "/home/Styles/Chore/style.css";
        shadow.appendChild(css2);

        const script1 = document.createElement("script");
        script1.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
        script1.onload = function() {
            emailjs.init("r56w_4AhZZvcDeJRR");
        };
        shadow.appendChild(script1);

        shadow.querySelector('#contact-form').addEventListener('submit', (event) => {
            event.preventDefault();

            const name = shadow.querySelector('#name').value;
            const email = shadow.querySelector('#email').value;
            const message = shadow.querySelector('#message').value;

            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }

            emailjs.send("service_s3dxwo4", "template_xyusz9b", {
                name: name,
                email: email,
                message: message
            }).then((response) => {
                shadow.querySelector('#response-message').textContent = 'E-mail was sent successfully!';
                shadow.querySelector('#contact-form').reset();
            }, (error) => {
                shadow.querySelector('#response-message').textContent = 'An error occurred, try again later!';
            });
        });
    }
}

customElements.define("form-email-sender", FormEmailSender);