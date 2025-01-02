"use client";

import { render } from "storyblok-rich-text-react-renderer";
import { storyblokEditable } from "@storyblok/react/rsc";

const Blog = ({ blok }: { blok: any }) => {
  return (
    <article
      className="relative flex flex-col justify-center items-center pt-4 lg:pt-8 font-sans"
      {...storyblokEditable(blok)}
    >
      {/* Header Section */}
      <header className="container px-4 lg:px-0 max-w-[800px] text-center">
        <h1 className="lg:text-3xl text-2xl mb-6 font-semibold text-black">
          {blok.titel}
        </h1>
        <p className="pb-8 text-lg font-light text-black">{blok.subtitel}</p>
      </header>
      {/* Metadata Section */}
      <div className="flex  flex-col items-start font-semibold w-full pb-8 text-sm gap-2">
        <span className=" text-gray-900">Author: Kien Dang</span>
        <span>Latest update: {blok.datum || "Publicatie Datum"}</span>
      </div>
      {/* Main Image */}
      <div className="w-full flex justify-center">
        <img
          className="w-full h-auto max-h-[800px] object-cover"
          src={blok.afbeelding.filename}
          alt={blok.afbeelding.alt}
        />
      </div>

      {/* Article Content */}
      <section className="font-serif max-w-[612px] mt-8 px-4 space-y-12 first-letter:font-sans first-letter:text-4xl first-letter:font-bold first-letter:text-red">
        {render(blok.content)}
      </section>
    </article>
  );
};

export default Blog;
