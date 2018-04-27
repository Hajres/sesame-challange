// Get all users
// api URL
var url  = "http://localhost:8080/api/users";
// Create an XMLHttpRequest Object
var xhr  = new XMLHttpRequest()
// open a Request To a Server.
xhr.open('GET', url, true)
xhr.onload = function () {
	var users = JSON.parse(xhr.responseText);
	//request finished and response is ready and status is ok.
	if (xhr.readyState == 4 && xhr.status == "200") {
		console.table(users); 
		// Server will throw and error 
	} else {
		console.error(users); 
	}
}
xhr.send(null);


// Get a user
var url  = "http://localhost:8080/api/users";
var xhr  = new XMLHttpRequest()
// get user 1 in the object
xhr.open('GET', url+'/1', true)
xhr.onload = function () {
	var users = JSON.parse(xhr.responseText);
	if (xhr.readyState == 4 && xhr.status == "200") {
		console.table(users);
	} else {
		console.error(users);
	}
}
xhr.send(null);


// Post a user
var url = "http://localhost:8080/api/users";

var data = {};
data.firstname = "Hajris";
data.lastname  = "Swaiah";
var json = JSON.stringify(data);

var xhr = new XMLHttpRequest();
xhr.open("POST", url, true);
// Adds HTTP headers to the request
xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
xhr.onload = function () {
	var users = JSON.parse(xhr.responseText);
	if (xhr.readyState == 4 && xhr.status == "201") {
		console.table(users);
	} else {
		console.error(users);
	}
}
// post user object to a server
xhr.send(json); 


// Update a user
var url = "http://localhost:8080/api/users";

var data = {};
data.firstname = "Aziz";
data.lastname  = "Meranda";
var json = JSON.stringify(data);

var xhr = new XMLHttpRequest();
// update user 12
xhr.open("PUT", url+'/12', true);
xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
xhr.onload = function () {
	var users = JSON.parse(xhr.responseText);
	if (xhr.readyState == 4 && xhr.status == "200") {
		console.table(users);
	} else {
		console.error(users);
	}
}
// send user object
xhr.send(json);


// Delete a user
var url = "http://localhost:8080/api/users";
var xhr = new XMLHttpRequest();
xhr.open("DELETE", url+'/12', true);
xhr.onload = function () {
	var users = JSON.parse(xhr.responseText);
	if (xhr.readyState == 4 && xhr.status == "200") {
		console.table(users);
		// server throws an error if status 400 "Bad Request" 403: "Forbidden" 404: "Page not found"
	} else {
		console.error(users);
	}
}
xhr.send(null);