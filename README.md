# NodeBoard
Sample board application with Node.js

# Requirements
* Node.js - v0.12.x (nvm)
* MongoDB - 3.0.x

# NPM Packages
```sh
$ npm install -g gulp
$ npm install -g mocha
$ npm install -g eslint
```

# MongoDB
```sh
# Start
$ gulp start mongo.start
# Stop
$ gulp start mongo.stop
```

# Unit Test
```sh
$ npm test
```

# Linter
Check coding style by ESLint.
```sh
$ gulp check.lint
```

# Process manager
```sh
# Install
$ npm install pm2 -g
# Start application
$ pm2 start ecosystem.json
```