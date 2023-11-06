import Link from "next/link";
import { montserrat } from "./ui/fonts";
import "./ui/global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <header className="flex justify-between bg-blue-500 p-5 text-white">
          <ul className="flex gap-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </header>

        {children}

        <footer className="flex justify-center bg-blue-500 p-5 text-white">
          <p>Made with love by vercel 💘 </p>
        </footer>
      </body>
    </html>
  );
}
