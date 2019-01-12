const express = require('express');
const app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static("static"));

app.get("*", (req, res) => {
	res.status(404);
	res.send(`
	<p>
		404: this page could not be found :(
	</p>
	<script>
		setTimeout(() => {
		location.assign("/");
		}, 1000);
	</script>
	`);
});

http.listen(3000, () => {
	console.log("Server has started :D")
});

let players = [];

process.on("uncaughtException", err => {
	console.log("Oh, an error! ", err)
});

const id = require("shortid").generate;

function upplay(np) {
	players = np;
	io.emit("pldata", players);
	return upplay;
}

var animals = require('animals');
function anim() {
	const d = animals();
	return "Anonymous " + d[0].toUpperCase() + d.slice(1);
}

io.on('connection', function (socket) {
	socket.on('recieveName', data => {
		upplay(players.concat({
			id: id(),
			name: data || anim(),
		}));
	});
});
