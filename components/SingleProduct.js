const SingleProduct = {
    template: `
          <div class="container show-selected-product" style="min-height:100vh">
            <div class="row py-4">
                <div class="col-12 flex">
                    <div class="selected-product flex">
                        {{selectedProductName}}
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-md-6 col-xl-4 mb-3" v-for="val in selectedProductImage">
                    <div class="card rounded-0">
                        <img :src="val" :alt="val">
                        <button class="fullscreen flex" v-on:click="openFullscreen(val)">
                            <iconify-icon icon="ic:outline-fullscreen-exit"></iconify-icon>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `,
    data() {
        return {
            allProductsImage: [
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
                },
                {
                    id: 18,
                    productImage: '/resources/images/Designs/Wedding Cards/1.jpg',
                    productId: 3
                },
                {
                    id: 19,
                    productImage: '/resources/images/Designs/Digital Business Cards/1.jpg',
                    productFile: '/resources/pdf/Digital Business Cards/APPLE FOOD DIGITAL BUSINESS CARD.pdf',
                    productId: 7
                },
                {
                    id: 19,
                    productImage: '/resources/images/Designs/Digital Business Cards/2.jpg',
                    productFile: '/resources/pdf/Digital Business Cards/Mohanraj Designer.pdf',
                    productId: 7
                },
                {
                    id: 19,
                    productImage: '/resources/images/Designs/Digital Business Cards/3.jpg',
                    productFile: '/resources/pdf/Digital Business Cards/PCS Vinod Digital Visiting Card.pdf',
                    productId: 7
                },
                {
                    id: 19,
                    productImage: '/resources/images/Designs/Digital Business Cards/4.jpg',
                    productFile: '/resources/pdf/Digital Business Cards/STARGRAPHIX DIGITAL CARD-1.pdf',
                    productId: 7
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
                }
            ],
            selectedProductImage: [],
            selectedProductName: '',
        };
    },
    created() {
        const productId = this.$route.params.id;
        this.selectedProductImage = this.allProductsImage.filter(x => x.productId == productId).map(x => x.productImage);
        this.selectedProductName = this.products.filter(x => x.id == productId).map(y => y.productName)[0];
    },
    methods: {
        openFullscreen(src) {
            if (this.selectedProductName == 'Digital Business Card') {
                if(src=='/resources/images/Designs/Digital Business Cards/1.jpg'){
                    window.open('/resources/pdf/Digital Business Cards/APPLE FOOD DIGITAL BUSINESS CARD.pdf', '_blank')
                }
                else if(src=='/resources/images/Designs/Digital Business Cards/2.jpg'){
                    window.open('/resources/pdf/Digital Business Cards/Mohanraj Designer.pdf', '_blank')
                }
                else if(src=='/resources/images/Designs/Digital Business Cards/3.jpg'){
                    window.open('/resources/pdf/Digital Business Cards/PCS Vinod Digital Visiting Card.pdf', '_blank')
                }
                else if(src=='/resources/images/Designs/Digital Business Cards/4.jpg'){
                    window.open('/resources/pdf/Digital Business Cards/STARGRAPHIX DIGITAL CARD-1.pdf', '_blank')
                }
            }
            else {
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
        goBack() {
            this.$router.push('/all-products');
        }
    }
};
