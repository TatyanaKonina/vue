<template>
  <div class="v-home-page">
    <div class="navigation">
      <div class="logo">CoolName</div>
      <div class="menu">
        <ul class="nav">
          <li class="link">About us</li>
          <li class="link">Our servises</li>
          <li class="link">Contacts</li>
          <li class="link">Want to join us?</li>
        </ul>
        <ul class="nav icon">
          <li class="link"><font-awesome-icon :icon="['fa','search']"/></li>
          <li class="link"><font-awesome-icon :icon="['fa','shopping-cart']"/></li>
          <li class="link"><font-awesome-icon :icon="['fa','user']"/></li>
        </ul>
        </div>
      </div>
      <div class="description">
        <h1>Our Company</h1>
        <p>The outsourcing company provides personnel outsourcing services to organizations,
        those who need temporary employees of a certain profession and qualification.
        At the request of the employer, the staff is selected, trained, certified and staffed
        performers (a group of 15-20 people), and then transferred to the order of the customer for rent
        agreement.  
        </p>
        <br>
        <router-link :to="{path:'aketa'}">
          <button class ="button">Find Team</button>
        </router-link> 
    </div>
    <div class="end-head">
      <div class="post-navigation">
        <ul class="social">
          <li class="link"><font-awesome-icon :icon="['fab','facebook-square']"/></li>
          <li class="link"><font-awesome-icon :icon="['fab','twitter']"/></li>
          <li class="link"><font-awesome-icon :icon="['fab','vk']"/></li>
          <li class="link"><font-awesome-icon :icon="['fab','instagram']"/></li>
        </ul>
        <ul class="post-nav">
          <li class="link">Garanties</li>
          <li class="link">Support Center</li>
          <li class="link">Privacy</li>
        </ul>
      </div>
    </div>
    
    
  </div>
</template>

<script>

export default {
  name: 'v-home-page',
  props: {
  },
  data(){
    return{
      

    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
//@import url('https://fonts.googleapis.com/css2?family=Modak&family=Roboto&family=Tajawal:wght@900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Fredoka+One&display=swap');
.v-home-page{
  margin:0;
  padding: 0;
  font-family: 'Fredoka One', cursive;
  height: 100vh;
  background: linear-gradient(rgba(1,3,56,.8),rgba(1,3,56,.4)),url('../assets/images/background.jpg');
  -webkit-background-size: cover;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: 50% 50%;
.navigation{
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin: 0 auto;
    top: 5%;
    left: 50%;
    transform: translate(-50%,50%);
    color: #ffffff;
  }
.menu{
  display: flex;
}
.nav{
  display: flex;
  list-style: none;
}
.nav li{
  color:#fff;
  text-decoration: none;
  min-height: 0 30px 0 0;
  font-size: 30px;
  margin: 0 30px 0 0;
}
.icon li {
  margin: 0 20px 0 0;

}
.logo{
  font-size: 50px;
  font-family: 'Fredoka One', cursive;
  color:rgb(212, 0, 159);

}
.link{
  transition: .3s;
  cursor: pointer;
}
.link:hover{
  color: rgb(212, 0, 159);
}
.description{
  top:35%;
  left: 5%;
  width:40%;
  position:absolute;
  text-align: left;

}
.description h1{
  margin: 0;
  font-size: 40px;
  color:#fff;
  font-weight:900;
  font-family: 'Fredoka One', cursive;
}
.description p{
  color:rgb(177, 94, 245);
  font-size: 25px;
  font-family: 'Abril Fatface', cursive;
}
.button{
  background:none;
  border:3px solid #fff;
  text-decoration: none;
  color: #fff;
  font-size: 30px;
  text-transform:upper-case;
  padding: 10px 325px;
  border-radius: 7px;
  font-weight: bold;
  transition: .4s;
  text-align: center;
  font-family: 'Fredoka One', cursive;
  white-space: nowrap;
  transition: .3s;
  cursor: pointer;
}
.button:hover{
  color: rgb(212, 0, 159);
  background-color: rgb(148, 223, 255);
  opacity: 0.5;
}
.post-navigation{
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  position: absolute;
  top:98%;
  left:50%;
  transform: translate(-50%, -50%);
}
.social{
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.social li{
  padding: 0 35px 0 0;
  font-size: 40px;
  text-decoration: none;
  color: #c7c7c7
}
.post-nav{
  display: flex;
  list-style:none
}
.post-nav li{
  padding: 0 35px 0 0;
  font-size: 30px;
  text-decoration: none;
  color: #c7c7c7
}


}
</style>
