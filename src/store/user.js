import {defineStore} from 'pinia'
import { reqPhoneCode, reqUserRegister } from '@/api'
import { getToken } from '@/Utils/token'
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
            console.log("*****",user);
            let result = await reqUserRegister(user)
            console.log(".........",result);
            if(result.code==200){
                return "ok"
            }else{
                return Promise.reject(new Error("fail"))
            }
        }
    },
    getters:{}
})