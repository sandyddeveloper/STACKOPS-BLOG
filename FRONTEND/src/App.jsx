import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Index from './views/core/Index'
import MainWrapper from './layouts/MainWrapper'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import NotFoundPage from './pages/NotFoundPage'
function App() {
  return (
    <>
      <BrowserRouter>
        <MainWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/404-not-found" element={<NotFoundPage />} />
            <Route path="/auth/login" element={<LoginPage />} />
            <Route path="/auth/register" element={<RegisterPage />} />
            <Route path="/blog" element={<Index />} />
          </Routes>
        </MainWrapper>
      </BrowserRouter>
    </>
  )
}

export default App
