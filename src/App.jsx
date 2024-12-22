import { useEffect, useState } from 'react'

import './App.css'
import axios from 'axios'
const BAse_Url ="https://jsonplaceholder.typicode.com/"
function App() {

  const getDelet = async (PostId)=>{
await axios.delete(`${BAse_Url}/posts/${PostId}`)
console.log("Element silindi")
  }

  useEffect(()=>{
    getDelet(1)
  },[])
  return (
    <div>
      Salam
    </div>
  )
}

export default App
