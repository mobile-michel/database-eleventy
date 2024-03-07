module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/admin");
	eleventyConfig.addGlobalData('dataCascade.id', 'config global data, 2nd in the cascade.');
return {
  dir: {
    input: "src",
    includes: "_includes",
    layouts: "_layouts"
  },
  templateFormats: ["html", "md", "liquid"]
};
}
