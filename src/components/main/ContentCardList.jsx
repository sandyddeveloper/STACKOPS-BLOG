import React from "react";
import ContentCard from "../ui/ContentCard";

const cards = [
  {
    image: "https://discordbanners.vercel.app/static/img/profile_discord.jpg",
    title: "Laugh Lounge: Comedy Capers and Chuckles",
    date: "Dec 12, 2023",
  },
  {
    image: "https://discordbanners.vercel.app/static/img/profile_discord.jpg",
    title: "Oceans Unexplored: Secrets of the Deep",
    date: "Dec 12, 2023",
  },
  {
    image: "https://discordbanners.vercel.app/static/img/profile_discord.jpg",
    title: "Console Corner: Exploring Gaming Platforms",
    date: "Dec 12, 2023",
  },
  {
    image: "https://discordbanners.vercel.app/static/img/profile_discord.jpg",
    title: "Startup Spotlight: Unveiling Business Triumphs",
    date: "Dec 12, 2023",
  },
];

const ContentCardList = () => {
  return (
    
<div className="bg-[#ffffff] rounded-3xl p-6">
  <h2 className="text-3xl font-bold text-[#1e1e2f] text-center ">Latest Articles</h2>
  <p className="text-sm text-gray-500 mt-1 text-center mb-4">
  Explore the latest trends, stories, and insights across genres.
          </p>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {cards.map((card, index) => (
      <ContentCard
        key={index}
        image={card.image}
        title={card.title}
        date={card.date}
      />
    ))}
  </div>
</div>
  );
};

export default ContentCardList;
