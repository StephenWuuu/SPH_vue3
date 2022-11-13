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
// 获取商品细节
export const reqDetailInfo = (skuId)=>requests({url:`/item/${skuId}`,method:"get"})
// 加入购物车
export const reqAddShopCar = (skuId,skuNum)=>requests({url:`/cart/addToCart/${ skuId }/${ skuNum }`,method:"post"}) 
// 获取购物车列表
export const reqCartList = ()=>requests({url:`/cart/cartList`,method:"get"})
// 改变商品的选取状态
export const reqCheckedCartItem = (skuId,isChecked)=>requests({url:`/cart/checkCart/${skuId}/${isChecked}`,method:"get"})
// 删除商品
export const reqDeleteCartItem = (skuId)=>requests({url:`/cart/deleteCart/${skuId}`,method:"delete"})