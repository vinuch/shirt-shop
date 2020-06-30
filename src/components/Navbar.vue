<template>
  <nav class="nav text-3xl flex px-4 py-4 bg-white shadow-lg fixed w-full top-0 z-30">
    <div class="nav-brand flex items-center w-full">
      <h1 class="inline-block">
        <a href="#" class="font-bold">Shirt-Shop</a>
      </h1>
      <ul class="flex inline-block ml-32">
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
    </div>
  </nav>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
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
  display: inline-block;
  margin: 0 10px;
}

</style>
