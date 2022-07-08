<template>
    <div class="myWork">
        <section class="section" id="myWork">
            <div class="columns">
                <div class="title">
                    <h1>Clients get <span>always exceptional</span></h1>
                    <h1>works from me....</h1>
                </div>

            </div>
            <div class="columns">
                <div class="cards">
                    <div class="buttons">
                        <div class="prevBtn" @click="scrollHorizantlly(1)">
                            <img src="../assets/emoji/prev.svg" alt="">

                        </div>
                        <div class="nextBtn" @click="scrollHorizantlly(-1)">
                            <img src="../assets/emoji/next.svg" alt="">
                        </div>
                    </div>
                    <div class="allCards">

                        <div v-for="project in projects">
                            <div class="card">
                                <img :src="getImgUrl(project.image)" v-bind:alt="project.name">
                                <div class="buttons">
                                    <button>View Design</button>
                                    <button class="no-fill">View Demo</button>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="card">

                        </div>
                        <div class="card">

                        </div>

                        <div class="card">

                        </div> -->
                    </div>

                </div>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    name: 'myWork',
    data() {
        return {
            currentScrollPosition: 0,
            scrollAmount: 320,
            projects: [
                {
                    name: "project",
                    image: 'dp',
                },
                {
                    name: "project1",
                    image: 'dp',
                },
                {
                    name: "project2",
                    image: 'dp',

                }
            ]
        }
    },
    methods: {

        scrollHorizantlly(val) {
            const sScroll = document.querySelector('.allCards')
            if (val < 0) {
                sScroll.scrollBy(350, 0)
            }
            else {
                sScroll.scrollBy(-350, 0)
            }

        },
        getImgUrl(project) {
            return new URL(`../assets/profilePic/${project}.png`, import.meta.url).href
        }
    }
}
</script>

<style scoped>
/* title  */
.columns .title {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: left;
    padding: 3rem;
}

.columns .title h1 span {
    color: #faaa53;
}

.is-dark-mode-active .columns .title h1 span {
    color: #364cf3;
}

.columns .title h1 {
    margin: 0;
}

.columns .cards {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 3rem;
}

.columns .cards .buttons {
    width: 10em;
    height: 16em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1rem;


}

.columns .cards .buttons .prevBtn,
.columns .cards .buttons .nextBtn {
    min-width: 8em;
    height: 6em;
    display: flex;
    justify-content: center;
}

.columns .cards .buttons .prevBtn:hover,
.columns .cards .buttons .nextBtn:hover {
    cursor: pointer;
}

.columns .cards .allCards {
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow-x: scroll;
    overflow-y: hidden;
    margin: 0 1rem;
    scroll-snap-type: x mandatory;
}

.columns .cards .allCards::-webkit-scrollbar {
    display: none;
}

.columns .cards .card {
    /* background-color: #fff;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); */
    padding: 1rem;
    margin: 2rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 12em;
    width: 15em;
    height: 16em;
    min-height: 13em;
    position: relative;
    transition: all 0.5s ease-in-out 0s;
    scroll-snap-align: start;
}

.columns .cards .card:hover {
    transform: scale(1.1);
}

.is-dark-mode-active .columns .cards .card {
    background-color: #f4f4f4;
}

.columns .cards .card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    transform: rotateY(0);
    transition: all 0.5s ease-in-out 0s;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    /* padding: 1rem; */
}

.columns .cards .card:hover img {
    transform: rotateY(-90deg);

}

.columns .cards .card .buttons {
    position: absolute;
    background: rgba(219, 219, 219, 0.8);
    width: 100%;
    height: 100%;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    top: 0;
    border-radius: 10px;
    transform: rotateY(90deg);
    transition: all 0.5s ease-in-out 0s;

}

.columns .cards .card:hover .buttons {
    transform: rotateY(0);
}

.columns .cards .card .buttons button {
    margin: 1em;
}
</style>