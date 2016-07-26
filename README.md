# React JS

## What is react?

* Javascript front end framework.
* Developed by Facebook.
* Creates reusable UI components.
* It is not MVC framework, its just `V` (View).
* Unlike other frameworks like Angular and Ember, React by default supports One Way binding.
* JSX - Javascript extensions, used for creating View components.

### JSX

* Javascript extensions.
* Used for creating Components for react.
* We can write JS and HTML using JSX.

## How to setup React?

* Install Nodejs.
* Install `babel` and `babel-cli` as global node packages using command `npm install -g babel` and `npm install -g babel-cli`.
* Create directory in your machine `mkdir <directory_name>`: For example `mkdir hello-world`
* Goto newly create directory `hello-world`.
* Run `npm init`. This will create a sample package.json file inside your `hello-world` directory.
* Run command `npm install webpack webpack-dev-server babel-core babel-loader babel-preset-react babel-preset-es2015 --save-dev`.
* Run command `npm install react react-dom --save`.
* Create file `webpack.config.js` inside `hello-world` directory, using `touch webpack.config.js`.
* Add the below in `webpack.config.js` file

```
var config = {
   entry: './main.js',

   output: {
      path:'./',
      filename: 'index.js',
   },

   devServer: {
      inline: true,
      port: 8080
   },

   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',

            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}

module.exports = config;

```

* Open `package.json` file. Under `scripts` add `"start": "webpack-dev-server --hot"`

```
...

"scripts": {
  "start": "webpack-dev-server --hot"
}
...

```
