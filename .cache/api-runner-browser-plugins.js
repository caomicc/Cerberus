module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-glamor/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"gatsby-portfolio","short_name":"portfolio","start_url":"/","background_color":"#1fa2ff","theme_color":"#1fa2ff","display":"minimal-ui","icon":"src/images/apple-touch-icon.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"85fc33e18f073f064708544882916e3a"},
    },{
      plugin: require('../node_modules/gatsby-plugin-scroll-indicator/gatsby-browser.js'),
      options: {"plugins":[],"color":"linear-gradient(to right, #1fa2ff, #12d8fa, #a6ffcb)","height":"5px","zIndex":"9999"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
