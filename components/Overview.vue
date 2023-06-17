<template>
    <div class="overview" id="desktop">
    <p>Browse the page ⤵</p>
    <ul>
        <li v-for="(section, index) in sections" :key="index">
            <a @click="scrollTo(section)"> {{ section }}</a>
        </li>
    </ul>
    </div>
    </template>


<script>
export default {
  props: {
    sections: {
      type: Array,
      required: true,
    },
  },
  methods: {
    scrollTo(section) {
      const element = document.getElementById(section);
      element.scrollIntoView({ behavior: "smooth" });
    },
  },
};

</script>   


<style scoped>
    .overview {
        position: -webkit-sticky;
        position: sticky;
        left: 3vw;
        top:40%;
        margin-top:10%;
        max-width: 17%;
        background-color: white;
        border: 2px solid #427AA1;
        padding:1vh;
        border-radius: 3%;
        z-index: 999;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        font-size: 2vh;
    }

    p{
      font-family: 'Garamond';
      font-size: larger;
      color:black;
      font-weight: bold;
    }
    img{
      height:5vh;
      position:absolute;
      right:30%;
      top:15%
    }

    a{
      cursor:pointer;
    }
   a:after {
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
  }
  @media (max-width: 768px) { 
  #desktop{
   display:none;
  }
}

      </style>

