import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
    const [popularMovies, setPopularMovies] = useState([]);

    useEffect(() => {
        const getPopularMovies = async () => {
            try {
                const response = await axios.get(
                    `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`,
                    {
                        headers: {
                            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Nzc4ZjlkMTY2Mjc1NDBkMDZiZjE0NzQ2OThkYmZlYiIsInN1YiI6IjYxZTRlZTA3YTQxMGM4MDA2NjljMmM4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._EqUCI5R7QRXtawE96tWeSRO5X8Xg8snQoZZpUrIX90`,
                        },
                    }
                );
                const { data } = response;

                setPopularMovies(data?.results);
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    alert(error?.response?.data?.status_message);
                    return;
                }

                alert(error?.message);
            }
        };

        getPopularMovies();
    }, []);

    if (popularMovies.length === 0) {
        return <h1>Loading....</h1>;
    }

    return (
        <>
            {popularMovies.map((movie) => (
                <div key={movie?.id}>
                    <h1>{movie?.title}</h1>
                    <p>{movie?.overview}</p>
                </div>
            ))}
        </>
    );
};

export default Home;
