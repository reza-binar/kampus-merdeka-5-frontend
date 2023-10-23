import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";

function GoogleLogin({ buttonText }) {
    const registerLoginWithGoogleAction = async (accessToken) => {
        try {
            let data = JSON.stringify({
                access_token: accessToken,
            });

            let config = {
                method: "post",
                maxBodyLength: Infinity,
                url: `${import.meta.env.VITE_API_URL}/api/v1/auth/google`,
                headers: {
                    "Content-Type": "application/json",
                },
                data: data,
            };

            const response = await axios.request(config);
            const { token } = response.data.data;

            localStorage.setItem("token", token);

            // navigate("/");

            // Temporary solution
            window.location.href = "/";
        } catch (error) {
            if (axios.isAxiosError(error)) {
                alert(error.response.data.message);
                return;
            }
            alert(error.message);
        }
    };

    const loginWithGoogle = useGoogleLogin({
        onSuccess: (responseGoogle) =>
            registerLoginWithGoogleAction(responseGoogle.access_token),
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
