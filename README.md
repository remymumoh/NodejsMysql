# Node.js & MySQL Promises using Express with MVC and using async -> await 
This is a very basic example of CRUD in Node.js and mySQL promises with Model View Controller and async await.
## Installation
*for newbies : Clone or download zip to your machine then hit this :

	npm install

## Configuration (database)
util/db.js

	const dbConfig = {
	user: 'Enter db username', //mysql username
	password: 'enter password, leave empty if none used', //mysql password
	database: 'enter db name',
	host: 'enter host name or ip',
	connectionLimit:10, //mysql port timeout
	port:5721 //mysql port
	};


	
You're gonna need to create a DB named 'nodejs'

## NOTES
This repo use Express 4.x.

## Open your Browser
And type: localhost:3000
