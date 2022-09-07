import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function Details() {
  const { animeId } = useParams();

  const [detail, setDetail] = useState([]);
  useEffect(() => {
    const getDetail = () => {
      try {
        axios
          .get("https://gogoanime.herokuapp.com/anime-details/${animeId}")
          .then((res) => {
            setDetail(res.data);
          });
      } catch (err) {
        console.log("Connection Error");
      }
    };
    getDetail();
  }, []);

  return (
    <div className="container mt-5 ">
      <div className="row">
        <img
          src={detail.animeImg}
          className="detail__img col me-5"
          style={{ maxWidth: "250px" }}
        />
        <div className="col align-self-center">
          <p align="center">{detail.synopsis}</p>
          <div className="d-flex">
            <div className="row ms-auto me-auto">
              {detail.genres?.map((gen) => (
                <div
                  className="genres_box m-2 py-2"
                  style={{ width: "fit-content" }}
                >
                  {gen}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="all__ep m-auto" align="center">
        {detail.episodesList &&
          detail.episodesList
            .slice(0)
            .reverse()
            .map((ep) => (
              <Link to={`/vidcdn/watch/${ep.episodeId}`}>
                <button className="btn__ep btn btn-primary m-2">
                  {ep.episodeNum}
                </button>
              </Link>
            ))}
      </div>
    </div>
  );
}
