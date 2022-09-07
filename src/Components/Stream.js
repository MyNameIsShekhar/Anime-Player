import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";

export default function Stream() {
  const { episodeId } = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    const getDetail = () => {
      try {
        axios
          .get(`${process.env.REACT_APP_BASE_URL}/vidcdn/watch/${episodeId}`)
          .then((res) => {
            const source = res.data.sources;
            const first = source[0];
            setData(first.file);
          });
      } catch (err) {
        console.log("Connection Error");
      }
    };
    getDetail();
  }, []);

  return (
    <div className="container d-flex">
      <div className="video_player m-auto mt-5">
        <ReactPlayer url={data} controls width="720px" height="auto" />
      </div>
    </div>
  );
}
