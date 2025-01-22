import "./globals.css";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import StoryblokProvider from "../components/StoryblokProvider";
import Sidebar from "../components/Sidebar/Sidebar";
import { Metadata } from "next";

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
});

export const metadata: Metadata = {
  title: {
    default: "Kien Dang | Web Developer Blog",
    template: "%s | Kien Dang",
  },
  description:
    "Web development insights, tutorials, and experiences shared by Kien Dang",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kiendang.nl",
    siteName: "Kien Dang Blog",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <StoryblokProvider>
      <html lang="en" className="scroll-smooth">
        <body className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors">
          <Sidebar />
          <main className="transition-all duration-300 min-h-screen p-4 sm:p-6 lg:p-8">
            {children}
          </main>
        </body>
      </html>
    </StoryblokProvider>
  );
}
