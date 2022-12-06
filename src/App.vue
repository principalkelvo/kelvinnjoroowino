<script>
// window.onscroll = () => {
//   let current = "";

//   sections.forEach((section) => {
//     const sectionTop = section.offsetTop;
//     console.log(sectionTop);
//     if (scrollY >= sectionTop - 60) {
//       current = section.getAttribute("id");
//       console.log(current);
//     }
//   });
//   navLi.forEach((li) => {
//     li.classList.remove("active");
//     console.log(li);

//     if (li.classList.contains(current)) {
//       li.classList.add("active");
//       console.log('active')
//     }
//   });
// };

import Navbar from "@/components/navbar.vue";
import NavbarMobile from "@/components/navbar-mobile.vue";

export default {
  components: {
    Navbar,
    NavbarMobile,
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("scroll", this.checkAnimation);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("scroll", this.checkAnimation);
  },
  beforeCreate() {
    this.$store.commit("initialiseStore");
  },
  mounted() {
    this.checkAnimation();
  },
  methods: {
    handleScroll(event) {
      const sections = document.querySelectorAll("section[id]");
      const navLi = document.querySelectorAll(".navigation ul li");
      let scrollY = window.pageYOffset;
      // Any code to be executed when the window is scrolled
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        // console.log(sectionTop);
        if (scrollY >= sectionTop - 60) {
          current = section.getAttribute("id");
          // console.log(current);
        }
      });
      navLi.forEach((li) => {
        li.classList.remove("active");
        // console.log(li);

        if (li.classList.contains(current)) {
          li.classList.add("active");
          // console.log('active')
        }
      });
    },
    checkAnimation() {
      // console.log('checking animation ')
      const fadeIn = document.querySelectorAll(".fadeIn");
      const jumpIn = document.querySelectorAll(".jumpIn");
      const rotateIn = document.querySelectorAll(".circle");
      const trigger = (window.innerHeight / 5) * 4;

      fadeIn.forEach((fade) => {
        const top = fade.getBoundingClientRect().top;

        if (trigger > top) {
          fade.classList.add("fade-in");
        } else {
          fade.classList.remove("fade-in");
        }
      });
      jumpIn.forEach((jump) => {
        const top = jump.getBoundingClientRect().top;

        if (trigger > top) {
          jump.classList.add("fade-in");
        } else {
          jump.classList.remove("fade-in");
        }
      });
      rotateIn.forEach((rotate) => {
        const top = rotate.getBoundingClientRect().top;

        if (trigger > top) {
          rotate.classList.add("rotateIn");
        } else {
          rotate.classList.remove("rotateIn");
        }
      });
    },
  },
};
</script>

<template>
  <Navbar />
  <!-- <div class="container"> -->
  <router-view />
  <!-- </div> -->
  <NavbarMobile />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Istok+Web&display=swap");

* {
  font-family: "Istok Web", sans-serif;
  font-size: 20px;
  padding: 0;
  margin: 0;
  scroll-behavior: smooth;
}

#app {
  overflow-x: hidden;
}

.is-dark-mode-active {
  background-color: #464646;
  color: #c4c4c4;
}

.container {
  /* margin: 1em;
  padding: 1em; */
  width: 100vw;
}

/*all buttons */
.buttons {
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
}

.buttons button {
  background: linear-gradient(180deg, #fbc75b 0%, #fa964d 100%);
  /* box-shadow: 0px 19px 28px -11px #00000040; */
  outline: none;
  border: none;
  cursor: pointer;
  box-shadow: 0 0 0 0 inset #faaa53, 0 1.187rem 1.75rem -0.6875rem #00000040;

  padding: 0.5rem 1rem;
  border-radius: 0.212rem;
  font-size: 1em;
  font-weight: 700;
  color: #fff;
  text-transform: capitalize;

  transition: ease-out 0.3s;
}

.is-dark-mode-active .buttons button {
  background: linear-gradient(180deg, #394aca 0%, #1429c9e1 100%);
  box-shadow: 0 0 0 0 inset #333e94, 0 1.1875rem 1.75rem -0.6875rem #00000040;

  color: #c4c4c4;
}

.buttons button:hover,
.buttons button:focus,
.buttons button:active {
  box-shadow: inset 9rem 0 0 0 #fff;
  border: 0.0625rem solid #000;
  color: #000 !important;
}

.is-dark-mode-active .buttons button:hover,
.is-dark-mode-active .buttons button:focus,
.is-dark-mode-active .buttons button:active {
  box-shadow: inset 9rem 0 0 0 #c4c4c4;
  border: 0.0625rem solid #333e94;
  color: #000000 !important;
}

.buttons.small button:hover,
.buttons.small button:focus,
.buttons.small button:active {
  box-shadow: inset 6.1rem 0 0 0 #fff;
  border: 0.0625rem solid #000;
  color: #000 !important;
}

.is-dark-mode-active .buttons.small button:hover,
.is-dark-mode-active .buttons.small button:focus,
.is-dark-mode-active .buttons.small button:active {
  box-shadow: inset 6.1rem 0 0 0 #c4c4c4;
  border: 0.0625rem solid #333e94;
  color: #000000 !important;
}

/* button no-fill */
.buttons button.no-fill {
  color: #a989e5;
  background: #fff;
  border: 0.0313rem solid #00000012;
  box-shadow: 0 0 0 0 inset #faaa53, 0.125rem 0.25rem 3.041em 4em #a989e540;

  margin: 1rem;

  transition: ease-out 0.3s;
}

.is-dark-mode-active .buttons button.no-fill {
  color: #000;
  background: transparent;
  border: 0.0313rem solid #00000012;
  box-shadow: 0 0 0 0 inset #333e94, 0.125rem 0.25rem 6.041em 2em #160d2540;
}

.buttons button.no-fill:hover,
.buttons button.no-fill:focus,
.buttons button.no-fill:active {
  box-shadow: inset 10.5em 0 0 0 #faaa53,
    0 1.1875rem 1.75rem -0.6875rem #00000040,
    0.125rem 0.25rem 4.5625rem 5.6875rem #faaa5340;
  color: #fff !important;
  border: 0.0906rem solid #faaa53;
}

.is-dark-mode-active .buttons button.no-fill:hover,
.is-dark-mode-active .buttons button.no-fill:focus,
.is-dark-mode-active .buttons button.no-fill:active {
  box-shadow: inset 10em 0 0 0 #333e94, 0 1.1875rem 1.75rem -0.6875rem #00000040,
    0.125rem 0.25rem 4.5625rem 5.6875rem #333e9440;
  color: #c4c4c4 !important;
  border: 0.0906rem solid #333e94;
}

/* Responsiveness */
/* 4k */
@media only screen and (min-width: 1470px) {
  * {
    font-size: 24px;
  }
}

/* tablet */
@media only screen and (max-width: 1128px) and (min-width: 769px) {
  * {
    font-size: 18px;
  }
}

@media only screen and (max-width: 769px) {
  .columns {
    display: flex;
    flex-direction: column;
  }
}

@media only screen and (max-width: 769px) and (min-width: 500px) {
  * {
    font-size: 16px;
  }
}

/* phone  */
@media only screen and (max-width: 500px) and (min-width: 405px) {
  * {
    font-size: 13px;
  }

  .column.is-6 {
    width: auto !important;
  }

  .relative {
    position: static !important;
  }

  .vue-testimonials .item {
    min-height: 100px !important;
  }
}

/* mobile  */
@media only screen and (max-width: 405px) and (min-width: 320px) {
  * {
    font-size: 12px;
  }

  .column.is-6 {
    width: auto !important;
  }

  .relative {
    position: static !important;
  }

  .vue-testimonials .item {
    min-height: 100px !important;
  }
}

/* mobile */
@media only screen and (max-width: 320px) and (min-width: 250px) {
  * {
    font-size: 9px;
  }

  .column.is-6 {
    width: auto !important;
  }

  .relative {
    position: static !important;
  }

  .vue-testimonials .item {
    min-height: 100px !important;
  }
}

/* mobile */
@media only screen and (max-width: 250px) and (min-width: 200px) {
  * {
    font-size: 8px;
  }

  .relative {
    position: static !important;
  }

  .vue-testimonials .item {
    min-height: 100px;
  }
}

/* animation on scroll */
/* fade in animation for first div */
.fadeIn {
  opacity: 0;
  transform: translateY(-20%);
  overflow: hidden;
  transition: 0.5s ease-in-out transform, 0.5s ease-in-out opacity;
}

/* fade in animation for scond div */
.fadeIn:nth-of-type(even) {
  transform: translateY(20%);
  transition: 0.5s ease-in-out transform, 0.5s ease-in-out opacity;
}

.fadeIn:last-child {
  transform: translateY(20%);
  transition: 0.8s ease-in-out transform, 0.8s ease-in-out opacity;
}

/* jump in animation for first div */
.jumpIn {
  transform: translateX(-100%);
  opacity: 0;
  transition: 0.5s ease-in-out transform, 0.5s ease-in-out opacity;
}

/* jump in animation for second div */
.jumpIn:nth-of-type(even) {
  transform: translateX(100%);
  transition: 0.5s ease-in-out transform, 0.5s ease-in-out opacity;
}

/* rotate in animation for first div */
.rotateIn {
  animation: rotate 3s linear;
}

@keyframes rotate {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
}

/* add all animations */
.fade-in {
  opacity: 1;
  transform: translateX(0);
  transform: translateY(0);
  /* transition: all 3s ease-out; */
}

.fade-in:nth-of-type(even) {
  transform: translateY(0);
}
</style>
