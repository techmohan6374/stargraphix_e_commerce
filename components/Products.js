const Products = {
    template: `
        <div class="products-body">
            <div class="container py-4">
                <div class="row py-4">
                    <div class="col-12 flex">
                        <div class="all-designs flex">
                            All Designs
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="search-bar" style="position: relative;">
                            <input type="search" placeholder="Search Here..." v-model="searchProductText">
                            <iconify-icon icon="wpf:search"
                                style="position: absolute;  left: 14px;top: 14px;font-size: 26px;color:var(--primary-color)">
                            </iconify-icon>
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-12 col-md-6 col-xl-4 mt-4" v-for="product in filteredProductData">
                        <div class="card product-card flex">
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
        </div>
    `,
    data() {
        return {
            searchProductText: '',
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
    computed: {
        filteredProductData() {
            return this.products.filter(product => {
                const searchText = this.searchProductText.toLowerCase();
                return (
                    product.productName.toLowerCase().includes(searchText) ||
                    product.productPrize.toString().includes(searchText)
                );
            });
        }
    },
    methods: {
        viewProduct(id) {
            this.$router.push(`/singleProduct/${id}`);
        },
        goBack() {
            this.$router.push('/main');
        }
    }
};
