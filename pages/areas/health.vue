<!--
    Areas Water
-->

<script setup>
    const { data: area } = await useFetch(useRuntimeConfig().baseURL + '/server/area')
</script>


<template>
    <main>
    <div class="image">
                <div id="slogan">Health is so precious</div>
    </div>

  <ol class="breadcrumb">
         <li class="breadcrumb-item"> <NuxtLink to = "/areas"><a>Areas</a></NuxtLink></li>
         <li class="breadcrumb-item"> <NuxtLink to = "/areas/health"><a>Health</a></NuxtLink></li>
  </ol>
  <Overview class="overview" :sections="['Summary','A few number','Projects']"/>
  <Return class="return_top"/>

  <div class="thebody">

    <div id="Summary">

    <h2 :class="{show: textvisible}">Summary</h2>
    <br><br>
    {{ area[0].short_summary }}
    <br><br>
    {{ area[0].summary}}
   <br><br><br><br>
    </div>
    <div id="A few number">
    <h2 :class="{show: textvisible}">A few number</h2>
    <br>
      <div class="my-container">
          <div class="my-grid" :class="{ show: showGrid }">  
              <div id="circle_1" align = center><br><br><br><br><br>????????????????????</div>
              <div></div>
              <div id="circle_2" align = center><br><br><br>????????????<br>??????????????</div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>      
              <div id="circle_3" align = center><br><br><br><br><br><br>?????????<br>????????????<br>?????????????? </div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
          </div>
      </div>
    </div>
    <div id="Projects">
      <h2 :class="{show: textvisible}">Projects</h2>
      <br><br>
        <div class = "carousel"  style="float: center">
          <input type="radio" name="position" />
          <input type="radio" name="position" checked />
          <input type="radio" name="position" />
          <proj id="carousel">
            <div class="item">
              <NuxtLink to = "/projects/5"><img class="image_test" src="~/assets/img/BioGenetics.png" height="200" width="240"></NuxtLink>
              <div class="image-description" align = "center"><NuxtLink to = "/projects/5">BioGenetics</NuxtLink></div>
            </div>
            <div class="item">
              <NuxtLink to = "/projects/3"><img class="image_test" src="~/assets/img/MedTech.png" height="200" width="240"></NuxtLink>
              <div class="image-description" align = "center"><NuxtLink to = "/projects/3">MedTech</NuxtLink></div>
            </div>
            <div class="item">
                <br><br><br><br>
                <div class="button-right"><NuxtLink to = "/projects"><TheButton color=red>See all projects <br>in this area</TheButton></NuxtLink></div>
         </div>
          </proj>
      </div>
      <div >
        <div class="button-center"><NuxtLink to = "/areas"><TheButton color="#20394b">See all areas</TheButton></NuxtLink></div>
      <br><br>
      </div>
      </div>
    </div>
</main>
</template>



<script>
export default {
    data() {
      return {
        showGrid: false,
        textvisible: false,
      };
    },
    mounted() {
      window.addEventListener("scroll", this.handleScroll);
    },
    destroyed() {
      window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
      handleScroll() {
        const grid = document.querySelector(".my-grid");
        const gridPos = grid.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        const txt = document.querySelector("h2");
        const txtPos = txt.getBoundingClientRect().top;

        if (gridPos < screenHeight * 0.8) {
          this.showGrid = true;
        }

        if (txtPos < screenHeight * 0.8){
            this.textvisible = true;
        }
      },
    },
  };

</script>



<style scoped>
 .image {
    padding: 7vw;
    font-size: 3vh;
    background-image:url(~/assets/img/area_health.jpg);
    background-repeat: no-repeat;
    background-size: 100% 100%;
}

.image:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 15%; 
    }


    
#slogan{
      position : relative;
      font-size: 5vw;
      font-family: 'Arial Black';
      color:black;
      text-align: center;
}


      .thebody{
          padding-left:25vw;
          padding-right:5vw;
          padding-bottom:5vh;
          max-width: 80%;
          margin-top: -20%;
      }

      #circle_1{
          background:#EBF2FA;
          border-radius:50%;
          width:23vw;
          height:23vw;
          border:2px solid #679436; 
          color: black;
          font-family: 'Arial Black';
        }

      #circle_2{
          background:#EBF2FA;
          border-radius:50%;
          width:16vw;
          height:16vw;
          border:2px solid #679436; 
          color: black;
          font-family: 'Arial Black';
        }

        
      #circle_3{
          background:#EBF2FA;
          border-radius:50%;
          width:25vw;
          height:25vw;
          border:2px solid #679436; 
          color: black;
          font-family: 'Arial Black';
        }

      .my-container {
          padding-bottom:10%;
      }
      .my-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(3, 50px);
          gap: 5vh;
          opacity: 0;
          transition: opacity 1s ease;
          margin:0;
      }
      .my-grid.show {
          opacity: 1;
      }


      #content{
          border-radius: 10px;
          background:#EBF2FA;
          width:220px;
          height:300px;
          border:2px solid #679436; 
          color: white;
        }

      h2{
        margin:0;
        margin-bottom: 3%;
        transition: opacity 1s ease;
        text-align: left;
        font-family: 'Garamond';
        font-size:xx-large;
        text-align: center;
        border-bottom: 2px solid transparent;
        border-image: linear-gradient(0.25turn,  rgba(255, 255, 255, 0), #679436, rgba(255, 255, 255, 0));
        border-image-slice: 1;
        width:100%;

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


.carousel {
  height: 400px;
  margin-right: 10px;
  display: grid;
  grid-template-rows: 300px 100px;
  grid-template-columns: 1fr 20px 20px 20px 20px 20px 1fr;
  align-items: center;
  justify-items: center;
  position:relative;
  margin-left :3vw;
  margin-right :3vw;
}



proj#carousel {
  grid-row: 1 / 2;
  grid-column: 1 / 8;
  width: 60vw;
  height: 40vw;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transform-style: preserve-3d;
  perspective: 500px;
  --items: 3;
  --middle: 3;
  --position: 1;
  pointer-events:none;
}

div.item {
  position: absolute;
  border-radius: 10px;
  width: 300px;
  height: 300px;
  --r: calc(var(--position) - var(--offset));
  --abs: max(calc(var(--r) * -1), var(--r));
  transition: all 0.25s linear;
  transform: rotateY(calc(-20deg * var(--r)))
    translateX(calc(-200px * var(--r)));
  z-index: calc((var(--position) - var(--abs)));
  pointer-events:all;
}

div.item:nth-of-type(1) {
  --offset: 1;
  background-color: #EBF2FA;
}
div.item:nth-of-type(2) {
  --offset: 2;
  background-color: #EBF2FA;
}
div.item:nth-of-type(3) {
  --offset: 3;
  opacity: 0.6;
  background-color: #EBF2FA;
}
input:nth-of-type(1) {
  grid-column: 3 / 3;
  grid-row: 2 / 3;
}
input:nth-of-type(1):checked ~ proj#carousel {
  --position: 1;
}

input:nth-of-type(2) {
  grid-column: 4/ 4;
  grid-row: 2 / 3;
}
input:nth-of-type(2):checked ~ proj#carousel {
  --position: 2;
}

input:nth-of-type(3) {
  grid-column: 5 /5;
  grid-row: 2 / 3;
}
input:nth-of-type(3):checked ~ proj#carousel {
  --position: 3;
}



.image_test{
  margin-top: 20%;
  margin-left: 10%;
  margin-right: 10%;
}


.image-description {
  position: absolute;
  width:100%;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.258);
}

.button-right{
        display: flex;
        justify-content: right;
        margin-right:2vw;
    }

.button-center{
        display: flex;
        justify-content: center;
        margin-top: 3%;
        vertical-align: middle;
   }

</style>
