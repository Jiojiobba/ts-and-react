import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './component/Hello'
import LikeButton from './component/LikeButton';
import TitleUpdate from './component/TitleUpdate';
import MouseTracker from './component/MouseTracker';
import useMousePostion from './hooks/useMousePostion';
import withLoader from './component/withLoader';
import useURLLoader from './hooks/useURLLoader';
import LikeButtonUseref from './component/LikeButtonUseref'

interface IThemeProps {
  [key: string]: {color: string; background: string}
}
const themes: IThemeProps = {
  'light': {
    color: '#000',
    background: '#eee',
  },
  'dark': {
    color: '#fff',
    background: '#222',
  },
}
export const ThemeContext = React.createContext(themes.light)//创建Context的方法
//ThemeConext是个reactContext类型，
//reactContext是个interface，有两个重要变量：Provider（数据提供者），Consumer（数据消费者），
//使用Provider，只需要把想要的context值的节点使用provider节点进行包裹，接受一个参数value，对应数值传入即可
//export将这个导出给别的地方使用


// interface IShowResult {
//   message: string;
//   status: string;
// }
// const DogShow : React.FC<{data: IShowResult}> = ({data})=>{
//   return (
//     <>
//     <h2>Dog show: {data.status}</h2>
//     <img src={data.message} />
//     </>
//   )
// }
const App : React.FC = () => {
  // const [show, setShow] = useState(true)  
  // const positions = useMousePostion()
  // const WrappedDogShow = withLoader(DogShow,'https://dog.ceo/api/breeds/image/random')
  // const [data, loading] = useURLLoader('https://dog.ceo/api/breeds/image/random')
  // const dogResult = data as IShowResult
  
  
  return (
    <div className="App">
       {/* 里面的组件想要使用全局创建的contexttheme怎么办？  */}
       {/* 只要在provider包裹的组件就可以非常快的使用 */}
       <ThemeContext.Provider value={themes.dark}>
         <LikeButton />
         <Hello />
      {/* { loading ? <p>🐕读取中……</p>  :
      <img src={dogResult && dogResult.message} /> } */}
      {/* <LikeButtonUseref /> */}
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p><button onClick={()=>{setShow(!show)}}>Toggle MouseTracker </button></p>
        {show &&  <MouseTracker />} */}
        {/* <TitleUpdate /> */}
        {/* <UesEffected /> */}
        {/* <p>X:{positions.x}, Y:{positions.y}</p> */}
      {/* </header> */}
      {/* <WrappedDogShow /> */}
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
