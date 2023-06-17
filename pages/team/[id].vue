<script setup>
    const route = useRoute()
    const id = route.params.id
    // useRuntimeConfig provide us with environment variables set up in the nuxtconfig file
    const { data: team } = await useFetch(useRuntimeConfig().baseURL + '/server/teams/' + id)
</script>


<template>
    <Overview class="overview" :sections="['Education','Job Experience','Main Expertise','Supervised Projects']"/>
    <NuxtLink to="/team" class="link"><TheButton color="#427AA1" textcolor="white">See the whole team</TheButton></NuxtLink>
   <main>
       <div class="employee">{{team.name}}</div>
       <div class="employee-role">{{ team.role }}</div>
       <div class="employee-image-container">
           <img style="max-width:40%;" :src="team.image"/>
       </div>

       <div id="Education">
           <div class="section">Education</div>
           {{ team.education }}
       </div>


       <div id ="Job Experience">
           <div class="section">Job Experience</div>
           {{ team.job_experience }}
       </div>


       <div id="Main Expertise">
           <div class="section">Main Expertise</div>
           {{ team.main_expertise }}
       </div>


       <div id="Supervised Projects">
           <div class="section">Supervised Projects</div>
           {{ team.name }} worked on many projects with Ivy Ventures, but in particular, {{ team.name }} supervised so far:
           <ul>
      <li v-for="(project, index) in team.projects_supervised.split(',')" :key="index">
        <NuxtLink :to="`/projects/${team.projects_id.split(',')[index]}`">{{ project }}</NuxtLink>
      </li>
    </ul>
       </div>
</main>


</template>

<style scoped>

main {
       display: block;
       margin-left:20%;
       padding-right:0;
       padding-bottom:5vh;
       max-width: 80%;
       margin-top: -10%;
   }
   .employee-image-container{
       display: flex;
       justify-content: center;
       align-items: center;
   }

   .employee{
       font-size: 8vw;
       font-family:'Garamond';
       text-align: center;
   }

   .employee-role {
    font-size:5vw;
    font-family:'Garamond';
    text-align: center;
   }

   .link{
       font-size: 3vh;
       margin-top:10%;
       font-family: 'Lato';
       left:3vw;        
       position: -webkit-sticky;
       position:fixed;
   
   }

   [id="Education"]{
       width:85%;
       margin-left:10%;
       margin-right: 5%;
   }
   [id="Job Experience"]{
       width:85%;
       margin-left:10%;
       margin-right: 5%;
   }
   [id="Main Expertise"]{
       width:85%;
       margin-left:10%;
       margin-right: 5%;
   }
   [id="Supervised Projects"]{
       width:85%;
       margin-left:10%;
       margin-right: 5%;
   }

   .section{
       margin:0;
       margin-bottom: 3%;
       margin-top: 5%;
       transition: opacity 1s ease;
       text-align: left;
       font-family: 'Garamond';
       font-size:xx-large;
       text-align: center;
       border-bottom: 2px solid transparent;
       border-image: linear-gradient(0.25turn,  rgba(255, 255, 255, 0), #679436, rgba(255, 255, 255, 0));
       border-image-slice: 1;
       width:100%;
       font-weight: bold;;
       z-index: 3;

   }
   .section::before {
   content: '─';
   margin-right: 0.6em;
   color: black;
}
   .section:after {
   content: '─';
   margin-left: 0.6em;
   color: black;
}


   </style>