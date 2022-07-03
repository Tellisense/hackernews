import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getTopStories = async () => {
      const response = await fetch(
        "https://hacker-news.firebaseio.com/v0/topstories.json"
      );
      const topIds = await response.json();
      const top = topIds.slice(0, 10);
      const topStories = await Promise.all(
        top?.map(async (item) => {
          const resp = await fetch(
            `https://hacker-news.firebaseio.com/v0/item/${item}.json`
          );
          return await resp.json();
        })
      );

      setData(topStories);
    };

    getTopStories();
  }, []);

  console.log(data);
  return (
    <>
      <div />
    </>
  );
}

export default App;
