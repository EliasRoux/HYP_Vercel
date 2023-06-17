<!--
    EMPLOYEE GROUP PAGE
-->

<script setup>
import { ref } from 'vue';

// Assuming 'team' is the data received from the API/database
const team = ref([]);

// Fetch the team data from the API/database
// Replace this with your actual code to fetch the team data
fetchTeamData();

async function fetchTeamData() {
  // Simulating API call
  const response = await fetch(useRuntimeConfig().baseURL + '/server/teams');
  const data = await response.json();
  
  // Assign the fetched data to the 'team' variable
  team.value = data;
}
</script>


<template>
    <main class="main-team">
      <img src="~/assets/img/handshake.png" alt="handshake" class="handshake-img"/>
    <div class="image-container2">
        <div class="overlay"> Our team</div>
    </div>
    </main>

    <Overview class="overview" :sections="['THE TEAM', 'Members']"/>
    <Return class="return_top"/>

    <div class="thebody"> 
        <h2 id="THE TEAM">THE TEAM</h2>
        At Ivy Ventures, our success is driven by our exceptional team of professionals who bring a wealth of experience, expertise, and passion to the world of venture capital. With a diverse range of backgrounds and skills, our team is dedicated to supporting innovative startups in various areas. By combining deep industry knowledge, strategic insights, and a collaborative approach, we strive to make a meaningful impact on the businesses we partner with. Each member of our team brings a unique perspective and skill set that we have every intention to share with our partners. You can find out more about each member of our team by clicking the button below!

<h2> Members</h2>
<div class="flip-card" v-for="member in team" :key="member.id">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <img v-bind:src="member.image" alt="Avatar" style="width:300px;height:300px;">
      </div>
      <div class="flip-card-back">
        <div class="content">
          <h1>{{ member.name }}</h1>
          <p>{{ member.role }}</p>
          <NuxtLink :to="'/team/' + member.id"><TheButton color="#679436">See Profile</TheButton></NuxtLink>
        </div>
      </div>
    </div>
  </div>



</div>
</template>


<style scoped>
    .main-team {
        padding-bottom: 2%;
        background-color: #679436;
        background-image:  repeating-radial-gradient( circle at 0 0, transparent 0, #679436 20px ), repeating-linear-gradient( #a2eb596e, #679436 );
        margin-bottom: 20vh;
        padding-top:4%
    }


    .handshake-img{
      height:auto;
      width:45%;
      margin-left:55%;
      margin-top:2vh
    }
    .thebody{
        padding-left:25vw;
        padding-right:5vw;
        padding-bottom:5vh;
        max-width: 80%;
        margin-top: -15%;
    }

    .overview {
        margin-top: -8%;
    }
    .image-container2 {
        position: relative;
        display: inline-block;
        z-index: 2;
        background-size: contain;
        background-color: #679436;
    }
    .overlay {
        position: absolute;
        top: 35vh;
        margin:10%;
        width: 100%;
        right:90vw;
        height: 100%;
        color: white;
        padding: 0px;
        white-space: nowrap;
        margin-top:-350px;
        display: flex;
        align-items:center;
        text-align: center;
        font-size: 7vw;
        font-family: 'Arial Black';
        font-weight: bold;
        text-shadow: white 0 0 10px;
    }


    h2{
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
        z-index: 3;

    }
    h2::before {
	content: '─';
	margin-right: 0.6em;
	color: black;
}
    h2:after {
	content: '─';
	margin-left: 0.6em;
	color: black;
}
    h2.show{
        opacity:1;
    }

.flip-card {
    float:left;
  background-color: transparent;
  width:  31%;
  height:40%;
  perspective: 1000px;
  margin-bottom:35%;
  padding:auto;
  
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

p{
    color:black;
}

h1{
    color:black;
    text-align: center;
}

.content{
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
    padding:9%;
    background-color: white;
}
</style>