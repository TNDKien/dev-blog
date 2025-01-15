import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { render } from "storyblok-rich-text-react-renderer";
import { storyblokEditable } from "@storyblok/react/rsc";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CommentSection } from "../../lib/components/comment-section";

const Blog = ({ blok }: { blok: any }) => {
  return (
    <article
      className="relative flex flex-col justify-center items-center pt-4 font-sans"
      {...storyblokEditable(blok)}
    >
      <div className="container py-12 max-w-2xl">
        {/* Header Section */}
        <header className="text-center">
          <h1 className="text-2xl mb-6 font-semibold text-black">
            {blok.titel}
          </h1>
          <p className="pb-8 text-lg font-light text-gray-500">
            {blok.subtitel}
          </p>
        </header>

        {/* Metadata Section */}
        <div className="flex items-center w-full pb-8 text-sm gap-2">
          <img
            className="rounded-full w-16 h-16 object-cover"
            src="/me.jpeg"
            alt="Kien Dang"
          />
          <div className="flex flex-col">
            <span className="text-gray-900">Kien Dang</span>
            <span className="text-xs text-gray-500">
              {blok.datum
                ? new Date(blok.datum).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                : "Publicatie Datum"}
            </span>
          </div>
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
        <section className="mt-8">
          {render(blok.content, {
            nodeResolvers: {
              code_block: (children, props) => {
                const detectedLanguage = props?.class?.replace("language-", "");

                return (
                  <SyntaxHighlighter
                    language={detectedLanguage}
                    style={vscDarkPlus}
                    className="rounded-lg p-4 bg-gray-900 text-gray-200 shadow-md font-mono"
                  >
                    {String(children)}
                  </SyntaxHighlighter>
                );
              },
            },
          })}
        </section>

        {/* Comment Section */}
        <CommentSection articleid={blok._uid} />
      </div>
    </article>
  );
};

export default Blog;
