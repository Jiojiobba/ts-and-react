import React, { useState, useEffect, useRef } from 'react'

const LikeButtonUseref :React.FC = ()=>{
    const [like, setLike] = useState(0)//数组解析，此时typeInferance会使得like自动获得number的类型，setLike也只能传入number类型
    const [on, setOn] = useState(true)
    const likeRef = useRef(0)
    const didMountRef = useRef(false)
    const domRef = useRef<HTMLInputElement>(null)
    //2.useRef是个函数，返回MutableRefObject（是个interface，里面只有一个current：T属性，这个
    //和直接创建一个obj{current:'12'}有什么区别呢？
    //区别就是：ref在所有render里面都保持着唯一的引用，因此所有对ref的赋值还是取值，拿到的都是一个最终的状态
    //而不会在不同的render之间存在一定的隔离

    //3.修改ref值是不会引发组件的render
    useEffect(()=>{
        // console.log('document title effect is running')
        document.title = `点击了${like}次`
    },[like])
    useEffect(()=>{
        if(didMountRef.current){
            console.log(didMountRef.current,'this is updated')
        }else{
            console.log(didMountRef.current,'第一次')
            didMountRef.current = true
        }
    })
    useEffect(()=>{
        if(domRef && domRef.current){
            domRef.current.focus()
        }
    })
    function handleAlertClick(){
        setTimeout(() =>{
            alert('you clicked on' + likeRef.current)},3000)
    }//1.闭包，将你在点击alert时的like值原封不动的保存下来，每次渲染都有独特的事件处理函数
    //在任意一次渲染中props和state是保持不变的，如果这俩相互独立的话，那么使用到它们的任何值也是独立的
    //有没有可能让不同的渲染之间发生千丝万缕的联系？有，用useRef
    return (
        <>
        <input type="text" ref={domRef} />
        <button onClick={()=>{setLike(like + 1); likeRef.current++}}>
            {like}👍
        </button>
        <button onClick={()=>{setOn(!on)}}>
            {on ? 'ON' : 'OFF'}
        </button>
        <button onClick={handleAlertClick}>
           Alert!
        </button>
        </>
    )
  
}

export default LikeButtonUseref
//4.常用功能：访问dom节点,useref返回的值传递给组件或者dom的ref属性就可以通过
//ref.current值访问组件或者真实的dom节点，从而对dom进行操作：监听事件等等
