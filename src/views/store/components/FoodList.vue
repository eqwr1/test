<template>
    <div class="food-list" v-if="index === 0">
        <van-tree-select
            v-model:main-active-index="activeIndex"
            height="55vw"
            :items="items"
            @click-nav="navClick"
        >
      <template #content>
        <div v-for="(item,index) in subItem" class="item-bg">
            <food-list-item :item="item" 
            :handleAdd="handleAdd"
            :handleChange="handleChange"/>
        </div>
      </template>
    </van-tree-select>

    </div>
    <div v-else>
        {{ foodData.content }}
    </div>
</template>
<script>
import { reactive,toRefs } from 'vue'
import FoodListItem from './FoodListItem.vue'
import ListItem from '@/components/ListItem.vue'
export default {
    props: ["index", "foodData"],
    components:{
        FoodListItem
    },
    setup(props){
        let data = reactive({
            activeIndex:0,
            items: [],
            subItem:[]
        })
        // 初始化数据
        const initData = () => {
            let newArry = [];
            props.foodData?.items?.forEach((item,index) => {
                newArry.push({
                    text: item.text,
                });
                // 最后的subItem 是最后一项
                if(data.activeIndex === index) {
                    data.subItem = item.children;
            }    
            });
            data.items = newArry
        }
        initData()

        const navClick = (i) => {
            data.activeIndex = i;
            initData();
        };
        const handleAdd = (id)=>{
            data.subItem.forEach((item,index) =>{
                if(item.id === id) {
                    item.add = false;
                    item.num += 1;
                }
            });
        }
        const handleChange = (value,detail) => {
            data.subItem.forEach((item) =>{
                if (item.id === detail.name) {
                    item.num = value
                }
            });
        };
        return {
            ...toRefs(data),
            navClick,
            handleAdd,
            handleChange
        }
    }
}
</script>
<style lang="less" scoped>
.food-list {
  margin-top: 20px;
  .item-bg {
    padding: 10px;
  }
  }
  /deep/ .van-tree-select__item--active {
    color: #ffc400;
  }
  /deep/ .van-sidebar-item--select::before {
    background-color: #ffc400;
  }
</style>