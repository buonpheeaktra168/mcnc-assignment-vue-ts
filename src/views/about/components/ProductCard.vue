<template>
    <div class="container">
        <div class="product-image">
            <img :src="props.image"  />
        </div>
        <h5>{{ props.title }}</h5>
        <p class="price">${{ props.price }}</p>
    </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';

const props = defineProps<{
    title: String,
    price: String,
    image: File,

}>()

</script>

<style lang="scss">
.container {
    display: flex;
    flex-direction: column;
    background-color: aliceblue;
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
    padding: 12px;
    border-radius: 12px;
    margin: 8px;
    justify-content: center;
    align-items: center;
    .product-image {
        flex: 1;
max-width: 120px;
background-size: cover;
    }

    h5 {
        font-size: 20px;
        margin: 0;
        padding: 0;
    }

    .price {
        flex: 1;
        margin: 0;
        position:absolute;
        justify-content: flex-end;
        background-color: rgb(0, 174, 255);
        padding: 12px;
        color: #ffff;
    }
}
</style>


