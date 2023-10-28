<template>
  <div>
    <div class="container">
      <div class="tab">Código</div>
      <div class="tab">Producto</div>
      <div class="tab">Cantidad</div>
      <div class="tab">Precio</div>
    </div>
    <div class="container" v-for="product in products" :key="product.id">
      <div class="tab_content">{{product.code}}</div>
      <div class="tab_content">{{product.product}}</div>
      <div class="tab_content">{{product.quantity}}</div>
      <div class="tab_content">{{product.price}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Product-list',
  // props: {},
  data: function(){
    return {}
  },
  computed: {
    products(){
      return this.$store.state.products
    }
  },
  methods: {
    // -- Metodos
  },
  // components: {},
}
</script>

<style scoped>
  .container{
    display:grid;
    grid-template-columns: 1fr 4fr 1fr 2fr;
  }
  .tab_content{
    background:orange;
  }
  .tab{
    background:grey;
    color:white;
  }
</style>
