// pages/_app.js
import "../styles/globals.css"; // Global styles
import "react-toastify/dist/ReactToastify.css"; // Toastify styles
import { ToastContainer } from "react-toastify";
import Layout from "../components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ToastContainer position="bottom-right" autoClose={5000} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
