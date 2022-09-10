import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function Details() {
  const { animeId } = useParams();

  const [detail, setDetail] = useState([]);
  const [watch, setWatch] = useState("");
  useEffect(() => {
    const getDetail = async () => {
      const Detail = await axios
        .get(`${process.env.REACT_APP_BASE_URL}/anime-details/${animeId}`)
        .catch((err) => console.log("Connection Error"));
      setDetail(Detail.data);
      let n = Detail.data.episodesList.length;
      console.log();
      setWatch(Detail.data.episodesList[n - 1].episodeId);
      // } catch (err) {
      //   console.log(err);
      // }
    };
    getDetail();
  }, []);

  return (
    <div className="container">
      <div className="row all__details">
        <div className="img__detail">
          <div className="item">
            <div class="img-wrap">
              <img
                src={detail.animeImg}
                className="detail__img col"
                style={{ maxWidth: "250px" }}
              />
            </div>
          </div>
          <p className="green fw-bold capSize noMargin" align="center">
            {detail.animeTitle}
          </p>
          <p className="green fw-bold capSize noMargin" align="center">
            {detail.otherNames}
          </p>

          <p className="green capSize noMargin" align="center">
            {detail.type}
          </p>
          <p className="green capSize noMargin" align="center">
            {detail.releasedDate}
          </p>
          <div>
            <p className="capSize noMargin" align="center">
              Total Ep: <span className="green">{detail.releasedDate}</span>
            </p>
          </div>
          <div align="center" className="mt-3">
            <Link to={`/vidcdn/watch/${watch}`}>
              <button className="btn btn-success">Watch Now</button>
            </Link>
          </div>
        </div>

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

      {/* <div className="all__ep" align="center">
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
      </div> */}
    </div>
  );
}
