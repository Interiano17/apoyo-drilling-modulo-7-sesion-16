<template>
  <h1> Productos {{count}}</h1>
</template>

<script>
export default {
  name: 'Product-count',
  computed: {
    count(){
      return this.$store.state.products.length;
    }
  },
}
</script>

<style scoped>
  
</style>
