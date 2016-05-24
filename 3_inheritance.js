function Media(name) {
	this.name = name;
}
Media.prototype.display = function() {
	return this.name;
};

function Song(name, tone) {
	Media.call(this, name);
	this.tone = tone;
	this.type = "SONG";
}

function Movie(name, director) {
	Media.call(this, name);
	this.director = director;
}

Song.prototype = Object.create(Media.prototype);
Song.prototype.sing = function() {
	return this.name + " " + this.tone;
}

Movie.prototype = Object.create(Media.prototype);

var media = new Media("mymedia");
var song = new Song("song21", "rock");
var movie = new Movie("abc", "director1");
