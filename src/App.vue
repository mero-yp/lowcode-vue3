<template>
  <div id="nav">
  <router-view/>
  </div>
</template>
<script>
import LayoutBox from './components/LayoutBox.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  components: {
    LayoutBox
  },
  setup() {
    
  },
})
</script>

<style lang="less" scoped>
#app {
  
}

#nav {
  width: 100vw;
  height: 100vh;
}
</style>
