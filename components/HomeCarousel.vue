


<template>

  <div class="scroll-container">
  
    <section class="carousel">
    <ol class="carousel__viewport">
      <li id="carousel__slide1"
          tabindex="0"
          class="carousel__slide" >
          <img src="../assets/img/EcoTech.png" class="img-carousel" alt="Proj1">
             <div class="image-description"><NuxtLink to = "/projects/1">EcoTech Solutions</NuxtLink></div>
          <div class="carousel__snapper">
          <a href="#carousel__slide4"
             class="carousel__prev"></a>
          <a href="#carousel__slide2"
             class="carousel__next"></a>
        </div>
      </li>
      <li id="carousel__slide2"
          tabindex="0"
          class="carousel__slide">       
          <img src="../assets/img/BioGenetics.png" class="img-carousel"  alt="Proj2">
          <div class="image-description"><NuxtLink to = "/projects/2">GreenCommute</NuxtLink></div>
  
        <div class="carousel__snapper"></div>
        <a href="#carousel__slide1"
           class="carousel__prev"></a>
        <a href="#carousel__slide3"
           class="carousel__next"></a>
      </li>
      <li id="carousel__slide3"
          tabindex="0"
          class="carousel__slide">
          <img src="../assets/img/Ecofashion.png" class="img-carousel" alt="Proj3">
          <div class="image-description"><NuxtLink to = "/projects/3">MedTech Innovations</NuxtLink></div>
  
        <div class="carousel__snapper"></div>
        <a href="#carousel__slide2"
           class="carousel__prev"></a>
        <a href="#carousel__slide4"
           class="carousel__next"></a>
      </li>
      <li id="carousel__slide4"
          tabindex="0"
          class="carousel__slide">
          <img src="../assets/img/CleanWater.png" class="img-carousel"  alt="Proj4">
      <div class="image-description"><NuxtLink to = "/projects/4">BioGenetics</NuxtLink></div>
  
        <div class="carousel__snapper"></div>
        <a href="#carousel__slide3"
           class="carousel__prev"></a>
        <a href="#carousel__slide1"
           class="carousel__next"></a>
      </li>
    </ol>
  
  
    <aside class="carousel__navigation">
      <ol class="carousel__navigation-list">
        <li class="carousel__navigation-item">
  
          <a href="#carousel__slide1"
             class="carousel__navigation-button"></a>
        </li>
        <li class="carousel__navigation-item">
          <a href="#carousel__slide2"
             class="carousel__navigation-button"></a>
        </li>
        <li class="carousel__navigation-item">
          <a href="#carousel__slide3"
             class="carousel__navigation-button"></a>
        </li>
        <li class="carousel__navigation-item">
          <a href="#carousel__slide4"
             class="carousel__navigation-button"></a>
        </li>
      </ol>
    </aside>
  </section>
  </div>
  </template>
  
  <style scoped>
  
  
  * {
    box-sizing: border-box;
    scrollbar-color: transparent transparent; 
    scrollbar-width: 0px;
  }
  
  *::-webkit-scrollbar {
    width: 0;
  }
  
  
  ol, li {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .carousel {
    position: relative;
    padding-top: 45%;
    filter: drop-shadow(0 0 10px #0003);
  }
  
  .carousel__viewport {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    overflow-x: scroll;
    counter-reset: item;
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;
    height: 70vh;
  }
  
  .carousel__slide {
    position: relative;
    flex: 0 0 100%;
    width: 100%;
    counter-increment: item;
  }
  
  .carousel__slide:before {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%,-40%,70px);
    color: #fff;
    font-size: 2em;
  }
  
  .carousel__snapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    scroll-snap-align: center;
  }
  
  .image-description {
  position: absolute;
  width:60%;
  transform: translate(0,-100%);
  color: white;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5);
  left:20.3%;
  height:2.4em;
}

  .carousel:hover .carousel__snapper,
  .carousel:focus-within .carousel__snapper {
    animation-name: none;
  }
  
  .carousel__navigation {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    text-align: center;
  }
  
  .carousel__navigation-list,
  .carousel__navigation-item {
    display: inline-block;
  }
  
  .carousel__navigation-button {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    background-color: #333;
    background-clip: content-box;
    border: 0.25rem solid transparent;
    border-radius: 50%;
    font-size: 0;
    transition: transform 0.1s;
  }
  
  .carousel::before,
  .carousel::after,
  .carousel__prev,
  .carousel__next {
    position: absolute;
    top: 0;
    margin-top: 37.5%;
    width: 4rem;
    height: 4rem;
    transform: translateY(-50%);
    border-radius: 50%;
    font-size: 0;
    outline: 0;
  }
  
  .carousel::before,
  .carousel__prev {
    left: -1rem;
  }
  
  .carousel::after,
  .carousel__next {
    right: -1rem;
  }
  
  .carousel::before,
  .carousel::after {
    content: '';
    z-index: 1;
    background-size: 1.5rem 1.5rem;
    background-repeat: no-repeat;
    background-position: center center;
    color: #679436 ;
    font-size: 2.5rem;
    line-height: 4rem;
    text-align: center;
    pointer-events: none;
  }
  
  .carousel::before {
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='0,50 80,100 80,0' fill='%23fff'/%3E%3C/svg%3E");
  }
  
  .carousel::after {
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='100,50 20,100 20,0' fill='%23fff'/%3E%3C/svg%3E");
  }

   img {
    height:25vw;
    width:auto
  }

  
  </style>

