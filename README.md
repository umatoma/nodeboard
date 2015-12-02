# NodeBoard
Sample board application with Node.js

# Requirements
* Node.js - v0.12.x (nvm)
* MariaDB - 10.x

# NPM Packages
```sh
$ npm install -g gulp mocha eslint mysql sequelize
```

# MariaDB
```sh
$ gulp db:start
$ gulp db:stop
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