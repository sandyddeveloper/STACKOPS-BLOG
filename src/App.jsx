import { Route, Routes } from 'react-router-dom'
import Index from './views/core/Index'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import NotFoundPage from './pages/NotFoundPage'
import AboutPage from './pages/AboutPage'
import ProfilePage from './components/main/ProfilePage'
import BlogDetailPage from './components/main/BlogDetailPage'
import CategoryDetail from './components/main/CategoryFilterPage'
import PrivateRoute from './layouts/PrivateRoute'

function App() {
  return (
    <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/404-not-found" element={<NotFoundPage />} />
            <Route path="/auth/login" element={<LoginPage />} />
            <Route path="/auth/register" element={<RegisterPage />} />
            <Route element={<PrivateRoute />}>
            <Route path="/blog" element={<Index />} />
            <Route path="/aboutus" element={<AboutPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/blog/category/:slug" element={<CategoryDetail />} />
            <Route path="/blog/:slug" element={<BlogDetailPage />} />
            </Route>
          </Routes>
    </>
  )
}

export default App
