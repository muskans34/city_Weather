import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function Login() {
    const [email,setemail] = useState()
    const [password,setpassword] = useState()
    const Navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:3001/login',{email,password})
        .then(result=> {console.log(result)
            if (result.data === "success"){
                Navigate('/Home')
            }
        })
        .catch(err=>console.log(err))
    }

  return (
    
    <form onSubmit={handleSubmit}>
        <h2>Login</h2>
      <div class="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          onChange={(e) => setemail(e.target.value)} 
         
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div class="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          onChange={(e) => setpassword(e.target.value)}
        />
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Check me out
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
      
    </form>
  );
}

export default Login;
