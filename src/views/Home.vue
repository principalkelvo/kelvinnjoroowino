<template>
  <div class="home">
    <section class="section" id="home">
      <div class="columns">
        <div class="column is-6 content">
          <p class="title is-large pb-0 dark">{{ hero.greeting }}</p>
          <p class="title is-large pb-0">{{ hero.name }}</p>
          <p class="content">{{ hero.tagline }}</p>
          <div class="paybtn">
            <div class="buttons small">
              <a :href="hero.button.href">
                <button tabindex="-1">{{ hero.button.label }}</button>
              </a>
            </div>
          </div>
        </div>
        <div class="column is-6 myProfile">
          <div class="profile">
            <div class="image is-large">
              <div class="profileImg" :title="hero.photo.alt">
                <Transition name="profile-swap" mode="out-in">
                  <img
                    :key="profileImage"
                    :src="profileImage"
                    :alt="hero.photo.alt"
                    width="672"
                    height="1000"
                    fetchpriority="high"
                    decoding="async"
                  />
                </Transition>
              </div>
            </div>
            <!-- three fixed social slots: first on the big circle, next two on the small one -->
            <div class="bigCircle">
              <div
                v-for="social in socials.slice(0, 1)"
                :key="social.url"
                class="social-1"
              >
                <a
                  :href="social.url"
                  class="socialLink"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    :src="img(social.icon)"
                    :alt="`${social.name} profile`"
                    width="32"
                    height="32"
                  />
                </a>
              </div>
            </div>
            <div class="smallCircle">
              <div
                v-for="(social, i) in socials.slice(1, 3)"
                :key="social.url"
                :class="`social-${i + 2}`"
              >
                <a
                  :href="social.url"
                  class="socialLink"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    :src="img(social.icon)"
                    :alt="`${social.name} profile`"
                    width="32"
                    height="32"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Service />

    <Services />

    <MyWork />

    <Skills />

    <Contact />
  </div>
</template>

<script>
import Service from "@/components/service.vue";
import Services from "@/components/services.vue";
import MyWork from "@/components/myWork.vue";
import Skills from "@/components/skills.vue";
import Contact from "@/components/contact.vue";
import content, { img } from "@/content";

export default {
  name: "Home",
  components: {
    Service,
    Services,
    MyWork,
    Skills,
    Contact,
  },
  data() {
    return {
      hero: content.hero,
      socials: content.hero.socials.slice(0, 3),
    };
  },
  methods: {
    img,
  },
  computed: {
    profileImage() {
      const { light, dark } = this.hero.photo;
      return img(this.$store.state.isDarkModeActive ? dark : light);
    },
  },
};
</script>

<style>
/* section  */
.section {
  padding: 1em;
  min-height: calc(100vh - 3.25rem);
  width: 90%;
}

/* columns  */
.columns {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.column.is-3 {
  width: 25%;
  padding: 1.5em;
}

.column.is-4 {
  width: 44.4%;
  padding: 1.5em;
}

.column.is-6 {
  width: 50%;
  padding: 1.5em;
}

.column.is-8 {
  width: 66.6%;
  padding: 1.5em;
}

/* title  */
.title.is-large {
  padding: 0.2em 0 1em;
  color: #fa964d;
  font-size: 1.9em;
  font-weight: 900;
  width: 100%;
  letter-spacing: 2px;
}

.is-dark-mode-active .title.is-large {
  color: #364cf3;
}

.title.is-large.dark {
  color: #000;
}

.is-dark-mode-active .title.is-large.dark {
  color: #c4c4c4;
}

/* padding  */
.pt-0 {
  padding-top: 0 !important;
}

.pb-0 {
  padding-bottom: 0 !important;
}

.pr-0 {
  padding-right: 0 !important;
}

.pl-0 {
  padding-left: 0 !important;
}

/* margins  */
.mt-0 {
  margin-top: 0 !important;
}

.mb-0 {
  margin-bottom: 0 !important;
}

.mr-0 {
  margin-right: 0 !important;
}

.ml-0 {
  margin-left: 0 !important;
}

/* images */
.image.is-large {
  height: 20em;
  width: 20em;
}

.image.is-large img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media only screen and (max-width: 769px) {
  .section {
    /* min-height: calc(100vh - 5.25rem); */
    min-height: 100% !important;
  }
  .column.is-4 {
    width: auto;
  }
}
</style>

<style scoped>
/* working  */
.profile {
  position: relative;
  width: 100%;
  overflow: visible;
  /* display: none; */
}

.image.is-large .profileImg {
  height: 24.2em;
  width: 19.5em;
  position: relative;
  top: 0;
  background: none;
  z-index: 1;
}

.image.is-large .profileImg img {
  height: 100%;
  width: 100%;
  object-fit: contain;
}

/* profile photo cross-fade on theme switch */
.profile-swap-enter-active,
.profile-swap-leave-active {
  transition: opacity 0.25s ease;
}

.profile-swap-enter-from,
.profile-swap-leave-to {
  opacity: 0;
}

.profile .bigCircle {
  width: 15em;
  height: 15em;
  background: #a989e5;
  border-radius: 50%;
  position: absolute;
  top: 0.5em;
  left: -2.8em;
  overflow: visible;
}

.is-dark-mode-active .profile .bigCircle {
  background: #866bb8e0;
}

.profile .smallCircle {
  border-radius: 50%;
  width: 10em;
  height: 10em;
  background: #faaa53;
  position: absolute;
  bottom: 3em;
  right: 0;
  overflow: visible;
}

.is-dark-mode-active .profile .smallCircle {
  background: #364cf3;
}

.profile .smallCircle .social-3 img {
  width: 2.5em;
  height: 2.5em;
  background: #fff;
  padding: 0.5em;
  border-radius: 50%;
  position: absolute;
  right: -1.5em;
  top: 1em;
  box-shadow: 0 0 10px 0 #a989e512, -0 -0 10px 0 #a989e512,
    -0 0 10px 0 #a989e512, 0 -0 10px 0 #a989e512;
  z-index: 2;
}

.is-dark-mode-active .profile .smallCircle .social-3 img {
  background: transparent;
  border: 2px solid #fff;
  filter: sepia(100%) hue-rotate(220deg) brightness(59%) saturate(500%);
}

.profile .bigCircle .social-1 img {
  width: 2.5em;
  height: 2.5em;
  background: #fff;
  padding: 0.5em;
  border-radius: 50%;
  position: absolute;
  top: 4em;
  left: -9%;
  box-shadow: 0 0 10px 0 #faaa5310, -0 -0 10px 0 #faaa5310,
    -0 0 10px 0 #faaa5310, 0 -0 10px 0 #faaa5310;
}

.is-dark-mode-active .profile .bigCircle .social-1 img {
  background: #686868;
  /* border: 2px solid #fff; */
  filter: sepia(10%) hue-rotate(190deg) brightness(60%) saturate(400%);
}

.profile .smallCircle .social-2 img {
  width: 2.5em;
  height: 2.5em;
  /* border: 1px solid #141414; */
  background: #fff;
  padding: 0.5em;
  border-radius: 50%;
  position: absolute;
  top: -7em;
  right: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  box-shadow: 0 0 10px 0 #00000010, -0 -0 10px 0 #00000010,
    -0 0 10px 0 #00000010, 0 -0 10px 0 #00000010;
}

.is-dark-mode-active .profile .smallCircle .social-2 img {
  background: #686868;
  border: none;
  filter: sepia(10%) hue-rotate(190deg) brightness(60%) saturate(400%);
}

.profile .smallCircle .social-3:hover img,
.profile .bigCircle .social-1:hover img,
.profile .smallCircle .social-2:hover img,
.profile .smallCircle .social-3:active img,
.profile .bigCircle .social-1:active img,
.profile .smallCircle .social-2:active img {
  box-shadow: 0em 0em 1rem 0.2rem #faaa53;
}

/* hero payments */
.paybtn {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2em;
}

.paybtn .payments {
  display: -webkit-inline-box;
}

.paybtn .payments li {
  padding: 5px;
  width: 4em;
  height: 2em;
  position: relative;
  overflow: hidden;
}

.paybtn .payments li img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: contain;
  border: none;
}

.paybtn .buttons button {
  height: 100%;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
}

@media only screen and (min-width: 1470px) {
  .profile .smallCircle {
    right: 35%;
  }
}

@media only screen and (max-width: 769px) {
  .section {
    /* min-height: calc(100vh - 5.25rem); */
    min-height: 100% !important;
  }

  .columns {
    display: flex;
    flex-direction: column-reverse;
  }

  .column.is-6 {
    width: 100%;
  }

  .column.is-6.myProfile {
    width: 50%;
  }
}
</style>
