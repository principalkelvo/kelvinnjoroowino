<template>
    <div class="navigation">
        <ul>
            <!-- list rendering -->
            <li v-for="item in items" @click="toggleList(item)" :class="{ active: item.active }">
                <a :href="`${item.routed}`">
                    <span class="icon">
                        <i :class="[faClass(item.icon)]" 
                        style="width:auto" 
                        aria-hidden="true"></i>
                    </span>
                    <span class="text">{{ item.text }}</span>
                </a>
            </li>
            <div class="indicator"></div>
        </ul>
    </div>
</template>

<script>
// const list = document.querySelectorAll('.list');

// function activeLink() {
//     list.forEach((item) =>
//         item.classList.remove('active'));
//     this.classList.add('active');
//     console.log('active')
// }
// list.forEach((item) =>
//     item.addEventListener('click', activeLink)
// )

export default {
    name: "navbarMobile",
    data() {
        return {
            //listItems
            items: [
                {
                    text: 'Home',
                    icon: 'home',
                    active: false,
                    routed: "#"
                },
                {
                    text: 'Skills',
                    icon: 'home',
                    active: false,
                    routed: "#skills"


                },
                {
                    text: 'Services',
                    icon: 'home',
                    active: false,
                    routed: "#services"
                },
                {
                    text: 'Projects',
                    icon: 'home',
                    active: false,
                    routed: "#myWork"
                },
                {
                    text: 'Contact',
                    icon: 'home',
                    active: false,
                    routed: "#contact"
                }
            ]
        }
    },
    methods: {
        toggleList(item) {
            //remove active class to any active items
            this.items.forEach((item) =>
                item.active = false);
            //add active class to current item
            item.active = true;
        },
        faClass(icon) {
            return `fa fa-${icon}`;
          }
    }

}

</script>

<style scoped>
/* *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
:root{
    --clr: #FA964D;
}
body{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: black;
} */
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
    transition: 0.5s;
    color: #000;

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
    transition: 0.5s;
    opacity:0;
    transform: translateY(.9375rem);
}


.navigation ul li.active a .text {
    opacity: 1;
    transform: translateY(-0.25rem);
}

.indicator {
    position: absolute;
    top: -2.1875rem;
    width: 4.375rem;
    height: 4.375rem;
    background: #fff;
    border-radius: 50%;
    z-index: 1;
    /* border: .375rem solid #000; */
    transition: 0.5s;
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
</style>