import {defineStore} from 'pinia'
import { reqLogout, reqPhoneCode, reqUserInfo, reqUserLogin, reqUserRegister } from '@/api'
import { getToken, removeToken, setToken } from '@/Utils/token'
export const userStore = defineStore("userInfo",{
    state:()=>{
        return{
            userInfo:{},
            code:'',
            token:getToken()
        } 
    },
    actions:{
        async getPhoneCode(phone){
            let result = await reqPhoneCode(phone)
            if(result.code==200){
                this.code = result.data
                return "ok"
            }else{
                return Promise.reject(new Error("fail"))
            }            
        },
        async userRegister(user){
            let result = await reqUserRegister(user)
            if(result.code==200){
                return "ok"
            }else{
                return Promise.reject(new Error("fail"))
            }
        },
        async userLogin(data){
            let result = await reqUserLogin(data)
            if(result.code==200){
                this.token = result.data.token
                setToken(result.data.token)
                return "ok"
            }else{
                return Promise.reject(new Error("fail"))
            }
        },
        async getUserInfo(){
            let result = await reqUserInfo()
            if(result.code==200){
                console.log("6666666666666",result.data);
                this.userInfo = result.data
                console.log(this.userInfo);
                return "ok"
            }else{
                return Promise.reject(new Error("fail"))
            }
        },
        async userLogout(){
            let result = await reqLogout()
            if(result.code==200){
                this.token = "",
                this.userInfo = {},
                removeToken()
                return "ok"
            }else{
                return Promise.reject(new Error("fail"))
            }
        }
    },
    getters:{}
})