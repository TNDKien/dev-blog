import type { NextPage } from "next";
import fetchData from "@utils/fetch-data";
import StoryblokStory from "@storyblok/react/story";
import { notFound } from "next/navigation";
import Image from "next/image";
import { GithubIcon, Globe } from "lucide-react";
import Link from "next/link";

const Home: NextPage = async () => {
  const { data, status } = await fetchData("home");
  if (status === 404) {
    return notFound();
  }

  return (
    <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
      <StoryblokStory story={data.story} />

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12 lg:mb-16">
        <div className="transition-transform duration-300">
          <div className="relative w-48 h-48">
            <Image
              src="/mfk.jpeg"
              alt="Kien Dang"
              fill
              className="rounded-full shadow-xl ring-4 ring-blue-600 object-cover"
              priority
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600/20 to-purple-600/20" />
          </div>
        </div>
        <div className="md:w-2/3 text-center md:text-left space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 bg-clip-text text-transparent">
            Welcome to my blog!
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
            I'm Kien, and here I document my latest explorations in web
            development.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <Link
              href="https://kiendang.nl"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
            >
              <Globe className="h-5 w-5" />
              <span>kiendang.nl</span>
            </Link>
            <Link
              href="https://github.com/TNDKien"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
            >
              <GithubIcon className="h-5 w-5" />
              <span>TNDKien</span>
            </Link>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="prose prose-sm sm:prose lg:prose-lg max-w-none dark:prose-invert">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sm:p-8 lg:p-10 space-y-4 sm:space-y-6 border border-gray-100 dark:border-gray-700">
          <p className="leading-relaxed text-gray-700 dark:text-gray-300 [&:not(:first-child)]:mt-6">
            I'm a second-year student at Fontys University of Applied Sciences,
            studying ICT & Media Design with a focus on web development. While
            my studies cover both design and development, I've found my passion
            lies more in front-end development.
          </p>
          <p className="leading-relaxed text-gray-700 dark:text-gray-300">
            In this blog, I share tutorials, insights, and experiences from my
            journey as a developer. You'll find posts organized by category in
            the sidebar, covering topics from basic concepts to advanced
            implementations.
          </p>
          <p className="leading-relaxed text-gray-700 dark:text-gray-300">
            I started this blog in December 2024 during my 3rd semester, and I'm
            excited to share my learning journey with you. Feel free to explore
            the tutorials and articles – I hope you find them helpful!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
