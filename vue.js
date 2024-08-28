console.log("loaded");

const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Hello Vue!',
            img_source: 'https://picsum.photos/200/300'
        };
    }
}).mount('#application');