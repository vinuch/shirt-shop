<template>
  <div>
    <Carousel />
    <Features />
    <SampleProducts />
    <InstagramBlock />
    <Newsletter />
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from '@/components/Carousel'
import Features from '@/components/Features'
import SampleProducts from '@/components/SampleProducts'
import InstagramBlock from '@/components/InstagramBlock'
import Newsletter from '@/components/Newsletter'

export default {
  name: 'Home',
  components: {
    Carousel,
    Features,
    SampleProducts,
    InstagramBlock,
    Newsletter,
  }
}
</script>

<style scoped>

</style>
