var vm = new Vue({
    el: '#StarGraphixApp',
    data: {
        showAll: true,
        openMobileNav: false,
        currentTab: 'Tab 1',
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

    },
    methods: {
        setShowAllTrue() {
            this.showAll = true;
            this.$nextTick(() => {
                this.initFlickity();
            });
        },
        toggleShowAll() {
            this.showAll = !this.showAll;
            this.$nextTick(() => {
                this.initFlickity();
            });
        },
        initFlickity() {
            var elem = document.querySelectorAll('.main-carousel');
            elem.forEach((carousel) => {
                new Flickity(carousel, {
                    cellAlign: 'center',
                    contain: true
                });
            });
        }
    },
});

var elem = document.querySelector('.main-carousel');
var flkty = new Flickity(elem, {
    cellAlign: 'center',
    contain: true
});