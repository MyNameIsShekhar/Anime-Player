import React from "react";
import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <>
      <div className="card__main card m-2" style={{ display: "inline-block" }}>
        <Link to={`/anime-detail/${props.rec.animeId}`}>
          <img
            src={props.rec.animeImg}
            className="card__Img card-img-top rounded"
            alt={props.rec.animeId}
          />
          <div className="card-body row">
            <h5 className="card-title" align="center">
              {props.rec.animeTitle}
            </h5>
            <p className="card-text mt-auto" align="center">
              Ep No: {props.rec.episodeNum}
            </p>
          </div>
        </Link>
      </div>
    </>
  );
}
