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

            </div>
              
            </div>
            

            </div>
            <div class="success">
            <div class="firstRectangle">
              <div class="secondRectangle">

            </div>
            <div class="circle">

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
  height: 20em;
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
  justify-content: space-around;

}
.projects .success{
  width: 100%;
}
.projects .success .firstRectangle{
  height: 5em;
  background-color: red;
  border-radius: .6em;
  position: relative;
}
.projects .success .firstRectangle .secondRectangle{
  position: absolute;
   width: 80%;
  height: 100%;
  background-color: rgb(0, 0, 0);
  border-radius: .6em;
  left: 50%;
  transform: translate(-50%, 0);
  top: -20%;

}
.projects .success .firstRectangle .circle{
  position: absolute;
   width: 4em;
  height: 4em;
  background-color: rgb(129, 24, 24);
  border-radius: 50%;
  left: 50%;
  top: -50%;
  transform: translate(-50%, -30%);

}
</style>
