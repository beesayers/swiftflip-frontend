import SignUp from "../components/auth/signup/SignUp";
import PrimaryLayout from "../components/layouts/primary/PrimaryLayout";
import { NextPageWithLayout } from "./page";

const Home: NextPageWithLayout = () => {
  return <></>;
};

export default Home;

Home.getLayout = (page) => {
  return (
    <PrimaryLayout pageTitle="Sign Up" pageDescription="Sign up for an account">
      <SignUp bgNamesDark="" bgNamesLight="" />
    </PrimaryLayout>
  );
};
