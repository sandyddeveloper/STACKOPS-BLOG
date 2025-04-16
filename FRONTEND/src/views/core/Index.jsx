import React, { useRef } from 'react'
import MainNavbar from '../../components/main/MainNavbar'
import CategorySection from '../../components/ui/CategorySection'
import CategoryTicker from '../../components/ui/CategoryScroll';

const Index = () => {
  const scrollRef = useRef(null);

  return (
    <div className='bg-[#dde7f5]'>
      <MainNavbar />
      <CategorySection ref={scrollRef} />
      <CategoryTicker />
      
    </div>
  )
}

export default Index;
