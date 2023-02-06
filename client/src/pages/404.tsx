import Head from "next/head";

export default function NotFoundPage() {
  return (
    <>
      <Head>
        <title>Page Not Found | GameShop</title>
      </Head>
      <div id="not_found" className="mt-5">
        <h1>404</h1>
        <h3>Page Not Be Found</h3>
      </div>
    </>
  );
}
