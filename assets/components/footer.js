class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <footer id="footer">
            <div class="inner">
                <section>
                    <div class="contact-method">
                        <span class="icon solid alt fa-envelope"></span>
                        <h4><a href="mailto:toggles_bevy_0s@icloud.com">Entre em contato por Email</a></h4>
                    </div>
                </section>
                <ul class="icons">
                    <li><a href="#" class="icon brands alt fa-twitter" target="_blank"><span class="label">Twitter</span></a></li>
                    <li><a href="#" class="icon brands alt fa-instagram" target="_blank"><span class="label">Instagram</span></a></li>
                    <li><a href="#" class="icon brands alt fa-github" target="_blank"><span class="label">GitHub</span></a></li>
                </ul>
                <ul class="copyright">
                    <li>&copy; Viajando Mais Barato com Milhas</li>
                    <li>Design: <a href="https://html5up.net" target="_blank">HTML5 UP</a></li>
                </ul>
            </div>
        </footer>
    `;
    }
}

customElements.define('footer-component', Footer);
