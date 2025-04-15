import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Index from './views/core/Index'
import MainWrapper from './layouts/MainWrapper'
import Home from './pages/Home'
import LoginForm from './components/auth/LoginForm'
import RegisterForm from './components/auth/RegisterForm'
function App() {
  return (
    <>
      <BrowserRouter>
        <MainWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth/login" element={<LoginForm />} />
            <Route path="/auth/register" element={<RegisterForm />} />
            <Route path="/blog" element={<Index />} />
          </Routes>
        </MainWrapper>
      </BrowserRouter>
    </>
  )
}

export default App
