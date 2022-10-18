import axios from "axios";
const mockRequests = axios.create({
    baseURL:"/mock",
    timeout:10000
})

mockRequests.interceptors.request.use((config)=>{
    return config
})

mockRequests.interceptors.response.use((response)=>{
    return response.data
},(error)=>{
    return Promise.reject(error)
})

export default mockRequests