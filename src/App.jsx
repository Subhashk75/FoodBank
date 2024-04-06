import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import About from './components/About'
import Contect from './components/Contect'
import Body from './components/Body'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Header />
       <Body></Body>
       <Footer></Footer>
      {/*<About></About> */}
      {/* <Contect></Contect> */}
    </>
  )
}

export default App
