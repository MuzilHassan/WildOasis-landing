import "./globals.css";
import Header from "@/components/Header";
import { Josefin_Sans } from "next/font/google";

const JosefinSans = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});
export const metadata = {
  title: {
    template: " %s / The Wild Oasis",
    default: "Welcome / The Wild Oasis",
  },
  description: "Guest house paradise in chitral",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${JosefinSans.className} flex flex-col bg-primary-900 text-primary-100 antialiased`}
      >
        <Header />
        <div className="flex-1 px-8 py-12">
          <main className="max-w-7xl mx-auto">{children}</main>
        </div>
        <footer></footer>
      </body>
    </html>
  );
}
