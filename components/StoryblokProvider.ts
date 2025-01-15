"use client";

import {
  storyblokInit,
  apiPlugin,
  SbReactComponentsMap,
} from "@storyblok/react/rsc";
import Page from "./page.component";
import BlogContainer from "./BlogContainer/BlogContainer";
import BlogTeaser from "./BlogTeaser/BlogTeaser";
import ArticleContainer from "./ArticleContainer/ArticleContainer";
import ArticleTeaser from "./ArticleTeaser/ArticleTeaser";

const components = {
  page: Page,
  blogcontainer: BlogContainer,
  blogteaser: BlogTeaser,
  articlecontainer: ArticleContainer,
  articleteaser: ArticleTeaser,
};

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  components: components as SbReactComponentsMap,
});

export default function StoryblokProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

console.log(process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN);
