<template>
    <div class="skills" >
        <section class="section" id="skills">
            <div class="columns">
                <div class="column is-6">
                    <!-- title  -->
                    <div class="title jumpIn">
                        <h1>Skills Used For All This</h1>
                        <h1>Design & Development</h1>
                    </div>
                    <!-- content  -->
                    <div class="content jumpIn">
                        <p>Understand the topic matter of the customer completely and build on previous expertise,
                            becoming intimately familiar with the subject area. Determine how to respond to the demands
                            and requirements of a certain consumer.

                        </p>
                        <p>The results of research are being used to technological solutions product, such as materials,
                            systems, and procedures. Engineer who uses research to create commercial items for a client.
                        </p>
                    </div>
                    <!-- hire button  -->
                    <div class="buttons fadeIn">
                        <button>Hire Me</button>
                    </div>

                </div>
                <div class="column is-6">
                    <div class="mainCircle">

                        <!-- used technologies -->
                        <div class="socialCircle">
                            <div class="circle ">
                                <div class="techUsed fadeIn">
                                    <div class="image">
                                        <img src="@/assets/socialIcons/django.svg" alt="html">
                                    </div>
                                </div>
                                <div class="techUsed fadeIn">
                                    <div class="image">
                                        <img src="@/assets/socialIcons/photoShop.svg" alt="html">
                                    </div>
                                </div>
                                <div class="techUsed fadeIn">
                                    <div class="image">
                                        <img src="@/assets/socialIcons/lightRoom.svg" alt="html">
                                    </div>
                                </div>
                                <div class="techUsed fadeIn">
                                    <div class="image">
                                        <img src="@/assets/socialIcons/figma.svg" alt="html">
                                    </div>
                                </div>
                            </div>
                            <div class="circle ">
                                <div class="techUsed jumpIn">
                                    <div class="image">
                                        <img src="@/assets/socialIcons/css.svg" alt="html">
                                    </div>
                                </div>
                                <div class="techUsed jumpIn">
                                    <div class="image">
                                        <img src="@/assets/socialIcons/javaScript.svg" alt="html">
                                    </div>
                                </div>
                                <div class="techUsed jumpIn">

                                    <div class="image">
                                        <img src="@/assets/socialIcons/vue.svg" alt="html">
                                    </div>
                                </div>
                            </div>

                            <div class="circle ">
                                <div class="techUsed jumpIn">
                                    <div class="image">
                                        <img src="@/assets/socialIcons/HTML.svg" alt="html">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- background purple circle -->
                        <div class="purpleCircle fadeIn">

                        </div>
                        <!-- background orange circle -->
                        <div class="orangeCircle fadeIn">

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
.columns .column .title {
    margin-bottom: 2rem;
}

.columns .column .title h1 {
    width: 100%;
    margin: 0;
    font-size: 1.5rem;
}

.columns .column .title h1:nth-child(2) {
    color: #faaa53;
    font-size: 1.2rem;

}

.is-dark-mode-active .columns .column .title h1:nth-child(2) {
    color: #364cf3;
}

.columns .column .content {
    width: 100%;
    margin-bottom: 2rem;
    font-size: .9rem;
    line-height: 1.4rem;
}

/* technology used */
/* main div  */
.column .mainCircle {
    width: 28rem;
    height: 28rem;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 1px solid black; */


}

/* purple circle */
.mainCircle .purpleCircle {
    width: 18rem;
    height: 18rem;
    background: #a989e5;
    border-radius: 50%;
    position: absolute;
    top: -2rem;
    right: 0rem;
    overflow: visible;
}

/* pink Circle */
.mainCircle .orangeCircle {
    border-radius: 50%;
    width: 14rem;
    height: 14rem;
    background: #faaa53;
    position: absolute;
    bottom: 0;
    right: 0;
    overflow: visible;

}

.is-dark-mode-active .mainCircle .orangeCircle {
    background: #364cf3;
}

/* main circle  */
.column .mainCircle .socialCircle {
    width: 26rem;
    height: 26rem;
    background-color: #fff;
    position: relative;
    border-radius: 50%;
    box-shadow: 27px -8px 41px 5px #71717140,
        -27px 8px 39px 22px #B9B9B940;

    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
}

.is-dark-mode-active .column .mainCircle .socialCircle {
    background-color: #f4f4f4;
}

/* first circle with icons */
.column .mainCircle .socialCircle .circle {
    position: absolute;

    width: 19.5rem;
    height: 19.5rem;
    border-radius: 50%;
    box-shadow: 0px 4px 24px 6px #D0D0D040;
}

/* second circle with icon */
.column .mainCircle .socialCircle .circle:nth-child(2) {
    /* position: absolute; */
    width: 13rem;
    height: 13rem;
    border-radius: 50%;
    box-shadow: 0px 4px 24px 6px #D0D0D040;
}

/* last small circle with icon at the center  */
.column .mainCircle .socialCircle .circle:last-child {
    position: relative;
    width: 6.5rem;
    height: 6.5rem;
    border-radius: 50%;
    box-shadow: 0px 4px 24px 6px #D0D0D040;
}



/* first out circle with clipped icons  */
.column .mainCircle .socialCircle .circle:first-child .techUsed {
    position: absolute;
    top: -2%;
    left: 60%;
    background: #fff;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    box-shadow: 0px 0px 16px 8px #A6A6A640;


    display: flex;
    justify-content: center;
    align-items: center;
}

/* second icon on the first circle */
.column .mainCircle .socialCircle .circle:first-child .techUsed:nth-child(2) {
    position: absolute;
    background: #fff;
    top: 10%;
    left: 4%;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    box-shadow: 0px 0px 16px 8px #A6A6A640;


    display: flex;
    justify-content: center;
    align-items: center;
}

/* third icon on the first circle */
.column .mainCircle .socialCircle .circle:first-child .techUsed:nth-child(3) {
    background: #fff;
    position: absolute;
    top: 80%;
    left: 10%;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    box-shadow: 0px 0px 16px 8px #A6A6A640;


    display: flex;
    justify-content: center;
    align-items: center;
}

/* last icon on the first circle */
.column .mainCircle .socialCircle .circle:first-child .techUsed:last-child {
    background: #fff;
    position: absolute;
    top: 50%;
    left: 90%;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    box-shadow: 0px 0px 16px 8px #A6A6A640;


    display: flex;
    justify-content: center;
    align-items: center;
}

/* first icon in second circle */
.column .mainCircle .socialCircle .circle:nth-child(2) .techUsed {
    position: absolute;
    top: 20%;
    background: #fff;
    right: -10%;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    box-shadow: 0px 0px 16px 8px #A6A6A640;


    display: flex;
    justify-content: center;
    align-items: center;
}

/* second icon on the second circle */
.column .mainCircle .socialCircle .circle:nth-child(2) .techUsed:nth-child(2) {
    position: absolute;
    background: #fff;
    top: 50%;
    left: -8%;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    box-shadow: 0px 0px 16px 8px #A6A6A640;


    display: flex;
    justify-content: center;
    align-items: center;
}

/* last icon on the second circle */
.column .mainCircle .socialCircle .circle:nth-child(2) .techUsed:last-child {
    position: absolute;
    top: 80%;
    background: #fff;
    left: 60%;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    box-shadow: 0px 0px 16px 8px #A6A6A640;


    display: flex;
    justify-content: center;
    align-items: center;
}

/* the only icon in the last small circle */
.column .mainCircle .socialCircle .circle:last-child .techUsed {
    position: absolute;
    background: #fff;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    box-shadow: 0px 0px 16px 8px #A6A6A640;


    display: flex;
    justify-content: center;
    align-items: center;
}


/* images  */
.column .mainCircle .socialCircle .circle .techUsed {
    display: flex;
    justify-content: center;
    align-items: center;
}

.column .mainCircle .socialCircle .circle .techUsed .image {
    width: 2rem;
    height: 2rem;
    position: relative;
}

.column .mainCircle .socialCircle .circle .techUsed .image img {
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
}

@media only screen and (max-width: 769px) {
    .column.is-6 {
        width: auto;
    }

    .columns {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

}
</style>