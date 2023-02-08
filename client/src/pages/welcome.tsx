import { Footer } from "@/components/assets/footer/Footer";
import { Enter } from "@/components/welcome/Enter";
import { Header } from "@/components/welcome/Header";
import auth from "../middleware/auth";
import * as cookie from "cookie";
import Head from "next/head";

export default function Welcome() {
  return (
    <div id="welcome">
      <Head>
        <title>Welcome to GameShop!</title>
      </Head>
      <Header />
      <Enter />
      <Footer />
    </div>
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
  if (await auth(token)) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {
      token,
    },
  };
};
