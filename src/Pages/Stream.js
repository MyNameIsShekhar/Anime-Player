import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useLocation, useParams } from "react-router-dom";
// import ReactPlayer from "react-player";

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
        console.log(Video.data.Referer);
        // const source = Video.data.sources;
        // const first = source[0];
        setData(Video.data.Referer);
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
    <>
      <Helmet>
        <meta
          name="description"
          content={`Best site to watch Anime English Sub/Dub online Free and download Anime English Sub/Dub anime.`}
          charSet="utf-8"
        />
        <meta
          name="keywords"
          content={`${detail.animeTitle} English Sub/Dub, free ${detail.animeTitle} online, watch ${detail.animeTitle} online, watch ${detail.animeTitle} free, download ${detail.animeTitle} anime, download ${detail.animeTitle} free`}
          charSet="utf-8"
        />
        <title>{`Watch ${detail.animeTitle} free on animix.netlify.app`}</title>
        <link rel="canonical" href={`//vidcdn/watch/${episodeId}`} />
      </Helmet>
      {Object.keys(data).length !== 0 ? (
        <div className="container_all">
          {/* All Episodes */}
          <div className="all__ep row" align="center">
            <p
              className="green"
              style={{
                display: "flex",
                alignItems: "center",
                fontWeight: "800",
                textTransform: "capitalize",
              }}
            >
              List Of episodes:
            </p>
            <ul className="ep__list">
              {detail.episodesList &&
                detail.episodesList
                  .slice(0)
                  .reverse()
                  .map((ep) => (
                    <Link
                      to={`/vidcdn/watch/${ep.episodeId}`}
                      state={{ animeID: `${animeId}` }}
                    >
                      {ep.episodeId === episodeId ? (
                        <li
                          className="btn__ep even active"
                          style={{ color: "white" }}
                        >
                          <div className="green Anime-ep-num">
                            {ep.episodeNum}
                          </div>
                          <div className="Anime-ep">{ep.episodeId}</div>
                        </li>
                      ) : ep.episodeNum % 2 === 0 ? (
                        <li className="btn__ep even" style={{ color: "white" }}>
                          <div className="green Anime-ep-num">
                            {ep.episodeNum}
                          </div>
                          <div className="Anime-ep">{ep.episodeId}</div>
                        </li>
                      ) : (
                        <li className="btn__ep odd" style={{ color: "white" }}>
                          <div className="green Anime-ep-num">
                            {ep.episodeNum}
                          </div>
                          <div className="Anime-ep">{ep.episodeId}</div>
                        </li>
                      )}
                    </Link>
                  ))}
            </ul>
          </div>

          {/* Video */}
          <div className="video_player m-auto mt-5">
            {/* <ReactPlayer url={data} controls className="reactPlayer" /> */}
            <iframe
              src={data}
              width="100%"
              height="500"
              scrolling="no"
              frameBorder="0"
              allowfullscreen="allowfullscreen"
              webkitallowfullscreen="true"
              title={animeId}
            />
          </div>

          {/* <div className="details">hi</div> */}
        </div>
      ) : (
        <div className="title-container">
          <div className="spinner">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="46" />
            </svg>
          </div>
          <h4 className="title">loading...</h4>
        </div>
      )}
    </>
  );
}
