import { useEffect, useState } from "react";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import MovieItem from "../components/MovieItem";

const Home = () => {
    const navigate = useNavigate();

    const [popularMovies, setPopularMovies] = useState([]);
    const [errors, setErrors] = useState({
        isError: false,
        message: null,
    });

    useEffect(() => {
        const getMe = async () => {
            try {
                const token = localStorage.getItem("token");
                if (!token) {
                    return navigate("/login");
                }

                await axios.get(
                    `${import.meta.env.VITE_API_URL}/api/v1/auth/me`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    // If token is not valid
                    if (error.response.status === 401) {
                        localStorage.removeItem("token");
                        return navigate("/login");
                    }

                    alert(error?.response?.data?.message);
                    return;
                }

                alert(error?.message);
            }
        };

        getMe();
    }, []);

    useEffect(() => {
        const getPopularMovies = async () => {
            try {
                // Get token from local storage
                const token = localStorage.getItem("token");

                // If the token is not exist in the local storage
                if (!token) return;

                const response = await axios.get(
                    `${import.meta.env.VITE_API_URL}/api/v1/movie/popular`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                const { data } = response.data;

                setPopularMovies(data);
                setErrors({ ...errors, isError: false });
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    setErrors({
                        ...errors,
                        isError: true,
                        message:
                            error?.response?.data?.message || error?.message,
                    });
                    return;
                }

                alert(error?.message);
                setErrors({
                    ...errors,
                    isError: true,
                    message: error?.message,
                });
            }
        };

        getPopularMovies();
    }, []);

    if (errors.isError) {
        return <h1>{errors.message}</h1>;
    }

    if (popularMovies.length === 0) {
        return <h1>Loading....</h1>;
    }

    return (
        <Container>
            <Row className="g-5">
                {popularMovies.map((movie) => (
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
