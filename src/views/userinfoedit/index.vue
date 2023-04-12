<template>
    <Header />
    <div>
        <van-field v-model="name" label="昵称" placeholder="请输入昵称"/>
        <van-field v-model="sign" label="个性签名" placeholder="个性签名" disabled/>
        <van-field v-model="pass" label="密码" placeholder="请输入密码"/>
    </div>
    <van-button ty="primary" color="#ffc400" round blocak class="save-btn"
    @click="save">保存</van-button>
    <van-button ty="primary" color="#ffc400" round blocak class="save-btn"
    @click="logOut">退出登录</van-button>
</template>
<script>
import { reactive, toRefs } from 'vue'
import Header from '../../components/Header.vue'
import { Toast } from 'vant'
import { useRouter } from 'vue-router'
export default {
    components: {
        Header
    },
    setup() {
        const data = reactive({
            name:'',
            sign:'小时候我们用长大去憧憬，长大后我们用童年去慰藉',
            pass:''
        })
        const router = useRouter()
        const save = () => {
            if(data.name && data.pass){
                let userInfo = JSON.parse(localStorage.userInfo);
                let newUserInfo = {
                    user: data.name || userInfo.name,
                    pass: data.pass || userInfo.pass,
                };
                localStorage.setItem("userInfo", JSON.stringify(newUserInfo));
                Toast("修改成功");
                router.push('/mine');
            } else {
                Toast("请输入内容");
            }
        };
        const logOut = () => {
            localStorage.removeItem('isLogin');
            router.push("/login");
            Toast("退出成功");
        };
        return {
            ...toRefs(data),
            save,
            logOut,
            router
        }
    }
}
</script>
<style lang="less" scoped>
.save-btn {
  width: 80%;
  margin: 20px auto;
}
</style>