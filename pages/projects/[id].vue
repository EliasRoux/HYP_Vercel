<script setup>
    const route = useRoute()
    const id = route.params.id
    // useRuntimeConfig provide us with environment variables set up in the nuxtconfig file
    const { data: project } = await useFetch(useRuntimeConfig().baseURL + '/server/projects/' + id)
</script>

<template>
  

  <Overview class="overview" :sections="['Introducing the startup', 'The team', 'More about the product','The supervisor of the project','Related areas']"/>
  <NuxtLink to="/projects" class="link"><TheButton color="#427AA1" textcolor="white">See all the projects</TheButton></NuxtLink>

  <main>
  <div class="thebody">
  <div class="project_name">{{project.project_name}}</div>

  
    <div class = "block" id="Introducing the startup">
      <h2>Introducing  {{ project.project_name }}</h2>          
          <img src="~assets/img/transport.png" class = "imgtowrap"  width="500" height="500"> 
          {{ project.startup_presentation }} 

    </div>

    <br>
    <br>
    <h2>{{project.project_name}}'s team</h2>
    {{ project.startup_team }}
    <br>

    <br>
    <br>
    <h2>More about {{project.project_name}}'s service </h2>
    {{ project.startup_team }}   

    <br>
    <br>
    <br>

    
  


    

    <div class = "block" id="The supervisor of the project">
      <h2>The supervisor of the project</h2>    
        
      <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img src="~/assets/img/team/queen.jpg" class = "imgtowrapsupervisor" alt="Avatar" style="width:300px;height:300px;">
        </div>
        <div class="flip-card-back">
            <div class="content">
          <h1>John Doe</h1>
          <p>Architect & Engineer</p>
          <p>We love that guy</p>
          <NuxtLink to = "/team/employee1"><TheButton color="#679436">See Profile</TheButton></NuxtLink>
        </div></div>
      </div>
    </div>
    {{ project.startup_presentation }}
    
    
    

    </div>

    
  </div>
  </main>
</template>

<style scoped>
main {
        display: block;
        padding-bottom:5vh;
        max-width: 95%;
        margin-top: -10%;
        padding-right: 20px;
    }
.project_name{
      font-size: 8vw;
      font-family:'Garamond';
      text-align: center;
  }
    .introduction {
        background-color: #679436;
        padding: 150px;
        font-size: 3vh;
        text-align:left;
        height:12vh;
    }
    #title{
    height: 250px;
    position : relative;
    }


    #title p {
        position : absolute;
        bottom: 0;
        font-size: 6vw;
        font-family: 'Arial Black';
    }

.thebody{
        padding-left:25vw;
        padding-bottom:1vh;
    }
  
    .supervisor {
  max-width: 100%; /* Set to 100% to occupy the full width */
  flex-basis: calc(33.33% - 20px);
  background-color: #ffffff;
  border-radius: 5px;
  padding: 20px;
  border: 2px solid green;
  margin-bottom: 50px;
  margin-right: 50px;
  overflow: hidden;
  
}

.supervisor img {
  display: block;
  margin: 0 auto;
  width: auto;
  height: auto;
  align-items: center;
  border-radius: 5px;
  margin-bottom: 10px;
}

.supervisor h3 {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
  text-align: center;
}

.supervisor p {
  font-size: 14px;
  margin-bottom: 0;
  color: black;
  white-space: pre-wrap; /* Allows line breaks within the text */
}


    .link{
        font-size: 3vh;
        margin-top:15%;
        font-family: 'Lato';
        left:3vw;        
        position: -webkit-sticky;
        position:fixed;
    
    }

    [id="Introducing the startup"]{
        border: solid #679436 5px;
        padding: 5%;
        margin-top: 10px;
        margin-bottom: 20px;
        background-color: white;
        border-radius: 50% 20% / 10% 40%;
        padding-bottom: 10%;

    }
    [id="The supervisor of the project"]{
        border: solid #679436 5px;
        padding: 5%;
        margin-top: 10px;
        margin-bottom: 20px;
        background-color: white;
        border-radius: 50% 40% / 10% 10% ;
        padding-bottom: 200px;

    }

    .imgtowrap {
        float: right;    
        margin: 0 15px 0 0;
        width:40%;
        height:auto;
        margin-left:15px;
    }
    .imgtowrapsupervisor {
        float: left;    
        margin: 0 15px 0 0;
        width:40%;
        height:auto;
        margin-left:15px;
    }

    h2{
        margin:0;
        opacity:1;
        margin-bottom: 3%;
        text-align: left;
        font-family: 'Garamond';
        font-size:xx-large;
        text-align: center;
        border-bottom: 2px solid transparent;
        border-image: linear-gradient(0.25turn,  rgba(255, 255, 255, 0), #679436, rgba(255, 255, 255, 0));
        border-image-slice: 1;
        width:100%;

    }


.flip-card {
    float:left;
  background-color: transparent;
  width:  31%;
  height:40%;
  perspective: 1000px;
  margin-bottom:35%;
  padding:auto;
  margin-right: 50px;
  
}

/* This container is needed to position the front and back side */
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;

}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: white;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}

/* Style the front side (fallback if image is missing) */
.flip-card-front {
  background-color: white;
  color: black;
  
}

/* Style the back side */
.flip-card-back {
  background-color: white;
  color: black;
  transform: rotateY(180deg);
}


</style>