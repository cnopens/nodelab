//refer module
var events = require("events");
//eventEmmitter
var eventEmmitter = new events.EventEmmitter();//TypeError: events.EventEmmitter is not a constructor

//bind event handler
eventEmmitter.on('eventName',eventHandler);
//or 
// eventEmmitter.emit('eventName');另一种触发事件方式

function eventHandler() {
	console.log("---------------------------------------------")
}