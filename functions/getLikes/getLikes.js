const client = require('../../utilities/sanityClient')

client.config({
  token: process.env.SANITY_TOKEN,
})

// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const handler = async (event) => {
  try {
    const id = JSON.parse(event.body).image
    const sanityRes = await client.fetch(
      `*[_id == $id][0]{count}`,
      { id: id }
    )    
      
    return {
      statusCode: 200,
      body: JSON.stringify(sanityRes),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
