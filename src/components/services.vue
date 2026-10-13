<template>
    <div class="services" >
        <section class="section" id="services">
            <!-- full columns content -->
            <div class="columns">
                <!-- main title  -->
                <div class="column is-6 awesome">
                    <div class="title jumpIn">
                        <h1>{{ services.title }}</h1>
                        <h2>{{ services.highlight }}</h2>
                    </div>
                    <div class="buttons jumpIn" v-if="services.button">
                        <a :href="services.button.href" v-bind="linkAttrs(services.button.href)">
                            <button tabindex="-1">{{ services.button.label }}</button>
                        </a>
                    </div>
                </div>
                <!-- first card sits beside the title -->
                <div class="column is-6 pb-0 fadeIn" v-for="item in services.items.slice(0, 1)" :key="item.title">
                    <div class="card">
                        <div class="cardTitle">
                            <img :src="img(item.icon)" alt="">
                            <h2>{{ item.title }}</h2>
                        </div>
                        <div class="cardContent">
                            <p>{{ item.text }}</p>
                        </div>
                        <div class="cardFooter" v-if="item.button">
                            <div class="buttons">
                                <a :href="item.button.href" v-bind="linkAttrs(item.button.href)">
                                    <button class="no-fill" tabindex="-1">{{ item.button.label }}</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- remaining cards go in the row below -->
            <div class="columns wrap">
                <div v-for="(item, i) in services.items.slice(1)" :key="item.title"
                    class="column fadeIn" :class="{ 'is-4 pt-0': i === 0 }">
                    <div class="card" :class="{ jumpIn: i === 0 }">
                        <div class="cardTitle">
                            <img :src="img(item.icon)" alt="">
                            <h2>{{ item.title }}</h2>
                        </div>
                        <div class="cardContent">
                            <p>{{ item.text }}</p>
                        </div>
                        <div class="cardFooter" v-if="item.button">
                            <div class="buttons">
                                <a :href="item.button.href" v-bind="linkAttrs(item.button.href)">
                                    <button class="no-fill" tabindex="-1">{{ item.button.label }}</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import content, { img } from "@/content";

export default {
    name: "Services",
    data() {
        return { services: content.services }
    },
    methods: {
        img,
        // off-site links open in a new tab; in-page anchors (#section) don't
        linkAttrs(href) {
            return /^https?:/.test(href) ? { target: "_blank", rel: "noopener noreferrer" } : {}
        },
    },
}
</script>

<style scoped>
.column .title h1 {
    font-size: 3em;
    margin: 0;
}

.column .title h2 {
    font-size: 2em;
    margin-top: 0;
    color: #faaa53;
}

.is-dark-mode-active .column .title h2 {
    color: #364cf3;
}

.columns.wrap {
    flex-wrap: wrap;
}

.card {
    background-color: #fff;
    border-radius: 10px;
    padding: 2.5rem 1rem;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 15em;
    transition: transform .5s cubic-bezier(0.22, 1, 0.36, 1), opacity .5s ease, box-shadow .5s ease, background-color .4s ease;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    /* height: 16em; 
    */
}

.card:hover{
    box-shadow: 0px 0px 10px #faaa53a1;
    transform: scale(1.09);

}
.is-dark-mode-active .card {
    background-color: #cacaca;
}

.cardTitle {

    display: flex;
    align-items: center;
    flex-direction: column;
}

.card .cardTitle h2 {
    font-size: 1.5em;
    margin: 0;
}

.is-dark-mode-active .card .cardTitle h2 {
    color: #000;
}

.cardContent {
    padding: 0 1rem;
}

.cardContent p {
    text-align: center;
    font-size: .8em;
    line-height: 1em;

}

.is-dark-mode-active .cardContent p {
    color: #364cf3;
}

.buttons button.no-fill {
    text-transform: uppercase;
    font-weight: 400;
    font-size: .8em;
}

@media only screen and (max-width: 769px) {
    .column.awesome {
        display: none;
    }

}
</style>