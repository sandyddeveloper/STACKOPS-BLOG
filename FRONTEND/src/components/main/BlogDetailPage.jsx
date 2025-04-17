import React from 'react'
import MNavbar from './MainNavbar'
import BlogFooter from '../ui/BlogFooter'
import CommentSection from '../ui/CommentSection'

const BlogDetailPage = () => {
  return (
    <div>
        <MNavbar/>
        <div className='h-screen'>
            nalla yosichi oru detail page ah design pannu papom....
        </div>
        <CommentSection />
        <BlogFooter />
    </div>
  )
}

export default BlogDetailPage