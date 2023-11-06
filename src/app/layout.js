import { Inter } from "next/font/google";
import "./globals.css";
import SparklesIcon from "@/components/SparklesIcon";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Captionify",
  description:
    "Captionify is your all-in-one solution for effortless and precise video captioning. Transform your videos into accessible and engaging content with just a few clicks. Whether you're a content creator, marketer, educator, or business owner, Captionify is the essential tool to make your videos stand out and reach a broader audience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`
          ${inter.className}
          bg-gradient-to-b from-bg-gradient-from to-bg-gradient-to min-h-screen text-white`}
      >
        <main className="p-4 max-w-4xl mx-auto">
          <header className="flex justify-between my-8">
            <Link href="/" className="text-lg flex gap-1">
              <SparklesIcon />
              <span>Captionify</span>
            </Link>
            <nav className="flex gap-6 opacity-80">
              <Link href="/">Home</Link>
              <Link href="/pricing">Pricing</Link>
              <Link href="mailto:chiraagbhandakkar@gmail.com">Contact</Link>
            </nav>
          </header>
          {children}
        </main>
      </body>
    </html>
  );
}
