import React from "react";
import Card from "./Card";
import SearchJSX from "./SearchJSX";

export default function RecentAnime(props) {
  const searchResult = props.searchResult;
  return (
    <>
      {searchResult ? <SearchJSX searchResult={searchResult} /> : null}
      <div className="container__toal">
        <div className="container__main row">
          <h4
            style={{
              marginTop: "20px",
              textTransform: "uppercase",
              fontFamily: "Poppins",
            }}
            align="center"
          >
            Recently Added Anime
          </h4>
          {props.recent.map((rec) => (
            <Card rec={rec} key={rec.animeId} />
          ))}
        </div>
      </div>
    </>
  );
}
