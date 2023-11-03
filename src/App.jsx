import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Details from "./pages/Details";
import NoTokenAccess from "./auth/NoTokenAccess";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Provider store={store}>
      <GoogleOAuthProvider
        clientId={import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<Details />} />
            <Route path="/search" element={<SearchResults />} />
            <Route
              path="/login"
              element={
                <NoTokenAccess>
                  <Login />
                </NoTokenAccess>
              }
            />
            <Route
              path="/register"
              element={
                <NoTokenAccess>
                  <Register />
                </NoTokenAccess>
              }
            />
          </Routes>
          <ToastContainer theme="colored" />
          <Footer />
        </BrowserRouter>
      </GoogleOAuthProvider>
    </Provider>
  );
}

export default App;
