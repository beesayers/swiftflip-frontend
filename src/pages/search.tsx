import PrimaryLayout from "../components/layouts/primary/PrimaryLayout";
import NewSearch from "../components/search/new/NewSearch";
import { NextPageWithLayout } from "./page";

const Home: NextPageWithLayout = () => {
  return <></>;
};

export default Home;

Home.getLayout = (page) => {
  return (
    <PrimaryLayout pageTitle="Product Search" pageDescription="Lookup products for cost information">
      <NewSearch />
    </PrimaryLayout>
  );
};
