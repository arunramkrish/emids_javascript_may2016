//not fully encapsulated. movies array is visble outside to modify
var MovieManager1 = {
	movies : [],
	add : function(movie) {
		this.movies.push(movie);
	},
	display : function() {
		for (var index in this.movies) {
			console.log(this.movies[index].name);
		}
	}
}; 

//Constructor approach, Not a singleton
function MovieManagerConstr() {
	this.movies = [];
	this.add = function(movie) {
		this.movies.push(movie);
	};
	this.display = function() {
		for (var index in this.movies) {
			console.log(this.movies[index].name);
		}
	};
}
//following two objects will have its own copy of add and display function objects
var MovieManager2 = new MovieManagerConstr();
var MovieManager21 = new MovieManagerConstr();

//creating it programmatically
var MovieManager3 = new Object();
MovieManager3.movies = [];
MovieManager3.add = function(movie) {
		this.movies.push(movie);
	};
MovieManager3.display = function() {
		for (var index in this.movies) {
			console.log(this.movies[index].name);
		}
	};

//using the function to build it
var MovieManager4 = new Object();
MovieManagerConstr.call(MovieManager4);
//MovieManagerConstr.apply(MovieManager4);

