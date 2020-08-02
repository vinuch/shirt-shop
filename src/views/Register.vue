<template>
  <div class="pt-20 w-full">
    <h1 class="text-center font-bold text-5xl mt-16 my-8">Sign Up</h1>
    <div class="flex justify-center ">
      <div class="mx-4">
        <form action="" >
        <div class="flex flex-wrap justify-between">
          <div class="w-full sm:w-48 mr-4">
            <label for="first_name" class="font-bold">First Name</label><br>
            <input type="text" name="first_name" id="first_name" class="border py-1 px-4 rounded w-full sm:w-48 my-2">
          </div>
          <div class="w-full sm:w-48">
            <label for="last_name" class="font-bold">Last Name</label><br>
            <input type="last_name" name="last_name" id="last_name" class="border py-1 px-4 rounded w-full sm:w-48 my-2">
          </div>
          </div>
          <div>
            <label for="email" class="font-bold">Email</label><br>
            <input type="email" name="email" id="email" class="border py-1 px-4 rounded w-full my-2">
          </div>
          <div>
            <label for="password1" class="font-bold">Password</label><br>
            <input type="password1" name="password1" id="password1" class="border py-1 px-4 rounded w-full my-2">
          </div>
          <div>
            <label for="password2" class="font-bold">Confirm Password</label><br>
            <input type="password2" name="password2" id="password2" class="border py-1 px-4 rounded w-full my-2">
          </div>

          <button class=" py-2 w-full mt-8 transition duration-500 ease-in-out transform hover:-translate-y-1 border border-primary rounded-md text-base font-bold py-1 px-6 bg-primary text-white hover:shadow-lg" type="submit">Register</button>
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
  export default {
    
  }
</script>

<style lang="scss" scoped>

</style>