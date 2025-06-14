import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Mainpage from './Components/ui/mainpage'
import Navbar from './Components/ui/Fashion/navbar'
// import Men from './Components/ui/Fashion/men/Men'
// import Women from './Components/ui/Fashion/women/women'
// import Baby from './Components/ui/Fashion/Baby/Baby'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  
    {/* <Mainpage />   */}
    <Navbar /> 
     {/* <Men />   */}
    {/* <Women /> */}
    {/* <Baby /> */}
    </>
  )
}

export default App