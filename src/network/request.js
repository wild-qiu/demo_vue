import axios from 'axios'
   
export function request(config){
    const instance = axios.create({
        baseURL:'https://api.uomg.com/api/rand.music?id=4958439055&format=json ',
        timeout:50000
    })
    //解决跨域请求问题
    //请求拦截
    instance.interceptors.request.use(config =>{
        return config
    },err=>{
        console.log(err);
    })
    //拦截器
    instance.interceptors.response.use(res=>{
        return res.data
    },err=>{
        console.log(err);
    })
    return instance(config)
    
}