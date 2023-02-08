import Head from "next/head";
import auth from "../middleware/auth";
import * as cookie from "cookie";
import { Footer } from "@/components/assets/footer/Footer";
import { Header } from "@/components/assets/header/Header";
import { FormContact } from "@/components/contact-us/FormContact";

export default function ContactUs(props: { token: any }) {
  return (
    <>
      <Head>
        <title>Contact Us | GameShop</title>
      </Head>
      <Header token={props.token} />
      <FormContact />
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
