<template>
  <div class="pt-20 w-full">
    <h1 class="text-center font-bold text-5xl mt-16 my-8">Sign In</h1>
    <div class="flex justify-center ">
      <div class="mx-4">
        <form action="" >
          <div>
            <label for="email" class="font-bold">Email</label><br>
            <input type="email" name="email" id="email" class="border py-1 px-4 rounded w-full my-2">
          </div>
          <div>
            <label for="password1" class="font-bold">Password</label><br>
            <input type="password1" name="password1" id="password1" class="border py-1 px-4 rounded w-full my-2">
          </div>

          <button class=" py-2 w-full mt-8 transition duration-500 ease-in-out transform hover:-translate-y-1 border border-primary rounded-md text-base font-bold py-1 px-6 bg-primary text-white hover:shadow-lg" type="submit">Login</button>
        </form>
      <div class="text-center my-4 flex justify-between">
        <img src="../assets/images/Line.svg" alt="line" class="w-40">
        OR
        <img src="../assets/images/Line.svg" alt="line" class="w-40">
      </div>
      <div class="text-center">Already have an account? <a class="text-primary hover:underline" href="#">Sign In</a></div>

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