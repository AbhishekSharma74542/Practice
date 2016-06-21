	console.log("We got Connected Let's Start");
	var server = require('http').createServer();
	var io = require('socket.io')(server);
	
	var mysql      = require('mysql');
	
    //Defining Connection to MySQL
	var connection = mysql.createConnection({
	host     : 'cgdev2.cf53zztlzwqg.us-east-1.rds.amazonaws.com',
	user     : 'cgdevuser',
	password : 'cgdev123',
	database : 'internDb'
	});

	//Connecting MySQL 
	connection.connect(function(err) {
		  if (err) {
		    console.error('error connecting: ' + err.stack);
		    return;
		  }
		 
		  console.log('connected as id ' + connection.threadId);
	});


	io.on('connection', function(socket){
	socket.on('event', function(data){
	console.log("Data on Event is  :: "+data);


	connection.connect();

	connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
	if (err) throw err;

	console.log('The solution is: ', rows[0].solution);
	});

	});
	socket.on('disconnect', function(){
	console.log("Data on Event is  :: "+data);
	});
	});
	server.listen(1339);
