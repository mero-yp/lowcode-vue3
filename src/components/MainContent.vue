<template>
    <div class="main-content-box">
        <div
            class="main-left-box"
        >
            <Page></Page>
        </div>
        <div
            class="main-middle-box"
        >
            <PageResult></PageResult>
        </div>
        <div
            class="main-right-box"
        >
            <Panel></Panel>
        
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Page from '../views/Page.vue';
import Panel from '../views/Panel.vue';
import PageResult from '../views/PageResult.vue'
export default defineComponent({
    components: {
        Page,
        Panel,
        PageResult
    },
    setup () {
        

        return {}
    }
})
</script>

<style lang="less" scoped>
.main-content-box{
     width: 100%;
     height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

}
.main-left-box{
    width: 30%;
    height: 100%;
   
}
.main-middle-box{
     width: 40%;
    height: 100%;
}
.main-right-box{
    width: 30%;
    height: 100%;
}
</style>