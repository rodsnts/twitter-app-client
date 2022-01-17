import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import "./App.css";

function App() {
  const [tweets, setTweets]: any = useState([]);

  useEffect(() => {
    const socket = io("localhost:4000");

    socket.on("connect", () => {
      console.log("Connected to server");
    });

    socket.on("tweet", (tweet) => {
      console.log(tweet);
      setTweets((prevTweets: any) => [tweet, ...prevTweets]);
    });
  }, []);

  return (
    <div className="App">
      <h1>Tweets</h1>
      <div className="tweets">
        {tweets.map((tweet: any) => (
          <div key={tweet.data.id} className="twitter-card">
            <h3>{tweet.data.text}</h3>
            <p>@{tweet.includes.users[0].username}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
