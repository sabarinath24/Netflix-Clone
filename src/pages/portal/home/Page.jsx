
import React, { useState, useEffect } from "react";
import Row from "../../../components/row/Row";
import "./home.css";
import { getPageData } from "../../../api/movies";
import HeroBanner from "../../../components/hero-banner/HeroBanner";

const HomePage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getPageData().then((res) => setData(res));
  }, []);

  const addToWishlist = (movieId) => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    const isMovieInWishlist = wishlist.some((item) => item.id === movieId);
  
    if (!isMovieInWishlist) {
      // If not, add it to the wishlist
      const movieToAdd = {
        id: movieId,
        addedAt: new Date().toISOString(),
      };
  
      wishlist.push(movieToAdd);
  
      // Update localStorage with the updated wishlist
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
  
      console.log(`Added movie with ID ${movieId} to wishlist`);
    } else {
      console.log(`Movie with ID ${movieId} is already in the wishlist`);
    }
  };

  return (
    <main>
      <HeroBanner />
      {/* Check if data exists before rendering */}
      {data && (
        <>
          {/* Check if netflixOriginals exists before rendering */}
          {data.netflixOriginals && (
            <Row
              title="NETFLIX ORIGINALS"
              data={data.netflixOriginals.results}
              addToWishlist={addToWishlist}
            />
          )}
          {/* Similarly, check other data properties */}
          {data.trendingNow && (
            <Row
              title="TRENDING NOW"
              data={data.trendingNow.results}
              addToWishlist={addToWishlist}
            />
          )}
          {data.topRated && (
            <Row
              title="TOP RATED"
              data={data.topRated.results}
              addToWishlist={addToWishlist}
            />
          )}
          {data.actionMovies && (
            <Row
              title="ACTION MOVIES"
              data={data.actionMovies.results}
              addToWishlist={addToWishlist}
            />
          )}
          {data.comedyMovies && (
            <Row
              title="COMEDY MOVIES"
              data={data.comedyMovies.results}
              addToWishlist={addToWishlist}
            />
          )}
          {data.horrorMovies && (
            <Row
              title="HORROR MOVIES"
              data={data.horrorMovies.results}
              addToWishlist={addToWishlist}
            />
          )}
          {data.romanceMovies && (
            <Row
              title="ROMANCE MOVIES"
              data={data.romanceMovies.results}
              addToWishlist={addToWishlist}
            />
          )}
          {data.warMovies && (
            <Row
              title="WAR MOVIES"
              data={data.warMovies.results}
              addToWishlist={addToWishlist}
            />
          )}
          {data.scienceFictionMovies && (
            <Row
              title="SCIENCE FICTION MOVIES"
              data={data.scienceFictionMovies.results}
              addToWishlist={addToWishlist}
            />
          )}
          {data.documentaries && (
            <Row
              title="DOCUMENTARIES"
              data={data.documentaries.results}
              addToWishlist={addToWishlist}
            />
          )}
        </>
      )}
    </main>
  );
};

export default HomePage;
