import Link from "next/link";
import { storyblokEditable } from "@storyblok/react/rsc";

const BlogTeaser = ({ article, className, imgClassName }) => {
  if (!article) {
    console.error("Article data is missing in ArtikelTeaser");
    return null;
  }

  return (
    <div className={`mr-6 ${className}`} {...storyblokEditable(article)}>
      <img
        className={`object-cover object-center w-full mb-8 ${imgClassName}`} // Use dynamic height
        src={article.afbeelding?.filename || ""}
        alt={article.afbeelding?.alt || "Image"}
      />
      <h2 className="h-12 mx-auto mb-8 text-xl font-semibold leading-none tracking-tighter text-black">
        {article.titel || "Untitled"}
      </h2>
      <div className="mx-auto text-base leading-relaxed text-gray-500 line-clamp-3">
        {article.subtitel || "No teaser available"}
      </div>
      <div className="mt-4">
        <Link
          href={`/${article.slug}`}
          className="inline-flex items-center mt-4 font-semibold text-red lg:mb-0 hover:text-neutral-600"
          title="read more"
        >
          Lees meer »
        </Link>
      </div>
    </div>
  );
};

export default BlogTeaser;
