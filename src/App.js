import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Auth/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
        <Route path='/contacts/:id' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App