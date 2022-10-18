import requests from "./requests";
import mockRequests from "./mockRequests";
import { method } from "lodash";

// 获取三级菜单
export const reqCategoryList = ()=>requests({url:"/product/getBaseCategoryList",method:"get"})
// 获取广告轮播数据
export const reqBannerList = ()=>mockRequests.get("/banner")
// 获取floor数据
export const reqFloorList = ()=>mockRequests.get("/floor")
// 获取商品数据
export const reqProductList = (params)=>requests({url:"/list",method:"post",data:params})
