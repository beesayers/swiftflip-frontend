import Head from "next/head";
import Footer from "../../navigation/footer/Footer";
import Header from "../../navigation/header/Header";
import NewSearch from "../../search/new/NewSearch";

export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<"div"> {
  justify?: "items-center" | "items-start";
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children, justify = "items-center", ...divProps }) => {
  return (
    <>
      <Head>
        <title>SwiftFlip</title>
        <meta name="description" content="SwiftFlip" />
        <link rel="icon" href="/logo/logo_black.svg" type="image/svg+xml" media="(prefers-color-scheme: dark)" />
        <link
          rel="icon"
          href="/logo/logo_purple.svg"
          type="image/svg+xml"
          media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)"
        />
      </Head>
      <div {...divProps} className="min-h-screen flex flex-col bg-gradient-to-r from-light to-lightmid">
        <Header />
        <div className="flex-grow">
          <NewSearch />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default PrimaryLayout;
