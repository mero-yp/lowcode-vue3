<template>
  <div id="nav">
    <LayoutBox></LayoutBox>
  </div>
  <router-view/>
</template>
<script>
import LayoutBox from './components/LayoutBox.vue'

export default defineComponent({
  components: {
    LayoutBox
  },
  setup() {
    
  },
})
</script>

<style lang="less">
#app {
  
}

#nav {
  
}
</style>
