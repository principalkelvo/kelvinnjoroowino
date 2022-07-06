<template>
    <div class="customer" >
        <section class="section" id="customer">
            <div class="columns">
                <div class="column is-12">
                    <div class="card sliderWrapper">
                        <vue-testimonials :items="items" arrow-color="#000000" ball-active-color-class="text-red-500"
                            ball-inactive-color-class="text-red-500" title-classes="text-red-500 text-2xl"
                            content-classes="text-red-500 text-8xl" />
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<!-- <template>
<vue-testimonials :items="items" 
arrow-color="#000000" 
ball-active-color-class="text-red-500" 
ball-inactive-color-class="text-red-500" 
title-classes="text-red-500 text-2xl" 
content-classes="text-red-500 text-8xl"/>
</template> -->

<script >
import { defineComponent, ref } from "vue"


export default defineComponent({
    name: "CustomersFeedback",
    components: {
    },
    setup() {
        const items = ref([
            {
                title: 'Excelent',
                content: 'good morning',
                image: '../assets/profilePic/dp.png',
                author: 'John Smith',

            },
            {
                title: 'true',
                content: 'good evening',
                image: '../assets/profilePic/dp.png',
                author: 'Kelvin Simiti',

            }
        ])
        return { items }
    },
    methods: {
    },
    // data() {
    //     return {
    //         items:[
    //            {
    //                 title: 'Excelent',
    //                 content: 'good morning',
    //                 // image: '../src/assets/profilePic/dp.png',
    //                 author:'John Smith',

    //             },
    //             {
    //                 title: 'Excelent',
    //                 content: 'good morning',
    //                 // image: '../src/assets/profilePic/dp.png',
    //                 author:'John Smith',

    //             }
    //         ]
    //     }
    // },
})

</script>

<style scoped>
.section {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}



.section::before {
    content: '';
    position: absolute;
    width: 15em;
    height: 15em;
    background: radial-gradient(#a989e5, #B8A0EA);
    box-shadow: 0em 0em 8em 6em rgb(169, 138, 229);
    border-radius: 50%;
    border: 1px solid #a989e5;
    border-radius: 50%;
    transform: translate(-11rem, -2rem);
}

.section::after {
    content: '';
    position: absolute;
    width: 18em;
    height: 18em;
    background: radial-gradient(#faa953, #FBBB75);
    box-shadow: 0em 0em 9em 6em #faaa53;
    border-radius: 50%;
    border: 1px solid #faa953;
    transform: translate(15rem, 5rem);
}

.column.is-12 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.card {
    width: 90%;
    min-height: 30em;
    max-height: 31em;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-right: 1px solid rgba(255, 255, 255, 0.2);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 0.412em;
    margin: 2rem;
    padding: 1em;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    /* flex-direction: column; */
    z-index: 40;
}

.is-dark-mode-active .card {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-right: 1px solid rgba(255, 255, 255, 0.2);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.card .cardHeader {
    display: flex;
    justify-content: center;
    align-items: center;
}

.card .cardHeader .profileImg {
    width: 5em;
    height: 5em;
}

.card .cardHeader .profileImg img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: contain;
}

.card .cardBody {
    width: 90%;
}

.card .cardBody .feedback {
    width: 100%;
    margin: 1em 0;
    /* border: 2px solid red; */
}
</style>

<style>
.text-red-500 {
    color: #faa953 !important;
}
.mb-40{
    margin-bottom: 0 !important;
}
.mt-6 {
    margin-top: 0 !important;
}
@media (min-width: 1024px){
.lg\:pb-20 {
    padding-bottom: 0 !important;
}
}
</style>