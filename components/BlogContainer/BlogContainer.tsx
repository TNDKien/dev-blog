import { useState, useEffect } from "react";
import { getStoryblokApi, storyblokEditable } from "@storyblok/react";
import BlogTeaser from "../BlogTeaser/BlogTeaser";
import Blog from "@components/Blog/Blog";

const ArtikelContainer = ({ blok }) => {
  const [artikelen, setArtikelen] = useState([]);

  useEffect(() => {
    const fetchArtikelen = async () => {
      try {
        const storyblokApi = getStoryblokApi();
        const { data } = await storyblokApi.get("cdn/stories", {
          version: "draft", // or 'published'
          starts_with: "artikelen/",
          is_startpage: false,
        });

        // Filter out the article with the name 'Home'
        const filteredArticles = data.stories.filter(
          (article) => article.name !== "Home"
        );

        const formattedArtikelen = filteredArticles.map((article) => ({
          titel: article.content.titel || article.name,
          subtitel: article.content.subtitel || "",
          afbeelding: article.content.afbeelding || null,
          slug: article.full_slug,
        }));

        setArtikelen(formattedArtikelen);
      } catch (error) {
        console.error("Failed to fetch articles", error);
      }
    };

    fetchArtikelen();
  }, []);

  return (
    <section className="p-6 lg:px-24" {...storyblokEditable(blok)}>
      <p className="text-h2-desktop font-bold mb-6">{blok.titel}</p>
      <div className="flex overflow-x-auto gap-6">
        {artikelen.map((article) => (
          <BlogTeaser
            article={article}
            key={article.slug}
            className="w-72 h-auto flex-shrink-0" // Ensure fixed width and height
            imgClassName="h-48"
          />
        ))}
      </div>
    </section>
  );
};

export default ArtikelContainer;
