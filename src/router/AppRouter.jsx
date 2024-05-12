import {
    ProtectedRoute,
    ProtectedRouteForUnAuthorizedPage,
  } from "./ProtectedRoute";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/portal/home/Page";
import SearchPage from "../pages/portal/search/Page";
import MyListPage from "../pages/portal/myList/Page";
import LandingPage from "../pages/public/Page";
import SignIn from "../pages/auth/signIn/Page";
import SignUp from "../pages/auth/signUp/Page";

  // import { getFetchTrending } from "../api/movies";
  const AppRouter = () => {
    // getFetchTrending();
    return (
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRouteForUnAuthorizedPage>
                <LandingPage />
              </ProtectedRouteForUnAuthorizedPage>
            }
          />
          <Route
            path="/signin"
            element={
              <ProtectedRouteForUnAuthorizedPage>
                <SignIn/>
              </ProtectedRouteForUnAuthorizedPage>
            }
          />
          <Route
            path="/signup"
            element={
              <ProtectedRouteForUnAuthorizedPage>
                <SignUp/>
              </ProtectedRouteForUnAuthorizedPage>
            }
          />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/mylist"
            element={
              <ProtectedRoute>
                <MyListPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/search"
            element={
              <ProtectedRoute>
                <SearchPage />
              </ProtectedRoute>
            }
          />
          <Route />
        </Routes>
      </BrowserRouter>
      // route end
    );
  };
  
  export default AppRouter;