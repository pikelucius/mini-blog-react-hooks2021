# mini-blog-react-hooks2021
A simple blog using react and hooks for statehandling. Json-server is used for simplicity no backend api or database needed.

## npm start / npm run start
npm start / npm run start => Starts the react app in dev-mode.

## Json-server
Install json-server => npm install -g json-server

Json-server uses a json-file like a db, works like a fake REST-api. Json-server watches the json-file and throu json-server api requests, it can be manipulated.
For more info about json-server https://www.npmjs.com/package/json-server

Type "json-server --watch data/db.json --port 8000" for watch the db.json file in dir data on port 8000 (changed the standard port to eliminate crash)
