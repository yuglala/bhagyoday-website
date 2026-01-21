# bhagyoday-website
For agriculture 
<!DOCTYPE html>
<html lang="hi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bhagyoday Agro Centre - Har Fasal Ke Liye Bharosemand Agro Solutions</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: '#2b6e3a',
                        secondary: '#5a7247',
                        accent: '#e9b949',
                    }
                }
            }
        }
    </script>
</head>
<body class="font-sans bg-gray-50">
    <!-- Navigation Component -->
    <script src="components/navbar.js"></script>
    <custom-navbar></custom-navbar>

    <!-- Hero Section -->
    <section class="relative bg-gradient-to-r from-primary to-secondary text-white py-20 px-4">
        <div class="container mx-auto text-center">
            <h1 class="text-4xl md:text-5xl font-bold mb-4">Har Fasal Ke Liye Bharosemand Agro Solutions</h1>
            <p class="text-xl mb-8 max-w-2xl mx-auto">20 Saal Se Devbhoomi Dwarka Ke Kisaano Ka Vishwas</p>
            <div class="flex flex-col sm:flex-row justify-center gap-4">
                <a href="tel:+919999999999" class="bg-accent hover:bg-yellow-600 text-primary font-bold py-3 px-6 rounded-full flex items-center justify-center gap-2 transition">
                    <i data-feather="phone"></i> 📞 Call Now
                </a>
                <a href="#products" class="bg-white hover:bg-gray-100 text-primary font-bold py-3 px-6 rounded-full flex items-center justify-center gap-2 transition">
                    <i data-feather="shopping-cart"></i> 🛒 Buy Agro Products
                </a>
            </div>
        </div>
        <div class="absolute bottom-0 left-0 right-0 h-16 bg-white/10 backdrop-blur-sm"></div>
    </section>

    <!-- (More sections: Why Choose Us, Products, etc, -- keep your page content here, as previously!) -->

    <!-- Footer -->
    <script src="components/footer.js"></script>
    <custom-footer></custom-footer>

    <!-- Sticky WhatsApp Button -->
    <div class="fixed bottom-6 right-6 z-50">
        <a href="https://wa.me/919999999999" class="w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg transition animate-bounce">
            <i data-feather="message-square" class="w-8 h-8"></i>
        </a>
    </div>

    <script>
    document.addEventListener('DOMContentLoaded', () => {
        if (typeof feather !== 'undefined') {
            feather.replace();
        }
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href.length > 1 && document.querySelector(href)) {
                    e.preventDefault();
                    document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
        document.querySelectorAll('button').forEach(btn => {
            if (btn.textContent.includes('Order Now')) {
                btn.addEventListener('click', (e) => {
                    alert('Order placed! Our team will contact you soon.');
                });
            }
        });
    });
    </script>
</body>
</html>
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