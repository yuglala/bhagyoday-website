class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="bg-secondary text-white py-6 mt-12">
            <div class="container mx-auto text-center">
                <span>&copy; ${new Date().getFullYear()} Bhagyoday Agro Centre. All rights reserved.</span>
            </div>
        </footer>
        `;
    }
}
customElements.define('custom-footer', CustomFooter);
