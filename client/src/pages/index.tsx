import Head from "next/head";
import auth from "../middleware/auth";
import * as cookie from "cookie";
import { Header } from "@/components/assets/header/Header";
import { Footer } from "@/components/assets/footer/Footer";
import { Banner } from "@/components/home/Banner";
import { Offers } from "@/components/home/Offers";
import { NewArrivals } from "@/components/home/NewArrivals";

export default function Home(props: { token: string }) {
  return (
    <>
      <Head>
        <title>GameShop</title>
      </Head>
      <Header token={props.token} />
      <Banner />
      <NewArrivals />
      <Offers />
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
