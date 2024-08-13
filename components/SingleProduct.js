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
                    <div class="card rounded-0" data-aos="zoom-in">
                        <img :src="val" :alt="val" loading="lazy">
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
          productImage: "/resources/images/Designs/Business Cards/1.jpg",
          productId: 1,
        },
        {
          id: 2,
          productImage: "/resources/images/Designs/Business Cards/2.jpg",
          productId: 1,
        },
        {
          id: 3,
          productImage: "/resources/images/Designs/Business Cards/3.jpg",
          productId: 1,
        },
        {
          id: 4,
          productImage: "/resources/images/Designs/Flyer/1.jpg",
          productId: 2,
        },
        {
          id: 5,
          productImage: "/resources/images/Designs/Flyer/2.jpg",
          productId: 2,
        },
        {
          id: 6,
          productImage: "/resources/images/Designs/Flyer/3.jpg",
          productId: 2,
        },
        {
          id: 7,
          productImage: "/resources/images/Designs/Flyer/4.jpg",
          productId: 2,
        },
        {
          id: 8,
          productImage: "/resources/images/Designs/Flyer/5.jpg",
          productId: 2,
        },
        {
          id: 9,
          productImage: "/resources/images/Designs/Flyer/6.jpg",
          productId: 2,
        },
        {
          id: 10,
          productImage: "/resources/images/Designs/Instagram Posters/1.jpg",
          productId: 4,
        },
        {
          id: 11,
          productImage: "/resources/images/Designs/Instagram Posters/2.jpg",
          productId: 4,
        },
        {
          id: 12,
          productImage: "/resources/images/Designs/Instagram Posters/3.jpg",
          productId: 4,
        },
        {
          id: 13,
          productImage: "/resources/images/Designs/Resume/1.jpg",
          productId: 5,
        },
        {
          id: 14,
          productImage: "/resources/images/Designs/Resume/2.jpg",
          productId: 5,
        },
        {
          id: 15,
          productImage: "/resources/images/Designs/Resume/3.jpg",
          productId: 5,
        },
        {
          id: 16,
          productImage: "/resources/images/Designs/Note Book/1.jpg",
          productId: 6,
        },
        {
          id: 17,
          productImage: "/resources/images/Designs/Note Book/2.jpg",
          productId: 6,
        },
        {
          id: 18,
          productImage: "/resources/images/Designs/Wedding Cards/1.jpg",
          productId: 3,
        },
        {
          id: 19,
          productImage:
            "/resources/images/Designs/Digital Business Cards/1.jpg",
          productFile:
            "/resources/pdf/Digital Business Cards/APPLE FOOD DIGITAL BUSINESS CARD.pdf",
          productId: 7,
        },
        {
          id: 19,
          productImage:
            "/resources/images/Designs/Digital Business Cards/2.jpg",
          productFile:
            "/resources/pdf/Digital Business Cards/Mohanraj Designer.pdf",
          productId: 7,
        },
        {
          id: 19,
          productImage:
            "/resources/images/Designs/Digital Business Cards/3.jpg",
          productFile:
            "/resources/pdf/Digital Business Cards/PCS Vinod Digital Visiting Card.pdf",
          productId: 7,
        },
        {
          id: 19,
          productImage:
            "/resources/images/Designs/Digital Business Cards/4.jpg",
          productFile:
            "/resources/pdf/Digital Business Cards/STARGRAPHIX DIGITAL CARD-1.pdf",
          productId: 7,
        },
        {
          id: 20,
          productImage: "/resources/images/Designs/Brand Logo/1.jfif",
          productId: 8,
        },
        {
          id: 21,
          productImage: "/resources/images/Designs/Brand Logo/2.jfif",
          productId: 8,
        },
        {
          id: 22,
          productImage: "/resources/images/Designs/Brand Logo/3.jfif",
          productId: 8,
        },
        {
          id: 23,
          productImage: "/resources/images/Designs/Brand Logo/4.jfif",
          productId: 8,
        },
        {
          id: 24,
          productImage: "/resources/images/Designs/Brand Logo/5.jfif",
          productId: 8,
        },
        {
          id: 25,
          productImage: "/resources/images/Designs/Brand Logo/6.jfif",
          productId: 8,
        },
        {
          id: 26,
          productImage: "/resources/images/Designs/Brand Logo/7.jfif",
          productId: 8,
        },
        {
          id: 27,
          productImage: "/resources/images/Designs/Flyer/7.jpg",
          productId: 2,
        },
        {
          id: 28,
          productImage: "/resources/images/Designs/Flyer/8.jpg",
          productId: 2,
        },
        {
          id: 29,
          productImage: "/resources/images/Designs/Wedding Cards/2.jpg",
          productId: 3,
        },
        {
          id: 30,
          productImage: "/resources/images/Designs/Wedding Cards/3.jpg",
          productId: 3,
        },
        {
          id: 31,
          productImage: "/resources/images/Designs/Book Wrapper/1.jfif",
          productId: 9,
        },
        {
          id: 32,
          productImage: "/resources/images/Designs/Book Wrapper/2.jfif",
          productId: 9,
        },
        {
          id: 33,
          productImage: "/resources/images/Designs/Invoice/1.jfif",
          productId: 10,
        },
        {
          id: 34,
          productImage: "/resources/images/Designs/Banner/1.jfif",
          productId: 11,
        },
        {
          id: 35,
          productImage: "/resources/images/Designs/E-Book/1.jpg",
          productId: 12,
        },
        {
          id: 36,
          productImage: "/resources/images/Designs/E-Book/2.jpg",
          productId: 12,
        },
        {
          id: 37,
          productImage: "/resources/images/Designs/E-Book/3.jpg",
          productId: 12,
        },
        {
          id: 38,
          productImage: "/resources/images/Designs/E-Book/4.jpg",
          productId: 12,
        },
        {
          id: 39,
          productImage: '/resources/images/Designs/E-Book/5.jpg',
          productId: 12,
        }
      ],
      products: [
        {
          id: 1,
          productName: "Business Card Design",
          productImage: "/resources/images/Designs/Business Cards/1.jpg",
          productPrize: "500",
          productContent:
            "Get professionally crafted business card designs tailored to your brand. Impress clients with unique, high-quality designs that leave a lasting impression.",
        },
        {
          id: 2,
          productName: "Flyer Design",
          productImage: "/resources/images/Designs/Flyer/1.jpg",
          productPrize: "1000",
          productContent:
            "Promote your business with eye-catching flyer designs. Custom-crafted to captivate and communicate your message effectively to your audience.",
        },
        {
          id: 3,
          productName: "Wedding Card Design",
          productImage: "/resources/images/Designs/Wedding Cards/1.jpg",
          productPrize: "2000",
          productContent:
            "Celebrate your special day with elegant wedding card designs. Customized to reflect your unique style and set the perfect tone for your big day.",
        },
        {
          id: 4,
          productName: "Instagram Posters",
          productImage: "/resources/images/Designs/Instagram Posters/1.jpg",
          productPrize: "500",
          productContent:
            "Elevate your social media presence with our stunning and eye-catching Instagram posters. Perfect for promoting events, sales, and brand messages.",
        },
        {
          id: 5,
          productName: "Resume",
          productImage: "/resources/images/Designs/Resume/1.jpg",
          productPrize: 350,
          productContent:
            "Stand out with our expertly crafted digital resumes, designed for both online and print use. Elevate your professional presence with tailored, visually appealing resumes.",
        },
        {
          id: 6,
          productName: "Note Book",
          productImage: "/resources/images/Designs/Note Book/1.jpg",
          productPrize: 450,
          productContent:
            "Create your unique custom notebooks with personalized designs and professional printing. Ideal for gifts, branding, and everyday use.",
        },
        {
          id: 7,
          productName: "Digital Business Card",
          productImage:
            "/resources/images/Designs/Digital Business Cards/1.jpg",
          productPrize: 1000,
          productContent:
            "Boost your professional presence with our digital business cards, featuring clickable social media icons and offline access.",
        },
        {
          id: 8,
          productName: "Brand Logo",
          productImage: "/resources/images/Designs/Brand Logo/1.jfif",
          productPrize: 1000,
          productContent:
            "Transform your brand identity with our unique and creative logo designs, crafted to captivate your audience.",
        },
        {
          id: 9,
          productName: "Book Wrapper",
          productImage: "/resources/images/Designs/Book Wrapper/1.jfif",
          productPrize: 1500,
          productContent:
            "Enhance your books with our stylish wrappers and complete design solutions, tailored for a polished and professional look.",
        },
        {
          id: 10,
          productName: "Invoice",
          productImage: "/resources/images/Designs/Invoice/1.jfif",
          productPrize: "900",
          productContent:
            "Invoice Design & Printable Sheets: Get professional invoice designs and printable sheets to streamline your billing process efficiently.",
        },
        {
          id: 11,
          productName: "Banner",
          productImage: "/resources/images/Designs/Banner/1.jfif",
          productPrize: 800,
          productContent:
            "Banner Designs & Printing: We offer custom banner designs and high-quality banner printing to make your brand stand out.",
        },
        {
          id: 12,
          productName: "E-Book",
          productImage: "/resources/images/Designs/E-Book/1.jpg",
          productPrize: 4000,
          productContent:
            "Transform your manuscript into a visually stunning e-book with our expert design services, ensuring a captivating and reader-friendly experience.",
        },
      ],
      selectedProductImage: [],
      selectedProductName: "",
    };
  },
  created() {
    const productId = this.$route.params.id;
    this.selectedProductImage = this.allProductsImage
      .filter((x) => x.productId == productId)
      .map((x) => x.productImage);
    this.selectedProductName = this.products
      .filter((x) => x.id == productId)
      .map((y) => y.productName)[0];
  },
  methods: {
    openFullscreen(src) {
      if (this.selectedProductName == "Digital Business Card") {
        if (src == "/resources/images/Designs/Digital Business Cards/1.jpg") {
          window.open(
            "/resources/pdf/Digital Business Cards/APPLE FOOD DIGITAL BUSINESS CARD.pdf",
            "_blank"
          );
        } else if (
          src == "/resources/images/Designs/Digital Business Cards/2.jpg"
        ) {
          window.open(
            "/resources/pdf/Digital Business Cards/Mohanraj Designer.pdf",
            "_blank"
          );
        } else if (
          src == "/resources/images/Designs/Digital Business Cards/3.jpg"
        ) {
          window.open(
            "/resources/pdf/Digital Business Cards/PCS Vinod Digital Visiting Card.pdf",
            "_blank"
          );
        } else if (
          src == "/resources/images/Designs/Digital Business Cards/4.jpg"
        ) {
          window.open(
            "/resources/pdf/Digital Business Cards/STARGRAPHIX DIGITAL CARD-1.pdf",
            "_blank"
          );
        }
      } else if (this.selectedProductName == "E-Book") {
        if (src == "/resources/images/Designs/E-Book/1.jpg") {
          var id = 0;
          this.$router.push(`/flipBook/${id}`);
        } else if (src == "/resources/images/Designs/E-Book/2.jpg") {
          var id = 1;
          this.$router.push(`/flipbook/${id}`);
        } else if (src == "/resources/images/Designs/E-Book/3.jpg") {
          var id = 2;
          this.$router.push(`/flipbook/${id}`);
        } else if (src == "/resources/images/Designs/E-Book/4.jpg") {
          var id = 3;
          this.$router.push(`/flipbook/${id}`);
        }
        else if (src == "/resources/images/Designs/E-Book/5.jpg") {
          var id = 4;
          this.$router.push(`/flipbook/${id}`);
        }
      } else {
        $.fancybox.open(
          [
            {
              src: src,
              opts: {
                caption: this.selectedProductName,
                animationEffect: "fade",
                transitionEffect: "slide",
              },
            },
          ],
          {
            loop: false,
            buttons: [
              "zoom",
              "share",
              "slideShow",
              "fullScreen",
              "download",
              "close",
            ],
          }
        );
      }
    },
    goBack() {
      this.$router.push("/all-products");
    },
  },
  mounted() {
    AOS.init({
      duration: 1200,
    })
  }
};
