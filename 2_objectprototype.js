//Constructor approach, Not a singleton
function MovieManagerClass() {
	this.movies = [];

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

