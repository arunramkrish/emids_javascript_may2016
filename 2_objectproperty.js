"use strict"
function MovieManagerClass() {
}
MovieManagerClass.prototype.add = function(movie) {
	this.movies.push(movie);
};
MovieManagerClass.prototype.display = function() {
		for (var index in this.movies) {
			console.log(this.movies[index].name);
		}
};
var MovieManager = new MovieManagerClass();

//following approach uses global variable
//var movies = [];
//Object.defineProperty(MovieManager, "movies", {
//	get : function() { return movies; },
//	configurable : false
//});

defineMovies(MovieManager);

/*
// try deleting or writing property to get error
try {
	delete MovieManager.movies;
MovieManager.movies = [];
} catch(e) {
	console.log(e);
}	
*/
function defineMovies(movieMgr) {
	var movies = [];
	var local = "jhghkhj";
	Object.defineProperty(movieMgr, "movies", {
		get : function() { 
			return movies; 
		},
		configurable : false
	});
	
}