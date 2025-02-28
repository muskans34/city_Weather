import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';



function Signup() {

    const [name,setname]= useState()
    const [email,setemail]=useState()
    const [password,setpassword]=useState()
    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:3001/register',{name,email,password})
        .then(result=> {console.log(result)
          navigate('/login')
        
        })
        .catch(err=>console.log(err))
    }

  return (
    <form className="" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleDropdownFormPassword2" className="form-label">
          name
        </label>
        <input
          type="name"
          className="form-control"
          id="FormPassword2"
          placeholder="Enter Your Name"
          onChange={(e)=>setname(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="FormEmail2" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="Email2"
          placeholder="email@example.com"
          onChange={(e)=>setemail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleDropdownFormPassword2" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="Password2"
          placeholder="Password"
          onChange={(e)=>setpassword(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="dropdownCheck2"
          />
          <label className="form-check-label" htmlFor="dropdownCheck2">
            Remember me
          </label>
        </div>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
      <Link to="/Login" type="submit" className="btn btn-primary">
        Sign in
      </Link>
    </form>
  );    
}
export default Signup;
