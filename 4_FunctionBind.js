// The .bind method from Prototype.js 
Function.prototype.mybind = function(){ 
  var fn = this, args = Array.prototype.slice.call(arguments), object = args.shift(); 
  return function(){ 
    return fn.call(object, 
      args.concat(Array.prototype.slice.call(arguments))); 
  }; 
};

function testBind() {
	console.log(this.name);
	for (var i in arguments) {
		console.log(arguments[i]);
	}
}

if (testBind.mybind) {
	console.log (testBind.mybind);
}
var employee = { name : "employee"};
var customer = {name : "customer"};

var boundFunction = testBind.mybind(customer, " my prefix", " my suffix");

boundFunction("final string", "one more");
