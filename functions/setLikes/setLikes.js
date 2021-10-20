const client = require('../../utilities/sanityClient')

client.config({
  token: process.env.SANITY_TOKEN,
})

// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const handler = async (event) => {
  try {
    const id = JSON.parse(event.body).image
    const sanityRes = await client.patch(id)
      .inc({ count: 1 })
      .commit()
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
