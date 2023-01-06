<template>
    <div class="container">
        <img :src="props.image"  />
        <h5>{{ props.title }}</h5>
        <p>${{ props.price }}</p>
    </div>
</template>

<script setup lang="ts">

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
    img {

    }

    h5 {
        font-size: 20px;
        margin: 0;
        padding: 0;
    }

    p {
        margin: 0;
    }
}
</style>


