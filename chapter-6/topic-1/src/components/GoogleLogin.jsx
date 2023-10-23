import { useGoogleLogin } from "@react-oauth/google";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { registerLoginWithGoogleAction } from "../redux/actions/authActions";
import { useNavigate } from "react-router-dom";

function GoogleLogin({ buttonText }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loginWithGoogle = useGoogleLogin({
        onSuccess: (responseGoogle) =>
            dispatch(
                registerLoginWithGoogleAction(
                    responseGoogle.access_token,
                    navigate
                )
            ),
        onError: (errorResponse) => {
            alert(errorResponse.error_description);
        },
    });

    return (
        <Button variant="primary" onClick={() => loginWithGoogle()}>
            {buttonText}
        </Button>
    );
}

GoogleLogin.propTypes = {
    buttonText: PropTypes.string,
};

export default GoogleLogin;
