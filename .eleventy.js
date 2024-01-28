const sanityImage = require('eleventy-plugin-sanity-image');
const sanityClient = require('./utilities/sanityClient')
// eleventy config
module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./images");
    eleventyConfig.addPassthroughCopy("./style.css");
    eleventyConfig.addPassthroughCopy("./_redirects");
    eleventyConfig.addPlugin(sanityImage, {
        client: sanityClient // This is your Sanity connection object
      })
}