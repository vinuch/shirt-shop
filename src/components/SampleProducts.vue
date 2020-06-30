<template>
  <div class="mx-32 my-12">
    <ul class="flex justify-center my-6">
      <li class="mr-6">
        <a class="text-black text-lg active font-bold hover:text-black" href="#">New Arrivals</a>
      </li>
      <li class="mr-6">
        <a class="text-grey text-lg font-bold hover:text-black" href="#">Men's</a>
      </li>
      <li class="mr-6">
        <a class="text-grey text-lg font-bold hover:text-black" href="#">Women's</a>
      </li>
      <li class="mr-6">
        <a class="text-grey text-lg font-bold hover:text-black" href="#">Featured Products</a>
      </li>
      
    </ul>
    <div class="flex flex-wrap justify-center">
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
          id: 0,
          name: 'Gucci sweatshirt',
          imgUrl: 'model2.png',
          price: 200

        },
        {
          id: 0,
          name: 'Gucci sweatshirt',
          imgUrl: 'model1.png',
          price: 200
        },
        {
          id: 0,
          name: 'Gucci sweatshirt',
          imgUrl: 'model3.png',
          price: 200
        },
        {
          id: 0,
          name: 'Gucci sweatshirt',
          imgUrl: 'model3.png',
          price: 200
        },
        {
          id: 0,
          name: 'Gucci sweatshirt',
          imgUrl: 'model2.png',
          price: 200

        },
        {
          id: 0,
          name: 'Gucci sweatshirt',
          imgUrl: 'model1.png',
          price: 200
        },
        {
          id: 0,
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
