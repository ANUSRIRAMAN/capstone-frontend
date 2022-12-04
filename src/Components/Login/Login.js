import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import { config } from "../../config/config";
import { useState } from "react";




function Login() {



  const navigate = useNavigate();
  
  



  const formik = useFormik({
      initialValues: {
          username: '',
          password: '',
      },
      validate:(values)=>{
        const errors={};
        if(!values.username){
          errors.username = "please enter username"
        }
        if(!values.password ){
          errors.password = "please enter a password of min-8 characters"
        }
       
        return errors;
      },
     
      onSubmit:async(values)=>{
        try{
        const login =await axios.post(`${config().api}/server/users/signin`,values);
        localStorage.setItem("token",login.data.token);
        localStorage.setItem("user",login.data.userid);
        localStorage.setItem("username",login.data.username)
        // const id = localStorage.getItem("user");

        alert(login.data.message);

          navigate("/mainpage");
        }
        catch(err){
          alert("invalid username or password")
          console.log(err);
        }
   
        
  
      }
  })

  return (
    <div className="loginWrapper">
      <div className="login">
        <div className="login-left">
          <img
            className="login-icon"
            src="https://res.cloudinary.com/practicaldev/image/fetch/s--GJ9yA-C_--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/gylus6erfa2h2mczucum.png"
            alt=""
          />
        </div>
        <div className="login-right">
          <form className="login-form" onSubmit={formik.handleSubmit}>
            <input
              type="text"
              name="username"
             onChange={formik.handleChange}
             value={formik.values.username}
              placeholder="username"
            />
            {formik.values.username ? null : (
              <p className="warning">{formik.errors.username}</p>
            )}
            <input
              type="password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              placeholder="Password"
            />
            {formik.values.password ? null : (
              <p className="warning">{formik.errors.password}</p>
            )}
            <button type={"submit"}>Submit</button>
          </form><br></br>

          <p>
            New to ReactMarkdown |{" "}
            <Link className="link" to="/signup">
              Signup
            </Link>
          </p>
          <p>
            <b>for testing</b>
            <p><b>username:</b>admin1234</p>
            <p><b>password:</b>admin1234</p>
            <p><b>or u can signup by clicking signup button above</b></p>
          </p>
        
        </div>
      </div>
    </div>
  );
}

export default Login;