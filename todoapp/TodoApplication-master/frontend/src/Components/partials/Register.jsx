import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { register } from "../Services/api";
import Header from "./Header";

function Register() {
  const navigation = useNavigate();

  const [form, setForm] = useState({
    name: "",
    username: "",
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

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async () => {
    const result = await register(form);
    // console.log("Form", result);
    // setErrors(null);

    if (result.status === 200) {
      if (result.data.status === 201) {
        setErrors(result.data.data);
        toast(result.data.message);
        return;
      }

      if (result.data.status === 200) {
        localStorage.setItem("user", JSON.stringify(result.data.data));
        navigation("/");
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
        <div className="row justify-content-md-center mt-4">
          <div className="col-lg-5 card border-primary mb-3">
            <div className="card-body">
              <div className="card-title h4">Register Page</div>
              <div className="form-group">
                <label className="col-form-label mt-4">Name*</label>
                <input
                  name="name"
                  onChange={handleInputChange}
                  onKeyDown={handleKeyPress}
                  type="text"
                  className="form-control"
                  placeholder="Enter Name"
                  required
                />
                {errors?.name && (
                  <small id="emailHelp" className="form-text text-danger">
                    {errors.name.msg}
                  </small>
                )}
              </div>
              <div className="form-group">
                <label className="col-form-label mt-4">Username*</label>
                <input
                  name="username"
                  onChange={handleInputChange}
                  onKeyDown={handleKeyPress}
                  type="text"
                  className="form-control"
                  placeholder="Enter Username"
                  required
                />
                {errors?.username && (
                  <small id="emailHelp" className="form-text text-danger">
                    {errors.username.msg}
                  </small>
                )}
              </div>
              <div className="form-group">
                <label className="col-form-label mt-4">Email*</label>
                <input
                  name="email"
                  onChange={handleInputChange}
                  onKeyDown={handleKeyPress}
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
                <label className="col-form-label mt-4">Password*</label>
                <input
                  name="password"
                  onChange={handleInputChange}
                  onKeyDown={handleKeyPress}
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
                Registration
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
