const Loader = {
    template: `
        <div class="main-loader flex">
            <div class="stargraphix-logo flex">
                <img src="resources/images/STAR GRAPHIX LOGO.png" alt="Star Graphix Logo">
            </div>
            <div class="loader"></div>
            <div class="content">
                <p id="element"></p>
            </div>
        </div>
    `,
    data() {
        return {
            loaderName: 'Loading'
        };
    },
    mounted() {
        var typed = new Typed('#element', {
            strings: ["Welcome To Star Graphix World"],
            typeSpeed: 80,
            showCursor: false,
            loop: false,
        });
        setTimeout(() => {
            this.$router.push('/main');
        }, 4000);
    }
};
