"use client";

import fetchData from "@utils/fetch-data"; // Update the path as per your project structure
import StoryblokStory from "@storyblok/react/story";

export default async function BlogPage() {
  try {
    const { data, status } = await fetchData("/articles/home");

    if (status !== 200 || !data?.story) {
      return <div>Content not found.</div>;
    }

    return (
      <div>
        <StoryblokStory story={data.story} />
      </div>
    );
  } catch (error) {
    console.error("Error loading the page:", error);

    return <div>Error loading content. Please try again later.</div>;
  }
}
