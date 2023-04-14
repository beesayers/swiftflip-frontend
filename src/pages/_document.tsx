import { Head, Html, Main, NextScript } from "next/document";

export default function Document(): JSX.Element {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/logo/logo_black.svg" type="image/svg+xml" media="(prefers-color-scheme: dark)" />
        <link
          rel="icon"
          href="/logo/logo_purple.svg"
          type="image/svg+xml"
          media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
