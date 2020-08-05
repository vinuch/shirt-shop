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

          <button class=" py-2 w-full mt-8 transition duration-500 ease-in-out transform hover:-translate-y-1 border border-primary rounded-md text-base font-bold py-1 px-6 bg-primary text-white hover:shadow-lg" type="submit">Login</button>
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
import axios from 'axios'
import { required, email } from "vuelidate/lib/validators";

  export default {
        data(){
      return {
        // dropdown: true,
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
      handleSubmit() {
          let self = this;
          this.submitted = true;

          this.empty = !this.$v.user.$anyDirty;
          this.errors = this.$v.user.$anyError;
          this.uiState = "submit clicked";
          if (this.errors === false && this.empty === false) {
              console.log(this.user)

            //this is where you send the responses
            axios.post('http://buyy.herokuapp.com/api/v1/rest-auth/login/', self.user)
            .then(function (response) {
              window.localStorage.setItem('JWT_TOKEN', response.data.access)
              console.log(response);
              self.$router.push('/');
            })
            .catch(function (error) {
             
              console.log(error);
            });
            this.uiState = "form submitted";
          }else {
            console.log('failed')
          }
      },
    }
  }
</script>

<style lang="scss" scoped>

</style>