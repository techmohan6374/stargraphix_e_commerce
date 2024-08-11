var database = firebase.database();
const FlipBook = {
  template: `
    <div class="container-fluid p-0 flex" style="min-height: 100vh;" id="singleFlipBookViewer">
        <div id="flipbookPDFContainer"></div>
    </div>
    `,
  data() {
    return {
      allPdfUrl: [],
      selectedPdfUrl: "",
      index: null,
    };
  },
  created() {
    this.readFlipBookData();
    this.index = this.$route.params.id;
    console.log(this.index);
    setTimeout(() => {
      var source_pdf = this.selectedPdfUrl;
      if (this.index == 0) {
        var option_pdf = { webgl: true, backgroundColor: "#ac3338" };
        $('#singleFlipBookViewer').css('background-color','#ac3338');
      } else if (this.index == 1) {
        var option_pdf = { webgl: true, backgroundColor: "#9a362e" };
        $('#singleFlipBookViewer').css('background-color','#9a362e');
        
      } else if (this.index == 2) {
        var option_pdf = { webgl: true, backgroundColor: "#085a44" };
        $('#singleFlipBookViewer').css('background-color','#085a44');
      }
      else if(this.index==3){
        var option_pdf = { webgl: true, backgroundColor: "#301773" };
        $('#singleFlipBookViewer').css('background-color','#301773');
      }
      var flipBook_pdf = $("#flipbookPDFContainer").flipBook(
        source_pdf,
        option_pdf
      );
    }, 2000);
  },
  methods: {
    readFlipBookData() {
      database
        .ref("pdf")
        .once("value")
        .then((snapshot) => {
          if (snapshot.exists()) {
            let pdfFiles = snapshot.val();
            this.files = Object.keys(pdfFiles).map((key) => pdfFiles[key]);
            this.selectedPdfUrl = this.files[this.index].fileUrl;
            console.log(this.selectedPdfUrl);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  mounted() {
    this.readFlipBookData();
  },
};
