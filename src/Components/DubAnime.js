import React, { forwardRef, useImperativeHandle, useRef } from "react";
import Card from "./Card";

const DubAnime = forwardRef((props, ref) => {
  const popular = useRef(null);
  const handelClick = () => {
    props.handelClick();
  };
  useImperativeHandle(ref, () => ({
    handelScroll(ele) {
      if (ele === "Popular") {
        window.scrollTo({
          top: popular.current.offsetTop,
          behavior: "smooth",
        });
      }
    },
  }));
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
              <Card rec={rec} key={rec.animeId} handelClick={handelClick} />
            ))}
          </div>
          <hr
            style={{
              color: "white",
              height: "2px",
              width: "80%",
              margin: "20px auto",
            }}
          />
          <div className="container__main row Popular" ref={popular}>
            <h4
              style={{
                marginTop: "20px",
                textTransform: "uppercase",
                fontFamily: "Poppins",
              }}
              align="center"
            >
              Propular Anime
            </h4>
            {props.propular.map((rec) => (
              <Card rec={rec} key={rec.animeId} handelClick={handelClick} />
            ))}
          </div>
        </div>
      )}
    </>
  );
});

export default DubAnime;
