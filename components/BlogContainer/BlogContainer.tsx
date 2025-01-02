import { useState, useEffect } from "react";
import { getStoryblokApi, storyblokEditable } from "@storyblok/react";
import BlogTeaser from "../BlogTeaser/BlogTeaser";

import { ReactNode } from "react";

interface BlogContainerProps {
  blok: {
    titel: string;
  };
}

const BlogContainer = ({ blok }: BlogContainerProps) => {
  const [artikelen, setArtikelen] = useState<
    { titel: any; datum: any; afbeelding: any; slug: any }[]
  >([]);

  useEffect(() => {
    const fetchArtikelen = async () => {
      try {
        const storyblokApi = getStoryblokApi();
        const { data } = await storyblokApi.get("cdn/stories", {
          version: "draft",
          starts_with: "blog/",
          is_startpage: false,
        });

        // Filter out the article with the name 'Home'
        const filteredArticles = data.stories.filter(
          (article: { name: string }) => article.name !== "Home"
        );

        const formattedArtikelen = filteredArticles.map(
          (article: {
            content: { titel: any; datum: any; afbeelding: any };
            name: any;
            full_slug: any;
          }) => ({
            titel: article.content.titel || article.name,
            datum: article.content.datum || "",
            afbeelding: article.content.afbeelding || null,
            slug: article.full_slug,
          })
        );

        setArtikelen(formattedArtikelen);
      } catch (error) {
        console.error("Failed to fetch articles", error);
      }
    };

    fetchArtikelen();
  }, []);

  return (
    <section className="p-6 lg:px-24" {...storyblokEditable(blok)}>
      <div className="text-2xl font-bold mb-6">{blok.titel}</div>
      <div className="flex flex-wrap gap-6">
        {artikelen.map((article) => (
          <BlogTeaser
            article={article}
            key={article.slug}
            className="w-64 h-auto flex-shrink-0 rounded-xl overflow-hidden"
            imgClassName="w-full object-cover"
          />
        ))}
      </div>
    </section>
  );
};

export default BlogContainer;
