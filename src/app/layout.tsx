import Header from "@/components/Header/header";
import { GTM_BODY_IFRAME, GTM_HEAD_SCRIPT } from "@/constants/config";
import "./globals.css";

export const metadata = {
  title: "Reelife by Paxify | Where Dreams Embrace Execution.",
  description:
    "With Paxify you can elevate Your Website with Seamless Innovation and Simplicity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script id="gtag" async src={GTM_HEAD_SCRIPT}></script>
        <script
          id="ga-data"
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-SW6JRKP2YD');
              `,
          }}
        />
      </head>
      <body style={{ margin: 0 }} id="body">
        <noscript>
          <iframe
            title="gtm-frame"
            id="gtm-frame"
            src={GTM_BODY_IFRAME}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}></iframe>
        </noscript>

        <Header />
        {children}
      </body>
    </html>
  );
}
