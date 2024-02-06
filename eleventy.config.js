module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/admin");
return {
  dir: {
    input: "src",
    includes: "_includes",
    layouts: "_layouts"
  },
  templateFormats: ["html", "md", "liquid"]
};
}
