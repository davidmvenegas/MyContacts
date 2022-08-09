import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from "react-router-dom"
import Auth from './components/0-auth/auth'
import Dashboard from './components/2-dashboard/dashboard'
import Contacts from './components/3-contacts/contacts'
import Contact from './components/4-contact/contact'

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