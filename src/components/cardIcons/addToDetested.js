import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@material-ui/core/IconButton";
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

const AddToDetestedIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToDetested = (e) => {
    e.preventDefault();
    context.addToDetested(movie);
  };
  return (
    <IconButton aria-label="add to detested" onClick={handleAddToDetested}>
      <ThumbDownIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToDetestedIcon;