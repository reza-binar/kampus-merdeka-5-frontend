import { useEffect } from "react";
import { useParams } from "react-router-dom";

const DetailsMovie = () => {
    const { movieId } = useParams();

    // TODO: Hit the movie details api with movie ID and render it
    useEffect(() => {}, []);

    return <div>{movieId}</div>;
};

export default DetailsMovie;
