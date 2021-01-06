import React, { useState, useEffect } from 'react'
//当我们想在两个函数之间共享逻辑的时候，会把它提取到第三个函数
//而组件、hook都是函数，所以适用方式，
//自定义的hook，名称一定要use开头，函数内部可以调用其他hook
//如果不遵循use开头，无法判断某函数内是否包含对其内部hook的调用
//在两个组件中使用相同的hook，会共享这个State吗？不会
//每次使用这个自定义hook的时候，其中的所有state副作用都是完全隔离的
const useMousePostion = () =>{
    const [positions, setPositions] = useState({x:0, y:0});
    useEffect(()=>{
       console.log('开始useEffect',positions.x)
        const updateMouse= (e: MouseEvent) =>{
            console.log('updateMouse更新鼠标位置参数')
            setPositions({x: e.clientX, y: e.clientY})
        }
        document.addEventListener('mousemove',updateMouse)
        return () => {
            console.log('remove effect')
            document.removeEventListener('mousemove', updateMouse)
        }  },[])
        //最后是不需要做任何逻辑的添加，不需要做view上面的工作
    return positions
  }
export default useMousePostion
//调用方法：先引入import useMousePosition from './ddddd/useMousePosition'useMousePostion.tsx'useMousePostion.tsx'
//然后const positions = useMousePositons()






















