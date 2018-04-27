## Set up a Vue project using webpack template

```
$ npm install -g vue-cli
$ vue init webpack todo-app
$ cd todo-app
$ npm install
$ npm run dev
```
src: https://github.com/vuejs-templates/webpack

## Set up Semantic UI with theming, less and asset and style related configs

```
npm install --save semantic-ui-less
npm install --save-dev less css-loader less-loader extract-text-webpack-plugin
npm install --save-dev file-loader url-loader

cp node_modules/semantic-ui-less/theme.config.example semanthic-theme/theme.config
cp -rf node_modules/semantic-ui-less/_site/** semanthic-theme/site
```
src: https://medium.com/webmonkeys/webpack-2-semantic-ui-theming-a216ddf60daf
