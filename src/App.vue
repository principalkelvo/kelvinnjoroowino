<script>
import Navbar from "@/components/navbar.vue";
import NavbarMobile from "@/components/navbar-mobile.vue";

// element selector -> class added once it scrolls into view
const REVEALS = {
  ".fadeIn, .jumpIn": "fade-in",
  ".circle": "rotateIn",
};

export default {
  components: {
    Navbar,
    NavbarMobile,
  },
  async mounted() {
    // the router resolves the first route asynchronously; wait for the page to render
    await this.$router.isReady();
    await this.$nextTick();

    // Reveal animations: add the class when an element's top passes 80% of the
    // viewport; only remove it again when it drops back below (not when it
    // scrolls off the top), so content doesn't vanish while reading.
    // The observer watches each element's nearest non-animated ancestor:
    // a .jumpIn starts translated off-screen and is clipped by #app's
    // overflow-x, so watching it directly would never report it visible.
    const animated = Object.keys(REVEALS).join(", ");
    const targetsByAnchor = new Map();
    for (const [selector, cls] of Object.entries(REVEALS)) {
      document.querySelectorAll(selector).forEach((el) => {
        el.dataset.reveal = cls;
        let anchor = el.parentElement;
        while (anchor.matches(animated)) anchor = anchor.parentElement;
        if (!targetsByAnchor.has(anchor)) targetsByAnchor.set(anchor, []);
        targetsByAnchor.get(anchor).push(el);
      });
    }
    this.revealObserver = new IntersectionObserver(
      (entries) => {
        for (const { target, isIntersecting, boundingClientRect } of entries) {
          for (const el of targetsByAnchor.get(target)) {
            if (isIntersecting) el.classList.add(el.dataset.reveal);
            else if (boundingClientRect.top > 0)
              el.classList.remove(el.dataset.reveal);
          }
        }
      },
      { rootMargin: "0px 0px -20% 0px" }
    );
    targetsByAnchor.forEach((_, anchor) => this.revealObserver.observe(anchor));

    // Nav highlighting: whichever section crosses a line near the top of the viewport
    this.sectionObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.$store.commit("setActiveSection", entry.target.id);
          }
        }
      },
      { rootMargin: "-20% 0px -75% 0px" }
    );
    document
      .querySelectorAll("section[id]")
      .forEach((section) => this.sectionObserver.observe(section));
  },
  unmounted() {
    this.revealObserver?.disconnect();
    this.sectionObserver?.disconnect();
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
* {
  font-family: "Istok Web", sans-serif;
  font-size: 20px;
  padding: 0;
  margin: 0;
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

/* animation on scroll (classes added by the IntersectionObserver in App.vue) */
:root {
  --ease-out: cubic-bezier(0.22, 1, 0.36, 1);
  --reveal-duration: 0.7s;
}

.fadeIn,
.jumpIn {
  opacity: 0;
  transition: transform var(--reveal-duration) var(--ease-out),
    opacity var(--reveal-duration) var(--ease-out);
}

/* fade in: odd items drop down, even items rise up */
.fadeIn {
  transform: translateY(-20%);
  overflow: hidden;
}

.fadeIn:nth-of-type(even),
.fadeIn:last-child {
  transform: translateY(20%);
}

.fadeIn:last-child {
  --reveal-duration: 0.9s;
}

/* jump in: odd items from the left, even from the right */
.jumpIn {
  transform: translateX(-100%);
}

.jumpIn:nth-of-type(even) {
  transform: translateX(100%);
}

/* revealed state - doubled class so it outranks the :nth-of-type/:last-child offsets */
.fade-in.fade-in {
  opacity: 1;
  transform: none;
}

/* rotate in */
.rotateIn {
  animation: rotate 3s var(--ease-out);
}

@keyframes rotate {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
}

/* smooth theme switch (head.js sets the initial theme before paint, so no flash) */
html {
  transition: background-color 0.4s ease, color 0.4s ease;
}

@media (prefers-reduced-motion: no-preference) {
  html {
    scroll-behavior: smooth;
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }

  .fadeIn,
  .jumpIn {
    opacity: 1;
    transform: none;
  }
}
</style>
