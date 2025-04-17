import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Index from './views/core/Index'
import MainWrapper from './layouts/MainWrapper'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import NotFoundPage from './pages/NotFoundPage'
import AboutPage from './pages/AboutPage'
import ProfilePage from './components/main/ProfilePage'
import BlogDetailPage from './components/main/BlogDetailPage'
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
            <Route path="/aboutus" element={<AboutPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/blog-detail" element={<BlogDetailPage />} />
          </Routes>
        </MainWrapper>
      </BrowserRouter>
    </>
  )
}

export default App
