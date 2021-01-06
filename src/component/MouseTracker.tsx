import React, { useState, useEffect } from 'react'
const MouseTracker: React.FC = () => {
    const [positions, setPositions] = useState({x:0, y:0});
    useEffect(()=>{
        console.log('开始useEffect',positions.x)
   //为什么调用次数不是线性的，而是3，6，9,15这样
        //因为每次更新都会调用useEffect的回调函数，这时候会添加越来越多的click事件，但是没有及时清除
      
        const updateMouse= (e: MouseEvent) =>{
            console.log('updateMouse更新鼠标位置')
            setPositions({x: e.clientX, y: e.clientY})
        }
        document.addEventListener('click',updateMouse)

        return () => {
            console.log('remove effect')
            document.removeEventListener('click', updateMouse)
        }
   //这个返回函数，react会在执行清除操作时调用它，
        //react是如何清除effect的？react会在组件卸载的时候执行清除操作
        //react在执行当前effect的时候都会对上个effect进行清除
        //每次组件渲染都会调用一次effect，有些浪费，如何控制次数？
    },)
    console.log('render渲染前',positions.x)
    //useEffect有第二个参数deps：数组，只要传递组件作为它的第二个参数，数组包括任意多项，当任意一项发生变化的时候，就会重新跑这个effect
    //只想运行一次effect，传递[]作为第二个参数告诉react，这个effect不依赖于props或state的任意值，所以永远都不会重复执行
    return (
        <p>X:{positions.x}, Y:{positions.y}</p>
    )
  //控制什么时候才运行副作用effect
    //之前likeButton里面，like和on都会引发组件的更新，然后effect会一股脑的运行
    //现在加个依赖：[like]，只有当like更新时才会运行effect
    //effect清除机制避免了update和component中的重复，同时让相关代码更加紧密，避免bug
}
export default MouseTracker