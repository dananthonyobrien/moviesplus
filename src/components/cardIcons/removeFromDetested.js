import React, { useContext } from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { MoviesContext } from "../../contexts/moviesContext";

const RemoveFromDetestedIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleRemoveFromDetested = (e) => {
    e.preventDefault();
    context.removeFromDetested(movie);
  };
  return (
    <IconButton
      aria-label="remove from detested"
      onClick={handleRemoveFromDetested}
    >
      <DeleteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default RemoveFromDetestedIcon;