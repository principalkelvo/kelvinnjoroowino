<template>
    <div class="services" >
        <section class="section" id="services">
            <!-- full columns content -->
            <div class="columns">
                <!-- main title  -->
                <div class="column is-6 awesome">
                    <div class="title jumpIn">
                        <h1>My awesome</h1>
                        <h2>Services</h2>
                    </div>
                    <div class="buttons jumpIn">
                        <a href="https://docs.google.com/document/d/1DOBR7xySqjyxnxLoGrpbzWymuraH6ezP/edit?usp=sharing&ouid=103616862020210601390&rtpof=true&sd=true"
                            target="_blank">
                            <button>Download CV</button>
                        </a>
                    </div>
                </div>
                <!-- card  -->
                <div class="column is-6 pb-0 fadeIn">
                    <div class="card">
                        <div class="cardTitle">
                            <img src="../assets/emoji/love.png" alt="Graphic Design">
                            <h2>Design</h2>
                        </div>
                        <div class="cardContent">
                            <p>Design, which is sometimes misunderstood as the superficial process of creating,
                                executing, or constructing a product's appearance, actually involves a lot more. It is a
                                cross-functional task that entails market research, concept design, and technological
                                research.</p>
                        </div>
                        <div class="cardFooter">
                            <div class="buttons">
                                <button class="no-fill">My Designs</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="columns">
                <div class="column is-4 pt-0 fadeIn">
                    <div class="card jumpIn">
                        <div class="cardTitle">
                            <img src="../assets/emoji/celebrate.png" alt="Software Engineer">
                            <h2>Developer</h2>
                        </div>
                        <div class="cardContent">
                            <p>In charge of developing and improving software and apps. This comprises software
                                research, design, and development. Collaboration between analysts and computer engineers
                                to achieve the proposed software application performance</p>
                        </div>
                        <div class="cardFooter ">
                            <div class="buttons">
                                <button class="no-fill">View Projects</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column fadeIn">
                    <div class="card ">
                        <div class="cardTitle">
                            <img src="../assets/emoji/ok.png" alt="Ui/Ux">
                            <h2>Ui/Ux</h2>
                        </div>
                        <div class="cardContent">
                            <p>Enhance the usability of the user interface to increase user satisfaction. Work on
                                linguistic and visual input to translate the brand into a sophisticated and
                                user-friendly website that communicates information fast.</p>
                        </div>
                        <div class="cardFooter ">
                            <div class="buttons ">
                                <button class="no-fill">Web Designs</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    </div>
</template>

<script>


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

.card {
    background-color: #fff;
    border-radius: 10px;
    padding: 2.5rem 1rem;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 15em;
    transition: all .5s ease-in-out 0s;
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