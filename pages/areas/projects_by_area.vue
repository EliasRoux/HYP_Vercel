<!--
    Projects by area
-->


<template>
    <main>
            <div class = introduction>
                <div id = "title"><p>Projects by Area</p> </div>
            </div>

    <ol class="breadcrumb">
         <li class="breadcrumb-item"> <NuxtLink to = "/areas"><a>Areas</a></NuxtLink></li>
         <li class="breadcrumb-item"> <NuxtLink to = "/areas/projects_by_area"><a>Projects by Area</a></NuxtLink></li>
    </ol>
    <Overview class="overview" :sections="['All projects','Health','Transport','Environment']"/>
    <Return class="return_top"/>

    <div class="thebody"> 
                    <div id="All projects">
                        <h2>Projects</h2>
                        <div class="button-center"><NuxtLink to = "/areas"><TheButton color="#20394b">See all Areas</TheButton></NuxtLink></div>
                        <div class="button-center"><NuxtLink to = "/projects"><TheButton color="#20394b">See all projects</TheButton></NuxtLink></div>
                    </div>
                <br><br><br>
                <div id="Health">
                    <h2>Health is so precious!</h2>
                    <br><br>
                    <div class = rectangle_health>
                        <br>
                            <div id = content style="float: left">
                                <NuxtLink to = "/areas/health"><img id = "presentation" src="~/assets/img/health.jpg"></NuxtLink>
                            </div>
                            <br><br><br><br>
                            <div class="button-center"><NuxtLink to = "/projects"><TheButton color="#20394b">View our health related projects</TheButton></NuxtLink></div>
                    </div>
                </div>
                <br><br><br><br><br>
                <div id="Transport">
                    <h2>Invest in the transport of the future!</h2>
                    <br><br>
                    <div class = rectangle_transport>
                        <br>
                            <div id = content style="float: right">
                                <NuxtLink to = "/areas/transport"><img id = "presentation" src="~/assets/img/transport.png"></NuxtLink>
                            </div>                
                            <br><br><br><br>        
                            <div class="button-center"><NuxtLink to = "/projects"><TheButton color="#20394b">View our projects related to means of tranport</TheButton></NuxtLink></div>
                    </div>
                </div>
                <br><br><br><br><br>
                    <div id="Environment">
                    <h2>Help construct the world of tomorrow!</h2>
                    <br><br>
                    <div class = rectangle_ecolo>
                        <br>
                            <div id = content style="float: left">
                                <NuxtLink to = "/areas/environment"><img id = "presentation" src="~/assets/img/ecolo.jpg" ></NuxtLink>
                            </div>
                            <br><br><br><br>
                            <div class="button-center"><NuxtLink to = "/projects"><TheButton color="#20394b">View our ecological projects</TheButton></NuxtLink></div>
                            </div>   
                            </div>           
                         <br><br><br><br>
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
        margin-top: -17%;
    }

.areas ul{
    width: 150px;
}
.areas {
       text-align: center;
    }

    .rectangle_health{
    border-radius: 10px;
	width:auto;
	height:30vw;
	background:#EBF2FA;
    border: solid 0.2vw #EBF2FA;
    position : relative;
    margin-left :3vw;
    margin-right :3vw;
}

.rectangle_transport{
    border-radius: 10px;
	width:auto;
	height:30vw;
	background:#427AA1;
    border: solid 0.2vw #427AA1;
    position : relative;
    margin-left :3vw;
    margin-right :3vw;
}
.rectangle_ecolo{
    border-radius: 10px;
	width:auto;
	height:30vw;
	background:#679436;
    border: solid 0.2vw #679436;
    position : relative;
    margin-left :3vw;
    margin-right :3vw;
}

#content{
    padding-top: 5vw;  
    padding-left:3vw;
    padding-right:3vw;
}


#presentation{
    height:15vw;
    width : 20vw;

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

.link{
    text-align: center;
    justify-content: center;
    display: flex;
}

.button-center{
        display: flex;
        justify-content: center;
        margin-top: 3%;
        vertical-align: middle;
    }

</style>





