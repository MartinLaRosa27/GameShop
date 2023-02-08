import Head from "next/head";
import auth from "../../middleware/auth";
import * as cookie from "cookie";
import { Header } from "@/components/assets/header/Header";
import { Footer } from "@/components/assets/footer/Footer";
import { Items } from "@/components/products/Items";

export default function ProductsCategory(props: {
  token: any;
  category: string;
}) {
  const products = [
    {
      _id: 1,
      img: "https://i.ibb.co/L8Nrb7p/1.jpg",
      name: "Nike #1",
      price: 300.55656,
    },
    {
      _id: 2,
      img: "https://i.ibb.co/L8Nrb7p/1.jpg",
      name: "Nike #2",
      price: 300.5,
    },
    {
      _id: 3,
      img: "https://i.ibb.co/L8Nrb7p/1.jpg",
      name: "Nike #3",
      price: 300.5,
    },
    {
      _id: 4,
      img: "https://i.ibb.co/L8Nrb7p/1.jpg",
      name: "Nike #4",
      price: 300.5,
    },
  ];

  return (
    <>
      <Head>
        <title>{props.category} | GameShop</title>
      </Head>
      <Header token={props.token} />
      <Items products={products} category={props.category} />
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
      category: context.params.category,
      token,
    },
  };
};
