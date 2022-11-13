import { defineStore } from 'pinia'
import { reqCheckedCartItem , reqDeleteCartItem , reqCartList } from '@/api'

export const shopCartStore = defineStore("shopCart",{
    state:()=>{
       return {
        cartList:[]
       }
    },
    getters:{

    },
    actions:{
        async getCartList(){
            const result = await reqCartList()
            if(result.code == 200){
                this.cartList = result.data
            }
        },

    }
})