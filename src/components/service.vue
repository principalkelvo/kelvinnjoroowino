<template>
  <div class="service">
    <section class="section" id="service">
      <div class="columns cards ">
        <div class="column is-4 card fadeIn">
          <div class="projects">
            <div class="success">
              <div class="firstRectangle">
                <div class="secondRectangle">
                  <p>Projects done successfull</p>
                </div>
                <div class="circle">
                  <div class="circular-progress">
                    <div class="value-container">26</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="success">
              <div class="firstRectangle yellowed">
                <div class="secondRectangle">
                  <p>Jobs completed</p>
                </div>
                <div class="circle">
                  <div class="circular-progress yellowed">
                    <div class="value-container">12</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-4 card fadeIn">
          <div class="serviceCard">
            <div class="title">
              <img src="../assets/modeSVG/emoji.svg" alt="services" />
              <h2>Service</h2>
            </div>
            <div class="cardContent">
              <div class="jobs">
                <div class="jobTitle">
                  <p>Graphic designer</p>
                </div>
                <div class="lifeEmoji">
                  <img src="@/assets/socialIcons/life.png" alt="Graphic designer" />
                </div>
                <div class="jobPercentage">
                  <p>100%</p>
                </div>
              </div>
              <div class="jobs">
                <div class="jobTitle">
                  <p>UI/UX designer</p>
                </div>
                <div class="lifeEmoji">
                  <img src="@/assets/socialIcons/life.png" alt="UI/UX designer" />
                </div>
                <div class="jobPercentage">
                  <p>100%</p>
                </div>
              </div>
              <div class="jobs">
                <div class="jobTitle">
                  <p>Full-Stack Developer</p>
                </div>
                <div class="lifeEmoji">
                  <img src="@/assets/socialIcons/life.png" alt="Full-Stack Developer" />
                </div>
                <div class="jobPercentage">
                  <p>100%</p>
                </div>
              </div>
            </div>
            <div class="cardFooter">
              <p>Experience working</p>
            </div>
          </div>
        </div>
        <div class="column is-4 card fadeIn">
          <div class="awesomeCard">
            <div class="title">
              <h2>My awesome</h2>
              <h2>Services</h2>
            </div>
            <div class="cardContent">
              <p>
                Offering fully integrated digital and online design services that incorporate strategy, branding, and
                messaging for our clients. This methods are adaptable to a wide range of B2B business requirements.
              </p>
            </div>
            <div class="cardFooter">
              <div class="buttons">
                <a href="../assets/Kelvin_Njoro's_Resume.pdf" download="Kelvin Njoro's Resume.pdf">
                  <button>Download CV</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "Service",
};
</script>

<style scoped>
/* fullcard  */
.cards .card {
  height: 18em;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* firstcard projects and jobs percentage  */
.projects {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

/* each project */
.projects .success {
  width: 100%;
  padding: 3em 0;
}

.projects .success .firstRectangle {
  height: 4em;
  background: linear-gradient(205.37deg,
      rgba(236, 150, 171, 0.35) -2.42%,
      rgba(169, 137, 229, 0.5) 103.97%);
  border-radius: 0.6em;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.projects .success .firstRectangle .secondRectangle {
  position: absolute;
  width: 80%;
  height: 100%;
  background-color: #fff;
  border: 1px solid #00000012;
  border-radius: 0.6em;
  left: 50%;
  transform: translate(-50%, 0);
  top: -20%;
}

.is-dark-mode-active .projects .success .firstRectangle .secondRectangle {
  background-color: #464646;
  border: 1px solid #ffffff32;

}

.projects .success .firstRectangle.yellowed {
  background: linear-gradient(180deg,
      #fbc75b80 0%,
      #fa964d80 100%);
}

.is-dark-mode-active .projects .success .firstRectangle.yellowed {
  background: linear-gradient(180deg,
      #5a6dfa80 0%,
      #10209680 100%);
}

.projects .success .firstRectangle .secondRectangle p {
  font-size: 83%;
  position: absolute;
  bottom: 0;
  left: 50%;
  white-space: nowrap;
  transform: translate(-50%, 0);
  color: #00000080;
  text-align: center;
}

.is-dark-mode-active .projects .success .firstRectangle .secondRectangle p {
  color: #f4f4f4;
}

.projects .success .firstRectangle .circle {
  position: absolute;
  top: -90%;
  /* width: 5em;
  transform: translate(0%, -100%);
  height: 5em; */
  /* border: 10px solid; 
  transform: translate(-50%, -30%);
  border-radius: 50%;
  left: 50%;
  top: -50%;
  display: grid;
 place-items: center;*/
}

/* circular progress bar  */
.circular-progress {
  position: relative;
  background: linear-gradient(205.37deg,
      #ec96ab8f -2.42%,
      #a989e5cc 103.97%);
  height: 5em;
  width: 5em;
  border-radius: 50%;
  display: grid;
  place-items: center;
}

.circular-progress.yellowed {
  background: linear-gradient(180deg,
      #fbc75b80 0%,
      #fa964d80 100%);
}

.is-dark-mode-active .circular-progress.yellowed {
  background: linear-gradient(180deg,
      #5a6dfa80 0%,
      #10209680 100%);
}

.circular-progress:before {
  content: "";
  position: absolute;
  height: 84%;
  width: 84%;
  background-color: #fff;
  border-radius: 50%;
}

.is-dark-mode-active .circular-progress:before {
  background-color: #464646;
  border: 1px solid #ffffff32;
}

/* value in the circular bar  */
.value-container {
  position: relative;
  font-weight: 900;
  color: #231c3d;
}

.is-dark-mode-active .value-container {
  color: #f4f4f4;
}

/* .value-container {
  position: relative;
  font-weight: 900;
  color: #231c3d;
} */

/* center card  */
.serviceCard {
  background: linear-gradient(205.37deg,
      #a989e5 -2.42%,
      #ec96abb3 103.97%);
  width: 100%;
  height: 120%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-radius: 0.6em;
}

.serviceCard p {
  font-size: 80%;
}

.is-dark-mode-active .serviceCard {
  background: linear-gradient(205.37deg,
      #ec96ab59 -2.42%,
      #a989e580 103.97%);
}

.serviceCard .title {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 10em;
  color: #fff;
}

.is-dark-mode-active .serviceCard .title {
  color: #f4f4f4;
}

.serviceCard .cardContent {
  display: flex;
  width: 90%;
  /* align-items: center; */
  flex-direction: column;
  font-size: 0.6em;
}

.serviceCard .jobs {
  width: 100%;
  display: flex;
  align-items: left;
  justify-content: space-between;
}

.jobs p {
  margin: 0;
}

.serviceCard .jobs .jobTitle {
  color: #fff;
}

.is-dark-mode-active .serviceCard .jobs .jobTitle {
  color: #d4d4d4;
}

.serviceCard .jobs .lifeEmoji {
  padding: 0 1em;
}

.serviceCard .cardFooter {
  color: #fff;
}

.is-dark-mode-active .serviceCard .cardFooter {
  color: #f4f4f4;
}

/* last service div  */
.awesomeCard {
  background: #fff;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.is-dark-mode-active .awesomeCard {
  background: #464646;
}

.awesomeCard .title {
  color: #000;
  width: 100%;
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
}

.is-dark-mode-active .awesomeCard .title {
  color: #f4f4f4;
}

.awesomeCard .title h2 {
  margin: 0;
  font-size: 2em;
}

.awesomeCard .title h2:last-child {
  color: #faaa53;
}

.is-dark-mode-active .awesomeCard .title h2:last-child {
  color: #364cf3;
}

.awesomeCard .cardContent {
  width: 100%;
}

@media only screen and (max-width: 769px) {
  .cards .card {
    height: 18em;
    width: 20em;
  }

}
</style>
