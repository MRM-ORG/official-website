import Header from "@/components/Header/header";
import "./globals.css";

export const metadata = {
  title: "Reelife by Paxify | Where Dreams Embrace Execution.",
  description:
    "With Paxify you can elevate Your Website with Seamless Innovation and Simplicity",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          id="gtag"
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-SW6JRKP2YD"></script>
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
        <Header />
        {children}
      </body>
    </html>
  );
}
