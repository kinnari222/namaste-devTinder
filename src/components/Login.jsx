import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const [emailId, setEmailId] = useState("ravi@gmail.com");
  const [password, setPassword] = useState("Ravi@12345");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginClick = async() => {
    try {
      const res = await axios.post(BASE_URL + "/login", {
      emailId,
      password,
    },
    { withCredentials: true }
  );
   dispatch(addUser(res.data)); //add data in to the store.
   return navigate("/");
}
    catch(err) {
      console.log(err);
    } 
  }   

  return (
    <div className="flex justify-center m-10">
      <div className="card bg-base-100 w-96 shadow-sm">
        <div className="card-body">
          <h2 className="card-title justify-center">Login</h2>
          <div>
            <fieldset className="fieldset">
              <legend className="fieldset-legend p-0">Email ID</legend>
              <input type="text" value={emailId} onChange={(e) => setEmailId(e.target.value)} className="input" placeholder="" />
            </fieldset>
            <fieldset className="fieldset my-5">
              <legend className="fieldset-legend p-0">Password</legend>
              <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="" />
            </fieldset>
          </div>
          <div className="card-actions justify-center">
            <button className="btn btn-primary" onClick={handleLoginClick}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
