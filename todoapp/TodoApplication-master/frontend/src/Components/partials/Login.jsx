import React, { useEffect, useState } from "react";
import { login } from "../Services/api";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Header";

function Login() {
  const navigation = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      return navigation("/");
    }
  }, []);

  const [errors, setErrors] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    // console.log("Form", form);
    const result = await login(form);
    console.log("Form", result);
    setErrors(null);

    if (result.status === 200) {
      if (result.data.status === 200) {
        localStorage.setItem("user", JSON.stringify(result.data.data));
        navigation("/");
        return;
      }
      if (result.data.status === 201) {
        setErrors(result.data.data);
        toast(result.data.message);
        return;
      }
      if (result.data.status === 202) {
        toast(result.data.message);
        return;
      }
    } else {
      toast("Something went wrong,please try again!!");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <ToastContainer />
        <div className="row justify-content-center mt-4">
          <div className="col-lg-5 card border-primary mt-4">
            <div className="card-body">
              <h4 className="card-title">Login Page</h4>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1" className="form-label mt-4">
                  Email*
                </label>
                <input
                  onChange={handleChange}
                  onKeyDown={handleKeyPress}
                  name="email"
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email or username"
                  fdprocessedid="80azhr"
                  required
                />

                {errors?.email && (
                  <small id="emailHelp" className="form-text text-danger">
                    {errors.email.msg}
                  </small>
                )}
              </div>
              <div className="form-group">
                <label
                  htmlFor="exampleInputPassword1"
                  className="form-label mt-4"
                >
                  Password*
                </label>
                <input
                  onChange={handleChange}
                  onKeyDown={handleKeyPress}
                  name="password"
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Enter Password"
                  autoComplete="off"
                  fdprocessedid="sfwysf"
                  required
                />
                {errors?.password && (
                  <small id="emailHelp" className="form-text text-danger">
                    {errors.password.msg}
                  </small>
                )}
              </div>
              <br />
              <button
                type="button"
                onClick={handleSubmit}
                onKeyDown={handleKeyPress}
                className="btn btn-primary"
                fdprocessedid="bceye"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
