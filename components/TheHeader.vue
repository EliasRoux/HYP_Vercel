<!--
    Header of the page
-->
<template>
    <header ref="headerElement" id="header_desktop">
        <router-link class="nav-link" to="/">
          <h1 class="ivylogo">
            <img class="logo"
              alt="Ivy Ventures logo"
              src="~/assets/img/ivylogo.png"
            />
          </h1>
        </router-link>
        <nav>
            <ul>
                <li class="dropdown">
                    <NuxtLink to = "/how_it_works">How it works </NuxtLink>
                </li>

                <li class="dropdown">
                    <NuxtLink to = "/team">Our team</NuxtLink>
                </li>

                <li class="dropdown">
                    <NuxtLink to = "/areas">Areas</NuxtLink>
                    <ul class="down">
                        <li><NuxtLink to = "/areas">All areas</NuxtLink></li>
                        <li><NuxtLink to = "/areas/projects_by_area">Projects by area</NuxtLink></li>
                    </ul>
                </li>

                <li class="dropdown">
                    <NuxtLink to = "/projects">Projects</NuxtLink>
                    <ul class="down">
                        <li><NuxtLink to = "/projects/top5projects">Top 5 projects</NuxtLink></li>
                        <li><NuxtLink to = "/projects">All projects</NuxtLink></li>
                        
                    </ul>
                </li>

                <li class="dropdown">
                    <NuxtLink to = "/contact">Contact us</NuxtLink>
                </li>
            </ul>      
        </nav>
    </header>

</template>


<script>
export default {
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const headerElement = this.$refs.headerElement;
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      const blurValue = Math.min(scrollPosition / 20, 5); // Adjust the division and maximum blur value as needed
      headerElement.style.backdropFilter = `blur(${blurValue}px)`;
    },
  },
};
</script>



<style>
    header{
        background-image:linear-gradient(to bottom, rgb(255, 255, 255,0.8), rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8) 100%);
        position: fixed;
        width:100%;
        height: 10vh; 
        padding: 0px 20px 0px 20px;
        margin-bottom: 5px;
        border-bottom: 0px solid ;
        backdrop-filter: blur(5px);
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index:3;
        border-bottom: solid 2px #679436;
    }

    .logo{
        height: 9vh;
        margin: auto;
        padding:10%;
        
    }


    nav {
        display: block;
        gap: 20vh;
        font-size: 4vw;
        padding-right: 5%;
        padding-right: 5%;
        font-variant-caps: small-caps;
        text-align: center;
    }


    h1{
        padding-left:10%;
        transition:0.3s;
        display: flex;
        align-items: center;
    }

    h1:hover{
        opacity:0.8;
        transition:0.3s
    }

    nav li{
        list-style-type: none;
        width:100%;
        right:5%
    }

    nav ul{
        display: flex;
        gap: 30px;
        font-size: 17pt;
        padding-right: 5%;
        width:100%;
    }
   
    nav > li.dropdown{
        float: left;
        text-align: left;
        position: relative;
        list-style-type: none;
        flex-grow: 1;
        flex-basis: 0;
        font-size: 1em;
    }


    .dropdown {
        margin-left: 0px;
  display: inline-block;
  position: relative;
  flex-grow: 1;
  flex-basis: 0;
  font-size: 1em;
  text-align: center;
  width:fit-content
    }

    .dropdown > a{
        display:block;
        text-decoration: none;
        padding: 10px 0px;
        white-space: nowrap;
    }
 

    .down{
        display: none;
        background-color: rgb(235, 250, 238);
        box-shadow: 0px 1px 2px;
        position:absolute;
        padding-left: 0.2em;
        margin: 0;
        padding:5%;
    }
    .down li{
        width:100%;
        border-bottom: 1px solid #679436;
        font-variant: normal;
        font-size:2.5vh;

    }

    .down li:last-child {
  border-bottom: none; /* Remove the border-bottom for the last element */
}
       
    .dropdown:hover > ul.down {
  display: block;
  width: 100%;
}



 
    .down a {
        padding: 0px;
        border-bottom: none;
        display:block;
        text-align: left;     
        list-style-type: none;
    flex-grow: 1;
    flex-basis: 0;
    text-align: center;}

    /*nav a:after {
      content: "";
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: #425f22;
      transform-origin: bottom right;
      transition: transform 0.25s ease-out;
  }*/

  nav a:hover {
    color: #243412;
  }

  

  @media (max-width: 768px) { 
  #header_desktop{
   display:none;
  }
  #header_mobile{
   display:initial;
  }
}
    </style>
