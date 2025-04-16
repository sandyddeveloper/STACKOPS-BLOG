const techItems = [
    {
      title: "Future Forward: Technology’s Evolution Unveiled",
      date: "December 12, 2023",
      image: "https://discordbanners.vercel.app/static/img/profile_discord.jpg",
    },
    {
      title: "Future Forward: Technology’s Evolution Unveiled",
      date: "December 12, 2023",
      image: "https://discordbanners.vercel.app/static/img/profile_discord.jpg",
    },
    {
      title: "Future Forward: Technology’s Evolution Unveiled",
      date: "December 12, 2023",
      image: "https://discordbanners.vercel.app/static/img/profile_discord.jpg",
    },
    {
      title: "Future Forward: Technology’s Evolution Unveiled",
      date: "December 12, 2023",
      image: "https://discordbanners.vercel.app/static/img/profile_discord.jpg",
    },
    {
      title: "Future Forward: Technology’s Evolution Unveiled",
      date: "December 12, 2023",
      image: "https://discordbanners.vercel.app/static/img/profile_discord.jpg",
    },
    {
      title: "Future Forward: Technology’s Evolution Unveiled",
      date: "December 12, 2023",
      image: "https://discordbanners.vercel.app/static/img/profile_discord.jpg",
    },
    {
      title: "Future Forward: Technology’s Evolution Unveiled",
      date: "December 12, 2023",
      image: "https://discordbanners.vercel.app/static/img/profile_discord.jpg",
    },
    {
      title: "Future Forward: Technology’s Evolution Unveiled",
      date: "December 12, 2023",
      image: "https://discordbanners.vercel.app/static/img/profile_discord.jpg",
    },
    {
      title: "Future Forward: Technology’s Evolution Unveiled",
      date: "December 12, 2023",
      image: "https://discordbanners.vercel.app/static/img/profile_discord.jpg",
    },
  ];
  
  const HoverCard = () => {
    return (
      <section
        className="w-full bg-cover bg-center py-16 px-6"
        style={{
          backgroundImage: url('/tech-bg.webp'),
        }}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl font-bold text-gray-900 mb-2">TECH</h2>
          <p className="text-lg text-gray-700 mb-10">
            latest news about technology
          </p>
          <div className="grid md:grid-cols-3 gap-6 p-6 px-20">
            {techItems.map((item, index) => (
              <div
                key={index}
                className="relative group w-full h-36 md:h-26 rounded-[3rem] overflow-hidden bg-white shadow-md transition-all duration-500 cursor-pointer"
              >
                <img
                  src={item.image}
                  alt="tech"
                  className="absolute left-4 top-4 w-18 h-18 rounded-full object-cover z-10 transition-all duration-500 
                           group-hover:w-full group-hover:h-full group-hover:rounded-none group-hover:object-cover 
                           group-hover:left-0 group-hover:top-0 group-hover:scale-110"
                />
  
                <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-500 z-20" />
  
                <div
                  className="relative z-30 flex flex-col justify-center h-full px-24 transition-all duration-500
                          group-hover:items-center group-hover:text-center group-hover:justify-center"
                >
                  <h3 className="text-black group-hover:text-white text-sm font-extrabold transition-colors duration-500 cursor-pointer ">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 group-hover:text-gray-200 transition-colors duration-500">
                    {item.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default HoverCard;
  
   <div>
        <TechSection />
        </div>