import { createStore } from "vuex";

const DARK_CLASS = "is-dark-mode-active";

export default createStore({
  state: {
    // public/head.js applies the saved/system theme before first paint
    isDarkModeActive: document.documentElement.classList.contains(DARK_CLASS),
    // id of the section currently in view, drives nav highlighting
    activeSection: "home",
  },
  mutations: {
    darkModeToggle(state) {
      state.isDarkModeActive = !state.isDarkModeActive;
      document.documentElement.classList.toggle(
        DARK_CLASS,
        state.isDarkModeActive
      );
      try {
        localStorage.setItem("Dark", JSON.stringify(state.isDarkModeActive));
      } catch (e) {
        // storage blocked (private mode etc.) - theme still works for this visit
      }
    },

    setActiveSection(state, id) {
      state.activeSection = id;
    },
  },
});
