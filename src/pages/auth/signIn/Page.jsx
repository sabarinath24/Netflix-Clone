import "./signIn.css";

import React from "react";
import Form from "../../../components/form/Form";
import Footer from "../../../components/footer/Footer";
import Logo from "./../../../assets/images/Netflix-logo.png";


const SignIn = () => {
    return (
        <div className="auth-page">
            <img src={Logo} alt="logo" />
            <Form isSignin />
            <Footer />
        </div>
    );
};

export default SignIn;