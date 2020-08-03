<template>
  <nav class="nav text-3xl flex px-4 py-4 bg-white shadow-lg fixed w-full top-0 z-30">
    <div class="nav-brand flex justify-between items-center w-full">
      <h1 class="inline-block">
        <a href="/" class="font-bold">Shirt-Shop</a>
      </h1>
      <ul class="flex sm:block hidden inline-block -ml-48">
        <li class="text-base font-semibold">
          <a href="#">Home</a>
        </li>
        <li class="text-base font-semibold">
          <a href="#">Collection</a>
        </li>
        <li class="text-base font-semibold">
          <a href="#">Shop</a>
        </li>
        <li class="text-base font-semibold">
          <a href="#">About</a>
        </li>
        <li class="text-base font-semibold">
          <a href="#">Blog</a>
        </li>
        <li class="text-base font-semibold">
          <a href="#">Pages</a>
        </li>
      </ul>
      <ul class="sm:block hidden relative ">
        <li>
          <a href="/register">
            <button class="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg border border-primary rounded-full text-base font-bold py-1 px-4"> Sign Up</button>
          </a>
        </li>
        <li>
          <a href="/login">
            <button class="transition duration-500 ease-in-out transform hover:-translate-y-1 border border-primary rounded-full text-base font-bold py-1 px-6 bg-primary text-white hover:shadow-lg">Log In</button>
          </a>
        </li>
        
      </ul>
      <button class="block sm:hidden" @click="dropdown = !dropdown">
        <img src="../assets/images/menu.svg" class="w-8 " alt="menu icon">
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
      dropdown: false
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
li {

  margin: 0 10px;
}

.fade-enter-active, .fade-leave-active {
  transition: all .3s;
}
.fade-enter, .fade-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}

</style>
