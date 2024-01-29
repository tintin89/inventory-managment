import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {AuthContextProvider} from './context/authContext'


function App() {
  const [count, setCount] = useState(0)


  return (
    <AuthContextProvider>
      <span>Hello world</span>
    </AuthContextProvider>
  )
}

export default App
