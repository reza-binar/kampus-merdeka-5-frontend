import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const SearchMovies = () => {
    // TODO: Create state for movies that have been searched

    const [searchParams] = useSearchParams();

    useEffect(() => {
        try {
            const query = searchParams.get("query");
            const page = searchParams.get("page");

            // TODO: Get the data from API with query and page variable

            // TODO: Set state for the movie that have been searched
        } catch (error) {
            console.error(error);
        }
    }, [searchParams]);

    // TODO: Foreach or map every object of movies array
    return <div>SearchMovies</div>;
};

export default SearchMovies;
