import { defineStore } from 'pinia'
import { reqCheckedCartItem , reqDeleteCartItem , reqCartList } from '@/api'

export const shopCartStore = defineStore("shopCart",{
    state:()=>{
       return {
        cartList:[]
       }
    },
    getters:{
        // getCartList(state){   
        //     return state.cartList.cartInfoList ? state.cartList.cartInfoList : []; 
        // }
    },
    actions:{
        async getCartList(){
            const result = await reqCartList()
            if(result.code == 200){
                this.cartList = result.data[0]
            }
        },
        async updateCheckedById({skuId,isChecked}){
            const result = await reqCheckedCartItem(skuId,isChecked)
            if(result.code==200){
                return "ok"
            }else{
                return Promise.reject(new Error("fail"))
            }
        },
        async deleteCart(skuId){
            let result = await reqDeleteCartItem(skuId)
            if(result.code==200){
                return "ok"
            }else{
                return Promise.reject(new Error("fail"))
            }
        },
        async deleteAllCheckedCart(){
            let promiseAll = []
            this.cartList.cartInfoList.forEach((item)=>{
                let promise = item.isChecked == 1 ? this.deleteCart(item.skuId) : "";
                promiseAll.push(promise)
            }) 
            return Promise.all(promiseAll)
        },
        async updateAllCartChecked(isChecked){
            let promiseAll = []
            this.cartList.cartInfoList.forEach((item)=>{
                let promise = this.updateCheckedById({skuId:item.skuId,isChecked})
                promiseAll.push(promise)
            }) 
            return Promise.all(promiseAll)
        }
    }
})