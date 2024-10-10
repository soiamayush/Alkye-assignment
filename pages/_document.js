import { Html, Head, Main, NextScript } from "next/document";
import Layout from "../components/layout";
import { ToastContainer } from "react-toastify";

export default function Document() {
  return (
    <Html lang="en">
      <Head></Head>
      <Layout>
        <ToastContainer />
        <body className="antialiased">
          <Main />
          <NextScript />
        </body>
      </Layout>
    </Html>
  );
}
