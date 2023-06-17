

<template>
  <div class="return_top">
      <a href="#"  class="btn btn-default"><img src="~/assets/img/return.png" height="40" width="40"></a>
  </div>
</template>


<script>
export default {
  methods: {
    scrollTo(section) {
      const element = document.getElementById(section);
      element.scrollIntoView({ behavior: "smooth" });
    },
  },
};

</script>  
  

<style scoped>

  .return_top {
    padding-left:81vw;
    padding-bottom:8vh;
    position: -webkit-sticky;
    position: sticky;
    top:90%;
    max-width: 17%;
    font-family: 'Arial Black';
    z-index: 999;
    
  }

  a {
    float: right;
    display: block;
}

</style>