var vm = new Vue({
    el: '#StarGraphixApp',
    data: {
        openMobileNav: false,
        sliderImage: [],
        currentSlide: 0,
        animate: false
    },
    computed: {

    },
    methods: {

        // Slider Methods
        updateSliderImages() {
            if (window.innerWidth >= 768) {
                this.sliderImage = [
                    'https://raw.githubusercontent.com/techmohan6374/stargraphix_e_commerce/main/resources/images/Slider%20Images/1.png',
                    'https://raw.githubusercontent.com/techmohan6374/stargraphix_e_commerce/main/resources/images/Slider%20Images/1.png',
                    'https://raw.githubusercontent.com/techmohan6374/stargraphix_e_commerce/main/resources/images/Slider%20Images/1.png',
                ];
            } else {
                this.sliderImage = [
                    '/resources/images/Slider Images/1.jpg',
                    '/resources/images/Slider Images/1.jpg',
                    '/resources/images/Slider Images/1.jpg',
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