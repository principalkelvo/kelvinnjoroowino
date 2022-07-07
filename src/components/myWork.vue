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
                    <button>Follow</button>
                    <button>Message</button>
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
                    name:"project",
                    image: 'dp',
                },
                {
                    name:"project1",
                    image: 'dp',
                },
                {
                    name:"project2",
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
.columns .cards .buttons .nextBtn:hover{
cursor: pointer;
}

.columns .cards .allCards {
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow-x: scroll;
}

.columns .cards .card {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    padding: 1rem;
    margin: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 12em;
    width: 15em;
    height: 16em;
    min-height: 13em;
    position: relative;
}

.is-dark-mode-active .columns .cards .card {
    background-color: #f4f4f4;
}

.columns .cards .card img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.columns .cards .card .buttons{
    position: absolute;
    background:#faa953ab;
    width: 100%;
    height: 100%;
    top: 0;    
}
.columns .cards .card .buttons button{
    margin: 1em;
}
</style>