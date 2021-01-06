import { useState, useEffect } from 'react'
//useState只是loading状态，useEffect在什么时候发送请求
import axios from 'axios'
//加载什么样子的数据？url。在什么情况下要重新触发数据加载？deps默认为一个空数组
 const useURLLoader = (url: string , deps: any[] = [])=>{
     //data：获得的数据。一开始设置为null，会使得data类型判断有误，会将data判断为null类型
     //所以要显式的传递一下：useState<any>(null)
     const [data, setData] = useState<any>(null)
     const [loading, setLoading] = useState(false)
     useEffect(()=>{
         setLoading(true)
         axios.get(url).then((result)=>{
             setData(result.data)
             setLoading(false)
         })
     },deps)
     return [data, loading]
     //开始发送请求,刚开始把loading设置为true表示正在加载
 }
 export default useURLLoader