const path = require('path')
const px2rem = require('postcss-px2rem')

const postcss = px2rem({
    remUnit: 32 //基准大小 baseSize，需要和rem.js中相同
})
const PrerenderSPAPlugin = require('prerender-spa-plugin')
module.exports = {

    lintOnSave: false,
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    postcss
                ]
            }
        }
    },
    configureWebpack: {
        plugins: [
            new PrerenderSPAPlugin({
                // Required - The path to the webpack-outputted app to prerender.
                staticDir: path.join(__dirname, 'dist'),
                // Required - Routes to render.
                routes: ['/', '/new-retail', '/aboutus', '/distribution', '/groupBuy', '/spike', '/renovation','/customerService','/cardScreat', '/custormServiceActive','/social-contact', '/service','/iframe/help'],
            })
        ]
    }
};