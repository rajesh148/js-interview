class Movie {
    constructor(title,director,genre,releaseYear,rating){
        this.title = title;
        this.director = director;
        this.genre = genre;
        this.releaseYear = releaseYear;
        this.rating = rating;
    }

    // get overview() {
    //     return this.getOverview();
    // }

    getOverview() {
        return `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}`
    }
}

const RRR = new Movie("RRR","Rajamouli","Drama",2022,4.5);
console.log(RRR.getOverview())