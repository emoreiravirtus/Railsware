module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/Railsware/' : '/',
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