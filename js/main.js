const { createApp } = Vue

const sliderApp = createApp({
    data() {
        return {
            slidesData: slides,
            current: 0,
            maxSlides: slides.length - 1,
            title: slides[0].title,
            description: slides[0].text,
            autoPlayDelay: 3000,
        };
    },

    methods: {
        next() {
           this.current = (this.current < this.maxSlides) ? this.current + 1 : 0
            
            this.title = this.slidesData[this.current].title,
            this.description = this.slidesData[this.current].text
        },

        prev() {
            this.current = (this.current <= 0) ? this.maxSlides : this.current - 1
            
            this.title = this.slidesData[this.current].title,
            this.description = this.slidesData[this.current].text
        },

        switchSlide(slide) {
            this.current = slide
        }
    },

    mounted(){
        setInterval(this.next,this.autoPlayDelay);
      }

}).mount("#slider")

console.log()