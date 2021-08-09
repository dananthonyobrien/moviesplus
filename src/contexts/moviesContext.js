import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favorites, setFavorites] = useState( [] )

  const [detested, setDetested] = useState( [] )

  const [myReviews, setMyReviews] = useState( {} ) 

  const addToFavorites = (movie) => {
    setFavorites([...favorites,movie.id])
  };
  // We will use this function in a later section
  const removeFromFavorites = (movie) => {
    setFavorites( favorites.filter(
      (mId) => mId !== movie.id
    ) )
  };

  const addToDetested = (movie) => {
    setFavorites([...detested,movie.id])
  };
  // We will use this function in a later section
  const removeFromDetested = (movie) => {
    setDetested( detested.filter(
      (mId) => mId !== movie.id
    ) )
  };


  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };

  return (
    <MoviesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        detested,
        addToDetested,
        removeFromDetested,
        addReview,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;