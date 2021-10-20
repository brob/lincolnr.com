const sanityClient = require('@sanity/client')
const client = sanityClient({
    projectId: '5rep0ijd',
    dataset: 'production',
    apiVersion: '2021-10-02'
})

module.exports = client