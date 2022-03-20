<template>
  <div class="page-container">
    <div class="page-container-path">
      <div class="page-container-dropdown">
        <span>页面：</span>
        <a-dropdown
          :trigger="['click']"
          :overlayStyle="{ width: '250px' }"
          placement="bottomRight"
        >
          <div :style="{ width: '250px' }">
            首页
            <DownOutlined />
          </div>
          <template #overlay>
            <a-menu>
              <a-sub-menu
                v-for="item in pagePathOptions"
                :key="item.key"
                :title="item.title"
              >
                <a-menu-item class="menu-item-edit" @click="showEditModal(item)"
                  >编辑</a-menu-item
                >
                <a-menu-item class="menu-item-delete">删除</a-menu-item>
              </a-sub-menu>
            </a-menu>
          </template>
        </a-dropdown>
      </div>
      <div class="page-container-add" @click="showAddModal">
        <plus-outlined />
        <a-modal
          v-model:visible="amendPageShow"
          :title="modalTitle"
          @ok="handleAddPage"
        >
          <div class="page-container-add-path">
            <p>标题：</p>
            <a-input v-model:value="titleValue" placeholder="标题" />
          </div>
          <div class="page-container-add-path">
            <p>页面路径：</p>
            <a-input v-model="pathValue" placeholder="页面路径" />
          </div>
        </a-modal>
      </div>
    </div>
    <div class="component-container"></div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref } from "vue";
import { DownOutlined, PlusOutlined } from "@ant-design/icons-vue";
import { useStore } from "vuex";
export default defineComponent({
  components: {
    DownOutlined,
    PlusOutlined,
  },
  setup() {
    const store = useStore();
    const titleValue = ref<string>("111");
    const pathValue = ref<string>("111");
    const modalTitle = ref<string>('新建页面');
    const amendPageShow = ref<boolean>(false);
    const pagePathOptions = computed(() => store.state.page.pagePathOptions);
    const showAddModal = () => {
      amendPageShow.value = true;
    };
    const showEditModal = (data: any) =>{
         amendPageShow.value = true;
         modalTitle.value = '编辑页面';
         data.value  = titleValue.value;
         data.value  = pathValue.value;
         console.log('title', titleValue.value, 'key', pathValue.value, 'data++',data.value)
    }
    const handleAddPage = (e: MouseEvent) => {
      const newOption = reactive({ title: titleValue, key: pathValue })
      amendPageShow.value = false;
      store.commit('page/changePagePath',newOption);
    };
    const handleClick = () => {
      console.log(1111);
    };
    return {
      handleClick,
      amendPageShow,
      showAddModal,
      showEditModal,
      handleAddPage,
      titleValue,
      pathValue,
      pagePathOptions,
      modalTitle
    };
  },
});
</script>

<style lang="less" scoped>
.page-container {
  display: flex;
  flex-direction: column;
  background-color: rgb(30, 34, 45);
  width: 400px;
  height: 100%;
  padding: 10px;
  color: #fff;
}
.page-container-path {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40px;
}
.page-container-dropdown {
  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  &:hover {
    background-color: rgb(24, 26, 32);
  }
}
.page-container-add-path {
  width: 200px;
  margin: 0 8px 8px 0;
}
</style>