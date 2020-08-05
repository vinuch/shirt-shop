<template>
  <div class="pt-20 w-full">
    <h1 class="text-center font-bold text-5xl mt-8 my-8">Sign In</h1>
    <div class="flex justify-center ">
      <div class="mx-4">
        <form action="" @submit.prevent="handleSubmit" >
          <div>
            <label for="email" class="font-bold" >Email</label><br>
            <input type="email" name="email" id="email" class="border py-1 px-4 rounded w-full my-2" v-model.lazy="$v.user.email.$model">
          </div>
          <div>
            <label for="password" class="font-bold">Password</label><br>
            <input type="password" name="password" id="password" class="border py-1 px-4 rounded w-full my-2" v-model.lazy="$v.user.password.$model">
          </div>

          <button class=" py-2 w-full mt-8 transition duration-500 ease-in-out transform hover:-translate-y-1 border border-primary rounded-md text-base font-bold py-1 px-6 bg-primary text-white hover:shadow-lg" type="submit">
            <div v-if="buttonLoading" class="loader w-4"></div>
            <div v-else>Login</div>
            <!-- Login -->
          </button>
        </form>
      <div class="text-center my-4 flex justify-between">
        <img src="../assets/images/Line.svg" alt="line" class="w-40">
        OR
        <img src="../assets/images/Line.svg" alt="line" class="w-40">
      </div>
      <div class="text-center">Dont have an account? <a class="text-primary hover:underline" href="/register">Sign up</a></div>

      </div>
    </div>
    
  </div>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";
import { mapActions } from 'vuex'

  export default {
        data(){
      return {
        buttonLoading: false,
        errors: false,
        empty: true,
        uiState: 'submit not clicked',
        user: {
          email: null,
          password: null,
        },
        submitted: false
      }
    },
    validations: {
      user: {
        email: { required, email },
        password: { 
          required
      },
      }
    },

    methods: {
      ...mapActions({
        signIn: 'auth/signIn'
      }),
      async handleSubmit() {
          this.submitted = true;

          this.empty = !this.$v.user.$anyDirty;
          this.errors = this.$v.user.$anyError;
          this.buttonLoading = !this.buttonLoading;
          if (this.errors === false && this.empty === false) {
            let loginSuccess = await this.signIn(this.user).then(true)
            loginSuccess ? this.$router.push('/') : ''

            
          }else {
            console.log('failed')
          }
      },
    }
  }
</script>

<style scoped>
.loader {
  font-size: 10px;
  margin: 5px auto;
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