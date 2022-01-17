import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

import Tweet from "./components/Tweet/Tweet";

import "./App.css";

function App() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const socket = io("https://twitter-app-node.herokuapp.com/");

    socket.on("connect", () => {
      console.log("Connected to server");
    });

    socket.on("tweet", (tweet) => {
      console.log(tweet);
      setTweets((prevTweets) => [tweet, ...prevTweets]);
    });
  }, []);

  return (
    <div className="App">
      <h1>Tweets</h1>
      <Tweet tweets={tweets} />
    </div>
  );
}

export default App;
