<template>
    <div class="myWork" id="myWork">
        <div class="section">
            <div class="columns">
                <div class="title">
                    <h1>Clients get <span>always exceptional</span></h1>
                    <h1>works from me....</h1>
                </div>

            </div>
            <div class="columns">
                <div class="cards">
                    <div class="buttons">
                        <div class="prevBtn">
                            <img src="../assets/emoji/prev.svg" alt="">

                        </div>
                        <div class="nextBtn">
                            <img src="../assets/emoji/next.svg" alt="">
                        </div>
                    </div>
                    <div class="allCards">
                        <div class="card">

                        </div>
                        <div class="card">

                        </div>
                        <div class="card">

                        </div>

                        <div class="card">

                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'myWork',
    data() {
        return {

        }
    },
    methods: {

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

.is-dark-mode-active .columns .title h1 span{
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

/* .columns .cards .buttons .prevBtn,
.columns .cards .buttons .nextBtn */

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
}
.is-dark-mode-active .columns .cards .card{
    background-color: #f4f4f4;
}
</style>