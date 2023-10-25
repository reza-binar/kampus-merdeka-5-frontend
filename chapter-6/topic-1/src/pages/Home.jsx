import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import MovieItem from "../components/MovieItem";
import { getPopularMovies } from "../redux/actions/movieActions";

const Home = () => {
    const dispatch = useDispatch();

    const { popular } = useSelector((state) => state.movie);

    const [errors, setErrors] = useState({
        isError: false,
        message: null,
    });

    useEffect(() => {
        dispatch(getPopularMovies(setErrors, errors));
    }, [dispatch, errors]);

    if (errors.isError) {
        return <h1>{errors.message}</h1>;
    }

    if (popular.length === 0) {
        return <h1>Loading....</h1>;
    }

    return (
        <Container>
            <Row className="g-5">
                {popular.map((movie) => (
                    <Col md={3} key={movie?.id}>
                        <MovieItem
                            id={movie?.id}
                            imageURL={
                                import.meta.env.VITE_API_IMAGE_URL +
                                movie?.poster_path
                            }
                            overview={movie?.overview}
                            title={movie?.title}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Home;
