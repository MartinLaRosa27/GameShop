import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/app.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import { SSRProvider } from "@react-aria/ssr";
import { UserContext } from "@/context/UserContext";
import { CategoryContext } from "@/context/CategoryContext";
import { ProductContext } from "@/context/ProductContext";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <title>GameShop</title>
      </Head>
      <SSRProvider>
        <UserContext>
          <CategoryContext>
            <ProductContext>
              <Toaster />
              <Component {...pageProps} />
            </ProductContext>
          </CategoryContext>
        </UserContext>
      </SSRProvider>
    </>
  );
}
