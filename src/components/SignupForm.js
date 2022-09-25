import  React, {useState} from "react";
import validation from "./validation";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import ReCAPTCHA from "react-google-recaptcha";
 

const SignupForm = () => {

    const [values, setValues] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        phonenumber: "",
   });

   const [errors,setErrors] = useState({});

   const handleChange = (event) =>{
     setValues({
        ...values,
        [event.target.name]: event.target.value,
     });
   };

   const handleFormSubmit = (event) => {
    event.preventDefault();
    setErrors(validation(values));
   };

    return (
        
        
    <div className="container">
        <div className="app-wrapper">
            <div>
                <p1 className="title">Sign up <p2>with</p2><p3><FaGoogle /></p3><p4><FaGithub /></p4></p1>
            </div>
            <form className="form-wrapper">
                <div className="name">
                    <label className="label">First Name</label>
                    <input className="input" 
                           type="text" 
                           name="firstname" 
                           value={values.firstname}
                           onChange={handleChange}
                           />
                           {errors.firstname && <p className="error">{errors.firstname}</p>}
                </div>
                <div className="name">
                    <label className="label">Last Name</label>
                    <input className="input" 
                           type="text" 
                           name="lastname" 
                           value={values.lastname}
                           onChange={handleChange}
                           />
                           {errors.lastname && <p className="error">{errors.lastname}</p>}
                </div>
                <div className="email">
                    <label className="label">User Id/Email Id</label>
                    <input className="input" 
                           type="email" 
                           name="email" 
                           value={values.email} onChange={handleChange}
                           />
                            {errors.email && <p className="error">{errors.email}</p>}
                </div>
                <div className="password">
                    <label className="label">Password</label>
                    <input className="input" 
                    type="password" 
                    name="password" 
                    value={values.password} 
                    onChange={handleChange}
                    />
                     {errors.password && <p className="error">{errors.password}</p>}
                </div>
                <div className="phonenumber">
                    <label className="label">Phone Number</label>
                    <input className="input" 
                    type="phonenumber" 
                    name="phonenumber"
                    value={values.phonenumber} 
                    onChange={handleChange}
                    />
                     {errors.phonenumber && <p className="error">{errors.phonenumber}</p>}
                </div>

                <ReCAPTCHA className="recaptcha"
                     sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                     onChange={handleChange}
                     />
                
                    
                    
                <button className="submit" onClick={handleFormSubmit}>Sign Up</button>
            </form>
        </div>
        
    </div>
    );
};
export default SignupForm;