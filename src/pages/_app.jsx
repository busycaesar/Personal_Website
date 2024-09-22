import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "@/Components/layout";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Dev &apos;s Website</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
