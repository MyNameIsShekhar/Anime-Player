import React from "react";
import { Link } from "react-router-dom";

const Lastwatch = (props) => {
  return (<>
    {props.lastwatch !== null ? 
    <div className="lastwatch" >
      <Link
        to={props.lastwatch.url}
        state={{ animeID: `${props.lastwatch.animeId}` }}
      >
        <div className="d-flex">
          <div
            className="d-flex row"
            style={{
              alignItem: "center",
            }}
          >
            <p className="my-1" style={{ fontSize: "15px" }}>
              Continue watching:
            </p>

            <p className="d-flex" style={{ fontSize: "20px" }}>
              <i className="bi bi-caret-right-square-fill me-2" />
              <span style={{color: "#cae962", fontWeight: "bold"}}>
              {props.lastwatch?.title}
              </span>
              &nbsp;&nbsp;Ep: {props.lastwatch?.ep}
            </p>
          </div>
          <i
            className="bi bi-x-lg d-flex"
            style={{
              fontSize: "25px",
              position: "absolute",
              marginTop: "1.3rem",
              marginRight: "10px",
              right: "0",
            }}
            onClick={() => {
              console.log("close");
            }}
          />
        </div>
      </Link>
    </div>:null
    }
    </>
  );
};

export default Lastwatch;
