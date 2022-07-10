<template>
    <div class="myWork">
        <section class="section" id="myWork">
            <div class="columns jumpIn">
                <div class="title">
                    <h1>Clients get <span>always exceptional</span></h1>
                    <h2>works from me....</h2>
                </div>

            </div>
            <div class="columns jumpIn">
                <div class="cards">
                    <div class="buttons">
                        <div class="prevBtn fadeIn" @click="scrollHorizantlly(1)">
                            <!-- <img src="../assets/emoji/prev.svg" alt=""> -->
                            <svg width="257" height="184" viewBox="0 0 257 184" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_98_1750)">
                                    <path
                                        d="M166.657 0.20447C208.621 -2.6007 233 23.8876 233 53.1022C233 71.4731 224.46 82.9817 203.425 97.1396C193.834 103.596 180.257 106 166.657 106C138.385 106 90.2105 91.923 66.7423 72.0536C63.599 69.3922 60.8989 66.6269 58.7492 63.7777C56.2335 60.4433 52.3547 56.3082 54.7526 49.8963L58.7492 43.0837C62.3461 37.8741 66.5036 34.3764 74.7355 28.9723C79.8792 25.5955 85.6994 22.3985 91.9208 19.4486C101.557 14.8794 112.156 10.903 122.694 7.76974C131.748 5.0779 140.757 3.00832 149.072 1.71969C155.437 0.733273 161.396 0.20447 166.657 0.20447Z"
                                        fill="url(#paint0_radial_98_1750)" shape-rendering="crispEdges" />
                                </g>
                                <path class="text-color"
                                    d="M119.695 60C119.148 60 118.875 59.707 118.875 59.1211V44.0742C118.875 43.4883 119.148 43.1953 119.695 43.1953H124.078C126.891 43.1953 128.84 43.6523 129.926 44.5664C131.02 45.4805 131.566 46.7773 131.566 48.457C131.566 50.1367 131.02 51.4336 129.926 52.3477C128.84 53.2617 126.891 53.7188 124.078 53.7188H122.297V59.1211C122.297 59.707 122.023 60 121.477 60H119.695ZM122.297 50.8594H124.066C125.629 50.8594 126.691 50.6758 127.254 50.3086C127.816 49.9336 128.098 49.3164 128.098 48.457C128.098 47.5977 127.816 46.9844 127.254 46.6172C126.691 46.2422 125.629 46.0547 124.066 46.0547H122.297V50.8594ZM135.459 60C134.991 60 134.756 59.7656 134.756 59.2969V48.3984C134.756 47.9297 134.991 47.6953 135.459 47.6953H137.311C137.78 47.6953 138.014 47.9297 138.014 48.3984V49.3594H138.061C138.264 48.8594 138.604 48.418 139.08 48.0352C139.557 47.6523 140.12 47.4609 140.768 47.4609C141.213 47.4609 141.58 47.5156 141.87 47.625C142.143 47.7266 142.248 47.9141 142.186 48.1875L141.858 49.582C141.788 49.8945 141.577 49.9883 141.225 49.8633C141.022 49.793 140.827 49.7578 140.639 49.7578C139.889 49.7578 139.268 50.207 138.776 51.1055C138.284 52.0039 138.038 53.3125 138.038 55.0312V59.2969C138.038 59.7656 137.803 60 137.334 60H135.459ZM143.911 53.8477C143.911 51.8711 144.403 50.3125 145.388 49.1719C146.38 48.0312 147.778 47.4609 149.583 47.4609C151.677 47.4609 153.231 48 154.247 49.0781C155.263 50.1562 155.77 51.8906 155.77 54.2812C155.77 54.75 155.552 54.9844 155.114 54.9844H147.38C147.505 56.2812 147.825 57.0977 148.341 57.4336C148.856 57.7695 149.454 57.9375 150.134 57.9375C150.782 57.9375 151.278 57.8516 151.622 57.6797C151.966 57.5078 152.255 57.2734 152.489 56.9766C152.755 56.6328 153.083 56.5781 153.473 56.8125L154.645 57.5273C155.106 57.8086 155.173 58.1445 154.845 58.5352C154.368 59.1055 153.809 59.5312 153.169 59.8125C152.528 60.0938 151.516 60.2344 150.134 60.2344C147.891 60.2344 146.294 59.6641 145.341 58.5234C144.388 57.3828 143.911 55.8242 143.911 53.8477ZM147.391 52.6406H152.489C152.489 51.7969 152.278 51.1094 151.856 50.5781C151.434 50.0391 150.763 49.7695 149.841 49.7695C149.106 49.7695 148.524 50.0273 148.095 50.543C147.665 51.0508 147.43 51.75 147.391 52.6406ZM158.116 48.6094C157.921 48 158.05 47.6953 158.503 47.6953H160.601C160.968 47.6953 161.202 47.8945 161.304 48.293L163.12 55.1602C163.222 55.543 163.304 55.9219 163.366 56.2969C163.437 56.6719 163.48 56.9766 163.495 57.2109H163.566C163.581 56.9766 163.62 56.6719 163.683 56.2969C163.753 55.9219 163.839 55.543 163.941 55.1602L165.757 48.293C165.859 47.8945 166.093 47.6953 166.46 47.6953H168.558C169.011 47.6953 169.14 48 168.945 48.6094L165.546 59.2148C165.382 59.7383 165.097 60 164.691 60H162.37C161.964 60 161.679 59.7383 161.515 59.2148L158.116 48.6094Z"
                                    fill="white"  />
                                <defs>
                                    <filter id="filter0_d_98_1750" x="0" y="0" width="257" height="184"
                                        filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dx="-15" dy="39" />
                                        <feGaussianBlur stdDeviation="19.5" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix"
                                            result="effect1_dropShadow_98_1750" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_98_1750"
                                            result="shape" />
                                    </filter>
                                    <radialGradient id="paint0_radial_98_1750" cx="0" cy="0" r="1"
                                        gradientUnits="userSpaceOnUse"
                                        gradientTransform="translate(186.64 5.81484) rotate(120.446) scale(96.2217 233.877)">
                                        <stop stop-color="#FBC75B" stop-opacity="0.9" />
                                        <stop offset="1" stop-color="#D07F44" />
                                    </radialGradient>
                                </defs>
                            </svg>


                        </div>
                        <div class="nextBtn fadeIn" @click="scrollHorizantlly(-1)">
                            <!-- <img src="../assets/emoji/next.svg" alt=""> -->
                            <svg width="257" height="184" viewBox="0 0 257 184" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_98_1747)">
                                    <path
                                        d="M120.343 0.20447C78.3791 -2.6007 54 23.8876 54 53.1022C54 71.4731 62.5398 82.9817 83.5747 97.1396C93.1665 103.596 106.743 106 120.343 106C148.615 106 196.79 91.923 220.258 72.0536C223.401 69.3922 226.101 66.6269 228.251 63.7777C230.767 60.4433 234.645 56.3082 232.247 49.8963L228.251 43.0837C224.654 37.8741 220.496 34.3764 212.264 28.9723C207.121 25.5955 201.301 22.3985 195.079 19.4486C185.443 14.8794 174.844 10.903 164.306 7.76974C155.252 5.0779 146.243 3.00832 137.928 1.71969C131.563 0.733273 125.604 0.20447 120.343 0.20447Z"
                                        fill="url(#paint0_radial_98_1747)" shape-rendering="crispEdges" />
                                </g>
                                <path class="text-color"
                                    d="M118.695 60C118.148 60 117.875 59.707 117.875 59.1211V44.0742C117.875 43.4883 118.148 43.1953 118.695 43.1953H120.43C121.102 43.1953 121.609 43.4688 121.953 44.0156L127.93 53.6133H128.012C127.973 53.1445 127.953 52.6758 127.953 52.207V44.0742C127.953 43.4883 128.227 43.1953 128.773 43.1953H130.555C131.102 43.1953 131.375 43.4883 131.375 44.0742V59.1211C131.375 59.707 131.102 60 130.555 60H128.938C128.266 60 127.758 59.7266 127.414 59.1797L121.32 49.4062H121.238C121.277 49.875 121.297 50.3438 121.297 50.8125V59.1211C121.297 59.707 121.023 60 120.477 60H118.695ZM134.788 53.8477C134.788 51.8711 135.28 50.3125 136.264 49.1719C137.256 48.0312 138.655 47.4609 140.459 47.4609C142.553 47.4609 144.108 48 145.123 49.0781C146.139 50.1562 146.647 51.8906 146.647 54.2812C146.647 54.75 146.428 54.9844 145.991 54.9844H138.256C138.381 56.2812 138.702 57.0977 139.217 57.4336C139.733 57.7695 140.33 57.9375 141.01 57.9375C141.659 57.9375 142.155 57.8516 142.498 57.6797C142.842 57.5078 143.131 57.2734 143.366 56.9766C143.631 56.6328 143.959 56.5781 144.35 56.8125L145.522 57.5273C145.983 57.8086 146.049 58.1445 145.721 58.5352C145.245 59.1055 144.686 59.5312 144.045 59.8125C143.405 60.0938 142.393 60.2344 141.01 60.2344C138.768 60.2344 137.17 59.6641 136.217 58.5234C135.264 57.3828 134.788 55.8242 134.788 53.8477ZM138.268 52.6406H143.366C143.366 51.7969 143.155 51.1094 142.733 50.5781C142.311 50.0391 141.639 49.7695 140.717 49.7695C139.983 49.7695 139.401 50.0273 138.971 50.543C138.541 51.0508 138.307 51.75 138.268 52.6406ZM149.872 60C149.2 60 149.059 59.7148 149.45 59.1445L153.329 53.5195L149.907 48.5508C149.516 47.9805 149.657 47.6953 150.329 47.6953H152.544C152.895 47.6953 153.161 47.8516 153.341 48.1641L155.157 51.3281L156.973 48.1641C157.153 47.8516 157.419 47.6953 157.77 47.6953H159.985C160.665 47.6953 160.805 47.9805 160.407 48.5508L156.962 53.5195L160.864 59.1445C161.263 59.7148 161.122 60 160.442 60H158.227C157.884 60 157.618 59.8438 157.43 59.5312L155.157 55.7109L152.884 59.5312C152.696 59.8438 152.43 60 152.087 60H149.872ZM162.718 50.0391C162.257 50.0391 162.027 49.8438 162.027 49.4531V48.2812C162.027 47.8906 162.257 47.6953 162.718 47.6953H163.515V47.2852C163.515 46.9336 163.597 46.6133 163.761 46.3242L164.663 44.7422C164.835 44.4453 165.038 44.2969 165.273 44.2969H166.093C166.562 44.2969 166.796 44.5312 166.796 45V47.6953H168.695C169.155 47.6953 169.386 47.8906 169.386 48.2812V49.4531C169.386 49.8438 169.155 50.0391 168.695 50.0391H166.796V55.8516C166.796 56.6484 166.851 57.2227 166.96 57.5742C167.077 57.918 167.374 58.0898 167.851 58.0898C168.093 58.0898 168.366 58.0508 168.671 57.9727C168.976 57.8867 169.214 57.8047 169.386 57.7266C169.659 57.6016 169.839 57.6914 169.925 57.9961L170.277 59.332C170.347 59.5977 170.245 59.793 169.972 59.918C169.714 60.0352 169.359 60.1406 168.905 60.2344C168.46 60.3359 168.011 60.3867 167.558 60.3867C166.441 60.3867 165.487 60.1562 164.698 59.6953C163.909 59.2344 163.515 58.2852 163.515 56.8477V50.0391H162.718Z"
                                    fill="white" />
                                <defs>
                                    <filter id="filter0_d_98_1747" x="0" y="0" width="257" height="184"
                                        filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dx="-15" dy="39" />
                                        <feGaussianBlur stdDeviation="19.5" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix"
                                            result="effect1_dropShadow_98_1747" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_98_1747"
                                            result="shape" />
                                    </filter>
                                    <radialGradient id="paint0_radial_98_1747" cx="0" cy="0" r="1"
                                        gradientUnits="userSpaceOnUse"
                                        gradientTransform="translate(171.499 17.2319) rotate(120.136) scale(93.1376 298.731)">
                                        <stop stop-color="#B294EB" stop-opacity="0.9" />
                                        <stop offset="1" stop-color="#7343CD" />
                                    </radialGradient>
                                </defs>
                            </svg>

                        </div>
                    </div>
                    <div class="allCards ">

                        <div v-for="project in projects">
                            <div class="card ">
                                <div class="images">
                                    <div class="imageHero">
                                        <img :src="getImgUrl(project.image)" v-bind:alt="project.name">
                                    </div>
                                    <div class="imageFull">
                                        <img :src="getImgUrl(project.image1)" v-bind:alt="project.name">
                                    </div>
                                </div>
                                <div class="buttons small">
                                    <h1>{{ project.name }}</h1>
                                    <h2>{{ project.description }}</h2>
                                    <hr style="border: 0.0625rem solid #faaa53; width:80%;" />
                                    <div class="btn">
                                        <button>View Design</button>
                                        <button class="no-fill">View Demo</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="card">

                        </div>
                        <div class="card">

                        </div>

                        <div class="card">

                        </div> -->
                    </div>

                </div>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    name: 'myWork',
    data() {
        return {
            currentScrollPosition: 0,
            scrollAmount: 320,
            projects: [

                {
                    name: "Minimal Portfolio Project and Design",
                    image: 'minimalist-Portfolio-project-design-source-code-free',
                    image1: 'full-minimalist-Portfolio-project-design-source-code-free',
                    description: 'This project is done by using HTML, CSS and JS only, to create a cool minimalist Portfolio page. It is a fully developed light mode for all gadgets',
                },

                {
                    name: 'Moringa School Project and Design',
                    image: 'School-Landing-Page-Moringa-Project',
                    image1: 'School Landing Page_moringa-simple-design-for-professionals',
                    description: 'This is a landing page for Moringa school. The main purpose of this repository is to share a simple school landing page',
                },
                {
                    name: "Interview Hack Project and Design",
                    image: 'Hack_interview_simple_design_navbar_hero_landing_page',
                    image1: 'register_login_signup_forgot_password_design_source_code_motivation',
                    description: 'Crack Interviews with this website content, get interview preparation techniques',

                },
                {
                    name: "Anonymous File Sharing Project",
                    image: 'home-anonymous-file-sharing-project-design-source-code',
                    image1: 'Anonymously_send_images_and_files_upload_download_big_files',
                    description: 'Transmit files to other individuals using this anonymous file-sharing service without revealing any personal information about you or the recipient',
                },
                {
                    name: 'Point of Sale Project and Design',
                    image: 'point-of-sale-design-Add-Product-simple-source-code-free',
                    image1: 'Point_of_sale_ecommerce_Dashboard_admin_employee_and_products',
                    description: '',
                },
                {
                    name: 'Tumaini Church Project and Design',
                    image: 'Simple_Contact_form_with_vue_html_css_js_design_for_tumaini_church',
                    image1: 'Support_Donate_church_motivation_community_youth',
                    description: '',
                }
            ]
        }
    },
    methods: {

        scrollHorizantlly(val) {
            const sScroll = document.querySelector('.allCards')
            if (val < 0) {
                sScroll.scrollBy(350, 0)
            }
            else {
                sScroll.scrollBy(-350, 0)
            }

        },
        getImgUrl(project) {
            return new URL(`../assets/myDesigns/${project}.jpg`, import.meta.url).href
        }
    }
}
</script>

<style scoped>
/* title  */
.columns .title {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: left;
    padding: 3rem;
}

.columns .title h1 span {
    color: #faaa53;
    font-size: 2rem;
}

.is-dark-mode-active .columns .title h1 span {
    color: #364cf3;

}

.columns .title h1 {
    margin: 0;
    font-size: 3rem;
}
.columns .title h2 {
    margin: 0;
    font-size: 2rem;
}

.columns .cards {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 3rem;
}

.columns .cards .buttons {
    width: 10em;
    height: 16em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1rem;


}


.columns .cards .buttons .prevBtn,
.columns .cards .buttons .nextBtn {
    min-width: 8em;
    height: 6em;
    display: flex;
    justify-content: center;
    cursor: pointer;
}

.columns .cards .buttons .prevBtn svg .text-color,
.columns .cards .buttons .nextBtn svg .text-color{    
    transition: all .3s ease-in-out 0s;
}

.columns .cards .buttons .prevBtn:hover svg .text-color{
    fill: #364cf3;
}
.columns .cards .buttons .nextBtn:hover svg .text-color{
    
    fill: #faaa53;
}

.columns .cards .buttons .nextBtn svg,
.columns .cards .buttons .prevBtn svg {
    width: 100%;
    height: 100%;
}

.columns .cards .allCards {
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow-x: scroll;
    overflow-y: hidden;
    margin: 0 1rem;
    /* scroll-snap-type: x mandatory; */
}

.columns .cards .allCards::-webkit-scrollbar {
    display: none;
}

.columns .cards .card {
    /* background-color: #fff;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); */
    padding: 1rem;
    margin: 2rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 12em;
    width: 15em;
    height: 16em;
    min-height: 13em;
    position: relative;
    transition: all 0.5s ease-in-out 0s;
    scroll-snap-align: start;
}

.columns .cards .card:hover {
    transform: scale(1.1);
}

.is-dark-mode-active .columns .cards .card {
    background-color: #f4f4f4;
}

.columns .cards .card .images {
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.columns .cards .card .images .imageHero {
    width: 65%;
    height: 100%;
    /* position: absolute; */

}

.columns .cards .card .images .imageFull {
    width: 25%;
    height: 100%;
    padding: .5rem 0;
    /* position: absolute; */

}

.columns .cards .card .images {
    width: 100%;
    height: 100%;
    position: absolute;
    transform: rotateY(0);
    transition: all 0.5s ease-in-out 0s;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    /* padding: 1rem; */
}

.columns .cards .card .images img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.columns .cards .card:hover .images {
    transform: rotateY(-90deg);

}

.columns .cards .card .buttons {
    position: absolute;
    background: rgba(219, 219, 219, 0.8);
    width: 100%;
    height: 100%;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    top: 0;
    border-radius: 10px;
    transform: rotateY(90deg);
    transition: all 0.5s ease-in-out 0s;
    justify-content: space-evenly;
}

.columns .cards .card .buttons h1 {
    font-size: 1.3em;
    text-align: center;
    padding: .3em 1.1em;
    color: #faaa53;
}

.columns .cards .card .buttons h2 {
    font-size: .8em;
    text-align: center;
    padding: 0 .3em;

}

.columns .cards .card .buttons.small .btn button {
    flex-direction: row-reverse;
    font-size: .7em;
}

.columns .cards .card:hover .buttons {
    transform: rotateY(0);
}

.columns .cards .card .buttons button {
    margin: 1em;
}
</style>