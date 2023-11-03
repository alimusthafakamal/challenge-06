import { useState } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import GoogleLogin from "../components/GoogleLogin";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/actions/authActions";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { error } = useSelector((state) => state.auth);
  
  const handleRegister = async (e) => {
    e.preventDefault();

    let data = JSON.stringify({
      name,
      email,
      password,
    });
    dispatch(register(data, navigate));
  };

  return (
    <div className="container" style={{ marginTop: "120px" }}>
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card border-0 rounded shadow-sm">
            <div className="card-body">
              <h4 className="fw-bold">REGISTER PAGE</h4>
              <hr />
              {error && error.message && (
                <div className="alert alert-danger">{error.message}</div>
              )}
              <form onSubmit={handleRegister}>
                <div className="mb-3">
                  <label className="form-label">NAME</label>
                  <input
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter Your Name"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">EMAIL ADDRESS</label>
                  <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Your Email Address"
                  />
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
                  <div className="alert alert-danger">{error.password[0]}</div>
                )}
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  <button type="submit" className="btn btn-primary">
                    Register
                  </button>
                </div>
                <div className="d-grid gap-2 ">
                  <button
                    onClick={() => navigate("/login")}
                    className="text-center p-4 pe-auto text-primary"
                    style={{ border: "none", background: "transparent" }}
                  >
                    Already Have Account?
                  </button>
                  <h6 className="text-center" style={{ marginBottom: "12px" }}>
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
  );
};

export default Register;
