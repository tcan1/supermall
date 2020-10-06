import axios from 'axios'
// export function request(config,success,failure){
//     const instance = axios.create({
//         baseURL:'http://152.136.185.210:8000/api/w6',
//         timeout:5000
//     })
//     instance(config).then(res => {
//         success(res)
//     }).catch(err => {
//         failure(err)
//     })
// }

// export function request(config){
//     return new Promise((resolve,reject)=>{
//         const instance = axios.create({
//         baseURL:'http://152.136.185.210:8000/api/w6',
//         timeout:5000
//         })
//         instance(config).then(res => {
//             resolve(res)
//         }).catch(err => {
//             reject(err)
//         })
//     })

export function request(config){
    //创建axios实例
    const instance = axios.create({
        baseURL:'http://152.136.185.210:8000/api/w6',
        timeout:5000
    })
    return instance(config)


}