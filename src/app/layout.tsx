import "normalize.css";
import "./globals.scss";
import NavigationBar from "./(components)/NavigationBar";
import { css } from "@linaria/core";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const container = css`
  margin-top: 120px;
  position: relative;
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NavigationBar />
        <div className={container}>{children}</div>
      </body>
    </html>
  );
}
