<template>
  <div class="about">
    <LoadingSpinner v-if="store.isLoading" title="Loading..." />
    <RouterLink to="/">
      <div class="wrapper">
        <div v-for="product in store.isProducts" :key="product.id" class="product">
          <ProductCard :title="product.title" :price="product.price" :image="product.category.image" />
        </div>
      </div>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { onMounted } from 'vue';
import ProductCard from '../components/ProductCard.vue';
import { usePostStore } from '../store/useProductStore';
import LoadingSpinner from '@/components/LoadingSpinner.vue'


const store = usePostStore()

onMounted(async () => {
  await store.fetchProducts();
  console.log(store.isProducts)
})

</script>


<style lang="scss" scoped>
.about {
  display: flex;
  flex-direction: row;
  justify-content: center;

  .wrapper {
    display: grid;
    margin-top: 80px;
    grid-template-columns: 400px 400px 400px 400px;
    justify-content: center;

    .product {
      flex-direction: row;
    }
  }
}


@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
