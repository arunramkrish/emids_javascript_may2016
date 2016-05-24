var MovieManager = (function() {
	console.log("I am invoked");
	var movies = [];
	function addImpl(movie) {
		movies.push(movie);
	}
	
	function displayImpl() {
		for (var index in movies) {
			console.log(movies[index].name);
		}
	}
	
	return {
		add : addImpl,
		display : displayImpl
	};
})();
