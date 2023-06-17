<!--
    Introduction to VC 
-->



<template>
    <main>
            <div class = introduction>
                <img src="~/assets/img/howitworks.png" alt="engrenage" class="howitworks-img"/>
                <div id = "title"><p>Introduction to VC</p></div>
            </div> 
            
    <ol class="breadcrumb">
         <li class="breadcrumb-item"> <NuxtLink to = "/how_it_works"><a>How it works</a></NuxtLink></li>
         <li class="breadcrumb-item"> <NuxtLink to = "/introduction_VC"><a>Introduction to VC</a></NuxtLink></li>
    </ol>
        <Overview class="overview" :sections="['The goal of VC firms','What it brings to the table','Why choose Ivy Ventures ?']"/>
        <Return class="return_top"/>
  
  
      <div class="thebody"> 
                  <div id="The goal of VC firms">
                      <h2>The goal of VC firms</h2>
                      The primary goal of <b>Venture Capital</b> (VC) firms is to provide financial support, mentorship, and strategic guidance to early-stage and high-potential startups. 
                      <p>VC firms invest in these startups with the aim of helping them grow and scale their businesses. By injecting capital, expertise, and industry connections, VC firms play a vital role in <b>fueling innovation </b>, <b>fostering entrepreneurship</b>, and <b>driving economic growth.</b></p>
                      <div id = "hand">
                           <img src="~/assets/img/hand_shake.png" height="200" width="200">
                      </div>
                  </div>
                  <br>
                  <div id="What it brings to the table">
                      <h2>What VC firms bring to the table</h2>
                      Venture Capital firms bring more than just financial backing to the startups they support. 
                      <p>They provide a <b>wealth of resources and expertise </b>, including access to a vast network of industry professionals, market insights, and strategic advice. VC firms often have a <b>deep understanding</b> of the challenges faced by startups and can provide guidance in areas such as business development, marketing, operations, and recruitment. </p>
                      <p>Additionally, they offer <b>mentorship</b> and <b>support</b> to help entrepreneurs navigate the complexities of building and scaling a successful business.</p>
                  </div>
                  <br>
                  <div id="Why choose Ivy Ventures ?">
                      <h2>Why choose Ivy Ventures ?</h2>
                      <p><span style="color:#679436; font-family:'Arial Black'">Ivy</span> <span style="font-family:'Arial Black'">Ventures</span> distinguishes itself among other Venture Capital firms through its <b>specialized focus</b> on three key areas: the <b>environment</b>, <b>means of transportation</b>, and <b>health</b>. </p>
                      <p>By concentrating its investments and resources in these domains, Ivy Ventures has developed a <b>deep understanding of the challenges, opportunities, and emerging trends</b> within each sector. This sector-focused approach allows Ivy Ventures to provide <b>tailored support and expertise</b> to startups operating in these areas, maximizing their potential for success. With a team of seasoned professionals, a vast network of industry connections, and a commitment to sustainable and impactful ventures, Ivy Ventures offers a unique value proposition to its portfolio companies.</p>
                  </div>
                  
                  <div class="button-center"><NuxtLink to = "/how_it_works"><TheButton color="#427AA1">See how it works</TheButton></NuxtLink></div>
                  
                  <div class="button-center"><NuxtLink to = "/contact"><TheButton color="#427AA1">Join the ad<i>venture</i>!</TheButton></NuxtLink></div>
                  <br><br>
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

 .overview{
    margin-left: -150%;
}
    .howitworks-img{
      width:20%;
      margin-left:5%;
      margin-top:5%
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
          margin-top: -20%;
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
  
  
  #hand{
      text-align:center;
  }
  .button-center{
          display: flex;
          justify-content: center;
          margin-top: 3%;
      }
  
  </style>
  
  
  
  