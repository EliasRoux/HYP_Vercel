
<template>
  <ol class="breadcrumb">
    <li v-for="(section, index) in sections" :key="index" class="breadcrumb-item">
          <NuxtLink to = "/areas"> {{ section }}</NuxtLink>
    </li>
  </ol>
  </template>


<script>
export default {
props: {
  sections: {
    type: Array,
    required: true,
  },
},

};

</script>   


<style>   

.breadcrumb{
  padding: 10px 16px;
  list-style: none;
  }
  
.breadcrumb-item{
  display: inline;
  font-size: 18px;
  }

.breadcrumb li+li:before{
  padding: 8px;
  color: black;
  content: ">";
}

.breadcrumb-item a{
  color: #2e4053;
  text-decoration: none;
}

.breadcrumb-item a:hover{
  color: #679436;
}


    </style>

