const sanityImage = require('eleventy-plugin-sanity-image');
const sanityClient = require('@sanity/client')
const client = sanityClient({
    projectId: '5rep0ijd',
    dataset: 'production',
    apiVersion: '2021-10-02'
})
// eleventy config
module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./images");
    eleventyConfig.addPassthroughCopy("./style.css");
    eleventyConfig.addPlugin(sanityImage, {
        client: client // This is your Sanity connection object
      })
}