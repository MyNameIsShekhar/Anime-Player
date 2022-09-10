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
    const getAnime = async () => {
      try {
        const Data = await axios.get(
          `https://gogoanime.herokuapp.com/recent-release`
        );
        setRecent(Data.data);
      } catch (err) {
        console.log("err");
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
