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
        
        <input type="text" class="border h-8" size="20">
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

      <template v-if="!user">

        <li class="inline-block">
          <a href="/register">
            <button class="transition dura tion-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg border border-primary rounded-full text-base font-bold py-1 px-4"> Sign Up</button>
          </a>
        </li>
        <li class="inline-block">
          <a href="/login">
            <button class="transition duration-500 ease-in-out transform hover:-translate-y-1 border border-primary rounded-full text-base font-bold py-1 px-6 bg-primary text-white hover:shadow-lg">Log In</button>
          </a>
        </li>
      </template>
          <li class="inline-block" v-else>
            <div class="flex items-center">
                <p class="text-base mx-4"><img src="../assets/images/user.svg" class="w-4 inline mx-2" alt="">{{ user.first_name }} {{ user.last_name }}</p>
              <button @click="signOut" class="w-32 transition duration-500 ease-in-out transform hover:-translate-y-1 border border-primary rounded-full text-base font-bold py-1 px-6 bg-primary text-white hover:shadow-lg">
                Log out 
              </button>
            </div>
          
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
          <li v-if="!authenticated" class="w-56 flex justify-between inline-block">
            <a href="/register">
              <button class="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg border border-primary rounded-full text-base font-bold py-1 px-4"> Sign Up</button>
            </a>
            <span class="w-8"></span>
            <a href="/login">
              <button class="transition duration-500 ease-in-out transform hover:-translate-y-1 border border-primary rounded-full text-base font-bold py-1 px-6 bg-primary text-white hover:shadow-lg">Log In</button>
            </a>
          </li>
          <template v-else>
              <li class="py-2">
              <p class="text-base"><img src="../assets/images/user.svg" class="w-4 inline mx-1" alt="">{{ user.first_name }} {{ user.last_name }}</p>
            </li>
            <li class="inline-block">
            
              <button @click="signOut" class="w-32 transition duration-500 ease-in-out transform hover:-translate-y-1 border border-primary rounded-full text-base font-bold py-1 px-6 bg-primary text-white hover:shadow-lg">
                Log out 
              </button>

            
          </li>
          </template>
          
          
        </ul>
      </div>
    </transition>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
// import func from '../../vue-temp/vue-editor-bridge'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return{
      token: window.localStorage.getItem('JWT_TOKEN'),
      dropdown: false,
      buttonLoading: false,
      categoryDropdown: false
    }
  },
  computed: {
    ...mapGetters({
      authenticated: 'auth/authenticated',
      user: 'auth/user',
    })
  },
  methods: {
    ...mapActions({
      signOutAction: 'auth/signOut'
    }),
    signOut() {
      this.buttonLoading = true
      this.signOutAction().then(() => {
        this.$router.push({
          name: 'Login'
        })
      this.dropdown = false

      })
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

.loader {
  font-size: 10px;
  margin: 4px auto;
  text-indent: -9999em;
  width: 2em;
  height: 2em;
  border-radius: 50%;
  background: #ffffff;
  background: -moz-linear-gradient(left, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
  background: -webkit-linear-gradient(left, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
  background: -o-linear-gradient(left, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
  background: -ms-linear-gradient(left, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
  background: linear-gradient(to right, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
  position: relative;
  -webkit-animation: load3 1.4s infinite linear;
  animation: load3 1.4s infinite linear;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
}
.loader:before {
  width: 50%;
  height: 50%;
  background: #ffffff;
  border-radius: 100% 0 0 0;
  position: absolute;
  top: 0;
  left: 0;
  content: '';
}
.loader:after {
  background: #42b983;
  width: 75%;
  height: 75%;
  border-radius: 50%;
  content: '';
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
@-webkit-keyframes load3 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load3 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

</style>
