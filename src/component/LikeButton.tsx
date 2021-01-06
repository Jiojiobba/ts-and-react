import React, { useState, useEffect } from 'react'

const LikeButton :React.FC = ()=>{
    const [like, setLike] = useState(0)//数组解析，此时typeInferance会使得like自动获得number的类型，setLike也只能传入number类型
    //里面的值可以是数字、字符串、布尔值等等，但class里面的一定是对象
    //useState返回值是个array，0是点赞此次数
    //返回的第一个是当前state值，第二个是更新state的函数
    //useState和class里面的this.state提供的功能完全一样
    //一般在函数执行完退出后，变量就会消失，而state中的变量会被react保留
    const [on, setOn] = useState(true)
    //2.const [obj, setObj] = useState({like:0, on:true})
    // onClick={()=>{setObj({like:obj.like+1})}}//错误，必须要
    //onClick={()=>{setObj({like:obj.like+1}, on:!obj.on)}}写完,因为是替换整个对象值，不是里面的属性
    
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
    //把单独的state变量拆开，好处：把相关的逻辑抽取到自定义的hook变得更加容易，
    //把所有state都放在同一个useState中调用，或者把每个字段都对应一个单独的useState进行调用
    //把相关state组合到独立的state变量，组件会变得更加可读
    //useState让在函数中添加state变成了可能
    //useState其实是Functional tyle，它也支持泛型
}

export default LikeButton