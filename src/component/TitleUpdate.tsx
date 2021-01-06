import React, { useEffect, useState } from 'react'
const TitleUpdate :React.FC = ()=>{
    const [like, setLike] = useState(0)//数组解析
    const [on, setOn] = useState(true)
    useEffect(()=>{
        //需要在渲染后执行哪些操作，react会保存传递的这个函数
        //函数里面的内容就是effect，并且在执行dom更新后调用它
        console.log("document title effect is running!")
        document.title = `点击了${like}次`
    },[like])
    //useEffect第一个参数是React.Effectcallback，是一个函数类型，没有参数，返回void或者返回另一个函数
    //第二个参数是可选的deps，readonly any[]/undefined
    //useEffect会在在【第一次渲染】和【每次】渲染之后都执行，不用考虑是挂载还是更新
    return (
        <>
        <button onClick={()=>{setLike(like + 1)}}>
            {like}👍
        </button>
        <button onClick={()=>{setOn(!on)}}>
            {on ? 'ON' : 'OFF'}
        </button>
        </>
    )
    //把单独的state拆开
}
export default TitleUpdate