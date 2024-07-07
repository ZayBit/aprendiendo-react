import { useState } from "react";
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export const App = () => {
  const db = [
    {
      username: "midudev",
      name: "mide",
      isFollowing: false,
    },
    {
      username: "daw",
      name: "daw",
      isFollowing: false,
    },
    {
      username: "devo1",
      name: "devo1",
      isFollowing: false,
    },
  ];
  return <section>
    {db.map(({username,name,isFollowing})=>(
                <TwitterFollowCard
                name={name}
                username={username}
                isFollowing={isFollowing}
                key={username}
                />
    ))
    }</section>;
};
