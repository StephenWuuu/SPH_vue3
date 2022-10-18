import { reqBannerList, reqCategoryList, reqFloorList, reqProductList } from '@/api'
import { defineStore } from 'pinia'

export const categoryListStore = defineStore('categoryList', {
    state:()=>{
        return{
            // 三级菜单数据
            categoryList:[],
            // 轮播图数据
            bannerList:[],
            floorList:[]
        }},
    actions:{
        async getCategoryList(){
            const result  = await reqCategoryList()
            if(result.code===200){
                this.categoryList = result.data
            }
        },
        async getBannerList(){
            const result = await reqBannerList()
            if(result.code===200){
                this.bannerList = result.data
            }
        },
        async getFloorList(){
            const result = await reqFloorList()
            if(result.code===200){
                this.floorList = result.data
            }
        }

    },
    getters:{
        categoryLists:(state)=> state.categoryList,
        bannerLists:(state)=>state.bannerList,
        floorLists:(state)=>state.floorList
    }

})
