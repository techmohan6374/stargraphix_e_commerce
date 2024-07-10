var vm = new Vue({
    el: '#StarGraphixApp',
    data: {
        openMobileNav: false,
        sliderImage: [],
        currentSlide: 0,
        animate: false,
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
        ]
    },
    computed: {

    },
    methods: {

        // Slider Methods
        updateSliderImages() {
            if (window.innerWidth >= 768) {
                this.sliderImage = [
                    'https://raw.githubusercontent.com/techmohan6374/stargraphix_e_commerce/main/resources/images/Slider%20Images/1.png',
                    'https://raw.githubusercontent.com/techmohan6374/stargraphix_e_commerce/main/resources/images/Slider%20Images/2.png',
                    'https://raw.githubusercontent.com/techmohan6374/stargraphix_e_commerce/main/resources/images/Slider%20Images/3.png',
                ];
            } else {
                this.sliderImage = [
                    'https://placehold.co/600x400/?text=Slide1',
                    'https://placehold.co/600x400/?text=Slide2',
                    'https://placehold.co/600x400/?text=Slide3',
                ];
            }
        },
        nextSlide() {
            this.animateSlide(() => {
                this.currentSlide = (this.currentSlide + 1) % this.sliderImage.length;
            });
        },
        prevSlide() {
            this.animateSlide(() => {
                this.currentSlide = (this.currentSlide - 1 + this.sliderImage.length) % this.sliderImage.length;
            });
        },
        goToSlide(index) {
            this.animateSlide(() => {
                this.currentSlide = index;
            });
        },
        animateSlide(callback) {
            this.animate = true;
            setTimeout(() => {
                callback();
                setTimeout(() => {
                    this.animate = false;
                }, 1000); // Adjust this timeout to match the animation duration
            }, 0);
        },
    },
    watch: {

    },
    mounted() {

    },
    created() {
        this.updateSliderImages();
        window.addEventListener('resize', this.updateSliderImages);
    },
    destroyed() {
        window.removeEventListener('resize', this.updateSliderImages);
    },
});