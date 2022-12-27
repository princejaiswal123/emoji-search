import React, { useEffect, useState } from "react";
import emojiData from "./emojiData.json";
import "./styles.css";
function App() {
  const [find, setFind] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const newData = emojiData.filter((emoji) =>
      emoji.title.toLowerCase().includes(find.toLocaleLowerCase())
    );
    setData(newData);
  }, [find]);

  return (
    <div>
      <h1>Emoji Search</h1>
      <input
        type="text"
        placeholder="search"
        onChange={(e) => setFind(e.target.value)}
        value={find}
      />
      {data.map((emoji) => (
        <h2 key={emoji.title}>
          {emoji.title} {emoji.symbol}
        </h2>
      ))}
    </div>
  );
}

export default App;
