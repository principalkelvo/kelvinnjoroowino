<template>
  <div class="service">
    <div class="section">
      <div class="columns cards">
        <div class="column is-4 card">
          <div class="projects">
            <div class="success">
            <div class="firstRectangle">
              <div class="secondRectangle">

            </div>
            <div class="circle">
              <div class="circular-progress">
                    <div class="value-container"></div>
                </div>

            </div>
              
            </div>
            

            </div>
            <div class="success">
            <div class="firstRectangle">
              <div class="secondRectangle">

            </div>
            <div class="circle">
              <div class="circular-progress">
                    <div class="value-container"></div>
                </div>

            </div>
              
            </div>
            

            </div>
            </div>
        </div>
        <div class="column is-4 card">
            service
        </div>
        <div class="column is-4 card">
            service
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
.cards .card{
  border: 1px solid black;
  height: 18em;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.projects{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

}
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
  border-radius: .6em;
  left: 50%;
  transform: translate(-50%, 0);
  top: -20%;

}
.projects .success .firstRectangle .circle{
  position: absolute;
   width: 5em;
  height: 5em;
  background-color: rgb(129, 24, 24);
  border-radius: 50%;
  left: 50%;
  top: -50%;
  transform: translate(-50%, -30%);
  display: grid;
    place-items: center;

}

.circular-progress {
    position: relative;
    height: 4.2em;
    width: 4.2em;
    border-radius: 50%;
    display: grid;
    place-items: center;
  }
  .circular-progress:before {
    content: "";
    position: absolute;
    height: 84%;
    width: 84%;
    background-color: #ffffff;
    border-radius: 50%;
  }
   .value-container {
    position: relative;
    /* font-family: "Poppins", sans-serif; */
    font-weight: 900;
    color: #231c3d;
  }

  

  .value-container {
    position: relative;
    /* font-family: "Poppins", sans-serif; */
    font-weight: 900;
    color: #231c3d;
  }

</style>
