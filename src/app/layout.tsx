import "./globals.css";
import Header from "@/components/Header/header";

export const metadata = {
  title: "Paxify | Where Dreams Embrace Execution.",
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
      <body style={{ margin: 0 }} id="body">
        <Header />
        {children}
      </body>
    </html>
  );
}
