import {
    createStore
} from "vuex";
export default createStore({
    state: {
        // Dark Mode
        isDarkModeActive: " "
    },
    mutations: {
        // Dark Mode toggle
        /* Dark Mode */
        initialiseStore(state) {
            if (localStorage.getItem('Dark')) {
                const htmlClassName = 'is-dark-mode-active'
                // Replace the state object with the stored item
                state.isDarkModeActive = JSON.parse(localStorage.getItem("Dark"))
                if (state.isDarkModeActive) {
                    document.documentElement.classList.add(htmlClassName)
                } else {
                    document.documentElement.classList.remove(htmlClassName)
                }
            }
            else {
                state.isDarkModeActive = false
            }
        },

        darkModeToggle(state, payload = null) {
            const htmlClassName = 'is-dark-mode-active'

            state.isDarkModeActive = !state.isDarkModeActive

            localStorage.setItem("Dark", state.isDarkModeActive)

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