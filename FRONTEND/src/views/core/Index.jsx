import React, { useRef } from "react";
import MainNavbar from "../../components/main/MainNavbar";
import CategorySection from "../../components/ui/CategorySection";
import CategoryTicker from "../../components/ui/CategoryScroll";
import ContentCardList from "../../components/main/ContentCardList";
import BlogList from "../../components/main/BlogCard";
import TechSection from "../../components/main/TechSection";
import TechTicker from "../../components/ui/TechScroll";
import BlogFooter from "../../components/ui/BlogFooter";
import MixedSection from "../../components/main/MixedBlogSection";

const Index = () => {
  const scrollRef = useRef(null);

  return (
    <main>
    <div className="bg-[#dde7f5]">
      <MainNavbar />
      <CategorySection ref={scrollRef} />
      <CategoryTicker />
      <div className="flex items-center justify-center p-4 sm:p-12 w-full">
        <div className="w-full max-w-8xl">
          <ContentCardList />
        </div>
      </div>
      <div className="px-0 sm:px-0 md:px-20 py-[100px]">
      <BlogList />
      </div>
      <TechTicker />
      <TechSection />\
      <MixedSection />
    </div>
    <BlogFooter />
    </main>
  );
};

export default Index;
