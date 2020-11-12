<template>
  <div class="v-home-page">
    <div class="navigation">
      <div class="logo">CoolName</div>
      <div class="menu">
        <ul class="nav">
          <li class="link">About us</li>
          <li class="link">Our servises</li>
          <li class="link">Contacts</li>
          <li class="link">потом придумаю</li>
        </ul>
        <ul class="nav icon">
          <li class="link"><font-awesome-icon :icon="['fa','search']"/></li>
          <li class="link"><font-awesome-icon :icon="['fa','shopping-cart']"/> </li>
          <li class="link"><font-awesome-icon :icon="['fa','user']"/></li>
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
@import url('https://fonts.googleapis.com/css2?family=Modak&family=Roboto&family=Tajawal:wght@900&display=swap');
.v-home-page{
  margin:0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
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
  font-size: 20px;
  margin: 0 30px 0 0;
}
.icon li {
  margin: 0 20px 0 0;

}
.logo{
  font-size: 50px;
  font-family: 'Modak', cursive;
  color:rgb(212, 0, 159);

}
.link{
  transition: .3s;
}
.link:hover{
  color: rgb(212, 0, 159);
}
}
</style>
