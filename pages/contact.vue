<!--
    Contact page
-->


<template>
    <main>
            <div class = introduction>
              <img src="~/assets/img/mail.png" alt="mail" class="contact-img"/>
                <div id = "title"><p>Contact us</p> </div>
            </div>   
    <ol class="breadcrumb">
         <li class="breadcrumb-item"> <NuxtLink to = "/contact"><a>Contact us</a></NuxtLink></li>
    </ol>
  <Overview class="overview" :sections="['Form','Useful phone numbers', 'Useful emails']"/>
  <Return class="return_top"/>



<div class="thebody">
  <div id="Form">
    <br><br>
    <h2>Contact form</h2>
    <br>
        <div class="contact-us">
        <br>
        <p>A question ? You want to take part in this adventure ? </p>
        <p>Don't hesitate to fill this form to contact us !</p>
        <form>
            <div>
                <label for="name">Name</label>
                <input type="text" id="name" placeholder="Thomas" required>
            </div>
            <div>
                <label for="email">Email</label>
                <input type="email" id="email" placeholder="example@mail.com" required>
            </div>
            <div>
                <label for="phone">Phone number</label>
                <input type="phone" id="phone" placeholder="+49...." required>
            </div>
            <div>
                <label for="subject">Choose the subject of your message</label>
                <select name="subject" id="subject" required>
                    <option value="" disabled selected hidden></option>
                    <option value="information">I want more information</option>
                    <option value="new_project">I want to share my project</option>
                    <option value="other">Other...</option>
                </select>
            </div>
            <div>
                <label for="message">Your message</label>
                <textarea id="message" name="message" placeholder="...." required></textarea>
            </div>
            <div>
              <button type="submit" id = "submit"><TheButton color="white"><a>Send the message</a></TheButton></button>
            </div>
        </form>
        </div>

  </div>
  <div id="Useful phone numbers">
    <h2>Phone numbers</h2>
    <br>
    English responsable +44 7 77 66 66 77
    <br>
    Italian responsable +39 7 66 66 77 77
    <br>
    French responsible +33 6 66 77 77 66
    <br>
    Spanish responsible +34 6 77 77 66 66
  </div>
  
  <br><br><br>
  <div id="Useful emails">
    <h2>Emails</h2>
    <br>
    information@ivy.com
    <br>
    firm@ivy.com
    <br>
    customers@ivy.com
  </div>
</div>
</main>

</template>




<style scoped>

.introduction {
        padding-top:6%;
        font-size: 3vh;
        text-align:left;
        padding-bottom: 2%;
        width:100%;
        height: 40vh;
        background-color: #679436;
        opacity: 1;
        background-image:  repeating-radial-gradient( circle at 0 0, transparent 0, #679436 20px ), repeating-linear-gradient( #a2eb596e, #679436 );
        text-shadow: black 0 0 10px;
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


.contact-img{
      width:15%;
      margin-left:70%;
      margin-top:5vh;
    }
    .thebody{
    padding-left:25vw;
    padding-right:5vw;
    padding-bottom:5vh;
    width: 70%;
    margin-top: -25%;
    }

    
    .overview{
    margin-left: -150%;
}
body {
  background: #679436;
  font-family:'Arial';
  display: flex;
  justify-content: center;
  text-align: center;
  margin-bottom: 10%;
}

#form{
  justify-content: center;
}

.contact-us {
  width: auto;
  border-radius: 8px;
  padding: 0 50px 0 50px;
  background: #679436;
  margin-bottom: 10%;
}



.contact-us > p {
  font-weight: 300;
  font-family:'Arial';
  text-align: center;
}

form div {
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 83px;
  margin-top: 25px;
}

form div > label {
  margin-bottom: 7px;
  font-weight: 600;
}

form div > input, form div > select, form div > textarea {
  background: white;
  border: none;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 500;
  font-family: 'Arial Black';
  box-shadow: 0px 2px 2px 0px rgba(0,0,0,0.25);
}

form div > input, form div > select {
  height: 50px;
  padding-left: 10px;
}

form div > select {
  appearance: none;
  background-size: 15px;
  background-position: right 10px top 50%;
  background-repeat: no-repeat;
}

form div > textarea {
  height: 195px;
  padding: 15px 0px 0px 10px;
}

form div > input::placeholder, form div > textarea::placeholder {
  color: rgba(128, 128, 128, 0.313);
}

form div > select:invalid {
  color: rgba(128, 128, 128, 0.313);
}

form div > select option {
  background: white;
  color: #303030;
}

form div:last-child {
  align-items:center;
  margin-top: 20px;
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
        border-image: linear-gradient(0.25turn,  rgba(255, 255, 255, 0), #679436, rgba(255, 255, 255, 0));
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



</style>






