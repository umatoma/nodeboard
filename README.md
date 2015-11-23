# NodeBoard
Sample board application with Node.js

# Require
* Node.js - v0.12.x (nvm)
* MongoDB - 3.0.x

# MongoDB
```sh
# Start
$ mongod --config conf/mongod.conf --fork
```

# Process manager
```sh
# Install
$ npm install pm2 -g
# Start application
$ pm2 start ecosystem.json
```