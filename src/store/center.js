import {defineStore} from "pinia"
import { reqOrderInfo } from "@/api"

export const centerStore = defineStore("center",{
    state:()=>{
        return {
            orderInfo:{}
        }
    },
    getters:{},
    actions:{
        async getOrderInfo(page,limit){
            let result = await reqOrderInfo(page,limit)
            console.log("2222222222",result);
            if(result.code==200){
                this.orderInfo = result.data
            }
        }
    }
})