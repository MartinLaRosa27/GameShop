import Head from "next/head";
import auth from "../middleware/auth";
import * as cookie from "cookie";
import { Footer } from "@/components/assets/footer/Footer";
import { Header } from "@/components/assets/header/Header";
import { Information } from "@/components/about-us/Information";

export default function AboutUs(props: { token: any }) {
  return (
    <>
      <Head>
        <title>About Us | GameShop</title>
      </Head>
      <Header token={props.token}/>
      <Information />
      <Footer />
    </>
  );
}

export const getServerSideProps = async (context: any) => {
  let token;
  if (typeof context.req.headers.cookie !== "string") {
    token = null;
  } else {
    const parsedCookies = cookie.parse(context.req.headers.cookie);
    token = parsedCookies.token;
  }
  if (!(await auth(token))) {
    token = null;
  }
  return {
    props: {
      token,
    },
  };
};
