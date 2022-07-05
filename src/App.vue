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
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll(event) {
      const sections = document.querySelectorAll("section[id]");
      const navLi = document.querySelectorAll(".navigation ul li");
      let scrollY = window.pageYOffset
      // Any code to be executed when the window is scrolled
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        console.log(sectionTop);
        if (scrollY >= sectionTop - 60) {
          current = section.getAttribute("id");
          console.log(current);
        }
      });
      navLi.forEach((li) => {
        li.classList.remove("active");
        console.log(li);

        if (li.classList.contains(current)) {
          li.classList.add("active");
          console.log('active')
        }
      });
    }
  }
}
</script>


<template>

  <Navbar />
  <div class="container">
    <router-view/>
  </div>
  <NavbarMobile />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Istok+Web&display=swap');

* {
  font-family: 'Istok Web', sans-serif;
  font-size: 24px;
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
  background: linear-gradient(180deg, #FBC75B 0%, #FA964D 100%);
  /* box-shadow: 0px 19px 28px -11px #00000040; */
  outline: none;
  border: none;
  cursor: pointer;
  box-shadow: 0px 0px 0px 0px inset #FAAA53,
    0px 19px 28px -11px #00000040;

  padding: .5rem 1rem;
  border-radius: .212rem;
  font-size: 1em;
  font-weight: 700;
  color: #fff;
  text-transform: capitalize;

  transition: ease-out 0.3s;

}

.is-dark-mode-active .buttons button {
  background: linear-gradient(180deg, #394aca 0%, #1429c9e1 100%);
  box-shadow: 0px 0px 0px 0px inset #333e94,
    0px 19px 28px -11px #00000040;
  color: #c4c4c4;

}

.buttons button:hover,
.buttons button:focus,
.buttons button:active {
  box-shadow: inset 9em 0px 0 0 #fff;
  border: 1px solid #000;
  color: #000 !important;
}

.is-dark-mode-active .buttons button:hover,
.is-dark-mode-active .buttons button:focus,
.is-dark-mode-active .buttons button:active {
  box-shadow: inset 9em 0px 0 0 #c4c4c4;
  border: 1px solid #333e94;
  color: #000000 !important;
}

.buttons.small button:hover,
.buttons.small button:focus,
.buttons.small button:active {
  box-shadow: inset 6.1rem 0px 0 0 #fff;
  border: 1px solid #000;
  color: #000 !important;
}

.is-dark-mode-active .buttons.small button:hover,
.is-dark-mode-active .buttons.small button:focus,
.is-dark-mode-active .buttons.small button:active {
  box-shadow: inset 6.1rem 0px 0 0 #c4c4c4;
  border: 1px solid #333e94;
  color: #000000 !important;
}

/* button no-fill */
.buttons button.no-fill {
  color: #a989e5;
  background: #fff;
  border: .5px solid #00000012;
  box-shadow: 0px 0px 0px 0px inset #FAAA53,
    2px 4px 3.041em 4em #A989E540;

  margin: 1rem;

  transition: ease-out 0.3s;
}

.is-dark-mode-active .buttons button.no-fill {
  color: #000;
  background: transparent;
  border: .5px solid #00000012;
  box-shadow: 0px 0px 0px 0px inset #333e94,
    2px 4px 6.041em 2em #160d2540;
}

.buttons button.no-fill:hover,
.buttons button.no-fill:focus,
.buttons button.no-fill:active {
  box-shadow: inset 10em 0 0 0 #FAAA53,
    0px 19px 28px -11px #00000040,
    2px 4px 73px 91px #FAAA5340;
  color: #fff !important;
  border: 1.45px solid #FAAA53;
}

.is-dark-mode-active .buttons button.no-fill:hover,
.is-dark-mode-active .buttons button.no-fill:focus,
.is-dark-mode-active .buttons button.no-fill:active {
  box-shadow: inset 10em 0 0 0 #333e94,
    0px 19px 28px -11px #00000040,
    2px 4px 73px 91px #333e9440;
  color: #c4c4c4 !important;
  border: 1.45px solid #333e94;
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
</style>
