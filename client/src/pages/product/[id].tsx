import Head from "next/head";
import auth from "../../middleware/auth";
import * as cookie from "cookie";
import { Header } from "@/components/assets/header/Header";
import { Footer } from "@/components/assets/footer/Footer";
import { Description } from "@/components/product/Description";

export default function ProductId(props: { token: any }) {
  const product = {
    _id: 1,
    img: ["https://i.ibb.co/L8Nrb7p/1.jpg", "https://i.ibb.co/cLnZjnS/2.jpg"],
    name: "Nike #1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 300.5453,
    stock: 15,
  };

  return (
    <>
      <Head>
        <title>{product.name} | GameShop</title>
      </Head>
      <Header token={props.token} />
      <Description token={props.token} product={product} />
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
