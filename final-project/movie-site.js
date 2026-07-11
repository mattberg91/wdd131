

const form = document.querySelector("#movieForm");
const notes = document.querySelector("#notes");
const output = document.querySelector("#output");

const ratingMovie = document.querySelector("#ratingMovie");
const mvoieDescription = document.querySelector("#movieDescription");

const movieList = [
    {
        name: "Frozen",
        description: "A movie about a cursed princess who controls ics and goes on an adventure with her sister.",
        rating: "PG",
    },
    {
        name: "Tangled",
        description: "A movie about a princess with magic hair that heals people who goes on an adventure to find out who she is.",
        rating: "PG",
    },
    {
        name: "My Hero Acadamia: Two Heroes",
        description: "A movie about a young heroe and his mentor visiting an island made out of technology and their ensuing adventure.",
        rating: "PG-13",
    },
]


form.addEventListener("submit", function (event) {
    event.preventDefault();
    output.textContent = "";

    const movieName = form.movieName.value.trim();
    const movieDescription = form.movieDescription.value.trim();
    const movieRating = form.ratingMovie.value;

    



    console.log("Creating movie output");
    output.innerHTML = `
        <h2>Movie Submitted</h2>
        <p>Movie Name: ${movieName}</p>
        <p>Movie Description: ${movieDescription}</p>
        <p>Movie Rating: ${movieRating}</p>
        `;
});



let  movieCard = document.querySelector("#movieCard");
let input = document.querySelector('#search');
let button = document.querySelector('button');

button. addEventListener('click', search);
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
        console.log(filteredMovies);
    }


    let sortedMovies = filteredMovies.sort(compareMovies)



    movieCard.innerHTML = "";

    sortedMovies.forEach(function(movies) {
        renderMovieCard(movies);
    })

    function compareMovies(a, b) {
        if (a.name < b.name) {
            return -1;
        }else if (a.name > b.name) {
            return 1;
        }
        return 0;
    }
function movieTemplate(movies) {
    return `
        <article class="movie-card">
            <h3>${movies.name}</h3>
            <p>${movies.description}</p>
            <p>Rating: ${movies.rating}</p>
        </article>
        `;
}

function renderMovie(movies) {
    movieCard.innerHTML += movieTemplate(movies);
}



function getRandomMovie() {
    let randomNum = Math.floor(Math.random() * movieList.length);
    return movieList[randomNum];
}

function init() {
    movieCard.innerHTML = "";
    let randomMovie = getRandomMovie();
    movieCard.innerHTML += movieTemplate(randomMovie);
}
init();

























