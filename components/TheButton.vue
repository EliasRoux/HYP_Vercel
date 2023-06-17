<template>
    <button class="TheButton" :style="{ backgroundColor: color }">
      <span><slot>Click</slot></span>
    </button>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      required: true,
    },
  },
};
   </script>

<style scoped>


@import url("https://fonts.googleapis.com/css?family=Lato:200,300,400,400i,700"); 

.TheButton {
  display:flex;
  border-radius: 4px;
  padding:10%;
  display: flex;
  justify-content: center;
  border: none;
  color: #FFFFFF;
  text-align: center;
  font-size: 28px;
  padding: 20px;
  width: auto;
  transition: all 0.5s;
  cursor: pointer;
  font-family: 'Lato', sans-serif;
}

.TheButton span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
  opacity: 1;
  font-size: 3vh;
}

.TheButton span:after {
  content: '\00bb';
  color:white;
  position: absolute;
  opacity: 0;
  top: 0;
  transition: 0.5s;
}

.TheButton:hover span {
  padding-right: 25px;
  color:white;
}

.TheButton:hover span:after {
  opacity: 1;
  right: 0;
  color:white;
}
</style>