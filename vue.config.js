const webpack = require('webpack')
module.exports = {
    configureWebpack:{
        resolve:{
            alias:{
                'assets':'@/assets',
                'common':'@/common',
                'components':'@/components',
                'network':'@/network',
                'plugin':'@/plugin'
            }
        },
        plugins: [
            new webpack.ProvidePlugin({
                  $:"jquery",
                  jQuery:"jquery",
                  "windows.jQuery":"jquery"
              })
          ]
    }
}