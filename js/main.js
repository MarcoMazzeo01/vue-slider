const { createApp } = Vue

const sliderApp = createApp({
    data() {
        return {
            slidesData: slides,
            current: 0,
            maxSlides: slides.length - 1
        };
    },

    methods: {
        next() {
            if (this.current < this.maxSlides ) {
                this.current++;
            } else {
                this.current = 0;
            }
            
            console.log(this.current)
            
        },

        prev() {
            if (this.current <= 0 ) {
                this.current = this.maxSlides;
            } else {
                this.current--;
            }
            
            console.log(this.current)
        },
    }

}).mount("#slider")

console.log()