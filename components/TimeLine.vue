<template>
  <div class="timeline" style="overflow-y: scroll; height:70vh;"  @scroll="handleScroll">
    <div class="scroll" v-if="showArrow" @click="scrollToNextSection">⌄⌄⌄</div>
    <div class="container-timeline left">
      <div class="content-timeline">
        <h2 class="date">2005</h2>
        <p>Ivy Ventures is officially born, created and founded by the <b>Queen of the United Kingdom </b>herself, with the sole purpose of <b>supporting innovative startups</b> and <b>driving positive change in the world</b>. The firm establishes its headquarters in a vibrant entrepreneurial hub, positioning itself at the forefront of emerging trends and opportunities.</p>
      </div>
    </div>
    <div class="container-timeline right">
      <div class="content-timeline">
        <h2 class="date">2007</h2>
        <p>Ivy Ventures celebrates its <b>first significant exit as one of its portfolio companies successfully goes public</b>, generating substantial returns for both the startup and Ivy Ventures. This milestone solidifies Ivy Ventures' reputation as a <b>trusted partner</b> for early-stage startups and attracts attention from the investment community.
</p>
      </div>
    </div>
    <div class="container-timeline left">
      <div class="content-timeline">
        <h2 class="date">2010</h2>
        <p>Recognizing a noticeable pattern among its portfolio startups, Ivy Ventures officially splits its investment strategy into three key areas: the environment, means of transportation, and health. This sector-focused approach allows Ivy Ventures to <b>leverage its expertise, resources, and network</b> to provide targeted support to startups operating in these domains.
</p>
      </div>
    </div>
    <div class="container-timeline right">
      <div class="content-timeline">
        <h2 class="date">2015</h2>
        <p>Recognizing the global nature of the challenges and opportunities in its focus areas, Ivy Ventures establishes regional offices in key international markets. This global expansion enables the firm to <b>tap into diverse talent pools, access new markets</b>, and<b> forge partnerships with international startups and organizations</b>.</p>
      </div>
    </div>

    <div class="container-timeline left">
      <div class="content-timeline">
        <h2 class="date">2020</h2>
        <p>One of Ivy Ventures' portfolio companies achieves unicorn status, reaching a valuation of over <span style="color:white">$1 billion</span>. This milestone underscores Ivy Ventures' ability to identify and nurture high-potential startups and highlights the strength of its support ecosystem.</p>
      </div>
    </div>

    <div class="container-timeline right">
      <div class="content-timeline">
        <h2 class="date">Today</h2>
        <p>Ivy Ventures continues to grow its portfolio, nurture innovative startups, and drive positive change in its focus areas. With a <b>dedicated team, strong partnerships, and a reputation for success</b>, Ivy Ventures remains committed to supporting the next generation of game-changing ventures and shaping a better future.</p>
      </div>
    </div>
  </div>
  
  </template>
  <script>
  export default {
    data() {
      return {
        showArrow: true,
      };
    },
    methods: {
      handleScroll() {
        const scrollableDiv = document.querySelector('.timeline');
    this.showArrow = scrollableDiv.scrollTop === 0;
      },
      scrollToNextSection() {
        const scrollableDiv = document.querySelector('.timeline');
    const scrollDistance = 150;
    const scrollOptions = {
      top: scrollableDiv.scrollTop + scrollDistance,
      behavior: 'smooth', // Use smooth scrolling behavior
    };
    scrollableDiv.scrollTo(scrollOptions);
      },
    },
  };
  </script>
  
  
  <style>
  
  
  /* The actual timeline (the vertical ruler) */
  .timeline {
    position: relative;
    max-width: 100%;
    margin-left: 10%;
    margin-bottom: 4%;
    padding-left: 10%;
    padding-right: 10%;
    border:solid #427AA1 5px;
    border-left: solid white 0px;
    background-color: #ffffff;
    background-size: 50%;
    background-image:  repeating-linear-gradient(to right, #427AA1, #427AA1 4px, #ffffff 4px, #ffffff);
  
  }
  
  /* The actual timeline (the vertical ruler) */
  .timeline::after {
    content: '';
    position: absolute;
    width: 6px;
    background-color: #427AA1;
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -3px;
  }

  
  /* Container around content */
  .container-timeline {
    padding: 10px 40px;
    position: relative;
    background-color: inherit;
    width: 50%;
  }
  
  /* The circles on the timeline */
  .container-timeline::after {
    content: '';
    position: absolute;
    width: 25px;
    height: 25px;
    right: -17px;
    background-color: white;
    border: 4px solid #427AA1;
    top: 15px;
    border-radius: 50%;
    z-index: 1;
  }
 
  
  /* Place the container-timeline to the left */
  .left {
    right: 80px;
  }
  
  /* Place the container to the right */
  .right {
    left: 51%;
  }
  
  /* Add arrows to the left container (pointing right) */
  .left::before {
    content: " ";
    height: 0;
    position: absolute;
    top: 22px;
    width: 0;
    z-index: 1;
    right: 30px;
    border: medium solid #427AA1;
    border-width: 10px 0 10px 10px;
    border-color: transparent transparent transparent #427AA1;
  }
  
  /* Add arrows to the right container (pointing left) */
  .right::before {
    content: " ";
    height: 0;
    position: absolute;
    top: 22px;
    width: 0;
    z-index: 1;
    left: 30px;
    border: medium solid #427AA1;
    border-width: 10px 10px 10px 0;
    border-color: transparent #427AA1 transparent transparent;
  }
  
  /* Fix the circle for containers on the right side */
  .right::after {
    left: -16px;
  }
  
  /* The actual content-timeline */
  .content-timeline {
    padding: 20px 30px;
    background-color: #427AA1;
    position: relative;
    border-radius: 6px;
  }
  
  /* Media queries - Responsive timeline on screens less than 600px wide */
  @media screen and (max-width: 600px) {
  /* Place the timelime to the left */
    .timeline::after {
      left: 31px;
    }
  
  /* Full-width containers */
    .container-timeline {
      width: 100%;
      padding-left: 70px;
      padding-right: 25px;
    }
  
  /* Make sure that all arrows are pointing leftwards */
    .container-timeline::before {
      left: 60px;
      border: medium solid #427AA1;
      border-width: 10px 10px 10px 0;
      border-color: transparent #427AA1 transparent transparent;
    }
  
  /* Make sure all circles are at the same spot */
    .left::after, .right::after {
      left: 15px;
    }
  
  /* Make all right containers behave like the left ones */
    .right {
      left: 0%;
    }
  }
    .date{
      color:white
    }

.scroll{
  width:min-content;
  height: auto;
  padding-bottom: 10%;
  font-size: 6vh;
  position: absolute;
  top: 85%;
  left:45%;
  text-align: center;
  cursor: pointer;
  z-index:2;
  background-color: #ffffff59;
  backdrop-filter: blur(5px);
  border-radius: 30%;
  transition:0.5s
}

.scroll:hover{
  background-color: white;
  backdrop-filter: blur(5px);
  transition:0.5s
}

  </style>