const FlipBook = {
    template: `
        <div class="container-fluid p-0 flex" style="min-height: 100vh;">
            <div ref="flipbook" class="_df_book" webgl="true" backgroundcolor="#a73d30" :source="selectedPdfUrl" id="df_manual_book">
            </div>
        </div>
    `,
    data() {
        return {
            allPdfUrl: [
                {
                    id: 1,
                    pdfUrl: '/resources/pdf/E-Book/1.pdf',
                },
            ],
            selectedPdfUrl: '',
        };
    },
    created() {
        const id = this.$route.params.id;
        const pdfUrl = this.allPdfUrl.filter(x => x.id == id).map(x => x.pdfUrl)[0];
        if (pdfUrl.length > 0) {
            this.selectedPdfUrl = pdfUrl;
        }
    },
    mounted() {
        // Check if the reload flag is not present in the URL query
        if (!this.$route.query.reloaded) {
            // Set the reload flag in the URL query and reload the page after 2 seconds
            setTimeout(() => {
                this.$router.replace({ ...this.$route, query: { reloaded: 'true' } }).then(() => {
                    location.reload();
                });
            }, 2000);
        }
    },
};
