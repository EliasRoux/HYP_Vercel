<!--
        Top 5 page
-->
<script setup>
  definePageMeta({
    layout: 'default'
  })

  const { data: projects } = await useFetch(useRuntimeConfig().baseURL + '/server/projects')

</script>

<template>
  
    
    <div class = introduction>
        <div id = "title"><p>Our top 5 projects </p></div>
    </div>
  
  
  <main>
  <ol class="breadcrumb">
         <li class="breadcrumb-item"> <NuxtLink to = "/projects"><a>Projects</a></NuxtLink></li>
         <li class="breadcrumb-item"> <NuxtLink to = "/projects/top5projects"><a>Top 5 projects</a></NuxtLink></li>
  </ol>
  
  <Overview class="overview" :sections="['What are this projects about', 'Projects by area', 'Our top 5 projects']"/>
  <Return></Return>

          <div class="thebody">
          <div class ="block" id="What are this projects about">
          <h2>What are this projects about?</h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer elementum ipsum ipsum, at ornare eros bibendum auctor. Cras in massa id nunc pharetra accumsan at eu lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi odio metus, finibus in efficitur sit amet, vulputate et erat. Suspendisse potenti. Nam et nunc non lectus luctus fermentum sed in tellus. Vestibulum ut elit mauris. Praesent consequat placerat arcu vitae lacinia. Vestibulum luctus purus vel metus aliquam, ac tincidunt metus facilisis. Suspendisse a urna egestas, convallis erat eget, mollis felis. Quisque vitae ipsum lobortis, laoreet tortor id, maximus leo. In commodo aliquet mauris, ut hendrerit purus facilisis nec.
          </div>     
          
          <br>
          <br>


          <div class ="block" id="Projects by area">
          <div class = "buttons">
          <NuxtLink to = "/areas/projectsbyarea/"><TheButton color = "#679436">Projects by area</TheButton></NuxtLink>
          </div>
          </div>

          <br>
          <br>

          <h2>Our top 5 projects</h2>
          <div class ="block" id="Our top 5 projects">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer elementum ipsum ipsum, at ornare eros bibendum auctor. Cras in massa id nunc pharetra accumsan at eu lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi odio metus, finibus in efficitur sit amet, vulputate et erat. Suspendisse potenti. Nam et nunc non lectus luctus fermentum sed in tellus. Vestibulum ut elit mauris. Praesent consequat placerat arcu vitae lacinia. Vestibulum luctus purus vel metus aliquam, ac tincidunt metus facilisis. Suspendisse a urna egestas, convallis erat eget, mollis felis. Quisque vitae ipsum lobortis, laoreet tortor id, maximus leo. In commodo aliquet mauris, ut hendrerit purus facilisis nec.
  
            
          <br><br>
          
  
          
          <div class="projects">
          <div v-for="project of projects" :key=index>
            <div v-if="project.isTop5 == true">
              
            <a class="project" :href="`/projects/${project.id}`" >
              <h3>{{project.project_name}}</h3>
              <br>
              <img src='~assets/img/1-logo.png'  alt="Project Image">
              <!--<img :src="`${project.product_service_name}`"  alt="Project Image">-->
              <!--<img src='{{project.product_service_name}}' alt="Project Image" />-->
              <p>
            </p>
            </a>
            </div>
          </div>
        </div>

        
  
  
        
        
        
  </div>
        
    </div>
    </main>
  </template>
  
  

  <style scoped>
  .introduction {
          padding-top:6%;
          font-size: 3vh;
          text-align:left;
          padding-bottom: 2%;
          width:100%;
          height: 40vh;
          background-color: #679436;
          opacity: 1;
          background-image:  repeating-radial-gradient( circle at 0 0, transparent 0, #679436 20px ), repeating-linear-gradient( #a2eb596e, #679436 );
          text-shadow: black 0 0 10px;
      }
  
  #title{
      height: 250px;
      position : relative;
      margin-left:5%;
  }
  
  
  #title p {
      position : absolute;
      bottom: 0;
      font-size: 6vw;
      font-family: 'Arial Black';
  }
  
  .thebody{
      padding-left:25vw;
      padding-right:5vw;
      padding-bottom:1vh;
      max-width: 80%;
      margin-top: -275px;
  }
.overview{
margin-left: -150%;
}
  
  

      /* Projects container */
.projects {
display: flex;
flex-wrap: wrap;
justify-content: flex-start;
margin-top: 40px;
}


.project {
  max-width: 18rem; /* Adjust the value as needed */
  flex-basis: calc(33.33% - 50px);
  background-color: #ffffff;
  border-radius: 5px;
  padding: 0px;
  border: 2px solid green;
  margin-bottom: 40px;
  margin-right: 40px;
  overflow: hidden;
  width: 500px;
}


.project img {
  display: block;
  margin: 0 auto;
  width: -webkit-fill-available;
  height: auto;
  margin-right: 20px;
  margin-left: 20px;
  align-items: center;
  border-radius: 5px;
  margin-bottom: 20px;
  
}


.project h3 {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
  text-align: center;
}

.project p {
  font-size: 14px;
  margin-bottom: 0;
  color: black;
  white-space: pre-wrap; /* Allows line breaks within the text */
}



.search-container {
display: flex;
align-items: center;
background-color: #f2f2f2;
border-radius: 4px;
padding: 6px 10px;
width: auto; /* Adjust the width as needed */
}

.search-input {
flex-grow: 1;
border: none;
background-color: transparent;
font-size: 16px;
padding: 4px;
outline: none;
width: 100%;
}

.search-input::placeholder {
color: #888888;
}
.search-input:focus {
box-shadow: 0 0 3px rgba(66, 133, 244, 0.5);
}

/* Additional styles to mimic Google's search bar */
.search-container:hover {
box-shadow: 0 0 3px rgba(66, 133, 244, 0.3);
}

.search-container:focus-within {
box-shadow: 0 0 3px rgba(66, 133, 244, 0.5);
background-color: white;
}


.buttons{
display: flex;
justify-content: center;
align-items: center;
position: relative;
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

</style>

