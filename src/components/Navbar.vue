<template>
  <nav class="nav text-3xl flex px-6 py-4 bg-white shadow-lg fixed w-full top-0 z-30">
    <div class="nav-brand flex items-baseline justify-between items-center w-full">
      <h1 class="inline-block">
        <a href="/" class="font-bold text-xl sm:text-3xl">Shirt-Shop</a>
      </h1>
      <div class="mr-8 hidden xl:block">
        <div class="inline-block">
          <button class="inline bg-grey pt-2 px-2 text-base " @click="categoryDropdown = !categoryDropdown">All <img class="w-2 inline ml-2" src="../assets/images/down-arrow.svg" alt=""></button>
          <div v-if="categoryDropdown" class="absolute -mt-2 bg-grey">
            <ul>
              <li class="text-base my-2 hover:bg-white cursor-pointer">native</li>
              <li class="text-base my-2 hover:bg-white cursor-pointer">plain</li>
              <li class="text-base my-2 hover:bg-white cursor-pointer">drip collection</li>
              <li class="text-base my-2 hover:bg-white cursor-pointer">interesting</li>
              <li class="text-base my-2 hover:bg-white cursor-pointer">deep</li>
            </ul>
          </div>
        </div>
        
        <input type="text" class="border h-8" size="25">
      </div>
      <ul class="main-links flex sm:block hidden inline-block -ml-48">
        <li class="inline-block text-base font-semibold">
          <a href="#">Home</a>
        </li>
        <li class="inline-block text-base font-semibold">
          <a href="#">Collection</a>
        </li>
        <li class="inline-block text-base font-semibold">
          <a href="#">About</a>
        </li>
        <li class="inline-block text-base font-semibold">
          <a href="#">Blog</a>
        </li>
        <li class="inline-block text-base font-semibold relative cursor-pointer">
          <a href="#" class="inline">Cart</a>
          <img class="inline w-4 ml-1 mr-1" src="../assets/images/shopping-cart.svg" alt="shopping cart icon">
          <span class="bg-primary rounded-full w-4 h-4 pl-1 text-xs absolute right-0 bottom-0 text-white">0</span>
        </li>
        

        <li class="inline-block">
          <a href="/register">
            <button class="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg border border-primary rounded-full text-base font-bold py-1 px-4"> Sign Up</button>
          </a>
        </li>
        <li class="inline-block">
          <a href="/login">
            <button class="transition duration-500 ease-in-out transform hover:-translate-y-1 border border-primary rounded-full text-base font-bold py-1 px-6 bg-primary text-white hover:shadow-lg">Log In</button>
          </a>
        </li>
        
      </ul>
      <button class="block sm:hidden" @click="dropdown = !dropdown">
        <img src="../assets/images/menu.svg" class="w-6 " alt="menu icon">
      </button>
    </div>
    <transition name="fade">
      <div v-if="dropdown" class="absolute mt-16 left-0 p-4 w-100 z-10 sm:hidden -translate-y-full bg-white">
        <ul class="">
          <li class="text-black py-2 text-sm block cursor-pointer hover:text-primary hover:underline">
            Home
          </li>
          <li class="text-black py-2 text-sm block cursor-pointer hover:text-primary hover:underline">
            About
          </li>
          <li class="text-black py-2 text-sm block cursor-pointer hover:text-primary hover:underline">
            Services
          </li>
          <li class="text-black py-2 text-sm block cursor-pointer hover:text-primary hover:underline">
            Gallery
          </li>
          <li class="text-black py-2 text-sm block cursor-pointer hover:text-primary hover:underline">
            Store
          </li>
          
        </ul>
      </div>
    </transition>
  </nav>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return{
      dropdown: false,
      categoryDropdown: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
.nav-brand li {
  padding: 0 10px;
}

.fade-enter-active, .fade-leave-active {
  transition: all .5s;
}
.fade-enter, .fade-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}

</style>
