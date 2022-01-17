import React from "react";
import dateFormat from "dateformat";

import "./Tweet.css";

interface TweetPropsA {
  data: {
    id: number;
    text: string;
    created_at?: string;
  };
  includes: {
    users: Array<{
      name: string;
      username: string;
      profile_image_url?: string;
    }>;
    media: Array<{
      preview_image_url: string;
    }>;
  };
}

interface TweetPropsB {
  created_at: string;
  id: number;
  text: string;
}

type TweetProps = TweetPropsA & TweetPropsB;

export const Tweet = ({ tweets }) => {
  return (
    <>
      {tweets.map((tweet: TweetProps, i: number = 0) => (
        <a
          key={tweet.data.id}
          href={`https://twitter.com/${tweet.includes?.users[0].username}/status/${tweet.data.id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="twitter-card">
            <div className="twitter-header">
              <img
                src={tweet.includes?.users[0].profile_image_url}
                alt="profile-pic"
              />
              <div className="twitter-info">
                <div className="twitter-user">
                  <p>{tweet.includes?.users[0].name}</p>
                  <p className="handle">@{tweet.includes?.users[0].username}</p>
                </div>
                <div className="twitter-date">
                  <p>{dateFormat(tweet.data.created_at, "mmmm dS, yyyy")}</p>
                </div>
              </div>
            </div>
            <div className="twitter-body">
              <p>{tweet.data.text}</p>
              {/* {tweet?.includes?.media[i] ? (
                <img
                  src={tweet?.includes?.media[i]?.preview_image_url}
                  alt="tweet-media"
                  className="twitter-image"
                />
              ) : null} */}
            </div>
          </div>
        </a>
      ))}
    </>
  );
};

export const RecentTweets = ({ recentTweets }) => {
  return (
    <>
      {recentTweets.data?.map((tweet: TweetPropsB, i: number = 0) => (
        <a
          key={tweet.id}
          href={`https://twitter.com/${recentTweets.includes.users[0].username}/status/${tweet.id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="twitter-card">
            <div className="twitter-header">
              <img
                src={recentTweets.includes.users[0].profile_image_url}
                alt="profile-pic"
              />
              <div className="twitter-info">
                <div className="twitter-user">
                  <p>{recentTweets.includes.users[0].name}</p>
                  <p className="handle">
                    @{recentTweets.includes.users[0].username}
                  </p>
                </div>
                <div className="twitter-date">
                  <p>{dateFormat(tweet.created_at, "mmmm dS, yyyy")}</p>
                </div>
              </div>
            </div>
            <div className="twitter-body">
              <p>{tweet.text}</p>
              {recentTweets.includes?.media[i] ? (
                <img
                  src={recentTweets?.includes?.media[i]?.preview_image_url}
                  alt="tweet-media"
                  className="twitter-image"
                />
              ) : null}
            </div>
          </div>
        </a>
      ))}
    </>
  );
};
