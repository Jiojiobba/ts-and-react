import React from 'react'
import axios from 'axios'
//异步请求有个需求：显示和隐藏loading状态
//高阶组件就是一个函数，接受一个组件作为参数，返回一个新的组件
//对组件逻辑进行重用的一个高级技术，但高阶组件本身不是react 的API，
//这个只是一种模式，这个模式只是由react自身的组合性质产生的
interface ILoaderState {
    data :any,
    isLoading: boolean
}
interface ILoaderProps {
    data: any
}
//WithLoader本身是一个函数
//对比组件将props属性转化成一个UI，高阶组件则是由一个组件转化成另一个组件
//新的和旧的组件有什么区别：WrappedComponent是旧组件，最后retern回的是新的WrappedComponent组件
//区别就是多了一些属性（多了data），共之后使用。data是LoaderComponent里的state里的，会在生命周期函数里面做额外的事情：发送请求axios.get(url)
const withLoader = <P extends ILoaderState>(WrappedComponent: React.ComponentType<P>, url: string)=>{
   return class LoaderComponent extends React.Component<Partial<ILoaderProps>, ILoaderState>{
    constructor(props: any){
        super(props)
        this.state = {
            data :null,
            isLoading: false
        }
    }
    componentDidMount(){
        this.setState({
            isLoading:true,
        })
        axios.get(url).then(result => {
            this.setState({
                data:result.data,
                isLoading:false
            })
        })
    }
    //弊端：
    //1.无端添加界面结构：loading显示和不显示是一段逻辑代码，但是现在必须给他添加空节点和<p>data is loading</p>
    //2.难以理解
    //3.被包裹的组件Dogshow里的data 参数根本不知道从哪来的，是干什么的。必须研究包裹它的高阶组件才可以
    render(){
        const { data, isLoading } = this.state
        return (
            <>
            {(isLoading || !data) ? <p>data is loading</p> :
            <WrappedComponent {...this.props as P} data={data} />
            }
            </>
        )
    }

   }
}
export default withLoader