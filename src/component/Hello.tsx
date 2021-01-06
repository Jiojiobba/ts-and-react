import React from 'react'
interface IHello {
    message?:string
}
const Hello :React.FC<IHello> = (props)=>{
    
    return <h2>{props.message}</h2>
}
Hello.defaultProps = {
    message:"Hello World!cd"
}
export default Hello