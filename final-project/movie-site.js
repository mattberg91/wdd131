

const form = document.querySelector("#movieForm");
const notes = document.querySelector("#notes");
const output = document.querySelector("#output");

const ratingMovie = document.querySelector("#ratingMovie");
const mvoieDescription = document.querySelector("#movieDescription");



form.addEventListener("submit", function (event) {
    event.preventDefault();
    output.textContent = "";

    const movieName = form.movieName.value.trim();
    const movieDescription = form.movieDescription.value.trim();
    const movieRating = form.ratingMovie.value;

    



    consol.log("Creating movie output");
    output.innerHTML = `
    <h2>Movie Submitted</h2>
    <p>Movie Name: ${movieName}</p>
    <p>Movie Description: ${movieDescription}</p>
    <p>Movie Rating: ${movieRating}</p>
    `;
});

const movieList = [
    {
        name: "Frozen",
        description: "A movie about a cursed princess who controls ics and goes on an adventure with her sister.",
        rating: "PG",
    },
    {
        name: "Tangled",
        description: "A movie about a princess with magic hair that heals people who goes on an adventure to find out who she is.",
        rating: PG,
    },
    {
        name: "My Hero Acadamia: Two Heroes",
        description: "A movie about a young heroe and his mentor visiting an island made out of technology and their ensuing adventure.",
        rating: "PG-13",
    },
]


let  movieCard = document.querySelector("#movieCard");
let input = document.querySelector('#search');
let button = document.querySelector('button');

button. addEventListener('click', search); {
    function search(event) {
        event.preventDefault();

        let searchterm = document.querySelector('#search').value;

        let filteredMovies = movieList.filter(function(movie){
            return (
                movie.name.toLowerCase().includes(searchterm.toLowerCase()) ||
                movie.description.toLowerCase().includes(searchterm.toLowerCase()) ||
                movie.rating.toLowerCase().includes(searchterm.toLowerCase())
            )
        })
    }




