import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getMovie } from "../api/tmdb-api";
import Spinner from '../components/spinner';
import RemoveFromDetested from "../components/cardIcons/removeFromDetested";
import WriteReview from "../components/cardIcons/writeReview";


const DetestedMoviesPage = () => {
  const {detested: movieIds } = useContext(MoviesContext);

  // Create an array of queries and run in parallel.
  const detestedMovieQueries = useQueries(
    movieIds.map((movieId) => {
      return {
        queryKey: ["movie", { id: movieId }],
        queryFn: getMovie,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = detestedMovieQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }
  const movies = detestedMovieQueries.map((q) => q.data);
  const toDo = () => true;

  return (
    <PageTemplate
      title="Detested Movies"
      movies={movies}
      action={(movie) => {
        return (
          <>
            <RemoveFromDetested movie={movie} />
            <WriteReview movie={movie} />
          </>
        );
      }}
    />
  );
};

export default DetestedMoviesPage;