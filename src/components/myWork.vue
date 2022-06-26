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
                        <div class="prevBtn" @click="scrollHorizantlly(1)">
                            <img src="../assets/emoji/prev.svg" alt="">

                        </div>
                        <div class="nextBtn" @click="scrollHorizantlly(-1)">
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
            currentScrollPosition: 0,
            scrollAmount: 320,

        }
    },
    methods: {
        // const hScroll = document.querySelector('.horizontal-scroll')
        
        scrollHorizantlly(val) {
            // const buttonLeft = document.querySelector('#btn-scroll-left');
            // const buttonRight = document.querySelector('#btn-scroll-right');
            // const hScroll = document.querySelector('.horizontal-scroll')
            const sScroll = document.querySelector('.allCards')
            if(val<0){
                sScroll.scrollBy(350, 0)
            }
            else{
                sScroll.scrollBy(-350, 0)
            }
            
            // let maxScroll = parseInt(-sScroll.offsetWidth,10) + parseInt(hScroll.offsetHeight,10)

            // this.currentScrollPosition += (val*this.scrollAmount)
            // console.log(this.currentScrollPosition)
            // console.log(hScroll.offsetWidth)
            // console.log(sScroll.offsetWidth)
            // console.log(maxScroll +"max")
            // if(this.currentScrollPosition > 0){
            //     this.currentScrollPosition = 0
            //     buttonLeft.style.opacity = "0"
            // }
            // else{
            //     buttonLeft.style.opacity = "1"
            // }
            // if(this.currentScrollPosition < maxScroll) {
            //     this.currentScrollPosition = maxScroll;
            //     buttonRight.style.opacity = "0"
            // }
            // else{
            //     buttonRight.style.opacity = "1"
            // }
            // scroll.style.left = this.currentScrollPosition + "px"
            // scroll.classList.add("scroll")
            // console.log(this.currentScrollPosition + " left")


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