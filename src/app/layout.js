import Logo from "@/components/Logo";
import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "The Wild Oasis",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" bg-primary-900 text-primary-100">
        <Header />
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
