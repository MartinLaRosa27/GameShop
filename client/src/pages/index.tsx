import Head from "next/head";
import auth from "../middleware/auth";
import * as cookie from "cookie";

export default function Home(props: { token: string }) {
  return (
    <>
      <Head>
        <title>GameShop</title>
      </Head>
      <h1>Home</h1>
    </>
  );
}

export const getServerSideProps = async (context: any) => {
  let token;
  if (typeof context.req.headers.cookie !== "string") {
    token = "Invalid token";
  } else {
    const parsedCookies = cookie.parse(context.req.headers.cookie);
    token = parsedCookies.token;
  }
  if (!(await auth(token))) {
    return {
      redirect: {
        destination: "/welcome",
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
