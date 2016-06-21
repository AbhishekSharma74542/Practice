console.log("We got Connected Let's Start");
var server = require('http').createServer();
var io = require('socket.io')(server);
io.on('connection', function(socket){
  socket.on('event', function(data){
  console.log("Data on Event is  :: "+data);
  });
  socket.on('disconnect', function(){
  console.log("Data on Event is  :: "+data);
  });
});
server.listen(3000);