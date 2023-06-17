<template>
    <div class = introduction>
        <div id = "title"><p>Projects of transport </p> </div>
    </div>

    <Overview class="overview" :sections="['Introduction','Projects in this area']"/>

    <div class="thebody">

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer elementum ipsum ipsum, at ornare eros bibendum auctor. Cras in massa id nunc pharetra accumsan at eu lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi odio metus, finibus in efficitur sit amet, vulputate et erat. Suspendisse potenti. Nam et nunc non lectus luctus fermentum sed in tellus. Vestibulum ut elit mauris. Praesent consequat placerat arcu vitae lacinia. Vestibulum luctus purus vel metus aliquam, ac tincidunt metus facilisis. Suspendisse a urna egestas, convallis erat eget, mollis felis. Quisque vitae ipsum lobortis, laoreet tortor id, maximus leo. In commodo aliquet mauris, ut hendrerit purus facilisis nec.

        <br>

        <a  href = "/areas/transport">
            <h2>See the transport area main page</h2>
        </a>
    <br><br>

    <div class="search-container">
        <input v-model="searchQuery" type="text" class="search-input" placeholder="Search">
        <div v-for="element in filteredElements" :key="element.id">
          <!-- Your element template here -->
        </div>
      </div>

    <div class="projects">
      <div v-for="index in 15" :key="index">
        <a class="project" href = "/projects/" >
          
          <h3 >Apple</h3>
          <div class = "content">
          <img src="~/assets/img/apple.png"  alt="Project Image">
          <p>
          In commodo aliquet mauris, ut hendrerit purus facilisis nec h.  
          In commodo aliquet mauris, ut hendrerit purus facilisis nec h.  
          In commodo aliquet mauris, ut hendrerit purus facilisis nec h.  
        </p>
      </div>
        </a>
      </div>
    </div>
    </div>

</template>


<style scoped>
main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top:0%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    z-index: 1;
    overflow-x: hidden;
}
.thebody{
    padding-left:25vw;
    padding-right:5vw;
    padding-bottom:1vh;
    max-width: 80%;
    margin-top: -10%;
}




    /* Projects container */
.projects {
display: flex;
flex-wrap: wrap;
justify-content: space-between;
margin-top: 40px;
}

.project {
max-width: 15rem; /* Adjust the value as needed */
flex-basis: calc(33.33% - 20px);
background-color: #ffffff;
border-radius: 5px;
padding: 20px;
border: 2px solid green;
margin-bottom: 20px;
overflow: hidden;
}

.project img {
display: block;
margin: 0 auto;
width: auto;
height: auto;
align-items: center;
border-radius: 5px;
margin-bottom: 10px;
}

.project h3 {
font-size: 18px;
font-weight: bold;
margin-bottom: 5px;
text-align: center;
}

.project p {
font-size: 14px;
margin-bottom: 0;
color: black;
white-space: pre-wrap; /* Allows line breaks within the text */
}



.search-container {
display: flex;
align-items: center;
background-color: #f2f2f2;
border-radius: 4px;
padding: 6px 10px;
width: auto; /* Adjust the width as needed */
}

.search-input {
flex-grow: 1;
border: none;
background-color: transparent;
font-size: 16px;
padding: 4px;
outline: none;
width: 100%;
}

.search-input::placeholder {
color: #888888;
}

.search-input:focus {
box-shadow: 0 0 3px rgba(66, 133, 244, 0.5);
}

/* Additional styles to mimic Google's search bar */
.search-container:hover {
box-shadow: 0 0 3px rgba(66, 133, 244, 0.3);
}

.search-container:focus-within {
box-shadow: 0 0 3px rgba(66, 133, 244, 0.5);
background-color: white;
}

</style>