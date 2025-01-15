import Link from "next/link";
import { storyblokEditable } from "@storyblok/react/rsc";

const BlogTeaser = ({
  article,
  className,
  imgClassName,
}: {
  article: any;
  className: string;
  imgClassName: any;
}) => {
  if (!article) {
    console.error("Article data is missing in BlogTeaser");
    return null;
  }

  return (
    <Link href={`/${article.slug}`}>
      <div
        className={`mr-6 ${className} transition-shadow duration-300 hover:shadow-lg`}
        {...storyblokEditable(article)}
      >
        <img
          className={` ${imgClassName}`}
          src={article.afbeelding?.filename || ""}
          alt={article.afbeelding?.alt || "Image"}
        />
        <p className="p-2 text-xs text-gray-500">
          {article.datum
            ? new Date(article.datum).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })
            : "Publicatie Datum"}
        </p>
        <h2 className="p-2 font-bold">{article.titel}</h2>
        <p className="text-xs p-2 text-gray-500">{article.subtitel}</p>
      </div>
    </Link>
  );
};

export default BlogTeaser;
