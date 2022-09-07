import React from "react";
import Card from "./Card";

export default function RecentAnime(props) {
  return (
    <div className="container__total">
      <div className="container__main row">
        <h4>Recently Added Anime</h4>
        {props.recent.map((rec) => (
          <Card rec={rec} key={rec.animeId} />
        ))}
      </div>
    </div>
  );
}
