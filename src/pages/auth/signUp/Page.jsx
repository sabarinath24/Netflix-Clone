import React from "react";
import Form from "../../../components/form/Form";
import Logo from "./../../../assets/images/Netflix-logo.png";
import Footer from "../../../components/footer/Footer";

const SignUp = () => {
    return (
        <div className="auth-page">
            <img src={Logo} alt="logo" />
            <Form isSignUp />
            <Footer/>
        </div>
    );
};
export default SignUp;