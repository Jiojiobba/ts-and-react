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

interface IShowResult {
  message: string;
  status: string;
}
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
  const [data, loading] = useURLLoader('https://dog.ceo/api/breeds/image/random')
  const dogResult = data as IShowResult
  
  
  return (
    <div className="App">
      {/* { loading ? <p>🐕读取中……</p>  :
      <img src={dogResult && dogResult.message} /> } */}
      <LikeButtonUseref />
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p><button onClick={()=>{setShow(!show)}}>Toggle MouseTracker </button></p>
        {show &&  <MouseTracker />} */}
        {/* <TitleUpdate /> */}
        {/* <UesEffected /> */}
        {/* <p>X:{positions.x}, Y:{positions.y}</p> */}
      {/* </header> */}
      {/* <WrappedDogShow /> */}
    </div>
  );
}

export default App;
