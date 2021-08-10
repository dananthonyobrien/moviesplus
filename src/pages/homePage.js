import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getMovies} from '../api/tmdb-api'
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import AddToDetestedIcon from '../components/cardIcons/addToFavorites'


const HomePage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('discover', getMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  const addToFavorites = (movieId) => true 

  return (
    <PageTemplate
      title="Discover Movies"
      movies={movies}
      action={(movie) =>{
      return <AddToFavoritesIcon movie={movie}/>
      return <AddToDetestedIcon movie={movie}/>
    }
  }
    />    
  );

 // Redundant, but necessary to avoid app crashing.
 const detested = movies.filter(m => m.detested)
 localStorage.setItem('detested', JSON.stringify(detested))
 const addToDetested = (movieId) => true 

 return (
   <PageTemplate
     title="Discover Movies"
     movies={movies}
     action={(movie) =>{
     return <AddToDetestedIcon movie={movie}/>
   }
 }
   />    
 );

};

export default HomePage;