import { useGoogleLogin } from "@react-oauth/google";
// import axios from "axios";
// import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { registerLoginWithGoogle } from "../redux/actions/authActions";
import { useNavigate } from "react-router-dom";

const GoogleLogin = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();	

	// const registerLoginWithGoogleAction = async (accessToken) => {
	// 	try {
	// 		let data = JSON.stringify({
	// 			access_token: accessToken,
	// 		});

	// 		let config = {
	// 			method: "post",
	// 			maxBodyLength: Infinity,
	// 			url: `https://shy-cloud-3319.fly.dev/api/v1/auth/google`,
	// 			headers: {
	// 				"Content-Type": "application/json",
	// 			},
	// 			data: data,
	// 		};

	// 		const response = await axios.request(config);
	// 		const { token } = response.data.data;

	// 		localStorage.setItem("token", token);

	// 		window.location.href = "/";
	// 	} catch (error) {
	// 		if (axios.isAxiosError(error)) {
	// 			toast.error(error.response.data.message);
	// 			return;
	// 		}
	// 		toast.error(error.message);
	// 	}
	// };

	const loginWithGoogle = useGoogleLogin({
		onSuccess: (responseGoogle) =>
			dispatch(registerLoginWithGoogle(responseGoogle.access_token, navigate)),
	});

	return (
		<button
			type="submit"
			className="btn btn-ligth fw-bold"
			onClick={() => loginWithGoogle()}
		>
			Log in with Google
		</button>
	);
};

export default GoogleLogin;
