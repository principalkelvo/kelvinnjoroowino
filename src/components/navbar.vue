<template>
    <div>
        <!-- navbar  -->
        <nav class="navbar">
            <!-- navbar logo  -->
            <div class="navbar-logo">
                <p>Portfolio</p>
                <button class="mode" type="button" @click="darkModeToggle"
                    :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
                    :aria-pressed="isDark">
                    <Transition name="mode-swap" mode="out-in">
                        <img :key="darkModeToggleIcon" :src="darkModeToggleIcon" alt="" width="48" height="24">
                    </Transition>
                </button>
            </div>

            <!-- navbar items  -->
            <div class="navbar-items">
                <ul>
                    <li v-for="link in links" :key="link.id">
                        <a :href="link.href" :class="{ active: activeSection === link.id }"
                            :aria-current="activeSection === link.id ? 'location' : null">{{ link.text }}</a>
                    </li>
                    <!-- navbar items button -->
                    <li><a href="#contact" class="buttons is-large">
                            <button tabindex="-1">Contact</button>
                        </a></li>
                </ul>
            </div>

        </nav>

    </div>
</template>

<script>
import imgUrl from '@/assets/modeSVG/Switch - Orange.svg'
import imgUrlDark from '@/assets/modeSVG/Land Switch - Dark.svg'

export default {
    name: 'navbar',
    data() {
        return {
            links: [
                { id: 'home', href: '#home', text: 'Home' },
                { id: 'skills', href: '#skills', text: 'Skills' },
                { id: 'services', href: '#services', text: 'Services' },
                { id: 'myWork', href: '#myWork', text: 'Projects' },
            ],
        }
    },
    computed: {
        isDark() {
            return this.$store.state.isDarkModeActive
        },
        activeSection() {
            return this.$store.state.activeSection
        },
        darkModeToggleIcon() {
            return this.isDark ? imgUrlDark : imgUrl
        },
    },
    methods: {
        darkModeToggle() {
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

.is-dark-mode-active .navbar-logo p {
    color: #c4c4c4;

}

.navbar .navbar-logo .mode {
    width: 3em;
    padding: 0;
    border: none;
    background: none;
    cursor: pointer;
}

.navbar .navbar-logo .mode img {
    display: block;
    height: auto;
    width: 100%;
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

    transition: color 0.3s ease;
}

.is-dark-mode-active li a {
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

li a.active {
    color: #FAAA53;
}

.is-dark-mode-active li a.active {
    color: #364cf3;
}

/* theme toggle icon swap */
.mode-swap-enter-active,
.mode-swap-leave-active {
    transition: opacity 0.2s ease, transform 0.2s ease;
}

.mode-swap-enter-from {
    opacity: 0;
    transform: translateX(-25%);
}

.mode-swap-leave-to {
    opacity: 0;
    transform: translateX(25%);
}

/* tablet */
@media only screen and (max-width: 769px) {
    .navbar-items {
        display: none;
    }
}
</style>