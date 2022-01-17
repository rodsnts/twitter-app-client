import React from "react";

import "./Tweet.css";

type TweetProps = {
  data: {
    id: number;
    text: string;
  };
  includes: {
    users: {
      username: string;
    };
  };
};

const Tweet = ({ tweets }: any) => {
  return (
    <div className="tweets">
      {tweets.map((tweet: TweetProps) => (
        <div key={tweet.data.id} className="twitter-card">
          <h3>{tweet.data.text}</h3>
          <p>@{tweet.includes.users[0].username}</p>
        </div>
      ))}
    </div>
  );
};

export default Tweet;
