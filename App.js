import React from "react";
import "./App.css";

const dramas = [
  {
    title: " BTS",
    description: "BTS is a globally renowned South Korean boy band celebrated for their impactful music, powerful performances, and meaningful lyrics that address social issues and personal struggles.",
    image: "bts.webp",
    url: 'https://www.britannica.com/topic/BTS',
  },
  {
    title: " BLACKPINK",
    description: "BLACKPINK is a popular South Korean girl group known for their catchy songs, dynamic performances, and strong fashion influence, capturing a massive international following.",
    image: "blackpink.webp",
    url: 'https://en.wikipedia.org/wiki/Blackpink',
  },

  {
    title: " EXO",
    description: "EXO is a highly successful South Korean-Chinese boy band known for their diverse music styles, impressive vocals, and intricate choreography, garnering a dedicated global fanbase.",
    image: "exo.webp",
    url: 'https://en.wikipedia.org/wiki/Exo',
  },

  {
    title: "TWICE",
    description: "TWICE is a South Korean girl group celebrated for their catchy pop hits, vibrant performances, and engaging concepts, gaining immense popularity across Asia and beyond.",
    image: "twice.jpg",
    url: 'https://en.wikipedia.org/wiki/Twice',
  },
  {
    title: "SEVENTEEN",
    description: "SEVENTEEN is a South Korean boy band known for their self-produced music, exceptional choreography, and energetic performances, showcasing their strong bond as a group.",
    image: "seventeen.jpg",
    url: 'https://en.wikipedia.org/wiki/Seventeen_(South_Korean_band)',
  },
];

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>K-pop</h1>
      </header>
      <main className="main">
        {dramas.map((drama, index) => (
          <div className="drama-card" key={index}>
            <img src={drama.image} alt={drama.title} className="drama-image" />
            <a href={drama.url} target="_blank" rel="noopener noreferrer">
            <h2>{drama.title}</h2>
            </a>
            <p>{drama.description}</p>
          </div>
        ))}
      </main>
      <h2>About</h2>
      <p>K-pop, or Korean pop music, is a vibrant and diverse genre that originated in South Korea. It has gained massive global popularity over the last couple of decades, characterized by its catchy melodies, high production values, and elaborate choreography. K-pop blends various musical styles, including pop, hip-hop, R&B, and electronic music, which helps it appeal to a broad audience. </p>
      <h2>History</h2>
      <p>K-pop emerged in the early 1990s with the debut of Seo Taiji and Boys, blending Western musical styles with Korean culture. The genre gained massive popularity across Asia in the 2000s, expanding globally with groups like BTS and BLACKPINK in the 2010s. Today, K-pop continues to evolve, influencing global music trends while addressing social issues through its art and messaging.</p>
      <h2>Popularity</h2>
      <p>K-pop has exploded in popularity worldwide, particularly since the 2010s, with groups like BTS and BLACKPINK amassing millions of fans and breaking numerous records. The genre's catchy music, high-energy performances, and strong visual appeal have captivated audiences across diverse cultures. Social media and streaming platforms have further amplified its reach, contributing to the phenomenon of the global "Hallyu" or Korean Wave..
      </p>
    </div>
  );
}

export default App;