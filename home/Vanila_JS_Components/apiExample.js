class APIexampleComponent extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });
        shadow.innerHTML =
            `
            <section>
                <div id="testimonials">
                <div id="testimonials_header">
                    <h1>Other Skills</h1>
                    <h2>API and Library</h2>
                    <p>
                        Interconnecting services and data by API request flow, 
                        reducing base HTML code that can fullfield by a Mock or 
                        dynamically rendered with data received by the API. 
                    </p>
                </div>
                <div class="swiper">
                    <div class="swiper-wrapper" id="testimonial-container">
                        <!-- Os slides dinâmicos serão inseridos aqui -->
                    </div>
                    <div class="swiper-pagination"></div>
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-scrollbar"></div>
                </div>
                </div>
            </section>
            `
        /* CSS do Swiper */
        const css3 = document.createElement("link");
        css3.rel = "stylesheet";
        css3.href = "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css";
        shadow.appendChild(css3);
        /* Reset CSS */
        const css1 = document.createElement("link");
        css1.rel = "stylesheet";
        css1.href = "/home/Styles/Chore/reset.css";
        shadow.appendChild(css1);
        /* CSS base */
        const css2 = document.createElement("link");
        css2.rel = "stylesheet";
        css2.href = "/home/Styles/Chore/style.css";
        shadow.appendChild(css2);

        const script1 = document.createElement("script");
        script1.src = "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js";
        script1.onload = () => {
            this.loadTestimonials(shadow);
        };
        shadow.appendChild(script1);
}        
        async loadTestimonials(shadow) {
            const container = shadow.getElementById('testimonial-container');
            const response = await fetch('https://randomuser.me/api/?results=5');
            const data = await response.json();

            const testimonials = data.results.map(user => ({
                name: `${user.name.first} ${user.name.last}`,
                picture: user.picture.large,
                comment: `This is an example using<br>Randomuser API!`,
                since: `Cliente desde ${new Date(user.registered.date).getFullYear()}`
            }));

            function createSlide(testimonial) {
                return `
                    <div class="swiper-slide">
                        <div class="testimonial-author">
                            <div class="author-avatar">
                                <img src="${testimonial.picture}" alt="Imagem de uma pessoa">
                            </div>
                            <div class="author-info">
                                <h3>${testimonial.name}</h3>
                                <p>${testimonial.since}</p>
                            </div>
                        </div>
                        <blockquote class="testimonial-quote">
                            "${testimonial.comment}"
                        </blockquote>
                        <div class="testimonial-rate">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                    </div>
                `;
            }

            testimonials.forEach(testimonial => {
                container.innerHTML += createSlide(testimonial);
            });

            this.initSwiper(shadow);
        };

        initSwiper(shadow) {
            const swiperContainer = shadow.querySelector(".swiper");
            const swiper = new Swiper(swiperContainer, {
                loop: true,
                grabCursor: true,
                navigation: {
                    nextEl: shadow.querySelector(".swiper-button-next"),
                    prevEl: shadow.querySelector(".swiper-button-prev"),
                },
                pagination: {
                    el: shadow.querySelector(".swiper-pagination"),
                    clickable: true
                },
                breakpoints: {
                    640: { slidesPerView: 1, spaceBetween: 18 },
                    768: { slidesPerView: 2, spaceBetween: 18 },
                    1188: { slidesPerView: 3, spaceBetween: 24 }
                }
            });
        }
};

customElements.define("api-example-component", APIexampleComponent);
/* Required HTML CSS Link import:

    <!-- Swiper Details -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" 
        integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
        crossorigin="anonymous" referrerpolicy="no-referrer" /> 
    <!-- Swiper Details--> 

*/