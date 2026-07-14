

const form = document.querySelector("#movieForm");
const output = document.querySelector("#output");

const movieCard = document.querySelector("#movieCard");
const input = document.querySelector('#search');
const searchForm = document.querySelector('.search-bar');

let movieList = [
    {
        name: "Frozen",
        description: "A movie about a cursed princess who controls ice and goes on an adventure with her sister.",
        rating: "PG",
        date: "2026-07-12"
    },
    {
        name: "Tangled",
        description: "A movie about a princess with magic hair that heals people who goes on an adventure to find out who she is.",
        rating: "PG",
        date: "2026-07-12"
    },
    {
        name: "My Hero Academia: Two Heroes",
        description: "A movie about a young hero and his mentor visiting an island made out of technology and their ensuing adventure.",
        rating: "PG-13",
        date: "2026-07-12"
    },
]


form.addEventListener("submit", function (event) {
    event.preventDefault();

    output.textContent = "";

    const movieName = form.movieName.value.trim();
    const movieDescription = form.movieDescription.value.trim();
    const movieRating = form.ratingMovie.value;
    const movieDate = form.dateMovieEntered.value;

    const newMovie = {
        name: movieName,
        description: movieDescription,
        rating: movieRating,
        date: movieDate,
    };

    movieList.push(newMovie);
    movieList.sort(compareMovies);
    saveMovies();

    output.innerHTML = `
        <h2>Movie Submitted</h2>
        <p>Movie Name: ${movieName}</p>
        <p>Movie Description: ${movieDescription}</p>
        <p>Movie Rating: ${movieRating}</p>
        ${movieDate
            ? `<p><strong>Date Added:</strong> ${movieDate}</p>`
            : ""
        }
        `;



    init();

    form.reset();
});

searchForm.addEventListener("submit", search)

function search(event) {
    event.preventDefault();

    let searchTerm = input.value.trim().toLowerCase();

    let filteredMovies = movieList.filter(function (movie) {
        return (
            movie.name.toLowerCase().includes(searchTerm) ||
            movie.description.toLowerCase().includes(searchTerm) ||
            movie.rating.toLowerCase().includes(searchTerm)
        );
    });


    filteredMovies.sort(compareMovies)


    renderMovies(filteredMovies);
}

function renderMovies(movies) {
    movieCard.innerHTML = "";

    if (movies.length === 0) {
        movieCard.innerHTML = `<article class="movieCard">
                                    <p>No Movies Found. Please add the movie or search for another.</p>
                                </article>`;
    } else {
        movies.forEach(function (movie) {
            movieCard.innerHTML += movieTemplate(movie);
        });
    }
}

function compareMovies(a, b) {
    if (a.name < b.name) {
        return -1;
    } else if (a.name > b.name) {
        return 1;
    }
    return 0;
}

function movieTemplate(movie) {
    return `
            <article class="movieCard">
                <h3><strong>Name: </strong>${movie.name}</h3>
                <p><strong>Description: </strong>${movie.description}</p>
                <p><strong>Rating:</strong> ${movie.rating}</p>
                ${movie.date
            ? `<p><strong>Date added:</strong> ${movie.date}</p>`
            : ""
        }
            </article>
            `;
}

function saveMovies() {
    localStorage.setItem("movieList", JSON.stringify(movieList));
}

function loadMovies() {
    let storedMovies = localStorage.getItem("movieList");

    if (storedMovies !== null) {
        movieList = JSON.parse(storedMovies);
    }
}


function getRandomMovie() {
    let randomNum = Math.floor(Math.random() * movieList.length);
    return movieList[randomNum];
}

function init() {
    loadMovies();
    let randomMovie = getRandomMovie();
    renderMovies([randomMovie]);
}


init();


