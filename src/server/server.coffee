express        = require 'express'
http           = require 'http'
path           = require 'path'

app           = express()                  # Express Application.
httpServer    = http.createServer app      # HTTP Server.

app
	.use express.static path.resolve __dirname, '../client'

app
	.set 'view engine', 'jade'
	.set 'views', path.resolve __dirname, './views'
	.set 'trust proxy', true

app.get '/', (req, res, next) -> res.render 'app'

httpServer.listen 3000

console.log "Listening on port 3000"