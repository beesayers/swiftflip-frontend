import Signin from "../components/auth/signin/SignIn";
import PrimaryLayout from "../components/layouts/primary/PrimaryLayout";
import { NextPageWithLayout } from "./page";

const Home: NextPageWithLayout = () => {
  return <></>;
};

export default Home;

Home.getLayout = (page) => {
  return (
    <PrimaryLayout pageTitle="Sign in to SwiftFlip" pageDescription="Sign into your account">
      <Signin bgNamesDark="" bgNamesLight="" />
    </PrimaryLayout>
  );
};
