<template>
  <div class="skills">
    <section class="section" id="skills">
      <div class="columns">
        <div class="column is-6">
          <!-- title  -->
          <div class="title jumpIn">
            <h1>Skills Used For All This</h1>
            <h1>Design & Development</h1>
          </div>
          <!-- content  -->
          <div class="content jumpIn">
            <p>
              Understand the topic matter of the customer completely and build
              on previous expertise, becoming intimately familiar with the
              subject area. Determine how to respond to the demands and
              requirements of a certain consumer.
            </p>
            <p>
              The results of research are being used to technological solutions
              product, such as materials, systems, and procedures. Engineer who
              uses research to create commercial items for a client.
            </p>
          </div>
          <!-- hire button  -->
          <div class="buttons fadeIn">
            <button>Hire Me</button>
          </div>
        </div>
        <div class="column is-6">
          <div class="mainCircle">
            <!-- used technologies -->
            <div class="socialCircle">
              <div class="circle">
                <div class="techUsed fadeIn" title="Python">
                  <div class="image">
                    <img
                      src="@/assets/socialIcons/python-free-logo.svg"
                      alt="Python"
                    />
                  </div>
                </div>
                <div class="techUsed fadeIn" title="Rails">
                  <div class="image">
                    <img src="@/assets/socialIcons/ruby.svg" alt="Rails" />
                  </div>
                </div>
                <div class="techUsed fadeIn" title="React">
                  <div class="image">
                    <img
                      src="@/assets/socialIcons/react-logo.svg"
                      alt="React"
                    />
                  </div>
                </div>
              </div>
              <div class="circle">
                <div class="techUsed fadeIn" title="Django">
                  <div class="image">
                    <img src="@/assets/socialIcons/django.svg" alt="Django" />
                  </div>
                </div>
                <div class="techUsed fadeIn" title="PhotoShop">
                  <div class="image">
                    <img
                      src="@/assets/socialIcons/photoShop.svg"
                      alt="Photo-shop"
                    />
                  </div>
                </div>

                <div class="techUsed fadeIn" title="LightRoom">
                  <div class="image">
                    <img
                      src="@/assets/socialIcons/lightRoom.svg"
                      alt="Light-room"
                    />
                  </div>
                </div>
                <div class="techUsed fadeIn" title="Figma">
                  <div class="image">
                    <img src="@/assets/socialIcons/figma.svg" alt="Figma" />
                  </div>
                </div>
              </div>
              <div class="circle">
                <div class="techUsed jumpIn" title="CSS">
                  <div class="image">
                    <img src="@/assets/socialIcons/css.svg" alt="CSS" />
                  </div>
                </div>
                <div class="techUsed jumpIn" title="JavaScript">
                  <div class="image">
                    <img
                      src="@/assets/socialIcons/javaScript.svg"
                      alt="Javascript"
                    />
                  </div>
                </div>
                <div class="techUsed jumpIn" title="Vue js">
                  <div class="image">
                    <img src="@/assets/socialIcons/vue.svg" alt="Vue" />
                  </div>
                </div>
              </div>

              <div class="circle">
                <div class="techUsed jumpIn" title="HTML">
                  <div class="image">
                    <img src="@/assets/socialIcons/HTML.svg" alt="html" />
                  </div>
                </div>
              </div>
            </div>
            <!-- background purple circle -->
            <div class="purpleCircle fadeIn"></div>
            <!-- background orange circle -->
            <div class="orangeCircle fadeIn"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script></script>
<style scoped>
.columns .column .title {
  margin-bottom: 2rem;
}

.columns .column .title h1 {
  width: 100%;
  margin: 0;
  font-size: 1.5rem;
}

.columns .column .title h1:nth-child(2) {
  color: #faaa53;
  font-size: 1.2rem;
}

.is-dark-mode-active .columns .column .title h1:nth-child(2) {
  color: #364cf3;
}

.columns .column .content {
  width: 100%;
  margin-bottom: 2rem;
  font-size: 0.9rem;
  line-height: 1.4rem;
}

/* technology used */
/* main div  */
.column .mainCircle {
  width: 28rem;
  height: 28rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid black; */
}

/* purple circle */
.mainCircle .purpleCircle {
  width: 18rem;
  height: 18rem;
  background: #a989e5;
  border-radius: 50%;
  position: absolute;
  top: -2rem;
  right: 0rem;
  overflow: visible;
}

/* pink Circle */
.mainCircle .orangeCircle {
  border-radius: 50%;
  width: 14rem;
  height: 14rem;
  background: #faaa53;
  position: absolute;
  bottom: 0;
  right: 0;
  overflow: visible;
}

.is-dark-mode-active .mainCircle .orangeCircle {
  background: #364cf3;
}

/* main circle  */
.column .mainCircle .socialCircle {
  width: 38rem;
  height: 28rem;
  background-color: #fff;
  position: relative;
  border-radius: 50%;
  box-shadow: 27px -8px 41px 5px #71717140, -27px 8px 39px 22px #b9b9b940;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
}

.is-dark-mode-active .column .mainCircle .socialCircle {
  background-color: #f4f4f4;
}

/* first circle with icons */
.column .mainCircle .socialCircle .circle {
  position: absolute;

  width: 23rem;
  height: 23rem;
  border-radius: 50%;
  box-shadow: 0px 4px 24px 6px #d0d0d040;
}

/* second circle with icon */
.column .mainCircle .socialCircle .circle:nth-child(2) {
  /* position: absolute; */
  width: 16.5rem;
  height: 16.5rem;
  border-radius: 50%;
  box-shadow: 0px 4px 24px 6px #d0d0d040;
}

/* third circle with icon */
.column .mainCircle .socialCircle .circle:nth-child(3) {
  /* position: absolute; */
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  box-shadow: 0px 4px 24px 6px #d0d0d040;
}

/* last small circle with icon at the center  */
.column .mainCircle .socialCircle .circle:last-child {
  position: relative;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  box-shadow: 0px 4px 24px 6px #d0d0d040;
}

.column .mainCircle .socialCircle .circle .techUsed {
  position: absolute;
  width: 3rem;
  height: 3rem;

  border-radius: 50%;

  background: #fff;

  box-shadow: 0px 0px 16px 8px #a6a6a640;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* first out circle with clipped icons  */
.column .mainCircle .socialCircle .circle:first-child .techUsed {
  top: 5%;
  right: 10%;
}

/* second icon on the first circle */
.column .mainCircle .socialCircle .circle:first-child .techUsed:nth-child(2) {
  top: 60%;
  right: 92%;
}

/* last icon on the first circle */
.column .mainCircle .socialCircle .circle:first-child .techUsed:last-child {
  top: 80%;
  left: 70%;
}

/* first icon in second circle */
.column .mainCircle .socialCircle .circle:nth-child(2) .techUsed:first-child {
  top: 20%;
  left: -10%;
}

/* second icon on the second circle */
.column .mainCircle .socialCircle .circle:nth-child(2) .techUsed:nth-child(2) {
  top: 50%;
  right: -8%;
}

.column .mainCircle .socialCircle .circle:nth-child(2) .techUsed:nth-child(3) {
  bottom: 90%;
  left: 30%;
}

/* last icon on the second circle */
.column .mainCircle .socialCircle .circle:nth-child(2) .techUsed:last-child {
  top: 85%;
  right: 60%;
}

/* first icon in second circle */
.column .mainCircle .socialCircle .circle:nth-child(3) .techUsed {
  top: -5%;
  right: 10%;
}

/* second icon on the second circle */
.column .mainCircle .socialCircle .circle:nth-child(3) .techUsed:nth-child(2) {
  top: 50%;
  left: -8%;
}

/* last icon on the second circle */
.column .mainCircle .socialCircle .circle:nth-child(3) .techUsed:last-child {
  top: 80%;
  left: 60%;
}

/* the only icon in the last small circle */
.column .mainCircle .socialCircle .circle:last-child .techUsed {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* images  */
.column .mainCircle .socialCircle .circle .techUsed {
  display: flex;
  justify-content: center;
  align-items: center;
}

.column .mainCircle .socialCircle .circle .techUsed .image {
  width: 2rem;
  height: 2rem;
  position: relative;
}

.column .mainCircle .socialCircle .circle .techUsed .image img {
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
}

@media only screen and (max-width: 769px) {
  .column.is-6 {
    width: auto;
  }

  .columns {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
