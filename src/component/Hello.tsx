import React, {useContext} from 'react'
import { ThemeContext } from '../App'
interface IHello {
    message?:string
}
const Hello :React.FC<IHello> = (props)=>{
    const theme = useContext(ThemeContext)
    console.log(theme)
    const style ={
        background: theme.background,
        color : theme.color
    }
    return <h2 style={style}>{props.message}</h2>
}
Hello.defaultProps = {
    message:"Hello World!cd"
}
export default Hello