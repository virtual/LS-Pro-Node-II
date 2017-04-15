# LS-Pro-Node-II

Topics:

 * Route Params
 * Query Params


### Routes

  * Run `npm init` to create your `package.json` file.
  * Install `express` with `npm i --save express`
  * Create your server file called `server.js`.
  * Import `express` and create your `app`.
  * Set your `app` to listen on port 3000 and then write a `'/'` route that returns `'Hello World!'`;
  * Create the following route: `/multiply/:x/:y` that multiplies the two parameters and returns them.
  * Create a route called `/books` that returns an array of your favorite books.
  * Modify `/books` to accept a query parameter (`?key=value`) and then use it to return a specific book whose index is specified in the url.  example: `/books?index=2`
