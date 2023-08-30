const { createApp } = Vue

const sliderApp = createApp({
    data() {
        return {
            slidesData: slides,
            current: 0,
            maxSlides: slides.length - 1,
            title: slides[0].title,
            description: slides[0].text,
        };
    },

    methods: {
        next() {
            if (this.current < this.maxSlides ) {
                this.current++;
            } else {
                this.current = 0;
            }
            
            this.title = slides[this.current].title,
            this.description = slides[this.current].text,
            console.log(this.current)
            
        },

        prev() {
            if (this.current <= 0 ) {
                this.current = this.maxSlides;
            } else {
                this.current--;
            }
            
            this.title = slides[this.current].title,
            this.description = slides[this.current].text,
            console.log(this.current)
        },
    }

}).mount("#slider")

console.log()