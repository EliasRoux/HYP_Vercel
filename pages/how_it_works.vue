<!--
    How_it_works page
-->



<template>
  <main>
        <div class = introduction>
            <img src="~/assets/img/howitworks.png" alt="engrenage" class="howitworks-img"/>
              <div id = "title"><p>How it works</p></div>
        </div> 
    <ol class="breadcrumb">
         <li class="breadcrumb-item"> <NuxtLink to = "/how_it_works"><a>How it works</a></NuxtLink></li>
    </ol>
          <Overview class="overview" :sections="['Venture Capital','Our Story','Getting started', 'Financing steps','Managing expertise']"/>
          <Return class="return_top"/>


    <div class="thebody"> 

                <div id="Venture Capital">
                    <div class = "link"> 
                    <h2>Not familiar with VC ?</h2>
                         <NuxtLink to = "/introduction_VC"><TheButton color="#427AA1">Discover what is VC</TheButton></NuxtLink>
                    </div>  
                </div>
                <br><br>
                <h2 id="Our Story">Our Story</h2>
            <TimeLine></TimeLine>
                <br><br>
                <div id="Getting started">
                    <h2>Getting started</h2>
                    Startups interested in partnering with Ivy Ventures can begin the process by reaching out and expressing their interest. Whether through networking events, introductions, or direct inquiries, Ivy Ventures is <b>always open to exploring new opportunities</b>. Once the initial connection is established, a thorough evaluation process begins to assess the startup's potential for growth, market viability, and alignment with Ivy Ventures' investment focus.
                    <br><br><br>
                    <div class="link">                         
                        <NuxtLink to = "/contact"><TheButton color="#427AA1">Contact Us</TheButton></NuxtLink>
                    </div>
                </div>
                <br><br>
                    <div id="Financing steps">
                    <h2>Financing steps and strategies at a glance</h2>
                    <div class = "steps">
                        • <b>If the startup is deemed a suitable candidate for investment</b>, Ivy Ventures works closely with the founders to develop a financing strategy that aligns with the company's growth plans.
                          <br><br>
                        • This may involve <b>seed funding, early-stage investments, </b>or <b> subsequent funding rounds </b>as the startup progresses.
                          <br><br>
                        • Ivy Ventures also offers <b>guidance and support</b> in securing follow-on financing from other investors, leveraging its network and industry connections to facilitate the process.
                          <br>
                    </div> 
                    <div class = "link">
                        <NuxtLink to = "/projects"><TheButton color="#427AA1">See our projects</TheButton></NuxtLink>
                    </div>
                    <br><br>
                </div>
                <br>
                  <div id="Managing expertise">
                    <h2>Ivy's managing expertise</h2>
                    Ivy Ventures brings <b> more than just financial support</b> to its partners. The firm's experienced team provides <b>hands-on management expertise</b> and <b>strategic guidance </b>to help startups navigate various challenges. 
                    <br><br>This includes assistance in areas such as <i>business strategy, market positioning, operational efficiency, talent acquisition, and building a strong leadership team</i>. Ivy Ventures takes a collaborative approach, working closely with founders to identify opportunities, mitigate risks, and foster sustainable growth. Through active engagement and mentorship, Ivy Ventures aims to <b>empower startups</b> with the knowledge and resources needed to achieve their full potential.
                    <br><br><br><br>
                  </div>
                  
                </div>
            
             </main>
</template>



<style scoped>

.introduction {
        padding-top: 4vh;
        padding-bottom: 2%;
        font-size: 3vh;
        text-align:left;
        width:100%;
        background-color: #427AA1;
        opacity: 1;
        background-image:  repeating-radial-gradient( circle at 0 0, transparent 0, #427AA1 20px ), repeating-linear-gradient( #3b6d9055, #3b6d90 );
        text-shadow: black 0 0 10px;
    }

    .howitworks-img{
      width:23%;
      margin-left:70%;
      margin-top:10vh;
    }
   
#title{
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
        margin-left:3vw;
        padding-right:5vw;
        padding-left:20vw;
        padding-bottom:5vh;
        max-width: 80%;
        margin-top: -25%;
    }

.overview{
    margin-left: -150%;
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
        border-image: linear-gradient(0.25turn,  rgba(255, 255, 255, 0), #427AA1, rgba(255, 255, 255, 0));
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

.steps{
        border: solid #427AA1 5px;
        padding: 5%;
        margin-top: 5%;
        margin-bottom: 5%;
        background-color: white;
        border-radius: 50% 20% / 10% 40%;
        font-family: 'Arial';
        color:#427AA1;
}

.link{
    text-align: center;
}


</style>




