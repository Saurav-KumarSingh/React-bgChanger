import { useState } from 'react';
import BgChanger from './assets/bgChanger'
function App() {
  const [coloring, setColoring] = useState("#f296cc");
  let colorHandeler=(colors)=>{
    console.log(colors);
    setColoring(colors);
  }
  let btnColor=['red','orange','blue','green','yellow','purple','olive'];
  return (
    <>
      <div className='w-full h-screen'
      style={{backgroundColor:coloring}}
      ></div>
      <div className='fixed bottom-5 items-center text-center z-10 w-[75vw] rounded-2xl mx-40 py-2 bg-white'>
        {
          btnColor.map((color)=>{
            return <BgChanger key={color} color={color} colorHandeler={colorHandeler}/>
          })
        }
      </div>
    </>
  )
}

export default App
