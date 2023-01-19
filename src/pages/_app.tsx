import type { AppProps } from "next/app";
import type { ReactNode } from "react";
import "../styles/globals.css";
import { NextPageWithLayout } from "./page";

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

export default function App({
  Component,
  pageProps,
}: AppPropsWithLayout): ReactNode {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(<Component {...pageProps} />);
}
