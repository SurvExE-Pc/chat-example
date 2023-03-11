const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
app.get('/socket', (req, res) => {
  res.sendFile(__dirname + '/socketTest.html');
});

io.on('connection', (socket) => {
  socket.on('data', msg => {
    io.emit('data', msg);
    console.log(msg);
  });
});

http.listen(port, () => {
  console.log(`Server running. ${port}`);
});
