import { reqDetailInfo } from '@/api'
import { defineStore } from 'pinia'

export const detailInfoStore = defineStore("detailInfo",{
    state:()=>{
        return{
            detailInfo:{}
        } 
    },
    actions:{
        async getDetailInfo(skuId){
            const result = await reqDetailInfo(skuId)
            if(result.code === 200){
                this.detailInfo = result.data
            }
        }
    },
    getters:{
        categoryView (state) {
            const categoryView = state.detailInfo.categoryView
            return categoryView ? categoryView : {}
        },
        skuInfo(state){
            const skuInfo = state.detailInfo.skuInfo
            return skuInfo ? skuInfo : {}
        },
        skuImageList(state){
            const skuInfo = state.detailInfo.skuInfo
            return skuInfo ? skuInfo.skuImageList : []
        },
        spuSaleAttrList(state){
            const spuSaleAttrList = state.detailInfo.spuSaleAttrList
            return spuSaleAttrList ? spuSaleAttrList : []
        }
    }

}) 
