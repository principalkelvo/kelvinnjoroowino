<template>
    <div>
        <!-- navbar  -->
        <div class="navbar">
            <!-- navbar logo  -->
            <div class="navbar-logo">
                <p>Portfolio</p>
                <div class="mode">
                    <div class="image mode" @click="darkModeToggle">
                        <img v-bind:src="darkModeToggleIcon" id="dark" alt="darkmode">

                    </div>
                </div>
            </div>

            <!-- navbar items  -->
            <div class="navbar-items">
                <ul>
                    <li><a href="" class="active">Home</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#myWork">Projects</a></li>
                    <!-- navbar items button -->
                    <li><a class="buttons is-large">
                            <button>Contact</button>
                        </a></li>
                </ul>
            </div>

        </div>

    </div>
</template>

<script>
// const imgUrl = new URL('../assets/modeSVG/Switch - Orange.svg',import.meta.url)

// const imageUrl = new URL('../assets/modeSVG/Switch - Orange.svg', import.meta.url).href
//             console.log(imgUrl)
// document.getElementById('dark').src = imgUrl.href
//             console.log(imageUrl)
// import imgUrl from '../assets/modeSVG/Switch - Orange.svg'


export default {
    name: 'navbar',
    data() {

        return {
            // imgUrl : new URL('../assets/modeSVG/Switch - Orange.svg',import.meta.url).href,
            // isDarkModeActive : false,

        }
    },
    computed: {

        darkModeToggleIcon() {

            return !this.$store.state.isDarkModeActive ? this.imgUrl = new URL('../assets/modeSVG/Switch - Orange.svg', import.meta.url).href : this.imgUrl = new URL('../assets/modeSVG/Land Switch - Dark.svg', import.meta.url).href
            //   console.log(this.imgUrl)
        },
    },
    methods: {
        //     darkmode() {
        //   console.log("dark");
        //   if (this.imgUrl = new URL('../assets/modeSVG/Switch - Orange.svg',import.meta.url).href) {


        // this.imgUrl = new URL('../assets/modeSVG/Switch - Orange.svg',import.meta.url).href
        //   } else {
        // this.imgUrl = new URL('../assets/modeSVG/Switch - Orange.svg',import.meta.url).href
        //   }
        //   var slider = document.getElementById("dark");
        //   slider.className += " slideout";
        //   setTimeout(function () {
        //     slider.classList.remove("slideout");
        //   }, 100);
        //   this.$store.commit('darkModeToggle')
        // },
        darkModeToggle() {
            var slider = document.getElementById("dark");
            slider.className += " slideout";
            setTimeout(function () {
                slider.classList.remove("slideout");
            }, 100);
            this.$store.commit('darkModeToggle');
        },

    }
}

</script>

<style scoped>
/* navbar styles  */
.navbar {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 1rem;
    min-height: 3.25rem;
}

/* logo  */
.navbar-logo {
    display: flex;
    align-items: center;
    margin: 0 2em;

}

.navbar-logo p {
    letter-spacing: 2px;
    color: #000;
    font-weight: 700;
    margin: 2em;
}
.is-dark-mode-active .navbar-logo p{
        color: #c4c4c4;

}

.navbar .navbar-logo .mode {
    /* height: 1.6em; */
    width: 3em;
    cursor: pointer;
}

.navbar .navbar-logo .mode img {
    height: 100%;
    width: 100%;
    object-fit: cover;
}

/* navbar items */
.navbar-items {
    margin: 2em;
}

ul {
    list-style-type: none;
    margin: 0;
    display: flex;
    align-items: baseline;
    overflow: hidden;
}

li {
    float: right;
}

li a {
    display: block;
    font-size: medium;
    color: #000;
    text-align: center;
    margin: 0 0.1em;
    padding: 0.21em 0.8em;
    text-decoration: none;
    font-weight: 700;

    transition: all 0.3s ease;
}

.is-dark-mode-active li a{
    color: #c4c4c4;
}

/* Change the link color to pink on hover */
li a:hover,
li a:active,
li a:focus {
    color: #FAAA53;
}

.is-dark-mode-active li a:hover,
.is-dark-mode-active li a:active,
.is-dark-mode-active li a:focus {
    color: #FAAA53;
}

/* no border on button */
li:last-child a:hover {
    border: none;
}

/* slide fade out */
.slideout {
    /* animation: 1s ease-in 0s 1 slideInFromLeft; */
    animation: fade 1s ease-in-out;
}

@keyframes fade {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}
</style>