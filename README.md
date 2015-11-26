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

# MySQL (MariaDB)
```sh
$ gulp mysql:start
$ gulp mysql:stop
```

# Migration
```sh
$ sequelize db:migrate
$ sequelize db:migrate:undo
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