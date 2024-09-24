import { useState } from 'react'

import './App.css'

function App() {

    let [color,setColor] = useState("black")


  return (
    <>
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className='w-max bg-slate-200 m-auto px-3 py-2 rounded-md flex gap-2 '>
        <button className="px-3 py-1 rounded-md text-black bg-red-500" onClick={() => setColor("red")}>Red</button>
        <button className="px-3 py-1 rounded-md text-white bg-black" onClick={() => setColor("black")}>Black</button>
        <button className="px-3 py-1 rounded-md text-black bg-orange-400" onClick={() => setColor("brown")}>Chocolate</button>
        <button className="px-3 py-1 rounded-md text-black bg-purple-800" onClick={() => setColor("purple")}>Purple</button>
        <button className="px-3 py-1 rounded-md text-black bg-pink-900" onClick={() => setColor("pink")}>Pink</button>
        <button className="px-3 py-1 rounded-md text-black bg-yellow-300" onClick={() => setColor("yellow")}>Yellow</button>
      </div>
    </div>
      
    </>
  )
}

export default App
