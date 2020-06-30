<template>
  <div class=" my-4">
    <div class="relative bg-lightGrey m-4 w-56 overflow-hidden" @mouseenter.stop="overlay = !overlay" @mouseleave.stop="overlay = !overlay">
      <div class="absolute w-full h-full bg-primaryTransparent z-20 flex justify-center items-center " :class="overlay ? 'block' : 'hidden'">
        <button class="p-4 opacity-100 rounded-full h-12 bg-white text-black">Quick View <img src="../assets/images/next.png" class="w-12 inline px-2" alt=""></button>
      </div>
      <img class="transition duration-500 ease-in-out transform" :class="overlay ? 'scale-125' : ''" :src="require(`../assets/images/${product.imgUrl}`)" alt="model"  />
    </div>
    <div class="flex justify-between">
      <p class="text-left px-4 text-sm inline-block">{{ product.name }}</p>
      <p class="text-right text-secondary px-4 text-sm inline-block font-semibold">${{ product.price }}</p>

    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
  data() {
    return {
      overlay: false
    }
  }
};
</script>

<style scoped>

</style>
