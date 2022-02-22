import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'
import { AlertContextProvider } from './context/alert/AlertContext'
import Home from './components/pages/Home'
import Alert from './components/layouts/Alert'
import About from './components/pages/About'
import NotFound from './components/pages/NotFound'
import { GithubProvider } from './context/github/GithubContext'
import Users from './components/Users/Users'

function App() {
  return (
    <GithubProvider>
      <AlertContextProvider>
        <Router>
          <div className='flex flex-col justify-between h-screen'>
            <Navbar />
            <main className='container mx-auto px-3 pb-12'>
              <Alert />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/user/:login' element={<Users />} />
                <Route path='/notfound' element={<NotFound />} />
                <Route path='/*' element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertContextProvider>
    </GithubProvider>
  )
}

export default App
