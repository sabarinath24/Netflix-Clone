import React from "react";
import LandingPage from "./pages/public/Page";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./router/AppRouter";
// import 'dotenv/config';

function App() {
  return (
    <AppRouter/>
  );
}

export default App;
