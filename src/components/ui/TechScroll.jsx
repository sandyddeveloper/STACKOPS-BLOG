import React from "react";

const techie = [
    "React", "Python", "Git", "Linux", "Hacking", 
    "JavaScript", "Node.js", "Docker", "Kubernetes", "Cloud Computing", 
    "Machine Learning", "AI", "TensorFlow", "Deep Learning", "Blockchain", 
    "DevOps", "Cybersecurity", "SQL", "NoSQL", "Big Data", 
    "Data Science", "Quantum Computing", "Virtual Reality", "Augmented Reality", "IoT", 
    "5G", "Java", "C++", "C#", "Ruby", 
    "Swift", "GoLang", "PHP", "TypeScript", "HTML5", 
    "CSS3", "GraphQL", "Firebase", "AWS", "Azure", 
    "GCP", "Firebase", "GitHub", "Bitbucket", "Jenkins", 
    "Vim", "Sublime Text", "Visual Studio Code", "Xcode", "Eclipse", 
    "WebAssembly", "Blockchain", "API", "Serverless", "Automation"
  ];
  

const TechTicker = () => {
  return (
    <div className="flex overflow-hidden bg-black w-full">
      <ul className="flex infinite-scroll whitespace-nowrap text-white py-1 text-sm font-medium tracking-wide">
        {[...techie, ...techie].map((tech, index) => (
          <li key={index} className="flex items-center ml-3">
            <span>{tech}</span>
            <span className="mx-3">-</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TechTicker;
