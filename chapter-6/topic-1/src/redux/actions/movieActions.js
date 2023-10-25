import axios from "axios";
import { setPopular } from "../reducers/movieReducer";

export const getPopularMovies =
    (setErrors, errors) => async (dispatch, getState) => {
        try {
            const { token } = getState().auth;
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

            // Set the popular movie to global state
            dispatch(setPopular(data));
            setErrors({ ...errors, isError: false });
        } catch (error) {
            if (axios.isAxiosError(error)) {
                setErrors({
                    ...errors,
                    isError: true,
                    message: error?.response?.data?.message || error?.message,
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
