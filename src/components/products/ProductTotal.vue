<template>
  <div class="container">
    <div>Total: ${{total}}</div>
  </div>
</template>

<script>
export default {
  name: 'ProductTotal',
  computed: {
    total(){
      return this.$store.state.products.reduce((total,prod)=>{
        return total + (prod.quantity * prod.price)
      },0)
    }
  },
}
</script>

<style scoped>
  .container{
    font-size:25px;
    background:grey;
    color:white;
    padding-top:10px;
    text-align: start;
  }
</style>
