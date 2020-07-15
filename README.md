# Shoppers List
> An Intro to MERN stack

A MERN stack app. We can add delete items which are added from the front end to the mongoDB database. A simple full stack application following the MERN stack. 

This is just a demonstration in order to know how the MERN stack works. How we can make this simple todo list app into a big scale app. 

## Usage 

- **MongoDB, React, Express**

- We can use it as a todo-list app to. 

## Update

- We are deploying it on heroku, as it is a full stack app we need to run both side at the same time. like **server** and **client** at the same time. 

- We configured the _server.js_ and added a script on server's config. Which defines that we need to run the build file for client side files if the production build isn't run yet. 

```json
"heroku-postbuild": "NPM_CONFIG_PRODUCTION=false npm install --prefix client && npm run build --prefix client"
```

- Server configuration that checks new builds on our every push. 

```js
// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  // finds the index.html file from the build folder of the client side. 
  app.get('*', () => {
    resizeBy.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
```

- Implementing JWT Auth.