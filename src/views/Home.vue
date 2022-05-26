<template>
  <div class="home">

    <div class="section">
        <div class="columns">
            <div class="column is-6 pr-0">
                <p class="title is-large pd-0">Hy! I Am</p>
                <p class="title is-large">Kelvin Njoro</p>
                <p class="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque id omnis voluptas,
                    fuga culpa itaque natus dolor doloremque, dolore eligendi, vero corporis ex. Pariatur fugiat minima
                    nisi ea nobis dolorem!</p>
                <div class="paybtn">
                    <div class="buttons small">
                        <button>Hire me</button>
                    </div>
                    <ul class="payments">
                        <li class="paypal">
                            <img src="@/assets/payment/Paypal.jpg" alt="">
                        </li>
                        <li class="mastCard">
                            <img src="@/assets/payment/MasterCard.jpg" alt="">
                        </li>
                        <li class="skrill">
                            <img src="@/assets/payment/Skrill.png" alt="">
                        </li>
                        <li class="visa">
                            <img src="@/assets/payment/Visa.jpg" alt="">
                        </li>
                    </ul>
                </div>

            </div>
            <div class="column is-4">
                <div class="profile">
                    <div class="image is-large ">
                        <img src="@/assets/profilePic/dp.png" class="profileImg" alt="home">
                    </div>
                    <div class="bigCircle">
                        <div class="google">
                            <img src="@/assets/socialIcons/github.png" alt="google">
                        </div>
                    </div>
                    <div class="smallCircle">
                        <div class="twitter">
                            <img src="@/assets/socialIcons/linkedin.png" alt="linkendin">
                        </div>
                    </div>
                    <div class="facebook">
                        <img src="@/assets/socialIcons/twitter.png" alt="twitter">
                    </div>
                </div>

            </div>
        </div>
    </div>

    <Service/>

    <Services/>

  </div>
</template>

<script>
import Service from "@/components/service.vue";
import Services from "@/components/services.vue";

export default{
  components:{
    Service,
    Services
},
}
</script>

<style>
/* section  */
.section {
    padding: 1em 1em;
    min-height: calc(100vh - 3.25rem);
    width: 95%;
}

/* columns  */
.columns {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
}
.columns.cards {
    overflow: hidden;
    justify-content: space-around;


}
.column.is-3 {
    width: 25%;
    padding: 2em;
}

.column.is-4 {
    width: 44.4%;
    padding: 3em;
}

.column.is-6 {
    width: 50%;
    padding: 3em;
}

.column.is-8 {
    width: 66.6%;
    padding: 3em;
}

/* title  */
.title.is-large {
    padding: 0.2em 0 1em;
    color: #FA964D;
    font-size: 1.9em;
    font-weight: 700;
    width: 100%;
    letter-spacing: 2px;
}

/* padding  */
.pd-0{
    padding-bottom: 0 !important;
}
.pr-0{
    padding-right: 0 !important
}
.pl-0{
    padding-left: 0 !important
}

/* images */
.image.is-large {
    height: 20em;
    width: 20em;
}

.image.is-large img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

</style>

<style scoped>

/* working  */
.profile{
    position: relative;
    width: 20em;
    height: 20em;
    overflow: visible;
}

.image.is-large .profileImg{
    height: 17.5em;
    width: 15.5em;
    position: relative;
    top: 0;
    background: none;
    z-index: 1;
}

.profile .bigCircle{
    width: 15em; 
    height: 15em;   
    background: #a989e5;
    border-radius: 50%;
    position: absolute;
    top: 0.5em;
    left: -2.8em;
    overflow: visible;
}


.profile .smallCircle{
    border-radius: 50%;
    width: 10em;
    height: 10em;
    background: #eb95aa;
    position: absolute;
    bottom: 3em;
    right: 0;
    overflow: visible;
}

.profile .smallCircle .twitter img{    
    width: 2.5em;
    height: 2.5em;
    background: #fff;
    padding: .5em;
    border-radius: 50%;
    position: absolute;
    right: -1.5em;
    top: 1em;

}
.profile .bigCircle .google img{
    width: 2.5em;
    height: 2.5em;
    background: #fff;
    padding: .5em;
    border-radius: 50%;
    position: absolute;
    top: 4em;
    left: -9%;
}
.profile .facebook img{    
    width: 2.5em;
    height: 2.5em;
    border: 1px solid #f5f5f5;
    background: #fff;
    padding: .5em;
    border-radius: 50%;
    position: absolute;
    top: 1.3em;
    right: 15%;
}

/* hero payments */
.paybtn{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2em;
}
.paybtn .payments{
    display: -webkit-inline-box;
}
.paybtn .payments li{
    padding: 5px;
    width: 4em;
    height: 2em;
    position: relative;
    overflow: hidden;
}
.paybtn .payments li img{
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: contain;
    border: none;
}
.paybtn .buttons button{
    height: 100%;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
}
</style>