import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getMe } from "../redux/actions/authActions";

const NoAccessToken = ({ children }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        // Example if we want access login page but we've already logged in, -> Home
        dispatch(getMe(navigate, "/", null));
    }, [dispatch, navigate]);

    return children;
};

export default NoAccessToken;
