<template>
  <div>
    <Header></Header>
    <nuxt />
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'
export default {
    data () {
      return {
        
      }
    },
    components:{
      Header,Footer
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
