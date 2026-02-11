import React from 'react'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Poem from './pages/Poems.jsx'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Error from './pages/Error.jsx'
import Logout from './pages/Logout.jsx'
import AdminLayout from './components/Layout/Admin-Layout.jsx'
import AdminUser from './pages/Admin-User.jsx'
import AdminContact from './pages/Admin-Contact.jsx'
import AdminService from './pages/Admin-Service.jsx'
import AdminUpdate from './pages/Admin-Update.jsx'
import AdminUpdateContact from'./pages/Admin-Update-Contact.jsx'
import AdminUpdateService from './pages/Admin-Update-Service.jsx'
const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/poems' element={<Poem/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/logout' element={<Logout/>}/>
          <Route path='*' element={<Error/>} />

          <Route path='/admin' element={<AdminLayout/>}>
            <Route path='user' element={<AdminUser/>}/>
            <Route path='user/:id/edit' element={<AdminUpdate/>}/>
            <Route path='contact' element={<AdminContact/>}/>
            <Route path='contact/:id/edit' element={<AdminUpdateContact/>}/>
            <Route path='service' element={<AdminService/>}/>
            <Route path='service/:id/edit' element={<AdminUpdateService/>}/>
          </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
