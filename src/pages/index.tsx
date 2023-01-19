import Image from "next/image";
import { useRouter } from "next/router";
import PrimaryLayout from "../components/layouts/primary/PrimaryLayout";
import { NextPageWithLayout } from "./page";

const Home: NextPageWithLayout = () => {
  const { locale } = useRouter();

  return (
    <>
      <section className="flex flex-col items-center gap-y-5 mt-12 sm:mt-36 bg-white">
        <Image
          src="/next.svg"
          alt="Next Logo"
          width={272}
          height={92}
          priority
        />
        <p className="text-black">Example text in {locale} language</p>
      </section>
    </>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
