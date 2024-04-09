module.exports = () => ({
  graphql: {
    config: {
      playgroundAlways: process.env.ENABLE_PLAYGROUND || false
    }
  }
});
