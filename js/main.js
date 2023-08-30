const { createApp } = Vue

const sliderApp = createApp({
    data() {
        return {
            slidesData: slides,
        };
    },

}).mount("#slider")

console.log()