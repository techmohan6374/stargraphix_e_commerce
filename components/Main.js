
// Firebase Configuration
var firebaseConfig = {
    apiKey: "AIzaSyDN_104D8x9ha8OAKaRR9iyao-us5xylaY",
    authDomain: "stargraphix-order.firebaseapp.com",
    databaseURL: "https://stargraphix-order-default-rtdb.firebaseio.com",
    projectId: "stargraphix-order",
    storageBucket: "stargraphix-order.appspot.com",
    messagingSenderId: "122684226020",
    appId: "1:122684226020:web:996d269138fabe972eaff1",
    measurementId: "G-P5LNVB8Q7S"
};
var notyf = new Notyf();

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const Main = {
    template: `
        <div class="container-fluid p-0" style="min-height: 100dvh !important;">
    <header>
        <div class="navigation-bar">
            <div class="container">
                <div class="star-graphix-logo flex">
                    <div class="circle-logo flex">
                        <a href="javascript:void(0);" v-on:click="scrollToSection('home')">
                            <img src="resources/images/STAR GRAPHIX LOGO.png" alt="Star Graphix Logo">
                        </a>
                    </div>
                    <div class="company-name">
                        <h1>Star Graphix</h1>
                        <p>Digital Solution in one place</p>
                    </div>
                </div>
                <div class="nav-bar flex">
                    <ul class="flex">
                        <li>
                            <a href="javascript:void(0);" v-on:click="scrollToSection('home')">Home</a>
                        </li>
                        <li>
                            <a href="javascript:void(0);" v-on:click="scrollToSection('services')">Services</a>
                        </li>
                        <li>
                            <a href="javascript:void(0);" v-on:click="scrollToSection('products')">Products</a>
                        </li>
                        <li>
                            <a href="javascript:void(0);" v-on:click="scrollToSection('contact')">Contact Us</a>
                        </li>
                    </ul>
                    <a href="javascript:void(0);" v-on:click="scrollToSection('order')" class="order-now flex">
                        <iconify-icon icon="material-symbols:order-approve"></iconify-icon> Order Now
                    </a>
                </div>
                <button class="expand-btn flex" v-on:click="mobileNavBar = true">
                    <iconify-icon icon="octicon:three-bars-16"></iconify-icon>
                </button>
            </div>
        </div>
    </header>
    <section id="home">
       <div id="desktop-carousel">
            <div class="main-carousel splide">
                <div class="splide__track">
                    <ul class="splide__list">
                    <li class="splide__slide carousel-cell">
                        <img src="/resources/images/Sliders/1.jpg" alt="Slider 1">
                    </li>
                    <li class="splide__slide carousel-cell">
                        <img src="/resources/images/Sliders/2.jpg" alt="Slider 2">
                    </li>
                    <li class="splide__slide carousel-cell">
                        <img src="/resources/images/Sliders/3.jpg" alt="Slider 3">
                    </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <section id="services">
        <div class="container">
            <div class="row mb-4">
                <div class="col-12 flex">
                    <div class="our-services flex">
                        Our Services
                    </div>
                </div>
            </div>
            <div class="row">
                <div v-for="service in services" class="col-12 col-md-6 col-xl-4 mb-4">
                    <div class="card service-card flex" data-aos="zoom-in">
                        <div class="service-header flex">
                            <div class="service-logo flex">
                                <iconify-icon :icon="service.serviceIcon"></iconify-icon>
                            </div>
                            <div class="service-heading">
                                {{service.serviceName}}
                            </div>
                        </div>
                        <div class="service-content">
                            {{service.serviceContent}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="products">
        <div class="container">
            <div class="row">
                <div class="col-12 flex">
                    <div class="tabs flex" style="width:300px;">
                        <div class="tab" :class="{ active: currentTab === 'Tab 1' }" v-on:click="currentTab = 'Tab 1'">
                            Design</div>
                        <div class="tab" :class="{ active: currentTab === 'Tab 2' }" v-on:click="currentTab = 'Tab 2'">
                            Development</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container mb-4">
            <div class="row" v-if="currentTab === 'Tab 1'">
                <div class="col-12 col-md-6 col-xl-4 mt-4" v-for="product in products.slice(0,9)">
                    <div class="card product-card flex" data-aos="zoom-in">
                        <div class="product-image">
                            <img :src="product.productImage" :alt="product.productImage" loading="lazy">
                        </div>
                        <div class="product-name">
                            {{product.productName}}
                        </div>
                        <div class="product-prize">
                            Rs.<span>{{product.productPrize}}</span><span style="font-size:14px;">/-</span>
                        </div>
                        <div class="product-content">
                            {{product.productContent}}
                        </div>
                        <button class="view-more-btn flex" v-on:click="viewProduct(product.id)">
                            View More
                            <iconify-icon icon="gg:arrow-right-o"></iconify-icon>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="currentTab === 'Tab 1'" class="container-fluid p-0 py-4">
            <div class="col-12 flex position-relative">
                <div class="view-more-line"></div>
                <button class="view-more-products flex" v-on:click="viewAllProducts()">
                    View All Products
                    <iconify-icon icon="ep:arrow-down-bold"></iconify-icon>
                </button>
            </div>
        </div>
        <div v-if="currentTab === 'Tab 2'" class="container mb-4">
            <div class="row" style="margin-top: 30px;">
                <div class="col-12 col-md-6 col-xl-6 mt-4" v-for="web in websiteProducts">
                    <div class="card web-card">
                        <div class="website-image">
                            <img :src="web.websiteImage" :alt="web.websiteImage" loading="lazy">
                        </div>
                        <div class="website-type">
                            {{web.websiteType}}
                        </div>
                        <div class="website-name">
                            {{web.websiteName}}
                        </div>
                        <div class="website-content">
                            {{web.websiteContent}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="order">
        <div class="container">
            <div class="row mb-4">
                <div class="col-12 flex">
                    <div class="order-now flex">
                        Order Now
                    </div>
                </div>
            </div>
            <div class="row mb-4">
                <div class="col-12">
                   <div class="card order-card">
                        <div class="row">
                            <div class="col-12 col-md-6 col-xl-6 mb-3">
                                <input class="order-input" type="text" placeholder="First Name" v-model="orderData.firstName">
                                <span class="d-block text-white fs-6 mt-2" v-if="errors.firstName">
                                    {{ errors.firstName }}
                                </span>
                            </div>
                            <div class="col-12 col-md-6 col-xl-6 mb-3">
                                <input class="order-input" type="text" placeholder="Last Name" v-model="orderData.lastName">
                                <span class="d-block text-white fs-6 mt-2" v-if="errors.lastName">
                                    {{ errors.lastName }}
                                </span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 col-md-6 col-xl-6 mb-3">
                                <input class="order-input" type="text" placeholder="Email" v-model="orderData.email">
                                <span class="d-block text-white fs-6 mt-2" v-if="errors.email">
                                    {{ errors.email }}
                                </span>
                            </div>
                            <div class="col-12 col-md-6 col-xl-6 mb-3">
                                <input class="order-input" type="text" placeholder="Phone" v-model="orderData.phoneNo">
                                <span class="d-block text-white fs-6 mt-2" v-if="errors.phoneNo">
                                    {{ errors.phoneNo }}
                                </span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 col-md-6 col-xl-6 mb-3">
                                <select id="productList" v-model="orderData.productName">
                                    <option value="">Select your product</option>
                                    <option v-for="val in productDropDownData" :value="val">{{ val }}</option>
                                </select>
                                <span class="d-block text-white fs-6 mt-2" v-if="errors.productName">
                                    {{ errors.productName }}
                                </span>
                            </div>
                            <div class="col-12 col-md-6 col-xl-6 mb-3">
                                <div class="file-upload flex" @click="triggerFileUpload">
                                    <iconify-icon icon="material-symbols:cloud-upload"></iconify-icon>
                                    <p>{{orderFileName}}</p>
                                </div>
                                <input style="display: none;" type="file" ref="fileInput" @change="validateFile">
                                <span class="d-block text-white fs-6 mt-2" v-if="errors.file">
                                    {{ errors.file }}
                                </span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 mb-3">
                                <textarea placeholder="Type your message here" class="order-input" style="height:100px;" v-model="orderData.productDescription"></textarea>
                                <span class="d-block text-white fs-6 mt-2" v-if="errors.productDescription">
                                    {{ errors.productDescription }}
                                </span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <button class="submit-order flex" @click="submitOrder">
                                    <iconify-icon icon="formkit:submit"></iconify-icon>
                                    Submit Order
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
    <section id="contact">
        <div class="container">
            <div class="row contact">
                <div class="col-12 col-md-12 col-xl-4 pt-4">
                    <div class="star-graphix-logo flex">
                        <div class="circle-logo flex">
                            <a href="#home">
                                <img src="resources/images/STAR GRAPHIX LOGO.png" alt="Star Graphix Logo"
                                    loading="lazy">
                            </a>
                        </div>
                        <div class="company-name">
                            <h1>Star Graphix</h1>
                            <p>Digital Solution in one place</p>
                        </div>
                    </div>
                    <div class="company-description">
                        <span class="fw-bold">StarGrapix</span> offers professional graphic design, web
                        design,
                        and web development
                        services to help your brand shine online.
                    </div>
                </div>
                <div class="col-12 col-md-12 col-xl-2 pt-4">
                    <div class="links flex">
                        <h4>Useful Links</h4>
                        <ul>
                            <li>
                                <a href="#home">Home</a>
                            </li>
                            <li>
                                <a href="#services">Services</a>
                            </li>
                            <li>
                                <a href="#products">Products</a>
                            </li>
                            <li>
                                <a href="#contact">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-12 col-md-12 col-xl-3 pt-4">
                    <div class="branches flex">
                        <h4>Our Branches</h4>
                        <a href="#" class="flex" target="_blank">Ponnammapet Gate, Salem, Tamilnadu,</a>
                        <a href="#" class="flex" target="_blank">New Bus Stand, Salem, Tamilnadu</a>
                        <a href="https://api.whatsapp.com/send?phone=+916374507893" class="flex" target="_blank">Freelancing services from Bangalore</a>
                    </div>
                </div>
                <div class="col-12 col-md-12 col-xl-3 pt-4">
                    <div class="customer-support">
                        <h4>Customer Support</h4>
                        <div class="support-time flex">
                            <a class="flex" href="javascript:void(0);">
                                <iconify-icon icon="ph:user-bold"></iconify-icon> Support Time: 10:00 AM to 9:00 PM
                            </a>
                        </div>

                        <div class="email flex">
                            <a class="flex" href="mailto:starveera2010@gmail.com" target="_blank">
                                <iconify-icon icon="iconamoon:email-fill"></iconify-icon>
                                stargraphix2010@gmail.com
                            </a>
                        </div>

                        <div class="phone flex">
                           <a class="flex" href="tel:+919894033883" ><iconify-icon icon="material-symbols:add-call-sharp"></iconify-icon> +91 98940 33883 </a>
                           <a class="flex" href="tel:+918056580402" ><iconify-icon icon="material-symbols:add-call-sharp"></iconify-icon> +91 80565 80402 </a>
                           <a class="flex" href="tel:+916374507893" ><iconify-icon icon="material-symbols:add-call-sharp"></iconify-icon> +91 63745 07893 </a>
                        </div>
                        <div class="social-media-icons flex">
                            <a href="https://www.facebook.com/veera.samy.104" target="_blank">
                                <div class="circle circle-1 flex">
                                    <iconify-icon icon="gg:facebook"></iconify-icon>
                                </div>
                            </a>
                            <a href="https://www.instagram.com/stargraphix2010?igsh=MWZmMDYyZjV6bmd4dQ==" target="_blank">
                                <div class="circle circle-2 flex">
                                    <iconify-icon icon="mdi:instagram"></iconify-icon>
                                </div>
                            </a>
                            
                            <a href="https://api.whatsapp.com/send?phone=+919894033883" target="_blank">
                                <div class="circle circle-3 flex">
                                    <iconify-icon icon="ic:baseline-whatsapp"></iconify-icon>
                                </div>
                            </a>

                            <a href="https://t.me/mntechy" target="_blank">
                                <div class="circle circle-4 flex">
                                    <iconify-icon icon="icon-park-outline:telegram"></iconify-icon>
                                </div>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid p-0 m-0 pt-4">
            <div class="row m-0">
                <a href="https://techmohan.stargraphix.in/" target="_blank">
                    <div class="col-12 author">
                        Designed & Developed By @ Tech Mohan
                    </div>
                </a>
            </div>
        </div>
    </section>
    <div v-if="mobileNavBar" class="nav-mobile-bar flex">
        <ul class="flex">
            <li>
                <a href="javascript:void(0);" v-on:click="scrollToSection('home')">Home</a>
            </li>
            <li>
                <a href="javascript:void(0);" v-on:click="scrollToSection('services')">Services</a>
            </li>
            <li>
                <a href="javascript:void(0);" v-on:click="scrollToSection('products')">Products</a>
            </li>
            <li>
                <a href="javascript:void(0);" v-on:click="scrollToSection('contact')">Contact Us</a>
            </li>
        </ul>
        <a href="javascript:void(0);" v-on:click="scrollToSection('order')" class="order-now flex">
            <iconify-icon icon="material-symbols:order-approve"></iconify-icon> Order Now
        </a>
        <button class="close-btn" v-on:click="mobileNavBar = false">
            <iconify-icon icon="rivet-icons:close"></iconify-icon>
        </button>
    </div>
</div>
    `,
    data() {
        return {
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
                },
                {
                    id: 7,
                    productName: 'Digital Business Card',
                    productImage: '/resources/images/Designs/Digital Business Cards/1.jpg',
                    productPrize: 1000,
                    productContent: 'Boost your professional presence with our digital business cards, featuring clickable social media icons and offline access.',
                },
                {
                    id: 8,
                    productName: 'Brand Logo',
                    productImage: '/resources/images/Designs/Brand Logo/1.jfif',
                    productPrize: 1000,
                    productContent: 'Transform your brand identity with our unique and creative logo designs, crafted to captivate your audience.',
                },
                {
                    id: 9,
                    productName: 'Book Wrapper',
                    productImage: '/resources/images/Designs/Book Wrapper/1.jfif',
                    productPrize: 1500,
                    productContent: 'Enhance your books with our stylish wrappers and complete design solutions, tailored for a polished and professional look.'
                },
                {
                    id: 10,
                    productName: 'Invoice',
                    productImage: '/resources/images/Designs/Invoice/1.jfif',
                    productPrize: '900',
                    productContent: 'Invoice Design & Printable Sheets: Get professional invoice designs and printable sheets to streamline your billing process efficiently.',
                },
                {
                    id: 11,
                    productName: 'Banner',
                    productImage: '/resources/images/Designs/Banner/1.jfif',
                    productPrize: 800,
                    productContent: 'Banner Designs & Printing: We offer custom banner designs and high-quality banner printing to make your brand stand out.',
                },
                {
                    id: 12,
                    productName: 'E-Book',
                    productImage: '/resources/images/Designs/E-Book/1.jpg',
                    productPrize: 4000,
                    productContent: 'Transform your manuscript into a visually stunning e-book with our expert design services, ensuring a captivating and reader-friendly experience.'
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
            ],
            currentTab: 'Tab 1',
            mobileNavBar: false,
            orderData: {
                firstName: '',
                lastName: '',
                email: '',
                phoneNo: '',
                productName: '',
                productDescription: '',
                file: ''
            },
            orderFileName: 'Upload your file',
            errors: {
                firstName: '',
                lastName: '',
                email: '',
                phoneNo: '',
                productName: '',
                productDescription: '',
                file: ''
            }
        };
    },
    computed: {
        productDropDownData() {
            return this.products.map(x => x.productName);
        }
    },
    methods: {
        validateFirstName() {
            this.errors.firstName = '';
            if (!this.orderData.firstName) {
                this.errors.firstName = 'Please enter the data';
            } else if (!/^[a-zA-Z]+$/.test(this.orderData.firstName)) {
                this.errors.firstName = 'Name doesn\'t contain special characters or numbers';
                notyf.error('Name doesn\'t contain special characters or numbers');
            } else if (this.orderData.firstName.length > 25) {
                this.errors.firstName = 'Max 25 characters';
                this.errors.lastName = 'Max 25 characters';
            }
        },
        validateLastName() {
            this.errors.lastName = '';
            if (!this.orderData.lastName) {
                this.errors.lastName = 'Please enter the data';
            } else if (!/^[a-zA-Z]+$/.test(this.orderData.lastName)) {
                this.errors.lastName = 'Name doesn\'t contain special characters or numbers';
                notyf.error('Name doesn\'t contain special characters or numbers');
            } else if (this.orderData.lastName.length > 25) {
                this.errors.lastName = 'Max 25 characters';
                notyf.error('Max 25 characters');
            }
        },
        validateEmail() {
            this.errors.email = '';
            const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            if (!this.orderData.email) {
                this.errors.email = 'Please enter the data';
            } else if (!emailPattern.test(this.orderData.email)) {
                this.errors.email = 'Invalid email format';
                notyf.error('Invalid email format');
            }
        },
        validatePhoneNo() {
            this.errors.phoneNo = '';
            const phonePattern = /^[6789]\d{9}$/;
            if (!this.orderData.phoneNo) {
                this.errors.phoneNo = 'Please enter the data';
            } else if (!phonePattern.test(this.orderData.phoneNo)) {
                this.errors.phoneNo = 'Phone number must start with 7, 8, or 9 and contain 10 digits';
                notyf.error('Phone number must start with 7, 8, or 9 and contain 10 digits');
            }
        },
        validateProductName() {
            this.errors.productName = '';
            if (!this.orderData.productName) {
                this.errors.productName = 'Please select a product';
                notyf.error('Please select a product');
            }
        },
        validateProductDescription() {
            this.errors.productDescription = '';
            if (!this.orderData.productDescription) {
                this.errors.productDescription = 'Please enter a description';
                notyf.error('Please enter a description');
            }
        },
        validateFile(event) {
            this.errors.file = '';
            const file = event.target.files[0];
            const validTypes = ['image/png', 'image/jpeg', 'application/pdf'];
            const maxSize = 2 * 1024 * 1024; // 2 MB

            if (!file) {
                this.errors.file = 'Please upload the file';
                notyf.error('Please upload the file');
            } else if (!validTypes.includes(file.type)) {
                this.errors.file = 'Invalid format. Allowed formats: png, jpg, pdf';
                notyf.error('Invalid format. Allowed formats: png, jpg, pdf');
            } else if (file.size > maxSize) {
                this.errors.file = 'File size exceeds 2MB';
                notyf.error('File size exceeds 2MB');
            } else {
                this.orderData.file = file;
                this.orderFileName = file.name; // Store the filename
            }
        },

        validateData() {
            this.validateFirstName();
            this.validateLastName();
            this.validateEmail();
            this.validatePhoneNo();
            this.validateProductName();
            this.validateProductDescription();
            this.validateFile({ target: { files: [this.orderData.file] } });
            return !this.errors.firstName && !this.errors.lastName && !this.errors.email && !this.errors.phoneNo && !this.errors.productName && !this.errors.file;
        },
        scrollToSection(sectionId) {
            document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
            this.mobileNavBar = false;
        },
        viewAllProducts() {
            this.$router.push('/products');
        },
        viewProduct(id) {
            this.$router.push(`/singleProduct/${id}`);
        },
        initSlider() {
            new Splide('.splide', {
                type: 'loop',
                perPage: 1,
                // autoplay: true,
                // interval: 2000,
            }).mount();
        },
        productDropDown() {
            $('#productList').select2();
        },
        triggerFileUpload() {
            this.$refs.fileInput.click();
        },
        convertToBase64(file) {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = () => resolve(reader.result);
                reader.onerror = error => reject(error);
                reader.readAsDataURL(file);
            });
        },
        optimizeImage(file) {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = (event) => {
                    const img = new Image();
                    img.onload = () => {
                        const canvas = document.createElement('canvas');
                        const maxWidth = 800; // Desired max width of the image
                        const maxHeight = 800; // Desired max height of the image
                        let width = img.width;
                        let height = img.height;

                        // Calculate the new dimensions
                        if (width > height) {
                            if (width > maxWidth) {
                                height *= maxWidth / width;
                                width = maxWidth;
                            }
                        } else {
                            if (height > maxHeight) {
                                width *= maxHeight / height;
                                height = maxHeight;
                            }
                        }

                        canvas.width = width;
                        canvas.height = height;

                        const ctx = canvas.getContext('2d');
                        ctx.drawImage(img, 0, 0, width, height);

                        // Convert the canvas to a base64 string with reduced quality
                        const optimizedBase64 = canvas.toDataURL('image/jpeg', 0.7); // Adjust quality from 0 to 1
                        resolve(optimizedBase64);
                    };
                    img.onerror = reject;
                    img.src = event.target.result;
                };
                reader.onerror = reject;
                reader.readAsDataURL(file);
            });
        },
        async submitOrder() {
            if (this.validateData()) {
                try {
                    // Optimize the image
                    const optimizedBase64File = await this.optimizeImage(this.orderData.file);


                    // Prepare the order data
                    const orderData = {
                        firstName: this.orderData.firstName,
                        lastName: this.orderData.lastName,
                        email: this.orderData.email,
                        phoneNo: this.orderData.phoneNo,
                        productName: this.orderData.productName,
                        productDescription: this.orderData.productDescription,
                        imageUrl: optimizedBase64File
                    };

                    // Save to Firebase Realtime Database
                    const newOrderKey = firebase.database().ref().child('orders').push().key;
                    const updates = {};
                    updates[`/orders/${newOrderKey}`] = orderData;
                    await firebase.database().ref().update(updates);

                    Swal.fire({
                        icon: 'success',
                        title: 'Success',
                        text: 'Your order is submitted'
                    });
                    this.clearForm();
                } catch (error) {
                    notyf.error(error);
                }
            }
        },
        clearForm() {
            this.orderData = {
                firstName: '',
                lastName: '',
                email: '',
                phoneNo: '',
                productName: '',
                productDescription: '',
                file: null
            };
            this.errors = {
                firstName: '',
                lastName: '',
                email: '',
                phoneNo: '',
                productName: '',
                productDescription: '',
                file: ''
            };
            this.$refs.fileInput.value = '';
            $('#productList').val('').trigger('change');
            this.orderFileName = 'Upload your file';
        },
    },
    mounted() {
        this.initSlider();
        this.productDropDown();
        $('#productList').select2().on('change', () => {
            this.orderData.productName = $('#productList').val();
            this.validateProductName();
        });
 AOS.init({
            duration: 1200,
        })
    },
};
