<template>
  <div class="mx-4 sm:mx-32 my-12">
    <ul class="flex justify-center my-6">
      <li class="mr-6">
        <a class="text-black text-base sm:text-lg active font-bold hover:text-black" href="#">New Arrivals</a>
      </li>
      <li class="mr-6">
        <a class="text-grey text-base sm:text-lg font-bold hover:text-black" href="#">Men's</a>
      </li>
      <li class="mr-6">
        <a class="text-grey text-base sm:text-lg font-bold hover:text-black" href="#">Women's</a>
      </li>
      <li class="mr-6">
        <a class="text-grey text-base sm:text-lg font-bold hover:text-black" href="#">Featured Products</a>
      </li>
      
    </ul>
    <div class="flex sm:p-0 sm:flex-wrap overflow-auto sm:justify-center">
      <ProductCard v-for="item in products" :key="item.id" :product="item"/>
    </div>
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard'
export default {
  components: {
    ProductCard
  },
  data() {
    return {
      products: [
        {
          id: 0,
          name: 'Gucci sweatshirt',
          imgUrl: 'model3.png',
          price: 200
        },
        {
          id: 1,
          name: 'Gucci sweatshirt',
          imgUrl: 'model2.png',
          price: 200

        },
        {
          id: 2,
          name: 'Gucci sweatshirt',
          imgUrl: 'model1.png',
          price: 200
        },
        {
          id: 3,
          name: 'Gucci sweatshirt',
          imgUrl: 'model3.png',
          price: 200
        },
        {
          id: 4,
          name: 'Gucci sweatshirt',
          imgUrl: 'model3.png',
          price: 200
        },
        {
          id: 5,
          name: 'Gucci sweatshirt',
          imgUrl: 'model2.png',
          price: 200

        },
        {
          id: 6,
          name: 'Gucci sweatshirt',
          imgUrl: 'model1.png',
          price: 200
        },
        {
          id: 7,
          name: 'Gucci sweatshirt',
          imgUrl: 'model3.png',
          price: 200
        },
         
      ]
    }
  }
};
</script>

<style scoped>
.active {
  color: #000000;
}
</style>
