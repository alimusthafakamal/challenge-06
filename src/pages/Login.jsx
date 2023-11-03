import { useState } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import GoogleLogin from "../components/GoogleLogin";
import { login } from "../redux/actions/authActions";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();

    const payload = JSON.stringify({
      email,
      password,
    });

    dispatch(login(payload, navigate));
  };

  return (
    <>
      <Toaster />
      <div className="container" style={{ marginTop: "120px" }}>
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="card border-0 rounded shadow-sm">
              <div className="card-body">
                <h4 className="fw-bold">HALAMAN LOGIN</h4>
                <hr />
                {error && error.message && (
                  <div className="alert alert-danger">{error.message}</div>
                )}
                <form onSubmit={handleLogin}>
                  <div className="mb-3">
                    <label className="form-label">ALAMAT EMAIL</label>
                    <input
                      type="email"
                      className="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Masukkan Alamat Email"
                    />
                    <div className="text-muted">
                      We'll never share your email with anyone else.
                    </div>
                  </div>
                  {error && error.email && (
                    <div className="alert alert-danger">{error.email[0]}</div>
                  )}
                  <div className="mb-3">
                    <label className="form-label">PASSWORD</label>
                    <input
                      type="password"
                      className="form-control"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Masukkan Password"
                    />
                  </div>
                  {error && error.password && (
                    <div className="alert alert-danger">
                      {error.password[0]}
                    </div>
                  )}
                  <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button type="submit" className="btn btn-primary">
                      Login
                    </button>
                  </div>
                  <div className="d-grid gap-2 ">
                    <button
                      onClick={() => navigate("/register")}
                      className="text-center p-4 pe-auto text-primary"
                      style={{ border: "none", background: "transparent" }}
                    >
                      Don't Have Any Account?
                    </button>
                    <h6
                      className="text-center"
                      style={{ marginBottom: "12px" }}
                    >
                      OR
                    </h6>
                    <GoogleLogin />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
