import { defineStore } from 'pinia'
import { reqProductList } from '@/api';

export const searchListStore = defineStore("searchList",{
    state:()=>{
       return {
        productList:{}
       }
    },
    getters:{
        productLists:(state)=> state.productList,
        trademarkLists:(state)=>state.productList.trademarkList,
        attrLists:(state)=>state.productList.attrsList
    },
    actions:{
        async getProductList(searchParams){
            searchParams = {...searchParams}
            // 处理params
            Object.keys(searchParams).forEach(key => {
                if (searchParams[key]==='') {
                delete searchParams[key] // 组件中的 options 也改变了
                }
            })
            let result = await reqProductList(searchParams)
            if(result.code===200){
                this.productList = result.data
            }
        }
    }
})