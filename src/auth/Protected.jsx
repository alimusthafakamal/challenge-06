import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "../redux/actions/authActions";

function Protected({ children }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!token) {
      return navigate("/");
    }

    // get user information
    dispatch(getMe(navigate, null, "/"));
  }, [navigate, dispatch, token]);

  // useEffect(() => {
  //   const getMe = async (token) => {
  //     try {
  //       await axios.get(`https://shy-cloud-3319.fly.dev/api/v1/auth/me`, {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });
  //     } catch (error) {
  //       if (axios.isAxiosError(error)) {
  //         // If not valid token
  //         if (error.response.status === 401) {
  //           localStorage.removeItem("token");

  //           return (window.location.href = "/");
  //         }

  //         toast.error(error.response.data.message);
  //         return;
  //       }
  //       toast.error(error.message);
  //     }
  //   };

  //   const token = localStorage.getItem("token");

  //   if (!token) {
  //     return navigate("/");
  //   }

  //   // get user information
  //   getMe(token);
  // }, [navigate]);

  return children;
}

export default Protected;
