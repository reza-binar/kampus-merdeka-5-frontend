import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../redux/actions/authActions";

const Protected = ({ children }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        // Example if we want access protected page (we need to logged in) but we've did not already logged in, -> Login
        dispatch(getMe(navigate, null, "/login"));
    }, [dispatch, navigate]);

    return children;
};

export default Protected;
