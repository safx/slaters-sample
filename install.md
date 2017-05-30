```
brew install node yarn
yarn add -D webpack babel-core babel-loader babel-preset-es2015 babel-preset-react

yarn add -D css-loader style-loader

#yarn add -D extract-text-webpack-plugin html-webpack-plugin

yarn add -D react-hot-loader@next
yarn add -D webpack-dev-server

npm run server
``




## Using babel for wepback.config.js

To use babel, rename `wepback.config.js` to `wepback.config.babel.js`:

And then, create two `.babelrc`s.
First one is located on the root of repository, which is for `wepback.config.babel.js`.
``````bash
yarn add -D babel-register
echo '{ "presets": ["es2015"] }' > .babelrc
```

Second one is `./src/.babelrc`, which is for our app.
```js
{
  "presets": [
    ["es2015", {"modules": false}],
    "react"
  ],
  "plugins": [
    "react-hot-loader/babel"
  ]
}
```


When I tried write the settings of babel to `webpack.config.js`.
However HMR doesn't work in the following rule.
```js
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                           "presets": [["es2015", {"modules": false}], "react"],
                           "plugins": [ "react-hot-loader/babel" ]
                        }
                    }
                ]
            },
        ],
```
