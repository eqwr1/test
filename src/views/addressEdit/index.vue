<template>
    <Header :title="地址编辑" />
    <van-address-edit
        :area-list="areaList"
        show-delete
        show-set-default
        show-search-result
        :address-info="addressInfo"
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="onSave"
        @delete="onDelete"
    />
</template>
<script>
import store from '@/store';
import { onMounted, reactive, toRefs,computed } from 'vue'
import Header from '../../components/Header.vue'
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { Toast } from 'vant';
export default {
    components:{
        Header
    },
    setup(){
        const route = useRoute()
        const router = useRouter()
        const state = useStore()
        const data = reactive({
            areaList:{
                
                province_list: {
                110000: "广东省",
                120000: "江西省",
                130000: "四川省"
                },
                city_list: {
                110100: "广州市",
                110200: "深圳市",
                110300: "东莞市",
                110400: "中山市",
                120100: "南昌市",
                120200: "赣州市",
                120300: "上饶市",
                120400: "吉安市",
                130100: "成都市",
                130200: "乐山市",
                130300: "自贡市",
                130400: "攀枝花市",
                },
                county_list: {
                110101: "天河区",
                110102: "南沙区",
                110103: "白云区",
                110201: "南山区",
                110202: "宝安区",
                110203: "龙岗区",
                110301: "洪梅镇",
                110302: "凤岗镇",
                110303: "洪梅镇",
                110404: "南区街道",
                120101: "东湖区",
                120101: "西湖区",
                120101: "青云谱区",
                120101: "高新区",
                120201: "章贡区",
                120301: "玉山县",
                120401: "吉水县",
                130101: "都江堰",
                130201: "市中区",
                130301: "大安区",
                130401: "东区",
                },
            },
            addressInfo: {},
        });
        const onSave = (content) => {
            // 新 增 和 编 辑
            if(route.query.type === "add") {
                store.commit("addaddress", content);
            } else {
                store.commit("editaddress", content);
            }
            Toast("保存成功")
            setTimeout(()=>{
                router.back()
            },1000 )
        };
        const onDelete = (content) => {
            store.commit("deleteaddress", content);
            Toast("删除成功")
            setTimeout(()=>{
                router.back()
            },1000 )
        };
        const init = () => {
            store.state.userAddress.forEach((item)=>{
                if(item.id === Number(route.query.id)){
                    data.addressInfo = item;

                }
            })
        };
        const address = computed(() =>{
            return route.query.type === "add" ? "地址新增" : "地址编辑";
        })
        onMounted(()=>{
            init();
        })
        return {
            onSave,
            onDelete,
            ...toRefs(data),
            address
        }
    },
}
</script>

<style lang="less" scoped>
/deep/ .van-button--danger {
  background-color: #ffc400;
  border-color: #ffc400;
}
/deep/ .van-switch--on {
  background-color: #ffc400;
}
</style>