import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// 右上角的圈圈关闭
NProgress.configure({ showSpinner: false })

const requests = axios.create({
    baseURL:"/api",
    timeout:5000
})

requests.interceptors.request.use((config)=>{
    NProgress.start()
    return config
})

requests.interceptors.response.use((response)=>{
    NProgress.done()
    return response.data
},(error)=>{
    NProgress.done()
    return Promise.reject(error)
})

export default requests
