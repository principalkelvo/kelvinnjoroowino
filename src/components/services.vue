<template>
  <div class="services" id="services">
    <div class="section">
        <!-- full columns content -->
        <div class="columns">
            <!-- main title  -->
            <div class="column is-6">
                <div class="title">
                    <h1>My awesome</h1>
                    <h2>Services</h2>
                </div>
                <div class="buttons">
                    <button>Download CV</button>
                </div>
            </div>
            <!-- card  -->
            <div class="column is-6 pb-0">
                <div class="card">
                    <div class="cardTitle">
                        <img src="../assets/emoji/love.png" alt="">
                        <h2>Design</h2>
                    </div>
                    <div class="cardContent">
                        <p>Misleadingly thought of as the superficial to create, execute, or construct of a product appearance, design actually encompasses a lot more. It is a cross functional that includes market research,design of a concept and technical research</p>
                    </div>
                    <div class="cardFooter">
                        <div class="buttons">
                            <button class="no-fill">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="columns">
            <div class="column is-4 pt-0 ">
            <div class="card">
                    <div class="cardTitle">
                        <img src="../assets/emoji/celebrate.png" alt="">
                        <h2>Developer</h2>
                    </div>
                    <div class="cardContent">
                        <p>Responsible for creating and improving softwares and apps. This includes researching, designing and developing of softwares. Working coherently with analysts and computer engineers to bring out the proposed quality of software application</p>
                    </div>
                    <div class="cardFooter">
                        <div class="buttons">
                            <button class="no-fill">Learn More</button>
                        </div>
                    </div>
                </div>
                </div>
            <div class="column ">
            <div class="card">
                    <div class="cardTitle">
                        <img src="../assets/emoji/ok.png" alt="">
                        <h2>Ui/Ux</h2>
                    </div>
                    <div class="cardContent">
                        <p>Improve users' satisfaction by improving the interface usability. Work on language and visual input to translate the brand into a sophisticated and smooth webpage, to quickly communicate information for the user.</p>
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
    padding: 0 1rem;
}

.cardContent p{
    text-align: center;
    font-size: .8em;
    line-height: 1em;

}

.buttons button.no-fill{
    text-transform: uppercase;
    font-weight: 400;
    font-size: .8em;
}


</style>