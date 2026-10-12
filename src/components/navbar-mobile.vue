<template>
    <nav class="navigation" aria-label="Sections">
        <ul>
            <!-- list rendering -->
            <li v-for="item in items" :key="item.section"
            @click="$store.commit('setActiveSection', item.section)"
            :class="{ active: activeSection === item.section }">
                <a :href="`#${item.section}`" :aria-current="activeSection === item.section ? 'location' : null">
                    <span class="icon">
                        <svg :viewBox="`0 0 ${item.icon[0]} ${item.icon[1]}`" aria-hidden="true">
                            <path :d="item.icon[4]" fill="currentColor" />
                        </svg>
                    </span>
                    <span class="text">{{ item.text }}</span>
                </a>
            </li>
            <li class="indicator" aria-hidden="true"></li>
        </ul>
    </nav>
</template>

<script>
// individual icon imports are tree-shaken: only these five paths get bundled
import { faHouse, faWrench, faDiagramProject, faGears, faPhone } from '@fortawesome/free-solid-svg-icons'

export default {
    name: "navbarMobile",
    data() {
        return {
            //listItems ([width, height, ligatures, unicode, path] = icon.icon)
            items: [
                { text: 'Home', icon: faHouse.icon, section: 'home' },
                { text: 'Services', icon: faWrench.icon, section: 'services' },
                { text: 'Projects', icon: faDiagramProject.icon, section: 'myWork' },
                { text: 'Skills', icon: faGears.icon, section: 'skills' },
                { text: 'Contact', icon: faPhone.icon, section: 'contact' },
            ]
        }
    },
    computed: {
        activeSection() {
            return this.$store.state.activeSection
        },
    },
}

</script>

<style scoped>
.navigation {
    width: 25rem;
    height: 4.375rem;
    position: fixed;
    /* background: rgba(0, 0, 0, 0.575); */
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: .625rem;
    z-index: 41;
}

.navigation ul {
    display: flex;
    width: 21.875rem;
}

.navigation ul li {
    position: relative;
    list-style: none;
    width: 4.375rem;
    height: 4.375rem;
    z-index: 2;
}

.navigation ul li a {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    text-align: center;
    font-weight: 500;
}

.navigation ul li a .icon {
    position: relative;
    display: block;
    line-height: 4.6875rem;
    font-size: 1.5em;
    /* text-align: center; */
    transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), color 0.3s ease;
    color: #000;
}

.navigation ul li a .icon svg {
    width: 1em;
    height: 1em;
    vertical-align: middle;
}

.navigation ul li.active a .icon {
    transform: translateY(-2rem);
    color: blue;
}

.navigation ul li a .text {
     position: absolute;
    background: rgb(24, 24, 172);
    color: #fff;
    padding: .125rem .4375rem;
    font-weight: 400;
    font-size: .75em;
    border-radius: .75rem;
    letter-spacing: 0.05em;
    transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.5s ease;
    opacity:0;
    transform: translateY(.9375rem);
}


.navigation ul li.active a .text {
    opacity: 1;
    transform: translateY(-0.25rem);
}

.navigation ul li.indicator {
    position: absolute;
    top: -2.1875rem;
    width: 4.375rem;
    height: 4.375rem;
    background: #fff;
    border-radius: 50%;
    z-index: 1;
    list-style: none;
    transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
}

.indicator::before {
  content: '';
    position: absolute;
    top: .3125rem;
    left: -1.75rem;
    width: 1.875rem;
    height: 1.875rem;
    background: transparent;
    border-radius: 50%;
    box-shadow: .9375rem 1.125rem #fff;
}

.indicator::after {
   content: '';
    position: absolute;
    top: .3125rem;
    right: -1.75rem;
    width: 1.875rem;
    height: 1.875rem;
    background: transparent;
    border-radius: 50%;
    box-shadow: -0.9375rem 1.125rem #fff;
}

.navigation ul li:nth-child(1).active~.indicator {
    transform: translateX(calc(4.375rem * 0));
}

.navigation ul li:nth-child(2).active~.indicator {
    transform: translateX(calc(4.375rem * 1));
}

.navigation ul li:nth-child(3).active~.indicator {
    transform: translateX(calc(4.375rem * 2));
}

.navigation ul li:nth-child(4).active~.indicator {
    transform: translateX(calc(4.375rem * 3));
}

.navigation ul li:nth-child(5).active~.indicator {
    transform: translateX(calc(4.375rem * 4));
}
/* tablet */
@media only screen and (min-width: 769px) {
    .navigation {
        display: none;
    }
}
</style>