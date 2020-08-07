<template>
  <div class="w-56 border border-grey transition-all duration-500 hover:shadow transform hover:-translate-y-4 cursor-pointer rounded mx-4 my-4">
    <div class="relative bg-lightGrey w-full mb-2 overflow-hidden" @mouseenter.stop="overlay = !overlay" @mouseleave.stop="overlay = !overlay">
      <div class="absolute w-full h-full bg-primaryTransparent z-20 flex justify-center items-center " :class="overlay ? 'block' : 'hidden'">
        <a href="/product/1" class="p-4 opacity-100 rounded-full h-12 bg-white text-black">Details <img src="../assets/images/next.png" class="w-12 inline px-2 mb-2" alt=""></a>
      </div>
      <img class="transition duration-500 ease-in-out transform" :class="overlay ? 'scale-125' : ''" :src="require(`../assets/images/${product.imgUrl}`)" alt="model"  />
    </div>
    <div class="flex justify-between">
      <p class="text-left font-bold w-full px-4 text-sm inline-block">{{ product.name }}</p>
      <p class="text-right text-secondary px-4 text-sm inline-block font-semibold">${{ product.price }}</p>

    </div>
      <p class="text-left text-sm my-2 w-full px-4 text-sm inline-block">This is a very nice price of a product</p>
    
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
