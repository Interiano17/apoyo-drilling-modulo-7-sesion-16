<template>
  <div>
    <ProductCount></ProductCount>
    <ProductList></ProductList>
    <ProductTotal></ProductTotal>
  </div>
</template>

<script>
import ProductCount from '@/components/products/ProductCount.vue'
import ProductList from '@/components/products/ProductList.vue'
import ProductTotal from '@/components/products/ProductTotal.vue'
export default {
  name: 'Product-view',
  components: {
    ProductCount,
    ProductList,
    ProductTotal
  },
}
</script>

<style scoped>
  
</style>
