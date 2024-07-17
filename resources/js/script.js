var vm = new Vue({
    el: '#StarGraphixApp',
    data: {
        showAll: true,
        openMobileNav: false,
        allProducts: false,
        currentTab: 'Tab 1',
        searchProductText: '',
        showProducts: true,
        showSingleProduct: false,
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
                productImage: 'https://raw.githubusercontent.com/techmohan6374/stargraphix_e_commerce/main/resources/images/Designs/Business%20Cards/1.jpg',
                productPrize: '500',
                productContent: 'Get professionally crafted business card designs tailored to your brand. Impress clients with unique, high-quality designs that leave a lasting impression.',
            },
            {
                id: 2,
                productName: 'Flyer Design',
                productImage: 'https://raw.githubusercontent.com/techmohan6374/stargraphix_e_commerce/main/resources/images/Designs/Flyer/1.jpg',
                productPrize: '1000',
                productContent: 'Promote your business with eye-catching flyer designs. Custom-crafted to captivate and communicate your message effectively to your audience.',
            },
            {
                id: 3,
                productName: 'Wedding Card Design',
                productImage: 'https://raw.githubusercontent.com/techmohan6374/stargraphix_e_commerce/main/resources/images/Designs/Wedding%20Cards/1.jpg',
                productPrize: '2000',
                productContent: 'Celebrate your special day with elegant wedding card designs. Customized to reflect your unique style and set the perfect tone for your big day.',
            }
        ],
        allProductsImages: [
            {
                id: 1,
                productImage: 'https://raw.githubusercontent.com/techmohan6374/stargraphix_e_commerce/main/resources/images/Designs/Business%20Cards/1.jpg',
                productId: 1
            },
            {
                id: 2,
                productImage: 'https://raw.githubusercontent.com/techmohan6374/stargraphix_e_commerce/main/resources/images/Designs/Business%20Cards/2.jpg',
                productId: 1
            },
            {
                id: 3,
                productImage: 'https://raw.githubusercontent.com/techmohan6374/stargraphix_e_commerce/main/resources/images/Designs/Business%20Cards/3.jpg',
                productId: 1,
            },
            {
                id: 4,
                productImage: 'https://raw.githubusercontent.com/techmohan6374/stargraphix_e_commerce/main/resources/images/Designs/Flyer/1.jpg',
                productId: 2,
            },
            {
                id: 5,
                productImage: 'https://raw.githubusercontent.com/techmohan6374/stargraphix_e_commerce/main/resources/images/Designs/Flyer/2.jpg',
                productId: 2
            },
            {
                id: 6,
                productImage: 'https://raw.githubusercontent.com/techmohan6374/stargraphix_e_commerce/main/resources/images/Designs/Flyer/3.jpg',
                productId: 2
            },
            {
                id: 7,
                productImage: 'https://raw.githubusercontent.com/techmohan6374/stargraphix_e_commerce/main/resources/images/Designs/Flyer/4.jpg',
                productId: 2
            },
            {
                id: 8,
                productImage: 'https://raw.githubusercontent.com/techmohan6374/stargraphix_e_commerce/main/resources/images/Designs/Flyer/5.jpg',
                productId: 2
            },
            {
                id: 9,
                productImage: 'https://raw.githubusercontent.com/techmohan6374/stargraphix_e_commerce/main/resources/images/Designs/Flyer/6.jpg',
                productId: 2
            }
        ],
        websiteProducts: [
            {
                id: 1,
                websiteImage: 'https://raw.githubusercontent.com/techmohan6374/stargraphix_e_commerce/main/resources/images/Websites/Web_1.jpg',
                websiteType: 'Web Application',
                websiteName: 'Invoice Generation Website',
                websiteContent: 'Effortlessly create and manage invoices with our user-friendly platform. Generate professional invoices, download them as PDFs, and track your invoicing activity through a comprehensive dashboard.'
            },
            {
                id: 2,
                websiteImage: 'https://raw.githubusercontent.com/techmohan6374/stargraphix_e_commerce/main/resources/images/Websites/Web_2.jpg',
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
                    contain: true
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
        this.initFlickity();
        this.productDropDown();
    }
});
