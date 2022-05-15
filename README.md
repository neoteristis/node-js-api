# Node JS API

## Tutorials followed  

Tutorial 1 : [Medium - Build your first RESTful API with Node.js and Express.js](https://medium.com/@sayalijangam17/build-your-first-restful-api-with-node-js-and-express-js-fe5c21b6a667)
Tutorial 2 : []()

## Project setup

- `npm init` : start a node js project
  - Create the *package.json* file
- `npm install express` : install Express
  - Create the *package-lock.json* file
  - Create the folder *node_modules* which stores all package

## Useful notes

> In package.json file, “index.js” is mentioned as the value of “main” property in the JSON. So, index.js is the main 
> entry file for the project.

Run project with `npm run dev`. In our case, `dev` is one of the script in package.js. Script content : `nodemon index.js`

> When doing version control with tools like Git - it's considered a good practice not to version the source code 
> of the modules you use in the application. In practical terms - don't keep track or push node_modules to a repository.
> Others can download the dependencies based on the crucial package-lock.json which happens automatically when they run 
> the application with npm.