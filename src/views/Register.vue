<template>
  <div class="pt-20 w-full">
    <h1 class="text-center font-bold text-3xl sm:text-4xl mt-10 sm:mt-16 my-8">Sign Up</h1>
    <div class="flex justify-center ">
      <div class="mx-8">
        <form action="" @submit.prevent="handleSubmit">
        <div class="flex flex-wrap justify-between">
          <div class="w-full sm:w-48 m-0 sm:mr-4">
            <label for="first_name" class="font-bold">First Name</label><br>
            <input required type="text" name="first_name" id="first_name" class="border py-1 px-4 rounded w-full sm:w-48 my-2" v-model.lazy="$v.user.first_name.$model">
            <div v-if="errors">
              <span class="text-red" v-if="!$v.user.first_name.required">First name is required.</span>
            </div>
          </div>
          <div class="w-full sm:w-48">
            <label for="last_name" class="font-bold">Last Name</label><br>
            <input required type="last_name" name="last_name" id="last_name" class="border py-1 px-4 rounded w-full sm:w-48 my-2" v-model.lazy="$v.user.last_name.$model">
            <div v-if="errors">
              <span class="text-red" v-if="!$v.user.last_name.required">Last name is required.</span>
            </div>
          </div>
          </div>
          <div>
            <label for="email" class="font-bold">Email</label><br>
            <input required type="email" name="email" id="email" class="border py-1 px-4 rounded w-full my-2" v-model.lazy="$v.user.email.$model">
            <div v-if="errors">
              <span class="text-red" v-if="!$v.user.email.required">Email is required.</span>
              <span class="text-red" v-if="!$v.user.email.email">Email must be a valid email address</span>
            </div>
          </div>
          <div>
            <label for="password1" class="font-bold">Password</label><br>
            <input required type="password" name="password1" id="password1" class="border py-1 px-4 rounded w-full my-2" v-model.lazy="$v.user.password1.$model">
            <div v-if="errors">
              <p class="text-red" v-if="!$v.user.password1.required">this field is required</p>
              <p class="text-red" v-if="!$v.user.password1.strongPassword">Strong passwords need to have a letter, <br> a number, a special character, and be more than 8 characters long.</p>
            </div>
          </div>
          <div>
            <label for="password2" class="font-bold">Confirm Password</label><br>
            <input required type="password" name="password2" id="password2" class="border py-1 px-4 rounded w-full my-2" v-model.lazy="$v.user.password2.$model">
            <p v-if="errors" class="text-red">
              <span v-if="!$v.user.password2.sameAsPassword">The passwords do not match.</span>
            </p>
          </div>

          <button  type="submit" class=" py-2 w-full mt-8 transition duration-500 ease-in-out transform hover:-translate-y-1 border border-primary rounded-md text-base font-bold py-1 px-6 bg-primary text-white hover:shadow-lg">Register</button>
        </form>
      <div class="text-center my-4 flex justify-between">
        <img src="../assets/images/Line.svg" alt="line" class="w-40">
        OR
        <img src="../assets/images/Line.svg" alt="line" class="w-40">
      </div>
      <div class="text-center">Already have an account? <a class="text-primary hover:underline" href="/login">Sign In</a></div>

      </div>
    </div>

    
  </div>
</template>

<script>
import axios from 'axios';
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";

  export default {
    data(){
      return {
        dropdown: true,
        errors: false,
        empty: true,
        uiState: 'submit not clicked',
        user: {
          first_name: null,
          last_name: null,
          email: null,
          password1: null,
          password2: null,
        },
        submitted: false
      }
    },
    validations: {
      user: {
        first_name: { required },
        last_name: { required },
        email: { required, email },
        password1: { 
          required, 
          minLength: minLength(6),
          strongPassword(password1) {
            return (
              /[a-z]/.test(password1) && // checks for a-z
              /[0-9]/.test(password1) && // checks for 0-9
              password1.length >= 6
            );
          }
      },
        password2: {required, sameAsPassword: sameAs('password1')}
      }
    },
    methods: {

      handleSubmit() {
          this.submitted = true;

          this.empty = !this.$v.user.$anyDirty;
          this.errors = this.$v.user.$anyError;
          this.uiState = "submit clicked";
          if (this.errors === false && this.empty === false) {
            //this is where you send the responses
            axios.post('https://buyy.herokuapp.com/api/v1/rest-auth/registration/', this.user)
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });
            this.uiState = "form submitted";
          }else {
            console.log('failed')
          }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>