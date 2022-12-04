import "./register.css";

import { useState } from "react";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { config } from "../../config/config"

function Register() {

  const navigate = useNavigate();
  const formik = useFormik({
      initialValues: {
           username: '',
           email: '',
          password: '',
         
        
      },
      validate:(values)=>{
        const errors={};

         if(!values.username ){
          errors.username="please enter username"
        }

        if(!values.email){
          errors.email = "please enter Email Address"
        }
        if(!values.password ){
          errors.password = "please enter a password of min-8 characters"
        }
       
     
        return errors;
      },
     
      onSubmit:async(values)=>{
       try{
        const  register = await axios.post(`${config().api}/server/users/register`,values)
        alert(register.data.message)
        console.log(register.data);
        navigate("/")
       }
       catch(error){
        console.log(error);
       }
  
      }
  })



  return (
    <div className="registerWrapper">
      <div className="register">
        <div className="register-left">
          <img
            className="register-icon"
            src="https://res.cloudinary.com/practicaldev/image/fetch/s--GJ9yA-C_--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/gylus6erfa2h2mczucum.png"
            alt=""
          />
        </div>
        <div className="register-right">
          <form className="login-register" onSubmit={formik.handleSubmit}>
            <div className="register-name">
              <input
                type="text"
                name="username"
                onChange={formik.handleChange}
                value={formik.values.username}
                className={
                  formik.values.username
                    ? "username accept"
                    : "username error"
                }
                placeholder="username"
              />
              {/* <input
                type="text"
                name="lastname"
                onChange={formik.handleChange}
                value={formik.values.lastname}
                className={
                  formik.values.lastname ? "lastName accept" : "lastName error"
                }
                placeholder="Last Name"
              />
            
            {formik.errors.lastname ? (
              <div className="warning">{formik.errors.lastname}</div>
            ) : null} */}
           {/*  <input
              type="text"
              name="address"
              // onChange={formik.handleChange}
              // value={formik.values.address}
              className={
                formik.values.address ? "addresses accept" : "addresses error"
              }
              placeholder="Address"
            />
            {formik.errors.address ? (
              <p className="warning">{formik.errors.address}</p>
            ) : null} */}
           </div> <input
              type="email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              className={formik.values.email ? "Email accept" : "Email error"}
              placeholder="Email"
            />
            {formik.errors.email ? (
              <p className="warning">{formik.errors.email}</p>
            ) : null}
            <input
              type="password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              className={
                formik.values.password ? "Password accept" : "Password error"
              }
              placeholder="Password"
            />
            {formik.errors.password ? (
              <p className="warning">{formik.errors.password}</p>
            ) : null}
            <button type={"submit"}>Submit</button>
          </form><br></br>
          <p className="login-redirect">
            Already an user |{" "}
            <Link className="link" to="/">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
 export default Register;