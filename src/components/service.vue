<template>
  <div class="service">
    <div class="section">
      <div class="columns cards">
        <div class="column is-4 card">
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
        <div class="column is-4 card">
            <div class="serviceCard">
              <div class="title">
                <img src="../assets/modeSVG/emoji.svg" alt="">
                <h2>Service</h2>

              </div>
              <div class="cardContent">
                <div class="jobs">
                  <div class="jobTitle">
                    <p>Graphic designer</p>

                  </div>
                  <div class="lifeEmoji">
                    <img src="@/assets/socialIcons/life.png" alt="life">
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
                    <img src="@/assets/socialIcons/life.png" alt="life">
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
                    <img src="@/assets/socialIcons/life.png" alt="life">
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
        <div class="column is-4 card">
            <div class="awesomeCard">
              <div class="title">
                <h2>My awesome</h2>
                <h2>Services</h2>
              </div>
              <div class="cardContent">
                
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, doloribus.</p>
                

              </div>
              <div class="cardFooter">
                <div class="buttons">
                  <button>Download CV</button>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    name: "Service",

}
</script>

<style scoped>
/* fullcard  */
.cards .card{
  height: 18em;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
/* firstcard projects and jobs percentage  */
.projects{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

}
/* each project */
.projects .success{
  width: 100%;
  padding: 3em 0;
  
}
.projects .success .firstRectangle{
  height: 5em;
  width: 18em;
  background: linear-gradient(205.37deg, rgba(236, 150, 171, 0.35) -2.42%, rgba(169, 137, 229, 0.5) 103.97%);
  border-radius: .6em;
  position: relative;
  
}
.projects .success .firstRectangle .secondRectangle{
  position: absolute;
   width: 80%;
  height: 100%;
  background-color: #fff;
  border: 1px solid #00000012;
  border-radius: .6em;
  left: 50%;
  transform: translate(-50%, 0);
  top: -20%;
}
.projects .success .firstRectangle.yellowed{
  background: linear-gradient(180deg, rgba(251, 199, 91, 0.5) 0%, rgba(250, 150, 77, 0.5) 100%);
}

.projects .success .firstRectangle .secondRectangle p{
  /* font-size: 1.2em; */
  position: absolute;
  bottom: 0;
  left: 50%;
  white-space: nowrap;
  transform: translate(-50%, 0);
  color: rgba(0, 0, 0, 0.5);
  text-align: center;
}
.projects .success .firstRectangle .circle{
  position: absolute;
   /* width: 5em;
  height: 5em; */
  /* border: 10px solid; */
  border-radius: 50%;
  left: 50%;
  top: -50%;
  transform: translate(-50%, -30%);
  display: grid;
    place-items: center;

}

/* circular progress bar  */
.circular-progress {
    position: relative;
  background: linear-gradient(205.37deg, rgba(236, 150, 171, 0.56) -2.42%, rgba(169, 137, 229, 0.8) 103.97%);
    height: 5em;
    width: 5em;
    border-radius: 50%;
    display: grid;
    place-items: center;
  }
  .circular-progress.yellowed{
background: linear-gradient(180deg, rgba(251, 199, 91, 0.5) 0%, rgba(250, 150, 77, 0.5) 100%);

}
  .circular-progress:before {
    content: "";
    position: absolute;
    height: 84%;
    width: 84%;
    background-color: #ffffff;
    border-radius: 50%;
  }
  /* value in the circular bar  */
   .value-container {
    position: relative;
    font-weight: 900;
    color: #231c3d;
  }

  

  .value-container {
    position: relative;
    /* font-family: "Poppins", sans-serif; */
    font-weight: 900;
    color: #231c3d;
  }

/* center card  */
  .serviceCard{
    background: linear-gradient(205.37deg, #A989E5 -2.42%, rgba(236, 150, 171, 0.7) 103.97%);
    width: 100%;
    height: 120%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
  .serviceCard .title{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 10em;
    color: #fff;
  }
  .serviceCard .cardContent{    
    display: flex;
    width: 90%;
    /* align-items: center; */
    flex-direction: column;
    font-size: .6em;
  }
  .serviceCard .jobs{
    width: 100%;
    display: flex;
    align-items: left;
    justify-content: space-between;

  }
  .jobs p{
    margin: 0;
  }
    .serviceCard .jobs .jobTitle{
      color: #fff;
    }
    .serviceCard .jobs .lifeEmoji{
      padding: 0 1em ;
    }
    .serviceCard .cardFooter{
  
      color: #fff;
    }

/* last service div  */
 .awesomeCard{
   background: #fff;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
   .awesomeCard .title{
     color: #000;
     width: 100%;
     display: flex;
     align-items: left;
     justify-content: center;
     flex-direction: column;
  }
   .awesomeCard .title h2{
      margin: 0;
      font-size: 2em;
   }
   .awesomeCard .title h2:last-child{
     color: #faaa53;
   }

   .awesomeCard .cardContent{
     width: 100%;
   }
</style>
