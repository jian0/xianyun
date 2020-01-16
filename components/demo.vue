<template>
  <div class="demo">
      <div class="navs">
          <span 
          v-for="(item,index) in ['新闻','娱乐','体育']" 
          :key="index"
          :class="{active:currentindex === index}"
          @click="handleClick(index)"
          >{{item}}</span>
      </div>
      <div class="things">
        <ul v-if="currentindex === 0">
          <li>aaaaa</li>
          <li>aaaaa</li>
          <li>aaaaa</li>
        </ul>
        <ul v-if="currentindex === 1">
          <li>bbbbb</li>
          <li>bbbbb</li>
          <li>bbbbb</li>
        </ul>
        <ul v-if="currentindex === 2">
          <li>cccccc</li>
          <li>cccccc</li>
          <li>cccccc</li>
        </ul>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentindex:0
    }
  },
  methods:{
    handleClick(index){
      this.currentindex = index
    }
  }
}
</script>

<style lang='less' scoped>
.demo {
  height: 150px;
  .navs {
    margin: 30px;
    span {
      margin-right: 20px;
      cursor: pointer;
      color: #000;
      &:hover {
        border-bottom: 2px solid #000;
      }
    }
    .active{
      color: #fff;
      background-color: #f00;
    }
  }
}
.things {
  background-color: pink;
}
</style>