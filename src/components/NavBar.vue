<template>
  <div>
    <div class="container">
      <div class="navbar_title">
        <h1 class="nav-item">Navbar</h1>
        <router-link to="/"><h1 class="nav-item">Home</h1></router-link>
        <router-link to="/about"><h1 class="nav-item">About</h1></router-link>
        <router-link to="/products"><h1 class="nav-item">Products</h1></router-link>
      </div>
      <div class="dropdown">
        <i class="icon fas fa-user"></i>
        <div class="dropdown-content">
          <div>
            <div class="title">Usuario</div>
            <div class="name">{{userName}}</div>
            <button class="btn_logout">Logout</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nav-component',
  computed: {
    userName(){
      return this.$store.state.name + " " + this.$store.state.last_name;
    }
  },

}
</script>

<style scoped>
  .container{
    border-bottom: 1px solid black;
    display:grid;
    grid-template-columns: repeat(10fr);
  }
  .navbar_title{
    grid-row:1/2;
    grid-column:1/8;
    text-align:start;
  }
  .nav-item{
    display: inline-block;
    margin: 1rem 2rem;
    color: #2c3e50;
    font-size: 1.5em;
  }
  .dropdown{
    grid-row: 1/2;
    grid-column: 8/9;
    margin: auto 0;
    padding: 5px;
    text-align:center;
  }
  .dropdown-content{
    display:none;
    position:absolute;
    right:10px;
    background-color:#f9f9f9;
    min-width:160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
  }
  .dropdown:hover  .dropdown-content{
    display:block;
    text-align:center;
  }
  .title{
    font-size:20px;
    border-bottom: 1px solid black;
  }
  .name{
    padding: 10px 0;
  }
  .btn_logout{
    display:inline-block;
    background: rgb(74,132,199);
    width:80%;
    padding: 2px 0;
    margin-bottom:10px;
  }
  .icon{
    font-size:25px;
  }
</style>

