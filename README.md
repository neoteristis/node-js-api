# Node JS API Training

## Tutorials followed  

Tutorial 1 : [Medium - Build your first RESTful API with Node.js and Express.js](https://medium.com/@sayalijangam17/build-your-first-restful-api-with-node-js-and-express-js-fe5c21b6a667)  
Tutorial 2 : [StackAbuse - Building a REST API with Node and Express](https://stackabuse.com/building-a-rest-api-with-node-and-express/)
Tutorial 3 : [How I structure my REST APIs](https://dev.to/larswaechter/how-i-structure-my-rest-apis-11k4)

## Project setup

- `npm init` : start a node js project
  - Create the *package.json* file
- `npm install express` : install Express
  - Create the *package-lock.json* file
    - tells which packages with their version I use
    - is used to install all necessary packages when cloning the repo for example
  - Create the folder *node_modules* which stores all package

## Useful notes

> In package.json file, “index.js” is mentioned as the value of “main” property in the JSON. So, index.js is the main 
> entry file for the project.

>Additionally, the version of your application and "scripts" are here! You can supply any number of custom commands in 
> the "scripts" section, with a command associated to an alias. Here, the test alias is a wrapper for an echo statement.



Run project with `npm run dev`. In our case, `dev` is one of the script in package.js. Script content : `nodemon index.js`

> When doing version control with tools like Git - it's considered a good practice not to version the source code 
> of the modules you use in the application. In practical terms - don't keep track or push node_modules to a repository.
> Others can download the dependencies based on the crucial package-lock.json which happens automatically when they run 
> the application with npm.

## Useful extensions

- **Body-parser** : helps us decode the body from an HTTP request
  - Installation : `npm install --save body-parser`
- **CORS** : Since we are calling the API from different locations by hitting endpoints in the browser. We also have to install the CORS middleware. (see tutorial 2)
  - CORS : cross-origin resource sharing 
  - Installation : `npm install --save cors`