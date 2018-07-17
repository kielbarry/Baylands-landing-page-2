const
express = require("express"),
app = express(),
router = express.Router(),
http = require("http"),
path = require("path"),
PORT = process.env.PORT || 3000,
bodyParser = require("body-parser"),
request = require("request"),
URL = require("url-parser");

app
	.use(bodyParser.json())
	.use(bodyParser.urlencoded({ extended : true }))
	.use(express.static(__dirname + "/"))
	// .get('/', (req, res) => res.sendFile(path.join(__dirname, '/src/App.js')))

app.get('/', function(req, res){
	var indexPath = path.join(__dirname, '/src/App.js');
	res.sendFile(indexPath);
});

var server = http.createServer(app);
server.listen(PORT, function(){
	console.log(`you're now listening to ${PORT}, smooth jazz`);
});