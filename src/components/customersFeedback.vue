<template>
  <div class="customer">
    <section class="section" id="customer">
      <div class="columns">
        <div class="column is-12">
          <div class="card sliderWrapper">
            <vue-testimonials
              :items="items"
              arrow-color="#000000"
              ball-active-color-class="text-purple-500"
              ball-inactive-color-class="text-purple-500"
              title-classes="text-purple-500 text-2xl"
              content-classes="text-purple-500 text-8xl"
              author-classes="text-purple-500 text-8xl"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
// import image in vite
import imageUrl from "@/assets/profilePic/default.jpg";

export default defineComponent({
  name: "CustomersFeedback",
  components: {},
  setup() {
    const items = ref([
      {
        title: "Timely Support",
        content:
          "The support I received was fast and my issue was addressed with a single interaction. Awesome!",
        image: imageUrl,
        author: "Total Wellness",
      },
      {
        title: "Thank you",
        content: "Thank you so much for your good work",
        image: imageUrl,
        author: "Pokot Tours",
      },
    ]);
    return { items };
  },

});
</script>

<style scoped>
.section {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.column.is-12 {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.card {
  width: 80%;
  min-height: 20em;
  max-height: 31em;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.412em;
  margin: 2rem;
  padding: 1em;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  /* flex-direction: column; */
  z-index: 40;
}

.is-dark-mode-active .card {
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.card .cardHeader {
  display: flex;
  justify-content: center;
  align-items: center;
}

.card .cardHeader .profileImg {
  width: 5em;
  height: 5em;
}

.card .cardHeader .profileImg img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: contain;
}

.card .cardBody {
  width: 90%;
}

.card .cardBody .feedback {
  width: 100%;
  margin: 1em 0;
  /* border: 2px solid red; */
}
</style>

<style>
.text-purple-500 {
  color: #a989e5 !important;
}

.mb-40 {
  margin-bottom: 0 !important;
}

.mt-6 {
  margin-top: 0 !important;
}

.ball {
  border-radius: 1px solid red;
}

.text-purple-500.text-8xl.mt-5.text-lg {
  margin: 10px 50px;
  font-weight: normal;
  font-style: italic;
  color: #faa953 !important;
}
@media (min-width: 1024px) {
  .lg\:pb-20 {
    padding-bottom: 0 !important;
  }

  .ml-6 {
    margin-top: 0 !important;
  }
}
</style>
