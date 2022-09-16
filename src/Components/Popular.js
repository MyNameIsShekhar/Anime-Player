import React from "react";
import Card from "./Card";
const Popular = (props) => {
  const handelClick = () => {
    props.handelClick();
  };
  const loadMore = () => {
    props.loadMorePopular();
  };
  return (
    <>
      {Object.keys(props.popular).length === 0 ? (
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
          <div className="container__main row Popular">
            <h4
              style={{
                marginTop: "20px",
                textTransform: "uppercase",
                fontFamily: "Poppins",
              }}
              align="center"
            >
              Popular Anime
            </h4>
            {props.popular.map((rec) => (
              <Card
                rec={rec}
                key={rec.animeId}
                handelClick={handelClick}
                ep="false"
              />
            ))}
          </div>
          <button
            className="btn btn-primary ms-auto me-auto mt-3"
            align="center"
            style={{ width: "fit-content" }}
            onClick={loadMore}
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
    //   <button
    //     className="btn btn-primary ms-auto me-auto mt-3"
    //     align="center"
    //     style={{ width: "fit-content" }}
    //   >
    //     Load More
    //   </button>
  );
};

export default Popular;
