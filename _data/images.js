// export function that gets Sanity data and returns an array of images
// initialize sanity client
const client = require('../utilities/sanityClient')
module.exports = async function() {
    const query = `*[_type == "imageDoc"]{
        _createdAt,
        _id,
        ...,
        "imageUrl": image.asset->url,
        "slug": slug.current,
        "count": coalesce(count, 0)
    }| order(_createdAt desc)`
    const images = await client.fetch(query)
    console.log(images[0].imageUrl)
    return images
}