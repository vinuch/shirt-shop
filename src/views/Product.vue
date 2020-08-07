<template>
  <div class="mt-20 py-16 mx-auto flex flex-wrap px-8 justify-center">
    <div class="mb-8 sm:mr-24">
      <img src="../assets/images/danshiki2.jpg" alt=" danshiki shirt" class="w-84 mb-6 shadow">
      <div class="flex justify-between">
        <img src="../assets/images/danshiki2.jpg" alt="danshiki shirt" class=" h-24 sm:w-24 shadow">
        <img src="../assets/images/danshiki2.jpg" alt="danshiki shirt" class=" h-24 sm:w-24 shadow">
        <img src="../assets/images/danshiki2.jpg" alt="danshiki shirt" class=" h-24 sm:w-24 shadow">

      </div>
    </div>
    <div class="w-96">
      <p class="text-sm inline-block font-semibold px-2 py-1 bg-grey">NATIVE</p>
      <h2 class="font-extrabold my-4 text-xl ">Danshiki Top</h2>
      <p class=" mb-6">
        A dashiki is a colorful garment that covers the top 
        half of the body. The dashiki found a market in America during 
        the Black cultural and political struggles in the 1960s. The dashiki 
        rebelled against men’s fashions of that time: brightly colored instead of drab,
        loose instead of tight, worn outside the pants instead of tucked in.
        It could be worn defiantly on occasions that normally would call for a coat and tie.
      </p>
      <h3 class="font-bold text-sm mb-4">QUANTITY</h3>
        <div class="flex items-start justify-between">
          <div class=" border inline-block">
            <div class="flex">
              <button class=" py-1 px-4 hover:bg-grey">-</button>
              <input type="number" placeholder="1" class="w-24 py-1 px-4 text-center">
              <button class=" py-1 px-4 hover:bg-grey">+</button>
            </div>
          </div>
          <div class=" inline-block ">
            <h3 class="text-right font-bold text-xl">$10</h3>
            <span class="text-sm text-secondary text-right">+ shipping fee 5%</span>
          </div>
        </div>
        <button class="bg-primary text-center w-full py-2 text-white mt-6 transition duration-500 ease-in-out transform hover:-translate-y-1 border text-base font-bold hover:shadow-lg">Add to cart</button>

        <h3 class="my-4 font-bold">Specifications</h3>
        <ul>
          <li class="my-4 border-b border-grey flex justify-between">
            <span class="text-base font-medium">Size</span>
            <span class="font-bold">Medium</span>
          </li>
          <li class="my-4 border-b border-grey flex justify-between">
            <span class="text-base font-medium">Material</span>
            <span class="font-bold">Cotton</span>
          </li>
          <li class="my-4 border-b border-grey flex justify-between">
            <span class="text-base font-medium">Unisex</span>
            <span class="font-bold">yes</span>
          </li>
          <li class="my-4 border-b border-grey flex justify-between">
            <span class="text-base font-medium">Warranty</span>
            <span class="font-bold">2 years warranty</span>
          </li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

</style>