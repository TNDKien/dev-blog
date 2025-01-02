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
        <h2 className="p-2 font-bold">{article.titel || "Untitled"}</h2>
        <p className="p-2">{article.datum || "No teaser available"}</p>
      </div>
    </Link>
  );
};

export default BlogTeaser;
