import "./App.css";
import Header from "./Components/Header";
import Popular from "./Components/Popular";
import RecentAnime from "./Components/RecentAnime";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Details from "./Components/Details";
import Stream from "./Components/Stream";

function App() {
  const [recent, setRecent] = useState([]);

  useEffect(() => {
    const getAnime = () => {
      try {
        axios
          .get(`${process.env.REACT_APP_BASE_URL}/recent-release`)
          .then((res) => {
            setRecent(res.data);
          });
        console.log("hi");
      } catch (err) {
        console.log(err);
      }
    };
    getAnime();
  }, []);

  return (
    <Router className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<RecentAnime recent={recent} />} />
        <Route exact path="/popular" element={<Popular />} />
        <Route exact path="/anime-detail/:animeId" element={<Details />} />
        <Route exact path="/vidcdn/watch/:episodeId" element={<Stream />} />
      </Routes>
    </Router>
  );
}

export default App;
