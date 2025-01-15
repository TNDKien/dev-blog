import fetchData from "@utils/fetch-data";
import Article from "@components/Article/Article";

export default async function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  try {
    const { data, status } = await fetchData(`/articles/${slug}`);
    if (status !== 200 || !data.story) {
      throw new Error(`Article with slug "${slug}" not found`);
    }

    const blok = data.story.content;

    return (
      <div>
        <Article blok={blok} />
      </div>
    );
  } catch (error) {
    console.error("Error rendering the article page:", error);

    return (
      <div>
        <p>Error loading the article. Please try again later.</p>
      </div>
    );
  }
}
