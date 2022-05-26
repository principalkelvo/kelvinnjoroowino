<script>
import Navbar from "@/components/navbar.vue";

export default{
  components: {
    Navbar
  },
}
</script>

<template>

  <Navbar/>
  <!-- <router-link to="/">Home</router-link> -->

  <div class="container">
    <router-view></router-view>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Istok+Web&display=swap');
#app {
  font-family: 'Istok Web', sans-serif;
  font-size: 24px;
}


/*all buttons */
.buttons {
    display: flex;
    justify-content: space-between;
}

.buttons button {
    background: linear-gradient(180deg, #FBC75B 0%, #FA964D 100%);
    /* box-shadow: 0px 19px 28px -11px #00000040; */
    outline: none;
    border: none;
    cursor: pointer;
    box-shadow: 0px 0px 0px 0px inset #FAAA53, 
                0px 19px 28px -11px #00000040;

    padding: 10px 30px;
    border-radius: 5px;
    font-size: 1em;
    font-weight: 700;
    color: #fff;
    text-transform: capitalize;

    transition: ease-out 0.3s;

}

.buttons button:hover,
.buttons button:focus, 
.buttons button:active {
    box-shadow: inset 9em 0px 0 0 #fff;
    border: 1px solid #000;
    color: #000 !important;
}
.buttons.small button:hover,
.buttons.small button:focus, 
.buttons.small button:active {
    box-shadow: inset 6.1em 0px 0 0 #fff;
    border: 1px solid #000;
    color: #000 !important;
}

/* button no-fill */
.buttons button.no-fill {
    color: #a989e5;
    background: #fff;
    border: .5px solid #00000012;
    box-shadow: 0px 0px 0px 0px inset #FAAA53,
                2px 4px 3.041em 4em #A989E540;

    transition: ease-out 0.3s;
}

.buttons button.no-fill:hover,
.buttons button.no-fill:focus,
.buttons button.no-fill:active
 {
    box-shadow: inset 10em 0 0 0 #FAAA53,
                0px 19px 28px -11px #00000040,
                2px 4px 73px 91px #A989E540;
    color: #fff !important;
    border: 1.45px solid #FAAA53;
}
</style>
