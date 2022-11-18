import { reqTradeInfo,reqAddressInfo ,reqSubmitOrder } from "@/api"
import {defineStore} from "pinia"

export const tradeStore = defineStore("tradeInfo",{
    state:()=>{
        return{
            tradeInfo:{}
        } 
    },
    getters:{},
    actions:{
        async getAddressInfo(){
            let result = await reqAddressInfo()
            if(result.code==200){
                console.log("住哪啊!",result);
                this.tradeInfo = result.data
            }
        },
        async getTradeInfo(){
            let result = await reqTradeInfo()
            if(result.code==200){
                console.log("准备交易啦!",result.data);
                this.tradeInfo = result.data
            }
        },
        async submitOrder(sent){
            const {tradeNo,data} = sent 
            return await reqSubmitOrder(tradeNo,data)
        }
    }
})