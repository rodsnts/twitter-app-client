import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

import { Tweet, RecentTweets } from "./components/Tweet/Tweet";

import "./App.css";

function App() {
  const API = "https://twitter-app-node.herokuapp.com";

  const [tweets, setTweets] = useState([]);
  const [recentTweetsData, setRecentTweetsData] = useState([]);

  useEffect(() => {
    const socket = io(API);

    socket.on("connect", () => {
      console.log("Connected to server");
    });

    socket.on("tweet", (tweet) => {
      console.log("Tweet received", tweet);
      setTweets((prevTweets) => [tweet, ...prevTweets]);
    });

    fetch(`${API}/tweets`).then((res) => {
      res.json().then(async (data) => {
        setRecentTweetsData(data);
      });
    });
  }, []);

  return (
    <div className="App">
      <h1>Tweets</h1>
      <div className="tweets">
        <Tweet tweets={tweets} />
        <RecentTweets recentTweets={recentTweetsData} />
      </div>
    </div>
  );
}

export default App;
