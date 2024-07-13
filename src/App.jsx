import Navbar from './Components/Navbar'
import NewsBoard  from './Components/NewsBoard'
import './Components/style.css'
import { useState } from 'react'

function App() {

  const [category, setCategory] = useState("general");
  return (
    <>
    <Navbar setCategory={setCategory} />
    <NewsBoard category={category} />
    </>
  )
}

export default App
