<template>
  <div>
    <Carousel />
    <Features />
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from '@/components/Carousel'
import Features from '@/components/Features'

export default {
  name: 'Home',
  components: {
    Carousel,
    Features
  }
}
</script>

<style scoped>
div {
  color: #42b983;
}
</style>
