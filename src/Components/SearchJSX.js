import React from "react";
import Card from "./Card";

export default function SearchJSX(props) {
  const handelClick = () => {
    props.handelClick();
  };
  return (
    <div align="center">
      <h4 className="green mt-3 fw-bold" style={{ fontFamily: "Poppins" }}>
        SEARCH RESULT
      </h4>
      <span onClick={handelClick}>
        {props.searchResult?.map((rec) => (
          <Card rec={rec} key={rec.animeId} padding="0 9px" ep="false" />
        ))}
      </span>
      <hr style={{ color: "white" }} />
    </div>
  );
}
