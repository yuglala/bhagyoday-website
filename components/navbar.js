class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav class="bg-primary text-white px-4 py-3 shadow-lg">
            <div class="container mx-auto flex items-center justify-between">
                <a href="#" class="font-bold text-2xl tracking-wide">Bhagyoday Agro</a>
                <ul class="flex space-x-6 text-lg">
                    <li><a href="#products" class="hover:underline">Products</a></li>
                    <li><a href="#contact" class="hover:underline">Contact</a></li>
                    <li><a href="#testimonial" class="hover:underline">Testimonials</a></li>
                </ul>
            </div>
        </nav>
        `;
    }
}
customElements.define('custom-navbar', CustomNavbar);
