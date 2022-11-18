import { reqPayInfo } from "@/api"
import {defineStore} from "pinia"

export const payStore = defineStore("pay",{
    state:()=>{
        return {
            payInfo:{}
        }
    },
    getters:{},
    actions:{
        async getPayInfo(orderId){
            let result =  await reqPayInfo(orderId)
            if(result.code==200){
                console.log(result.data);
                this.payInfo = result.data
            }
        }
    }
})