<template>
  <div class="header">
    <van-icon name="arrow-left" class="icon" @click="toBack" />
    <div>{{ title }}</div>
    <div class="edit" v-if="edit" @click="handleEdit">
      {{ store.state.edit ? "编辑" : "完成" }}
    </div>
  </div>
</template>
<script>
import { useRouter } from "vue-router";
import { Toast } from 'vant';
import { useStore } from 'vuex';
export default {
  props: ["title","edit"],
  setup() {
    const store = useStore()
    const router = useRouter();
    const toBack = () => {
      router.back();
    };
    const handleEdit = ()=>{
      if(store.state.cartList.length) {
        store.commit("edit")
        store.commit('changeDelete')
      }else {
        Toast.fail('请添加商品到购物车！')
      }
    }
    return {
      toBack,
      handleEdit,
      store
    };
  },
};
</script>
<style lang="less" scoped>
.header {
  background-color: #fff;
  height: 40px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #d7d7d7;
  
  .icon {
    position: absolute;
    left: 10px;
  }
  .edit {
    position: absolute;
    right: 10px;
  }
}
</style>