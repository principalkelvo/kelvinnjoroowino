<template>
  <div class="services">
    <div class="section">
        <div class="columns">
            <div class="column is-6">
                <div class="title">
                    <h1>My awesome</h1>
                    <h2>Services</h2>
                </div>
                <div class="buttons">
                    <button>Download CV</button>
                </div>
            </div>
            <div class="column is-6">
                <div class="card">
                    <div class="cardTitle">
                        <img src="../assets/emoji/love.png" alt="">
                        <h2>Design</h2>
                    </div>
                    <div class="cardContent">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, atque?</p>
                    </div>
                    <div class="cardFooter">
                        <div class="buttons">
                            <button class="no-fill">Learn More</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  </div>
</template>

<script>


</script>

<style scoped>


.column .title h1{
    font-size: 3em;
    margin: 0;
}
.column .title h2{
    font-size: 2em;
    margin-top: 0;
    color: #faaa53;
}

.card{
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
    padding: 1rem;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 15em;
    height: 16em;
}

.cardTitle{

    display: flex;
    align-items: center;
    flex-direction: column;
}
.card .cardTitle h2{
    font-size: 1.5em;
    margin: 0;
}

.cardContent{
    padding: 1rem;
}

.cardContent p{
    text-align: center;

}

.buttons button.no-fill{
    text-transform: uppercase;
    font-weight: 400;
    font-size: .8em;
    /* box-shadow: 2px 4px 73px 91px #A989E540; */

}


</style>