import type { Metadata, NextPage } from "next";
import fetchData from "@utils/fetch-data";
import StoryblokStory from "@storyblok/react/story";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};

const Home: NextPage<Props> = async () => {
  const { data, status } = await fetchData("home");
  if (status === 404) {
    return notFound();
  }

  return (
    <div className="container mx-auto max-w-5xl flex flex-col space-y-2 pt-6">
      <StoryblokStory story={data.story} />

      <h1 className="font-semibold text-4xl">
        Welcome to my blog! I'm Kien and here I document my latest explorations.
      </h1>
      <p className="leading-7">
        I'm a second-year student Fontys University of Applied Sciences. I'm
        currently studying ICT & Media Design, focussing on webdesign and
        development. At the moment I'm more into front-end developement rather
        than webdesign.
        <br />
        <br />
        You can find all my articles in the gallery or you can navigate to them
        in the sidebar, which I organised on category. I started writing in my
        3rd semester, december 2024. I hope you enjoy reading them!
      </p>
    </div>
  );
};

export default Home;
