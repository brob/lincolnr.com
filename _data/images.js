// export function that gets Sanity data and returns an array of images
// initialize sanity client
const sanityClient = require('@sanity/client')
const client = sanityClient({
    projectId: '5rep0ijd',
    dataset: 'production',
    apiVersion: '2021-10-02'
})
module.exports = async function() {
    const query = `*[_type == "imageDoc"]{
        ...,
        "imageUrl": image.asset->url,
        "slug": slug.current
    }`
    const images = await client.fetch(query)
    console.log(images[0].imageUrl)
    return images
}