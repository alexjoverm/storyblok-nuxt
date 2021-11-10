import path from "path";
import { defineNuxtModule, addPluginTemplate } from "@nuxt/kit";

export default defineNuxtModule({
  name: "@storyblok/nuxt",
  configKey: "storyblok",
  defaults: {},
  setup(options) {
    console.log(options);
    addPluginTemplate({
      src: path.resolve(__dirname, "templates/plugin.js"),
      // mode: "client",
      options,
    });
  },
});
