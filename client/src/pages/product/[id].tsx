import React from "react";
import Head from "next/head";
import auth from "../../middleware/auth";
import * as cookie from "cookie";
import { useProductContext } from "@/context/ProductContext";
import { Header } from "@/components/assets/header/Header";
import { Footer } from "@/components/assets/footer/Footer";
import { Description } from "@/components/product/Description";

export default function ProductId(props: { token: any; productId: string }) {
  const [product, setProduct] = React.useState<any>(null);
  const { getByIdId } = useProductContext();

  React.useEffect(() => {
    const callSetProduct = async () => {
      setProduct(await getByIdId(props.productId));
    };
    callSetProduct();
  }, []);

  return (
    <>
      <Header token={props.token} />
      {product && (
        <>
          <Head>
            <title>{product.name} | GameShop</title>
          </Head>
          <Description token={props.token} product={product} />
        </>
      )}
      {!product && (
        <>
          <div className="text-center loadPage">
            <div
              className="spinner-grow "
              style={{ width: "3rem", height: "3rem" }}
            >
              <span className="visually-hidden ">Loading...</span>
            </div>
          </div>
        </>
      )}
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
      productId: context.params.id,
      token,
    },
  };
};
