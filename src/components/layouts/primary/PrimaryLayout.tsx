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
      </Head>
      <div {...divProps} className="min-h-screen flex flex-col">
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
