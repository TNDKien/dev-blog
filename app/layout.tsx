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
      <html>
        <body className="flex h-screen">
          <Sidebar />
          <main className="flex-1 p-4 overflow-y-auto">{children}</main>
        </body>
      </html>
    </StoryblokProvider>
  );
}
