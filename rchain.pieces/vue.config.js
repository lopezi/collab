module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/collab/rchain.pieces.publish/'
        : '/collab/'
}
