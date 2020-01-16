<template>
  <div>
    <Header></Header>
    <nuxt />
    <Demo></Demo>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'
import Demo from '@/components/demo.vue'
export default {
    data () {
      return {
        
      }
    },
    components:{
      Header,Footer,Demo
    }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

ul,ol,li {
  list-style: none;
}

a {
  text-decoration: none;
  color: #000
}

em,i {
  font-style: normal;
}
</style>
