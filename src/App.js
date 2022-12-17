import React, { useEffect, useState } from "react";
import "./App.css";
import { MovieBox } from "./MovieBox";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function App() {
  const [movies, setmovies] = useState([]);
  const [query, setquery] = useState("");

  useEffect(() => {
    const search = async () => {
      const resp = await axios.get(process.env.REACT_APP_API_URL);
      setmovies(resp.data.results);
    };
    search();
  }, []);
  const searchMovie = async () => {
    const url = `${process.env.REACT_APP_API_SEARCH}+${query}`;
    const resp = await axios.get(url);
    setmovies(resp.data.results);
  };
  useEffect(() => {
    if (query.length === 0) {
      return;
    }
    searchMovie();
  }, [query]);
  return (
    <div>
      <div expand="lg" variant="dark" className="class1">
        <div className="class2"></div>
        <div className="class3">
          <input
            type="text"
            placeholder="Search for a movie"
            className="mx-2 px-2"
            aria-label="search"
            name="query"
            value={query}
            onChange={(e) => setquery(e.target.value)}
          />
        </div>
      </div>
      <hr></hr>
      <h2 style={{ paddingLeft: "5px" }}>Most Recent Movies</h2>
      <div className="App">
        <div className="grid">
          {movies &&
            movies.map((movieReq) => {
              return <MovieBox key={movieReq.id} {...movieReq} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
