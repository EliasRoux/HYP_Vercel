<!--
    Home page
-->
<template>
    <main>
    <div class="image-container1">
        <img style="width:100%" src="~/assets/img/background_home.webp" alt="Image accueil"/>
            <div class="overlay">
                <div class="slogan">Growing together with <br> <span class="hltxt" style="color:#679436">Ivy</span></div>
            </div>
    </div>
    </main>

    <Overview class="overview" :sections="['Key Numbers', 'Join Ivy', 'The Team', 'Main Areas', 'Projects', 'Join the Adventure']"></Overview>
    <Return class="return_top"/>

    <div class="thebody">

        <div class="catchphrase">Cultivating success through <span class="hltxt" style="color:#679436">strategic investments</span></div>

        <div id = "Key Numbers">
            <h2 :class="{ show: textvisible }">IVY in numbers</h2>
            <div class="my-grid" :class="{ show: showGrid }">
                <div class="my-grid-item">
                    <div class="highlights">1st</div>
                        Impact investing firm worldwide
                </div>
                <div class="my-grid-item"> 
                    <div class="highlights">30</div>
                Successful businesses supported</div>
                <div class="my-grid-item">
                        <div class="highlights">500M</div> Invested so far</div>
            </div>
        </div>
            <div class ="block" id="Join Ivy">
                <h2 id="joinivy">Join Ivy</h2>
                <img class="imgtowrap" src="~/assets/img/joinus.webp "/>
                At Ivy Ventures, we believe in a transparent and collaborative approach to building partnerships. Startups interested in partnering with us can initiate the process by reaching out to our team. We encourage entrepreneurs to connect with us through networking events, introductions, or by directly submitting their proposals. We are always excited to explore innovative ideas and engage with passionate founders who are determined to make a difference. Find out how to join us by clicking the button below! <div class="button-center"><NuxtLink to = "/how_it_works"><TheButton color="#20394b">How it works</TheButton></NuxtLink></div></div>

        <div class = "block" id="The Team">
                <h2 id ="team-areas">The Team</h2>
                <img style="width:100%;margin-bottom: 2%;" src="~/assets/img/team.jpeg"/>
            <div>At Ivy Ventures, our success is driven by our exceptional team of professionals who bring a wealth of experience, expertise, and passion to the world of venture capital. With a diverse range of backgrounds and skills, our team is dedicated to supporting innovative startups in various areas. By combining deep industry knowledge, strategic insights, and a collaborative approach, we strive to make a meaningful impact on the businesses we partner with. Each member of our team brings a unique perspective and skill set that we have every intention to share with our partners. You can find out more about each member of our team by clicking the button below! <div class="button-center"> <NuxtLink to = "/team"><TheButton color="black">Meet our Team</TheButton></NuxtLink></div></div> </div>

        <div class = "block" id="Main Areas">
                <div class="areas">
                    <p><h2 id="team-areas">Main Areas </h2><div class="button-center"> <NuxtLink to = "/area"><TheButton color="#000000">See Areas</TheButton ></NuxtLink></div></p>
                    <div class="delimiter"></div>
                    <table>
                        <tr>
                            <td style="background-color: #EBF2FA;"><NuxtLink to = "/areas_water"><TheButton color="#EBF2FA">Health</TheButton></NuxtLink></td>
                            <td style="background-color: #427AA1;"><NuxtLink to = "/areas_transport"><TheButton color="#427AA1">Transport</TheButton></NuxtLink></td>
                        </tr>
                        <tr>
                            <td style="background-color: #679436;"><NuxtLink to = "/areas_ecolo"><TheButton color="#679436">Ecology</TheButton></NuxtLink></td>
                            <td>& more!</td>
                        </tr>
                    </table>
                    </div>
</div> 

        <div class= "block" id="Projects">
                <h2>Projects</h2>
                <div style="text-align:center">Here are a few projects we worked on:</div>
                 <br><br>
                <div class = "carousel"><HomeCarousel></HomeCarousel></div>
                
                At Ivy Ventures, we take immense pride in the exceptional projects and startups we have nurtured throughout our journey. Our investment focus around the environment, means of transportation, and health has allowed us to support groundbreaking ventures that are driving innovation, sustainability, and social impact. From clean energy solutions to revolutionary transportation technologies and life-saving healthcare innovations, our portfolio reflects our commitment to making a difference in these critical sectors. You can find out more about each project we supported by clicking the button below!<div class="button-center"><NuxtLink to = "/projects"><TheButton color="#679436">See our projects</TheButton></NuxtLink></div></div>

        <div class = "block" id="Join the Adventure">
                <h2 :class="{ show: textvisible }">Join the ad<i>venture</i></h2>
         Need someone to invest in your idea?<div class="button-center"> <NuxtLink to = "/contact"><TheButton color="#679436">Join Ivy!</TheButton></NuxtLink></div> </div>
    </div>
</template>



<script>
import Overview from "@/components/Overview.vue";

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

    components: {
        Overview,
    }
  };
</script>


<style scoped>

    .thebody{
        padding-left:25vw;
        padding-right:5vw;
        padding-bottom:5vh;
        max-width: 80%;
        margin-top: -30%;
    }
    .slogan {
        font-size: 7vw;
        font-family: 'Arial Black';
        text-align: center;
        width:95%;
        margin:  auto;
        margin-top:15vh;

    }

    .hltxt  {
        transition:0.5s;
        color:white
    }

    .hltxt:hover{
        text-shadow: #679436 0 0 10px;
        transition:0.5s
    }

    .image-container1 {
        position: relative;
        display: inline-block;
        z-index: 2;
    }

    .image-container1:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 15%;
        background-image: linear-gradient(to bottom, rgb(255, 255, 255,0), rgb(235, 250, 238,0.7), #ebfaee 95%)
    }

    .overlay {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);
        color: #fff;
        padding: 0px;
        box-sizing: border-box;
    }
    
    .catchphrase{
        font-family:'Arial';
        display:inline-block;
        position:absolute;
        text-align: center;
        font-size:3vw;
        color:black;
        font-weight: bold;
        margin:auto;
        margin: 0;
        line-height: 1.5;
        max-width:100vw;
    }

    p {
        padding:10%;
        padding-bottom: 0;
    }

    td {
        text-align: center;
    }
    .my-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(1, 100px);
        /*gap: 5vh;*/
        opacity: 0;
        transition: opacity 1s ease;
        margin:0;
    }
    .my-grid.show {
        opacity: 1;
    }
    .my-grid-item {
        padding: 20px;
        font-size: 3vh;
        text-align: center;
        height:10vh;
        transition: 0.5s;
        border-image: linear-gradient(to bottom, white, #679436, white) 1 100%;
        border-right: 1.5%;
        border-left: 0;
        border-style: solid;
        overflow: hidden;

    }
    .my-grid-item:last-child {
	border-right: 0;
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

    h2#joinivy{
        border-image: linear-gradient(0.25turn,  rgba(255, 255, 255, 0), #20394b, rgba(255, 255, 255, 0));
        margin:0;
        opacity: 1;
        margin-bottom: 3%;
        text-align: left;
        font-family: 'Garamond';
        font-size:xx-large;
        text-align: center;
        border-bottom: 2px solid transparent;
        border-image-slice: 1;
        width:100%;
    }

    h2#team-areas{
        border-image: linear-gradient(0.25turn,  rgba(255, 255, 255, 0), black, rgba(255, 255, 255, 0));
        margin:0;
        opacity: 1;
        margin-bottom: 3%;
        text-align: left;
        font-family: 'Garamond';
        font-size:xx-large;
        text-align: center;
        border-bottom: 2px solid transparent;
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
    h2.show{
        opacity:1;
    }

    .highlights{
        font-weight:lighter;
        color:#679436;
        font-family: 'Garamond';
        font-weight: bold;
        font-size: 5vh;
    }

    .block {
        margin-top: 8%;
        margin-bottom: 2%;
    }

    .button-center{
        display: flex;
        justify-content: center;
        margin-top: 3%;
    }

    [id = "Key Numbers"]{
        border: solid #679436 5px;
        padding: 5%;
        margin-top: 10%;
        margin-bottom: 10%;
        background-color: white;
        border-radius: 50% 20% / 10% 40%;
    }
    [id = 'Join Ivy']{
        background-color: #427AA1;
        padding:5%;
        border-radius: 3%;
        border: solid #20394b 2px;
        text-align: justify;
    }

    [id='Main Areas']{
        background-color: #fff;
        border: solid black 2px;
        text-align: center;
    }

    [id="The Team"]{
        background-color: #679436;
        border: solid black 2px;
        padding: 5%;
        border-radius: 3%;
        text-align: justify;
    }

    [id="Join the Adventure"]{
        border: solid #679436 5px;
        padding: 5%;
        margin-top: 10%;
        margin-bottom: 10%;
        background-color: white;
        border-radius: 50% 20% / 10% 40%;
    }

    .imgtowrap {
        float: left;    
        margin: 0 15px 0 0;
        width:40%;
        height:auto;
    }

    .button-center{
        justify-content: center;
    }

    .areas {
  display: flex;
  align-items: center;
}

.areas p {
  flex: 1;
  color:black;
  font-size: 5vh;
  text-align: center;
  margin-top:0;
  padding-top:3%
}
.delimiter {
  width: 2px;
  height: 15vh;
  background-image: linear-gradient(0.5turn,  rgba(255, 255, 255, 0), black, rgba(255, 255, 255, 0));
  margin-right: 10px;
}

.areas table {
  flex: 1;
  margin-left: 20px;
  border-collapse: collapse;
  margin-right: 3%;
}

td {
  border: 1px solid rgba(0, 0, 0, 0);
  padding: 2%;
  font-size: x-large;
  border-radius: 4px;

}

.carousel{
    text-align: center;
}
.areas a {
    color:black;
    transition:0.5s
}

.areas a:hover {
    color: #000;;
    text-shadow: black 0 0 10px;
    transition:0.5s;
}
</style>
