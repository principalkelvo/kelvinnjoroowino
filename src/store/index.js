import {
    createStore
} from "vuex";
export default createStore({
    state: {
        // Dark Mode
        isDarkModeActive: true
    },
    mutations: {
        // Dark Mode toggle
        /* Dark Mode */
        darkModeToggle(state, payload = null) {
            const htmlClassName = 'is-dark-mode-active'

            state.isDarkModeActive = !state.isDarkModeActive

            if (state.isDarkModeActive) {
                document.documentElement.classList.add(htmlClassName)
            } else {
                document.documentElement.classList.remove(htmlClassName)
            }
        },

    },
    actions: {},
    getters: {}
})