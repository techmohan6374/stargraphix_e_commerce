var vm = new Vue({
    el: '#StarGraphixApp',
    data: {
        showAll: true,
        showLoader: true,
        showBody: false,
        openMobileNav: false,
        allProducts: false,
        currentTab: 'Tab 1',
        showProducts: true,
        showSingleProduct: false,
        searchProductText: '',
        orderForm: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            productName: '',
            contentImage: '',
            message: ''
        },
        selectedProductImage: [],
        selectedProductName: '',
        services: [
            {
                id: 1,
                serviceName: 'Logo Design',
                serviceIcon: 'mdi:file-star-outline',
                serviceContent: 'Crafting unique and memorable logos that capture the essence of your brand. Ourdesigns stand out and leave a lasting impression.'
            },
            {
                id: 2,
                serviceName: 'Print Design',
                serviceIcon: 'ic:sharp-print',
                serviceContent: 'Creating eye-catching and effective print materials, from business cards to brochures. We ensure high-quality prints that reflect your brand.'
            },
            {
                id: 3,
                serviceName: 'Brand Identity',
                serviceIcon: 'ant-design:shop-filled',
                serviceContent: 'Developing a cohesive brand identity that tells your story and connects with your audience. Strengthen your brand presence with our expertise.'
            },
            {
                id: 4,
                serviceName: 'Website Design',
                serviceIcon: 'mdi:web-sync',
                serviceContent: ' Designing stunning and user-friendly websites that engage your visitors. Our designs are tailored to your business goals and aesthetics.'
            },
            {
                id: 5,
                serviceName: 'Digital Business Card',
                serviceIcon: 'flowbite:profile-card-outline',
                serviceContent: 'Create interactive digital business cards with social media icons and click-to-call functionality. Share contact info effortlessly'
            },
            {
                id: 6,
                serviceName: 'Web Applications',
                serviceIcon: 'ph:code-fill',
                serviceContent: 'Building robust and scalable web applications tailored to your business needs. Enhance functionality and user experience with our solutions.'
            },
        ],
        products: [
            {
                id: 1,
                productName: 'Business Card Design',
                productImage: '/resources/images/Designs/Business Cards/1.jpg',
                productPrize: '500',
                productContent: 'Get professionally crafted business card designs tailored to your brand. Impress clients with unique, high-quality designs that leave a lasting impression.',
            },
            {
                id: 2,
                productName: 'Flyer Design',
                productImage: '/resources/images/Designs/Flyer/1.jpg',
                productPrize: '1000',
                productContent: 'Promote your business with eye-catching flyer designs. Custom-crafted to captivate and communicate your message effectively to your audience.',
            },
            {
                id: 3,
                productName: 'Wedding Card Design',
                productImage: '/resources/images/Designs/Wedding Cards/1.jpg',
                productPrize: '2000',
                productContent: 'Celebrate your special day with elegant wedding card designs. Customized to reflect your unique style and set the perfect tone for your big day.',
            },
            {
                id: 4,
                productName: 'Instagram Posters',
                productImage: '/resources/images/Designs/Instagram Posters/1.jpg',
                productPrize: '500',
                productContent: 'Elevate your social media presence with our stunning and eye-catching Instagram posters. Perfect for promoting events, sales, and brand messages.'
            },
            {
                id: 5,
                productName: 'Resume',
                productImage: '/resources/images/Designs/Resume/1.jpg',
                productPrize: 350,
                productContent: 'Stand out with our expertly crafted digital resumes, designed for both online and print use. Elevate your professional presence with tailored, visually appealing resumes.'
            },
            {
                id: 6,
                productName: 'Note Book',
                productImage: '/resources/images/Designs/Note Book/1.jpg',
                productPrize: 450,
                productContent: 'Create your unique custom notebooks with personalized designs and professional printing. Ideal for gifts, branding, and everyday use.'
            }
        ],
        allProductsImages: [
            {
                id: 1,
                productImage: '/resources/images/Designs/Business Cards/1.jpg',
                productId: 1
            },
            {
                id: 2,
                productImage: '/resources/images/Designs/Business Cards/2.jpg',
                productId: 1
            },
            {
                id: 3,
                productImage: '/resources/images/Designs/Business Cards/3.jpg',
                productId: 1,
            },
            {
                id: 4,
                productImage: '/resources/images/Designs/Flyer/1.jpg',
                productId: 2,
            },
            {
                id: 5,
                productImage: '/resources/images/Designs/Flyer/2.jpg',
                productId: 2
            },
            {
                id: 6,
                productImage: '/resources/images/Designs/Flyer/3.jpg',
                productId: 2
            },
            {
                id: 7,
                productImage: '/resources/images/Designs/Flyer/4.jpg',
                productId: 2
            },
            {
                id: 8,
                productImage: '/resources/images/Designs/Flyer/5.jpg',
                productId: 2
            },
            {
                id: 9,
                productImage: '/resources/images/Designs/Flyer/6.jpg',
                productId: 2
            },
            {
                id: 10,
                productImage: '/resources/images/Designs/Instagram Posters/1.jpg',
                productId: 4
            },
            {
                id: 11,
                productImage: '/resources/images/Designs/Instagram Posters/2.jpg',
                productId: 4
            },
            {
                id: 12,
                productImage: '/resources/images/Designs/Instagram Posters/3.jpg',
                productId: 4
            },
            {
                id: 13,
                productImage: '/resources/images/Designs/Resume/1.jpg',
                productId: 5
            },
            {
                id: 14,
                productImage: '/resources/images/Designs/Resume/2.jpg',
                productId: 5
            },
            {
                id: 15,
                productImage: '/resources/images/Designs/Resume/3.jpg',
                productId: 5
            },
            {
                id: 16,
                productImage: '/resources/images/Designs/Note Book/1.jpg',
                productId: 6
            },
            {
                id: 17,
                productImage: '/resources/images/Designs/Note Book/2.jpg',
                productId: 6
            }
        ],
        websiteProducts: [
            {
                id: 1,
                websiteImage: '/resources/images/Websites/Web_1.jpg',
                websiteType: 'Web Application',
                websiteName: 'Invoice Generation Website',
                websiteContent: 'Effortlessly create and manage invoices with our user-friendly platform. Generate professional invoices, download them as PDFs, and track your invoicing activity through a comprehensive dashboard.'
            },
            {
                id: 2,
                websiteImage: '/resources/images/Websites/Web_2.jpg',
                websiteType: 'Website',
                websiteName: 'Portfolio Website',
                websiteContent: 'A professional portfolio website using HTML, CSS, and JS, it has smooth page transitions, cool background effects, a unique design, and it is mobile responsive. It showcases my skills, projects, and experience in a visually engaging manner.'
            },
        ]
    },
    computed: {
        filteredProductData() {
            return this.products.filter(product => {
                const searchText = this.searchProductText.toLowerCase();
                return (
                    product.productName.toLowerCase().includes(searchText) ||
                    product.productPrize.toString().includes(searchText)
                );
            });
        },
        productDropDownData() {
            return this.products.map(x => x.productName);
        }
    },
    methods: {
        showProduct(id) {
            this.showSingleProduct = true;
            this.showProducts = false;
            this.selectedProductImage = this.allProductsImages.filter(x => x.productId == id).map(x => x.productImage);
            this.selectedProductName = this.products.filter(x => x.id == id).map(x => x.productName)[0];
        },
        mainShowProduct(id) {
            this.showSingleProduct = true;
            this.showProducts = false;
            this.selectedProductImage = this.allProductsImages.filter(x => x.productId == id).map(x => x.productImage);
            this.selectedProductName = this.products.filter(x => x.id == id).map(x => x.productName)[0];
            this.toggleShowAll();
            this.showSingleProduct = true;
            this.showProducts = false;
        },
        clearAllData() {
            this.orderForm.firstName = '';
            this.orderForm.lastName = '';
            this.orderForm.email = '';
            this.orderForm.phone = '';
            this.orderForm.productName = '';
            this.orderForm.contentImage = '';
            this.orderForm.message = '';
        },
        setShowAllTrue() {
            this.showAll = true;
            this.allProducts = false;
            this.$nextTick(() => {
                this.initFlickity();
                this.productDropDown();
            });
            this.openMobileNav = false;
            this.showSingleProduct = false;
            this.showProducts = true;
        },
        toggleShowAll() {
            this.showAll = !this.showAll;
            this.$nextTick(() => {
                this.initFlickity();
                this.productDropDown();
            });
            this.allProducts = true;
            this.showSingleProduct = false;
            this.showProducts = true;
        },
        initFlickity() {
            var elem = document.querySelectorAll('.main-carousel');
            elem.forEach((carousel) => {
                new Flickity(carousel, {
                    cellAlign: 'center',
                    contain: true,
                    autoPlay: 2000
                });
            });
        },
        triggerFileUpload() {
            this.$refs.fileInput.click();
        },
        handleFileUpload(event) {
            const file = event.target.files[0];
            if (file) {
                console.log('File selected:', file);
            }
        },
        productDropDown() {
            $('#productList').select2();
        },
        goToWhatsapp() {
            var notyf = new Notyf();
            notyf.success('Your Order Submitted Successfully');
        },
        openFullscreen(src) {
            $.fancybox.open([
                {
                    src: src,
                    opts: {
                        caption: this.selectedProductName,
                        animationEffect: "fade",
                        transitionEffect: "slide"
                    }
                }
            ], {
                loop: false,
                buttons: [
                    "zoom",
                    "share",
                    "slideShow",
                    "fullScreen",
                    "download",
                    "close"
                ]
            });
        }
    },
    mounted() {
        setTimeout(() => {
            this.showLoader = false;
            this.showBody = true;
            this.$nextTick(() => {
                this.initFlickity();
                this.productDropDown();
            });
        }, 4000);
        var typed = new Typed('#element', {
            strings: ["Welcome To Star Graphix World"],
            typeSpeed: 80,
            cursorChar: '',
            loop: 2,
        });
    }
});
