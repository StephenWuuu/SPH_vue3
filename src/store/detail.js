import { reqDetailInfo ,reqAddShopCar} from '@/api'
import { getUUID } from '@/Utils/uuid_token'
import { defineStore } from 'pinia'

export const detailInfoStore = defineStore("detailInfo",{
    state:()=>{
        return{
            detailInfo:{},
            uuid_token:getUUID()
        } 
    },
    actions:{
        async getDetailInfo(skuId){
            const result = await reqDetailInfo(skuId)
            if(result.code === 200){
                this.detailInfo = result.data
            }
        },
        async addShopCar({skuId,skuNum}){
            const result = await reqAddShopCar(skuId,skuNum)
            if(result.code==200){
                return "ok"
            }else{
                return Promise.reject(new Error("fail"))
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
