import fetchData from "@utils/fetch-data";
import Blog from "@components/Blog/Blog";

export default async function BlogPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  try {
    const { data, status } = await fetchData(`/blog/${slug}`);
    if (status !== 200 || !data.story) {
      throw new Error(`Article with slug "${slug}" not found`);
    }

    const blok = data.story.content;

    return (
      <div>
        <Blog blok={blok} />
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
