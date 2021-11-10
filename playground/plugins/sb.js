import StoryblokClient from "storyblok-js-client";
import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin(({ provide }) => {
  const client = new StoryblokClient({
    accessToken: "wANpEQEsMYGOwLxwXQ76Ggtt",
    // cache: { clear: 'auto', type: 'memory' },
    // timeout: 0
  });

  provide("storyapi", client);
  // provide("storybridge", storybridge);
});
