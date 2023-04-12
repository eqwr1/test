import { createStore } from "vuex";
import mutations from "./mutation";
export default createStore({
    state: {
        cartList: [], //购物车的数据
        isDelete:true, // 确定header组件 点击编辑的时候 底部组件的展示
        edit:true, // 默认展示编辑的状态
        orderList:[],
        userAddress:[
            {
                id: 1001,
                name: '凌宇轩',
                tel: '136570963428',
                province: '广东省',
                city: '深圳市',
                county: '南山区',
                addressDetail: '深圳湾',
                isDefault: true,
                areaCode: '110101',
              },
              {
                id: 1002,
                name: '云之凡',
                tel: '13874859685',
                province: '江西省',
                city: '南昌市',
                county: '东湖区',
                addressDetail: '滕王阁',
                isDefault: false,
                areaCode: '110102',
              },
              {
                id: 1003,
                name: '张伟',
                tel: '13869453785',
                province: '四川省',
                city: '乐山市',
                county: '市中区',
                addressDetail: '乐山大佛',
                isDefault: false,
                areaCode: '110103',
              },
        ],
        orderListEnd:[],
    },
    mutations,
    actions:{}
})