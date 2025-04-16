import React, { useRef } from 'react'
import MainNavbar from '../../components/main/MainNavbar'
import CategorySection from '../../components/ui/CategorySection'
import CategoryTicker from '../../components/ui/CategoryScroll';
import ContentCardList from '../../components/main/ContentCardList';

const Index = () => {
  const scrollRef = useRef(null);

  return (
    <div className='bg-[#dde7f5]'>
      <MainNavbar />
      <CategorySection ref={scrollRef} />
      <CategoryTicker />
      <div className="flex items-center justify-center p-4 sm:p-12 w-full">
  <div className="w-full max-w-8xl">
    <ContentCardList />
  </div>
</div>

      
    </div>
  )
}

export default Index;
