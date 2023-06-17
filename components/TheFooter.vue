<!--
    Footer of the page
-->

<template>
     <footer>
        <div  style="float: left">
            +49 1 55 66 55 66 <br> 
            ivy@contact.com            
        </div>
        <div  style="float: center">
            <NuxtLink to = "/"><p>Home </p></NuxtLink> |
            <NuxtLink to = "/how_it_works"><p>How it works </p></NuxtLink> |
            <NuxtLink to = "/team"><p>Our team </p></NuxtLink>  | 
            <NuxtLink to = "/areas"><p>Areas </p></NuxtLink>  |
            <NuxtLink to = "/projects"><p>Projects </p></NuxtLink>                      
        </div>
        <div  align = center>
            Are you interested? For further information <NuxtLink to = "/contact"><p>Contact us </p></NuxtLink>
        </div>
        <br><br>
        <div  class = social align = right>
            <a href="https://twitter.com" style="color:black;"><img src="~/assets/img/twitter.png" height="20" width="20">#IvyVentures&emsp;</a>
            <a href="https://instagram.com" style="color:black;"><img src="~/assets/img/instagram.png" height="20" width="20"> @IvyVentures&emsp;</a>
            <a href="https://facebook.com" style="color:black;"><img src="~/assets/img/facebook.png" height="20" width="20"> @IvyVentures&emsp;</a>
            <a href="https://linkedin.com" style="color:black;"><img src="~/assets/img/linkedin.png" height="20" width="20"> @IvyVentures&emsp;</a>
        </div>


  </footer>
</template>


<style scoped>

    
    footer
    {
        background-color: #679436;
        flex-shrink: 0;
        text-align: center;
        margin-top: auto;
        padding: 10px;
        min-height: 1vh;
    }

    p{
        color: white;
    }

    .social{
        color: black;
    }


    
    
</style>
