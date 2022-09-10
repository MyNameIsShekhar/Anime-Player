import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import ReactPlayer from "react-player";

export default function Stream() {
  const { episodeId } = useParams();

  const [data, setData] = useState([]);
  const [detail, setDetail] = useState([]);
  const location = useLocation();
  // const animeId = stateData.state
  const animeId = location.state.animeID;

  useEffect(() => {
    const getVideo = async () => {
      try {
        const Video = await axios.get(
          `https://gogoanime.herokuapp.com/vidcdn/watch/${episodeId}`
        );
        const source = Video.data.sources;
        const first = source[0];
        setData(first.file);
      } catch (err) {
        console.log("Connection Error");
      }
    };
    const getDetail = async () => {
      const Detail = await axios
        .get(`https://gogoanime.herokuapp.com/anime-details/${animeId}`)
        .catch((err) => console.log("Connection Error"));
      setDetail(Detail.data);
    };
    getDetail();
    getVideo();
  }, [animeId, episodeId]);

  return (
    <div className="container">
      <div className="video_player m-auto mt-5">
        <ReactPlayer url={data} controls className="reactPlayer" />
      </div>
      <div className="all__ep" align="center">
        {detail.episodesList &&
          detail.episodesList
            .slice(0)
            .reverse()
            .map((ep) => (
              <Link
                to={`/vidcdn/watch/${ep.episodeId}`}
                state={{ animeID: `${animeId}` }}
              >
                <button className="btn__ep btn btn-primary m-2">
                  {ep.episodeNum}
                </button>
              </Link>
            ))}
      </div>
    </div>
  );
}
