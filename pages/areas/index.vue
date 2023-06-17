<!--
    Areas page
-->

<script setup>
    const { data: area } = await useFetch(useRuntimeConfig().baseURL + '/server/area')
</script>




<template>
    <main>
            <div class = introduction>
                <div id = "title"><p>Areas</p> </div>
            </div>
    <Breadcrumbs class="Breadcrumb" :sections="['Areas']"/>
    <Overview class="overview" :sections="['Health','Transport','Environment','Projects']"/>
    <Return class="return_top"/>

    <div class="thebody"> 
                <div id="Health">
                    <h2>Health is so precious!</h2>
                    <br><br>
                    <div class = rectangle_health>
                        <br>
                            <div id = content1 style="float: left">
                                <NuxtLink to = "/areas/health"><img id = "presentation" src="~/assets/img/health.jpg"></NuxtLink>
                            </div>
                            <div id = content >
                                {{ area[0].intro }}  
                                <div class="button-center"><NuxtLink to = "/areas/health"><TheButton color="#20394b">View more</TheButton></NuxtLink></div>
                            </div>
                    </div>
                </div>
                <br><br><br><br><br>
                <div id="Transport">
                    <h2>Invest in the transport of the future!</h2>
                    <br><br>
                    <div class = rectangle_transport>
                            <div id = content style="float: right">
                                <NuxtLink to = "/areas/transport"><img id = "presentation" src="~/assets/img/transport.png"></NuxtLink>
                            </div>
                            <div id = content >
                                {{ area[1].intro }}
                                <div class="button-center"><NuxtLink to = "/areas/transport"><TheButton color="#20394b">View more</TheButton></NuxtLink></div>
                            </div>
                    </div>
                </div>
                <br><br><br><br><br>
                    <div id="Environment">
                    <h2>Help construct the world of tomorrow!</h2>
                    <br><br>
                    <div class = rectangle_ecolo>
                        <br>
                            <div id = content style="float: left">
                                <NuxtLink to = "/areas/environment"><img id = "presentation" src="~/assets/img/ecolo.jpg"></NuxtLink>
                            </div>
                            <div id = content >
                                {{ area[2].intro }}
                                <div class="button-center"><NuxtLink to = "/areas/environment"><TheButton color="#20394b">View more</TheButton></NuxtLink></div>
                                </div>
                            </div>                    
                        </div>
                   
                    
                         <br><br><br>
                    <div id="Projects">
                        <h2>Projects</h2>
                        <br>
                        <div class="button-center"><NuxtLink to = "/areas/projects_by_area"><TheButton color="#20394b">Projects by area</TheButton></NuxtLink></div>
                        <br>
                      <div class = "button-center" >
                        <div style="float: left">
                        <br>
                        Do you have a project in one of these areas that you are looking to fund?&emsp; 
                        </div>
                        <div>
                            <NuxtLink to = "/contact"><TheButton color="#20394b">Contact us</TheButton></NuxtLink>
                        </div>
                       <br><br><br><br><br><br>
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
    position : absolute;
    margin-left: 5%;
}


#title p {
    position : absolute;
    bottom: 0;
    font-size: 6vw;
    font-family: 'Arial Black';
    white-space: nowrap;
}


.thebody{
        padding-left:25vw;
        padding-right:5vw;
        padding-bottom:1vh;
        max-width: 80%;
        margin-top: -17%;
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
    padding-left:2vw;
    padding-right:2vw;
}


#content1{
    margin-top: -4vw;
    padding-top: 5vw;  
    padding-left:2vw;
    padding-right:2vw;
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

.button-center{
        display: flex;
        justify-content: center;
        margin-top: 3%;
    }

</style>





