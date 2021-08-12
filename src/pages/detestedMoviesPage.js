//import React from "react";
import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getMovie } from "../api/tmdb-api"; //Work from here on copying and changing getMovies method in tmdb-api.js
import RemoveFromFavorites from "../components/cardIcons/removeFromFavorites";
import WriteReview from "../components/cardIcons/writeReview";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getMovies} from '../api/tmdb-api'
import {getDetestedMovies} from '../api/tmdb-api'
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import AddToDetestedIcon from '../components/cardIcons/addToFavorites'
//Solution 1 following Favourite page

const DetestedMoviesPage = () => {
  const {favorites: movieIds } = useContext(MoviesContext);

  // Create an array of queries and run in parallel.
  const favoriteMovieQueries = useQueries(
    movieIds.map((movieId) => {
      return {
        queryKey: ["movie", { id: movieId }],
        queryFn: getMovie,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = favoriteMovieQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }
  const movies = favoriteMovieQueries.map((q) => q.data);
  const toDo = () => true;

  return (
    <PageTemplate
      title="Detested Movies"
      movies={movies}
      action={(movie) => {
        return (
          <>
            <RemoveFromFavorites movie={movie} />
            <WriteReview movie={movie} />
          </>
        );
      }}
    />
  );
};

export default DetestedMoviesPage; 

//Soultion 2 following Homepage


/*

const DetestedMoviesPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('discover', getDetestedMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  } 
   
  const detestedMovies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const detested = detestedMovies.filter(m => m.detested)
  localStorage.setItem('detested', JSON.stringify(detested))
  const addToFavorites = (movieId) => true 

  return (
    <PageTemplate
      title="Detested Movies"
      detestedMovies={detestedMovies}
      //action={(movie) =>{
      //return <AddToFavoritesIcon movie={movie}
      />  
  );


};

export default DetestedMoviesPage;

*/