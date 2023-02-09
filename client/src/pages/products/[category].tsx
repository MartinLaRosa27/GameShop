import React from "react";
import Head from "next/head";
import auth from "../../middleware/auth";
import * as cookie from "cookie";
import { useCategoryContext } from "@/context/CategoryContext";
import { useProductContext } from "@/context/ProductContext";
import { Header } from "@/components/assets/header/Header";
import { Footer } from "@/components/assets/footer/Footer";
import { Items } from "@/components/products/Items";

export default function ProductsCategory(props: {
  token: any;
  categoryTitle: string;
}) {
  const [products, setProducts] = React.useState<any>(null);
  const [category, setCategory] = React.useState<any>(null);
  const { getByCategory } = useProductContext();
  const { getCategoryByTitle } = useCategoryContext();

  React.useEffect(() => {
    const callgGetCategoryByTitle = async () => {
      const cat = await getCategoryByTitle(props.categoryTitle);
      if (cat) {
        setCategory(cat);
        setProducts(await getByCategory(cat._id, "desc", null));
      }
    };
    callgGetCategoryByTitle();
  }, []);

  return (
    <>
      <Header token={props.token} />

      {category && products && (
        <>
          <Head>
            <title>{category.title} | GameShop</title>
          </Head>
          <Items
            products={products}
            category={category.title}
            categoryId={category._id}
            setProducts={setProducts}
          />
        </>
      )}
      {!category ||
        (!products && (
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
        ))}
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
      categoryTitle: context.params.category,
      token,
    },
  };
};
