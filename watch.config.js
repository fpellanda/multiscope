// initial copy from here ./node_modules/@ionic/app-scripts/config/watch.config.js
// node_modules//@ionic/app-scripts/dist
var watch = require('@ionic/app-scripts/dist/watch');
var copy = require('@ionic/app-scripts/dist/copy');
var copyConfig = require('@ionic/app-scripts/config/copy.config');

// this is a custom dictionary to make it easy to extend/override
// provide a name for an entry, it can be anything such as 'srcFiles' or 'copyConfig'
// then provide an object with the paths, options, and callback fields populated per the Chokidar docs
// https://www.npmjs.com/package/chokidar

console.log('---------------')
module.exports = {
  srcFiles: {
    //paths: ['{{SRC}}/**/*.(ts|html|s(c|a)ss)', '{{SRC}}/../api/server/**/*.ts'],
    paths: ['{{SRC}}/**/*.(ts|html|s(c|a)ss)', '{{SRC}}/../api/server/**/*.ts'],
    options: { ignored: ['{{SRC}}/**/*.spec.ts', '{{SRC}}/**/*.e2e.ts', '**/*.DS_Store', '{{SRC}}/index.html'] },
    callback: watch.buildUpdate
  },
  copyConfig: copy.copyConfigToWatchConfig()
};
