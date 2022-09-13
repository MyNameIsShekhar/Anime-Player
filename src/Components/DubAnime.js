import React, { forwardRef, useImperativeHandle, useRef } from "react";
import Card from "./Card";

const DubAnime = forwardRef((props, ref) => {
  const popular = useRef(null);
  const handelClick = () => {
    props.handelClick();
  };
  return (
    <>
      {Object.keys(props.recent).length === 0 ? (
        <div className="title-container">
          <div className="spinner">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="46" />
            </svg>
          </div>
          <h4 className="title">loading...</h4>
        </div>
      ) : (
        <div className="container__total">
          <div className="container__main row">
            <h4
              style={{
                marginTop: "20px",
                textTransform: "uppercase",
                fontFamily: "Poppins",
              }}
              align="center"
            >
              Recently Added <b>DUB</b> Anime
            </h4>
            {props.recent.map((rec) => (
              <Card rec={rec} key={rec.animeId} handelClick={handelClick} />
            ))}
          </div>
          <button
            className="btn btn-primary ms-auto me-auto mt-3"
            align="center"
            style={{ width: "fit-content" }}
          >
            Load More
          </button>
          <hr
            style={{
              color: "white",
              height: "2px",
              width: "80%",
              margin: "20px auto",
            }}
          />
        </div>
      )}
    </>
  );
});

export default DubAnime;
