module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/hello-world/' : '/',
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/scss/_variables.scss";
          @import "@/scss/_animations.scss";
          @import "@/scss/_mixins.scss";
        `
      }
    }
  }
};