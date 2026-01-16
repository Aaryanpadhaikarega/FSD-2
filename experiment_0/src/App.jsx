import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import SinglePageApp from './assets/components/Spa.jsx'
import Home from './assets/components/Home.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SinglePageApp />
    </>
  )
}

export default App
