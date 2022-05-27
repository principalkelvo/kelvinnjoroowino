<template>
    <div class="skills" id="skills">
        <div class="section">
            <div class="columns">
                <div class="column is-6">
                    <!-- title  -->
                    <div class="title">
                        <h1>Skills Used For All This</h1>
                        <h1>Brand & Client</h1>
                    </div>
                    <!-- content  -->
                    <div class="content">
                        <p>Sit amet consectetur, adipisicing elit. Sit inventore magnam explicabo pariatur! Ipsa, soluta possimus. Saepe eum voluptatem deserunt neque nam nesciunt quasi, dolore dolorem quidem. Molestias veniam facere incidunt illum animi dolorum deserunt provident assumenda quidem?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, reprehenderit.</p>
                    </div>
                    <!-- hire button  -->
                    <div class="buttons">
                        <button>Hire Me</button>
                    </div>
                    
                </div>
                <div class="column is-6">
                    <div class="mainCircle">

                    <!-- used technologies -->
                        <div class="socialCircle">
                            <div class="circle">
                                <div class="techUsed">
                                    <div class="image">
                                    <img src="@/assets/socialIcons/django.svg" alt="html">
                                </div>
                                </div>
                                <div class="techUsed">
                                    <div class="image">
                                    <img src="@/assets/socialIcons/photoShop.svg" alt="html">
                                </div>
                                </div>
                                <div class="techUsed">
                                    <div class="image">
                                    <img src="@/assets/socialIcons/lightRoom.svg" alt="html">
                                </div>
                                </div>
                                <div class="techUsed">
                                    <div class="image">
                                    <img src="@/assets/socialIcons/figma.svg" alt="html">
                                </div>
                                </div>
                            </div>
                            <div class="circle">
                                 <div class="techUsed">
                                     <div class="image">
                                    <img src="@/assets/socialIcons/css.svg" alt="html">
                                </div>
                                </div>
                                 <div class="techUsed">
                                     <div class="image">
                                    <img src="@/assets/socialIcons/javaScript.svg" alt="html">
                                </div>
                                </div>
                                 <div class="techUsed">
                                     
                                     <div class="image">
                                    <img src="@/assets/socialIcons/vue.svg" alt="html">
                                </div>
                                </div>
                            </div>
                            
                            <div class="circle">
                                 <div class="techUsed">
                                     <div class="image">
                                    <img src="@/assets/socialIcons/HTML.svg" alt="html">
                                </div>
                                </div>
                            </div>
                        </div>
                        <!-- background purple circle -->
                        <div class="purpleCircle">

                        </div>
                        <!-- background orange circle -->
                        <div class="orangeCircle">

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
.columns .column .title {
    margin-bottom: 2em;
}
.columns .column .title h1{
    width: 100%;
    margin: 0;
}
.columns .column .title h1:nth-child(2){
    color: #faaa53;
}

.columns .column .content {
    width: 100%;
    margin-bottom: 2em;
    font-size: .9em;
    line-height: 1.4em;
}

/* technology used */
/* main div  */
.column .mainCircle{
    width: 28em;
    height: 28em;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;


}
/* main circle  */
.column .mainCircle .socialCircle{
    width: 26em;
    height: 26em;
    position: relative;
    border-radius: 50%;
    box-shadow: 27px -8px 41px 5px #71717140,
                -27px 8px 39px 22px #B9B9B940;

    display: flex;
    justify-content: center;
    align-items: center;
}
/* first circle with icons */
.column .mainCircle .socialCircle .circle{
    position: absolute;
    
    width: 19.5em;
    height: 19.5em;
    border-radius: 50%;
    box-shadow: 0px 4px 24px 6px #D0D0D040;
}
/* second circle with icon */
.column .mainCircle .socialCircle .circle:nth-child(2) {
    /* position: absolute; */
    width: 13em;
    height: 13em;
    border-radius: 50%;
box-shadow: 0px 4px 24px 6px #D0D0D040;
}
 /* last small circle with icon at the center  */
.column .mainCircle .socialCircle .circle:last-child {
    position: relative;
    width: 6.5em;
    height: 6.5em;
    border-radius: 50%;
box-shadow: 0px 4px 24px 6px #D0D0D040;
}



/* first out circle with clipped icons  */
.column .mainCircle .socialCircle .circle:first-child .techUsed{
    position: absolute;
    top: -2%;
    left: 60%;
    background: #fff;
    width: 3.5em;
    height: 3.5em;
    border-radius: 50%;
box-shadow: 0px 0px 16px 8px #A6A6A640;


    display: flex;
    justify-content: center;
    align-items: center;
}
/* second icon on the first circle */
.column .mainCircle .socialCircle .circle:first-child .techUsed:nth-child(2){
    position: absolute;
    background: #fff;
    top: 10%;
    left: 4%;
    width: 3.5em;
    height: 3.5em;
    border-radius: 50%;
box-shadow: 0px 0px 16px 8px #A6A6A640;


    display: flex;
    justify-content: center;
    align-items: center;
}
/* third icon on the first circle */
.column .mainCircle .socialCircle .circle:first-child .techUsed:nth-child(3){
    background: #fff;
    position: absolute;
    top: 80%;
    left: 10%;
    width: 3.5em;
    height: 3.5em;
    border-radius: 50%;
box-shadow: 0px 0px 16px 8px #A6A6A640;


    display: flex;
    justify-content: center;
    align-items: center;
}
/* last icon on the first circle */
.column .mainCircle .socialCircle .circle:first-child .techUsed:last-child{
    background: #fff;
    position: absolute;
    top: 50%;
    left: 90%;
    width: 3.5em;
    height: 3.5em;
    border-radius: 50%;
box-shadow: 0px 0px 16px 8px #A6A6A640;


    display: flex;
    justify-content: center;
    align-items: center;
}

/* first icon in second circle */
.column .mainCircle .socialCircle .circle:nth-child(2) .techUsed{
    position: absolute;
    top: 20%;
    background: #fff;
    right: -10%;
    width: 3.5em;
    height: 3.5em;
    border-radius: 50%;
box-shadow: 0px 0px 16px 8px #A6A6A640;


    display: flex;
    justify-content: center;
    align-items: center;
}

/* second icon on the second circle */
.column .mainCircle .socialCircle .circle:nth-child(2)  .techUsed:nth-child(2){
    position: absolute;
    background: #fff;
    top: 50%;
    left: -8%;
    width: 3.5em;
    height: 3.5em;
    border-radius: 50%;
box-shadow: 0px 0px 16px 8px #A6A6A640;


    display: flex;
    justify-content: center;
    align-items: center;
}
/* last icon on the second circle */
.column .mainCircle .socialCircle .circle:nth-child(2)  .techUsed:last-child{
    position: absolute;
    top: 80%;
    background: #fff;
    left: 60%;
    width: 3.5em;
    height: 3.5em;
    border-radius: 50%;
box-shadow: 0px 0px 16px 8px #A6A6A640;


    display: flex;
    justify-content: center;
    align-items: center;
}

/* the only icon in the last small circle */
.column .mainCircle .socialCircle .circle:last-child .techUsed{
    position: absolute;
    background: #fff;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 3.5em;
    height: 3.5em;
    border-radius: 50%;
box-shadow: 0px 0px 16px 8px #A6A6A640;


    display: flex;
    justify-content: center;
    align-items: center;
}


/* images  */
.column .mainCircle .socialCircle .circle .techUsed{
    display: flex;
    justify-content: center;
    align-items: center;
}

.column .mainCircle .socialCircle .circle .techUsed .image{
    width:2em;
    height:2em;
    position: relative;
}
.column .mainCircle .socialCircle .circle .techUsed .image img {
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
}

</style>